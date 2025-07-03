// File: components/gallery/DraggableGallery.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface Image {
  src: string;
  alt: string;
}

interface DraggableImageProps {
  id: string;
  image: Image;
  position: { x: number; y: number };
}

function DraggableImage({ id, image, position }: DraggableImageProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: CSS.Transform.toString({
      x: position.x + (transform?.x || 0),
      y: position.y + (transform?.y || 0),
      scaleX: 1,
      scaleY: 1,
    }),
    zIndex: 10,
    position: "absolute" as const,
    transition: "transform 0.2s ease",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="cursor-grab"
    >
      <div
        className="bg-black p-1 rounded-md shadow-lg"
        style={{ transform: `rotate(${(Math.random() - 0.5) * 6}deg)` }}
      >
        <img
          src={image.src}
          alt={image.alt}
          style={{ width: "20rem", height: "20rem", objectFit: "cover" }}
          className="rounded-sm"
        />
        <p className="text-white text-center text-xs mt-1 font-medium">
          {image.alt}
        </p>
      </div>
    </div>
  );
}

export default function DraggableGallery({ images }: { images: Image[] }) {
  const gridSize = 140;
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const columns = 5;
    const spacing = gridSize;
    const rows = Math.ceil(images.length / columns);

    const totalGridWidth = (columns - 1) * spacing;
    const totalGridHeight = (rows - 1) * spacing;

    const startX = -totalGridWidth / 2;
    const startY = -totalGridHeight / 2;

    const newPositions: Record<string, { x: number; y: number }> = {};

    images.forEach((image, index) => {
      const row = Math.floor(index / columns);
      const col = index % columns;

      newPositions[image.src] = {
        x: startX + col * spacing,
        y: startY + row * spacing,
      };
    });

    setPositions(newPositions);
  }, [images]);

  const handleDragEnd = (event: any) => {
    const { active, delta } = event;

    setPositions((prev) => ({
      ...prev,
      [active.id]: {
        x: prev[active.id].x + delta.x,
        y: prev[active.id].y + delta.y,
      },
    }));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      <div className="relative" style={{ transform: "translate(-50%, -50%)", top: "50%", left: "50%", position: "absolute" }}>
        <DndContext onDragEnd={handleDragEnd}>
          {images.map((image) => (
            <DraggableImage
              key={image.src}
              id={image.src}
              image={image}
              position={positions[image.src] || { x: 0, y: 0 }}
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
}
