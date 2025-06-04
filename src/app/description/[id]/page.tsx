// app/description/[id]/page.tsx
import React from "react";

interface DescriptionPageProps {
  params: {
    id: string;
  };
}

const PracticeForm = [
  {
    id: "1",
    image: "/whatsApp-women1.jpg",
    description: "Handwork and Embroidered Long Maxi With Embroidered Dupatta 3PCs Size Measurement Chest 20 Maxi Length 52...",
  },
  // ... other items
];

const DescriptionPage = ({ params }: DescriptionPageProps) => {
  const { id } = params;

  // Find item by id
  const item = PracticeForm.find((p) => p.id === id);

  if (!item) {
    return <div className="p-4 text-red-600">Item not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Description for Item ID: {id}</h1>
      <p className="mt-2">{item.description}</p>
    </div>
  );
};

export default DescriptionPage;
