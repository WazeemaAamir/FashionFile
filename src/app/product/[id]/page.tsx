"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProductDetailPage() {
  // Retrieve the dynamic route parameter
  const { id } = useParams();

  // For demonstration, we're hardcoding the product details.
  // In a real application, you'd fetch these details using the id.
  const product = {
    id,
    name: "Handwork and Embroidered Long Maxi With Embroidered Dupatta 3PCs",
    image: "/WhatsApp-women1.jpg", // Replace with the correct image path
    description: `Size Measurement:
Chest 20
Maxi Length 52
Stuff Silk

Trouser Length:
Stuff Crepe Malai

Full Embroidered Dupatta:
2.25 Yards
Stuff Organza

Price : $10.77
Real Pictures`,

  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{"/WhatsApp-women1.jpg"}</h1>
      <Image 
        src={"/WhatsApp-women1.jpg"} 
        alt={"/WhatsApp-women1.jpg"} 
        width={400} 
        height={400} 
        className="rounded"
      />
      <p className="mt-4 whitespace-pre-wrap">
          id,
    name: "Handwork and Embroidered Long Maxi With Embroidered Dupatta 3PCs",
    image: "/WhatsApp-women1.jpg", // Replace with the correct image path
    description: `Size Measurement:
Chest 20
Maxi Length 52
Stuff Silk

Trouser Length:
Stuff Crepe Malai

Full Embroidered Dupatta:
2.25 Yards
Stuff Organza

Price : $10.77
Real Pictures`,
        </p>
      <p className="mt-2 font-semibold">{"$10.77"}</p>
    </div>
  );
}
