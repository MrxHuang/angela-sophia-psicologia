import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Shader simplificado para mejor rendimiento
const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

// Reducido número de líneas de 40 a 20 para mejor rendimiento
const int u_line_count = 20;
const float u_line_width = 7.0;
const float u_line_blur = 8.0;

// Versión simplificada de Perlin2D
float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

// Función de línea simplificada
float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_point = 0.1 + (perc * 0.4);
    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float finalAmplitude = amplitude_normal * 0.5 * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);
    
    // Simplificación del cálculo de noise
    float time_scaled = time / 15.0 + (mouse.x - 0.5) * 0.8;
    float xnoise = Perlin2D(vec2(time_scaled, st.x + perc) * 2.5);
    
    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;
    
    float line_width = width / 2.0 + (u_line_blur * pixel(1.0, iResolution.xy) * perc);
    float line = smoothstep(y + line_width, y - line_width, st.y) - 
                 smoothstep(y, y - line_width * 2.0, st.y);
    
    return clamp(line * (1.0 - pow(perc, 0.3)), 0.0, 1.0);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    
    float line_strength = 0.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength += lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        );
    }
    
    line_strength = clamp(line_strength, 0.0, 1.0);
    fragColor = vec4(uColor * line_strength, line_strength);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const Threads = ({
  color = [1, 1, 1],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  lowPerformanceMode = false,
  ...rest
}) => {
  const containerRef = useRef(null);
  const animationFrameId = useRef();
  const lastFrameTime = useRef(0);
  const frameSkip = useRef(lowPerformanceMode ? 3 : 1);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Detector básico para dispositivos móviles o de bajo rendimiento
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowPower = lowPerformanceMode || isMobile;
    
    // Reducir calidad en dispositivos de menor potencia
    frameSkip.current = isLowPower ? 3 : 1;

    const renderer = new Renderer({ 
      alpha: true,
      antialias: false // Deshabilitar antialiasing para mejorar el rendimiento
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    // Manejar redimensionamiento con limitación de frecuencia
    let resizeTimeout;
    function resize() {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      
      resizeTimeout = setTimeout(() => {
        const { clientWidth, clientHeight } = container;
        
        // Escalar hacia abajo en dispositivos de bajo rendimiento
        const scaleFactor = isLowPower ? 0.75 : 1.0;
        
        renderer.setSize(
          clientWidth * scaleFactor, 
          clientHeight * scaleFactor
        );
        
        // Ajustar el estilo para mantener las dimensiones visuales
        gl.canvas.style.width = '100%';
        gl.canvas.style.height = '100%';
        
        program.uniforms.iResolution.value.r = gl.canvas.width;
        program.uniforms.iResolution.value.g = gl.canvas.height;
        program.uniforms.iResolution.value.b = gl.canvas.width / gl.canvas.height;
      }, 150); // Limitar frecuencia de redimensionamiento
    }
    
    window.addEventListener("resize", resize);
    resize();

    let currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];
    let frameCount = 0;

    // Limitar eventos de ratón para reducir cálculos
    let mouseMoveThrottle;
    function handleMouseMove(e) {
      if (mouseMoveThrottle) return;
      
      mouseMoveThrottle = setTimeout(() => {
        mouseMoveThrottle = null;
        
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        targetMouse = [x, y];
      }, 50); // 50ms de límite
    }
    
    function handleMouseLeave() {
      targetMouse = [0.5, 0.5];
    }
    
    if (enableMouseInteraction) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    function update(t) {
      frameCount++;
      
      // Saltear frames para mejorar rendimiento
      if (frameCount % frameSkip.current !== 0) {
        animationFrameId.current = requestAnimationFrame(update);
        return;
      }
      
      // Limitar la velocidad de actualización en función del tiempo transcurrido
      const deltaTime = t - lastFrameTime.current;
      if (deltaTime < (isLowPower ? 33 : 16)) { // 30 FPS en modo bajo rendimiento, 60 FPS normal
        animationFrameId.current = requestAnimationFrame(update);
        return;
      }
      
      lastFrameTime.current = t;

      if (enableMouseInteraction) {
        const smoothing = isLowPower ? 0.2 : 0.05;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      } else {
        program.uniforms.uMouse.value[0] = 0.5;
        program.uniforms.uMouse.value[1] = 0.5;
      }
      
      // Usar un tiempo escalado para animaciones más lentas en dispositivos de bajo rendimiento
      const timeScale = isLowPower ? 0.0006 : 0.001;
      program.uniforms.iTime.value = t * timeScale;

      renderer.render({ scene: mesh });
      animationFrameId.current = requestAnimationFrame(update);
    }
    
    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", resize);

      if (enableMouseInteraction) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, amplitude, distance, enableMouseInteraction, lowPerformanceMode]);

  return <div ref={containerRef} className="w-full h-full relative" {...rest} />;
};

export default Threads; 