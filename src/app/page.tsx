import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-[#f6f6f6] py-12">
      <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row items-center gap-10">

        {/* Left: Text */}
        <div className="flex-1 text-justify">

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Derived from the sap of the Acacia tree, this natural, plant-based ingredient is rich in soluble fiber and polysaccharides. It works as a skin-conditioning agent and a prebiotic, nurturing the skin’s microbiome for optimal barrier health. Acacia Fiber also helps retain moisture, soothe irritation, and improve the skin’s resilience to external stressors, making it ideal for sensitive and dry skin formulations.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Acacia-Fiber.webp" // Make sure it's in the public folder
            alt="Acacia Fiber"
            width={800}
            height={800}
            className="rounded-lg object-contain"
          />
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row items-start gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-semibold mb-4 text-gray-900">Acacia Fiber</h1>
          <ul className="list-disc pl-5 space-y-2 text-justify text-gray-700 text-base md:text-lg leading-relaxed">
            <li>Supports skin microbiome balance as a prebiotic.</li>
            <li>Reinforces skin barrier function.</li>
            <li>Provides hydration and prevents moisture loss.</li>
            <li>Calms and soothes sensitive or irritated skin.</li>
            <li>Enhances skin smoothness and texture.</li>
          </ul>
        </div>
      </div>


    </section>


  );
}
