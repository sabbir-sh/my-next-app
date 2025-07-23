import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-[#f6f6f6] py-12">
      <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Text */}
        <div className="flex-1 text-justify">
          
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at 
            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus 
            sed augue semper porta. Mauris massa.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Acacia Fiber.webp" // Make sure it's in the public folder
            alt="Acacia Fiber"
            width={800}
            height={800}
            className="rounded-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
}
