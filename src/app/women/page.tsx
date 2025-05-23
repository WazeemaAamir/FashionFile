// /app/women/page.tsx
import Link from "next/link";

const images = [
  "/whatsApp-women1.jpg",
  "/whatsApp-women2.jpg",
  "/whatsApp-women3.jpg"
];

export default function WomenPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {images.map((img, index) => (
        <Link href={`/women/${index}`} key={index}>
          <div className="border p-4 rounded hover:shadow-lg cursor-pointer">
            <img src={img} alt={`Product ${index + 1}`} className="w-full h-48 object-cover rounded" />
            <h2 className="mt-2 font-bold text-lg">Product {index + 1}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
