import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Trust Stats */}
      <section className="py-8 px-6 sm:px-8 lg:px-10 bg-white border-y">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm text-gray-600">Projects Listed</div>
          </div>
          <div>
            <div className="text-2xl font-bold">R33.88M</div>
            <div className="text-sm text-gray-600">Combined Project Value</div>
          </div>
          <div>
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm text-gray-600">Water Infrastructure Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Public Sector</div>
            <div className="text-sm text-gray-600">Municipal, Eskom, Rand Water, Umngeni Water</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold mb-6">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Pipeline Construction & Installation",
              "Civil Engineering Works",
              "Maintenance & Repairs",
              "Project Management",
              "Tender Contract Execution",
              "Infrastructure Development",
            ].map((s) => (
              <div key={s} className="border p-6 rounded-md bg-white">
                <h3 className="font-semibold">{s}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Engineering solutions delivered with compliance and precision.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
