import Image from "next/image";
import { GeoCaption } from "./primitives";

export default function Plate({
  src,
  alt,
  caption,
  className = "",
  sizes = "100vw",
  priority = false,
  grain = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  grain?: boolean;
}) {
  return (
    <figure
      className={`relative overflow-hidden bg-sand-deep ${grain ? "grain" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {caption && (
        <figcaption className="absolute bottom-4 left-4 z-10">
          <GeoCaption>{caption}</GeoCaption>
        </figcaption>
      )}
    </figure>
  );
}
