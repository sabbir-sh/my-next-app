import Image from "next/image";

const ingredients = [
  {
    title: "Allantoin",
    description: "Calms and protects sensitive skin",
    image: "/Acacia-Fiber.webp",
  },
  {
    title: "Aloe Barbadensis Leaf Extract (Aloe Vera)",
    description: "Aloe Barbadensis Leaf Extract (Aloe Vera)",
    image: "/Acacia-Fiber.webp",
  },
  {
    title: "Aloe Barbadensis Leaf Juice (Aloe Vera)",
    description: "Aloe Barbadensis Leaf Juice (Aloe Vera)",
    image: "/Acacia-Fiber.webp",
  },
  {
    title: "Aloe Vera",
    description: "Soothes and hydrates the skin",
    image: "/Acacia-Fiber.webp",
  },
    {
    title: "Allantoin",
    description: "Calms and protects sensitive skin",
    image: "/Acacia-Fiber.webp",
  },
  {
    title: "Aloe Barbadensis Leaf Extract (Aloe Vera)",
    description: "Aloe Barbadensis Leaf Extract (Aloe Vera)",
    image: "/Acacia-Fiber.webp",
  },
  {
    title: "Aloe Barbadensis Leaf Juice (Aloe Vera)",
    description: "Aloe Barbadensis Leaf Juice (Aloe Vera)",
    image: "/Acacia-Fiber.webp",
  },
  {
    title: "Aloe Vera",
    description: "Soothes and hydrates the skin",
    image: "/Acacia-Fiber.webp",
  },
];

export default function IngredientsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Ingredients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {ingredients.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-transparent p-4 rounded-lg "
            >
              <div className="w-[300px] h-[300px] relative mb-4 bg-transparent">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                  priority
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <button className="mt-4 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-medium py-2 px-4 rounded-md">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
