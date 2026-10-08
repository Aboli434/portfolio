"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      const target = e.target as HTMLElement;
      if (target) {
        const isPointer = window.getComputedStyle(target).cursor === "pointer" || 
                          target.tagName.toLowerCase() === "button" ||
                          target.tagName.toLowerCase() === "a";
        setIsHovered(isPointer);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [cursorX, cursorY]);

  return null;
}
