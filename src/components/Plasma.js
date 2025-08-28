import React, { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec2 } from 'ogl';

const Plasma = ({ 
  color = "#b1c29e", 
  speed = 0.6, 
  direction = "forward", 
  scale = 1.1, 
  opacity = 0.8, 
  mouseInteractive = true 
}) => {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const programRef = useRef(null);
  const meshRef = useRef(null);
  const timeRef = useRef(0);
  const mouseRef = useRef(new Vec2());

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize renderer
    const renderer = new Renderer({
      canvas: canvasRef.current,
      width: canvasRef.current.clientWidth,
      height: canvasRef.current.clientHeight,
      dpr: window.devicePixelRatio,
    });
    rendererRef.current = renderer;

    // Create shader program
    const program = new Program(renderer.gl, {
      vertex: `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0, 1);
        }
      `,
      fragment: `
        precision highp float;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          
          // Plasma effect
          float t = uTime * 0.5;
          vec2 p = uv * 3.0;
          
          float v1 = sin(p.x + t);
          float v2 = sin(p.y + t * 0.5);
          float v3 = sin(length(p) + t * 0.3);
          
          float plasma = (v1 + v2 + v3) / 3.0;
          
          // Add mouse interaction
          float mouseDist = length(uv - uMouse);
          float mouseEffect = smoothstep(0.3, 0.0, mouseDist);
          
          plasma += mouseEffect * 0.3;
          
          // Color and opacity
          vec3 finalColor = uColor * (0.5 + plasma * 0.5);
          float alpha = uOpacity * (0.3 + plasma * 0.7);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new Vec2(0.5, 0.5) },
        uColor: { value: hexToRgb(color) },
        uOpacity: { value: opacity },
      },
    });
    programRef.current = program;

    // Create mesh
    const geometry = new Triangle(renderer.gl);
    const mesh = new Mesh(renderer.gl, { geometry, program });
    meshRef.current = mesh;

    // Mouse interaction
    if (mouseInteractive) {
      const canvas = canvasRef.current;
      const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = (e.clientX - rect.left) / rect.width;
        mouseRef.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
      };
      
      canvas.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        canvas?.removeEventListener('mousemove', handleMouseMove);
      };
    }

    // Animation loop
    const animate = () => {
      timeRef.current += speed * 0.01;
      
      if (programRef.current) {
        programRef.current.uniforms.uTime.value = timeRef.current;
        programRef.current.uniforms.uMouse.value = mouseRef.current;
      }
      
      renderer.render({ scene: meshRef.current });
      requestAnimationFrame(animate);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (rendererRef.current && canvasRef.current) {
        rendererRef.current.setSize(
          canvasRef.current.clientWidth,
          canvasRef.current.clientHeight
        );
      }
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [color, speed, opacity, mouseInteractive]);

  // Helper function to convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255
    ] : [0.5, 0.5, 0.5];
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default Plasma;
