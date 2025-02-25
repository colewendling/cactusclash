import React, { FC, useState, useEffect, CSSProperties } from 'react';

interface SpriteLooperProps {
  path: string;
  width: number;       // total sprite sheet width in pixels
  height: number;      // frame height in pixels
  sliceCount: number;  // number of frames across the sheet
  speed: number;       // frames per second
  colorVariant?: string; // optional CSS color for tint overlay
  offset?: number;
}

const SpriteLooper: FC<SpriteLooperProps> = ({
  path,
  width,
  height,
  sliceCount,
  speed,
  colorVariant,
  offset = 0
}) => {
  // compute single frame width
  const frameWidth = (width / sliceCount) + offset;
  const scale = 50 / height;
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const intervalMs = 1000 / speed;
    const id = setInterval(() => {
      setCurrentFrame(prev => (prev + 1) % sliceCount);
    }, intervalMs);
    return () => clearInterval(id);
  }, [sliceCount, speed]);


  // map of named colors to hex codes
  const colorMap: Record<string, string> = {
    red: '#ff2200',
    green: '#2CE71E',
    pink: '#ff007F',
    black: '#000000',
  };
  // determine overlay hex color for named variants
  const overlayColorHex = colorVariant ? colorMap[colorVariant] : undefined;

  const baseStyle: CSSProperties = {
    width: `${frameWidth}px`,
    height: `${height}px`,
    backgroundImage: `url(${path})`,
    backgroundPosition: `-${currentFrame * frameWidth}px 0px`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${width}px ${height}px`,
  };

  const overlayStyle: CSSProperties | undefined = overlayColorHex
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${frameWidth}px`,
        height: `${height}px`,
        backgroundColor: overlayColorHex,
        mixBlendMode: 'color',
        WebkitMaskImage: `url(${path})`,
        WebkitMaskPosition: `-${currentFrame * frameWidth}px 0px`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: `${width}px ${height}px`,
        maskImage: `url(${path})`,
        maskPosition: `-${currentFrame * frameWidth}px 0px`,
        maskRepeat: 'no-repeat',
        maskSize: `${width}px ${height}px`,
        pointerEvents: 'none',
      }
    : undefined;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: `${frameWidth * scale}px`,
        height: `50px`,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'relative',
          width: `${frameWidth}px`,
          height: `${height}px`,
        }}
      >
        <div style={baseStyle} />
        {overlayStyle && <div style={overlayStyle} />}
      </div>
    </div>
  );
};

export default SpriteLooper;