import Image from "next/image";

export default function Divider() {
  return (
    <div className="relative w-full h-8 md:h-12 overflow-hidden">
      <Image 
        src="/divider.jpg" 
        alt="Decorative border"
        fill
        className="object-cover object-center" 
      />
    </div>
  );
}