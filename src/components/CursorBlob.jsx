import { useEffect, useState, useRef } from "react";

const CursorBlob = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 }); 
  const [blobPos, setBlobPos] = useState({ x: -100, y: -100 }); 
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const animate = () => {
    setBlobPos((prev) => ({
      x: prev.x + (mousePos.x - prev.x) * 0.15, 
      y: prev.y + (mousePos.y - prev.y) * 0.15,
    }));
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos]);

  return (
    <div
      className="pointer-events-none fixed w-16 h-16 rounded-full bg-white opacity-60 blur-2xl mix-blend-screen shadow-[0_0_80px_white]"
      style={{
        transform: `translate(${blobPos.x - 32}px, ${blobPos.y - 32}px)`,
      }}
    />
  );
};

export default CursorBlob;
