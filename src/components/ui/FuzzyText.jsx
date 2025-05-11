import React, { useEffect, useRef, useState } from "react";

const FuzzyText = ({
  children,
  fontSize = "clamp(2rem, 10vw, 10rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#fff",
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
  optimizePerformance = false,
}) => {
  const canvasRef = useRef(null);
  const [isLowPerf, setIsLowPerf] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    const cpuCores = navigator.hardwareConcurrency || 4;
    const isLowCPU = cpuCores <= 4;
    
    const isLowRAM = navigator.deviceMemory && navigator.deviceMemory < 4;
    
    setIsLowPerf(optimizePerformance || isMobile || isLowCPU || isLowRAM);
  }, [optimizePerformance]);

  useEffect(() => {
    let animationFrameId;
    let isCancelled = false;
    let frameSkip = 0;
    let lastFrameTime = 0;
    const skipFrames = isLowPerf ? 3 : 1;
    const minFrameTime = isLowPerf ? 60 : 16;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (isCancelled) return;

      const ctx = canvas.getContext("2d", { 
        alpha: true,
        desynchronized: true,
      });
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === "inherit"
          ? window.getComputedStyle(canvas).fontFamily || "sans-serif"
          : fontFamily;

      const fontSizeStr =
        typeof fontSize === "number" ? `${fontSize}px` : fontSize;
      let numericFontSize;
      if (typeof fontSize === "number") {
        numericFontSize = fontSize;
      } else {
        const temp = document.createElement("span");
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        const computedSize = window.getComputedStyle(temp).fontSize;
        numericFontSize = parseFloat(computedSize);
        document.body.removeChild(temp);
      }

      const text = React.Children.toArray(children).join("");

      const scale = isLowPerf ? 0.75 : 1.0;

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d", { alpha: true });
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      const metrics = offCtx.measureText(text);

      const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
      const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
      const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
      const actualDescent =
        metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

      const textBoundingWidth = Math.ceil(actualLeft + actualRight);
      const tightHeight = Math.ceil(actualAscent + actualDescent);

      const extraWidthBuffer = isLowPerf ? 5 : 10;
      const offscreenWidth = Math.ceil((textBoundingWidth + extraWidthBuffer) * scale);
      const offscreenHeight = Math.ceil(tightHeight * scale);

      offscreen.width = offscreenWidth;
      offscreen.height = offscreenHeight;

      offCtx.scale(scale, scale);

      const xOffset = extraWidthBuffer / 2;
      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      offCtx.fillStyle = color;
      offCtx.fillText(text, xOffset - actualLeft, actualAscent);

      const horizontalMargin = isLowPerf ? 25 : 50;
      const verticalMargin = 0;
      canvas.width = Math.ceil(offscreenWidth + horizontalMargin * 2 * scale);
      canvas.height = Math.ceil(offscreenHeight + verticalMargin * 2 * scale);
      
      canvas.style.width = `${canvas.width / scale}px`;
      canvas.style.height = `${canvas.height / scale}px`;
      
      ctx.translate(horizontalMargin * scale, verticalMargin * scale);

      const interactiveLeft = horizontalMargin * scale + xOffset * scale;
      const interactiveTop = verticalMargin * scale;
      const interactiveRight = interactiveLeft + textBoundingWidth * scale;
      const interactiveBottom = interactiveTop + tightHeight * scale;

      let isHovering = false;
      const fuzzRange = isLowPerf ? 20 : 30;

      const run = (timestamp) => {
        if (isCancelled) return;
        
        const deltaTime = timestamp - lastFrameTime;
        if (deltaTime < minFrameTime) {
          animationFrameId = window.requestAnimationFrame(run);
          return;
        }
        
        frameSkip = (frameSkip + 1) % skipFrames;
        if (frameSkip !== 0) {
          animationFrameId = window.requestAnimationFrame(run);
          return;
        }
        
        lastFrameTime = timestamp;
        
        const actualBaseIntensity = isLowPerf ? baseIntensity * 0.7 : baseIntensity;
        const actualHoverIntensity = isLowPerf ? hoverIntensity * 0.7 : hoverIntensity;
        
        ctx.clearRect(
          -fuzzRange,
          -fuzzRange,
          offscreenWidth + 2 * fuzzRange,
          offscreenHeight + 2 * fuzzRange
        );
        
        const intensity = isHovering ? actualHoverIntensity : actualBaseIntensity;
        
        const rowHeight = isLowPerf ? 2 : 1;
        for (let j = 0; j < offscreenHeight; j += rowHeight) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(
            offscreen,
            0,
            j,
            offscreenWidth,
            rowHeight,
            dx,
            j,
            offscreenWidth,
            rowHeight
          );
        }
        
        animationFrameId = window.requestAnimationFrame(run);
      };

      animationFrameId = window.requestAnimationFrame(run);

      const isInsideTextArea = (x, y) => {
        return (
          x >= interactiveLeft &&
          x <= interactiveRight &&
          y >= interactiveTop &&
          y <= interactiveBottom
        );
      };

      let lastInteractionTime = 0;
      const interactionThreshold = isLowPerf ? 100 : 50;

      const handleMouseMove = (e) => {
        if (!enableHover) return;
        
        const now = Date.now();
        if (now - lastInteractionTime < interactionThreshold) return;
        lastInteractionTime = now;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleMouseLeave = () => {
        isHovering = false;
      };

      const handleTouchMove = (e) => {
        if (!enableHover) return;
        e.preventDefault();
        
        const now = Date.now();
        if (now - lastInteractionTime < interactionThreshold) return;
        lastInteractionTime = now;
        
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleTouchEnd = () => {
        isHovering = false;
      };

      if (enableHover) {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
        canvas.addEventListener("touchend", handleTouchEnd);
      }

      const cleanup = () => {
        window.cancelAnimationFrame(animationFrameId);
        if (enableHover) {
          canvas.removeEventListener("mousemove", handleMouseMove);
          canvas.removeEventListener("mouseleave", handleMouseLeave);
          canvas.removeEventListener("touchmove", handleTouchMove);
          canvas.removeEventListener("touchend", handleTouchEnd);
        }
      };

      canvas.cleanupFuzzyText = cleanup;
    };

    init();

    return () => {
      isCancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      if (canvas && canvas.cleanupFuzzyText) {
        canvas.cleanupFuzzyText();
      }
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
    isLowPerf,
  ]);

  return <canvas ref={canvasRef} />;
};

export default FuzzyText; 