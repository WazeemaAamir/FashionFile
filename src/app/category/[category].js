// app/category/[category].js
import { useRouter } from 'next/router';

const CategoryPage = () => {
  const { query } = useRouter();
  const { category } = query;

  if (!category) return <div>Loading...</div>;

  return (
    <div>
      <h1>Category: {category}</h1>
      {/* Render products based on the category here */}
    </div>
  );
};

export default CategoryPage;
