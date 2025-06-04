// /app/women/[id]/page.tsx
import Image from "next/image";
import Browse from "../../Browse"; // 👈 correct path

const images = [
  "/whatsApp-women1.jpg",
  "/whatsApp-women2.jpg",
  "/whatsApp-women3.jpg",
  "/whatsApp-women4.jpg",
  "/whatsApp-women5.jpg",
  "/whatsApp-women6.jpg"
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const index = parseInt(params.id);
  const src = images[index];

  if (!src) return <div>Product not found.</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Product {index + 1}</h1>
      <Image
        src={src}
        alt={`Product ${index + 1}`}
        width={300}
        height={300}
        className="rounded-xl"
      />
      <p className="mt-4 text-gray-600">
        This is the description of product {index + 1}. You can customize this
        based on your actual product data.
      </p>

      {/* 👇 Practice form visible here */}
      <div className="mt-6">
        <Browse />
      </div>
    </div>
  );
}
