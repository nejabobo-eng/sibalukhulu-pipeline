const services = [
  {
	title: "Pipeline Construction",
	desc: "Installation of water, sewage, and industrial pipeline systems for municipal and private infrastructure.",
  },
  {
	title: "Civil Engineering Works",
	desc: "Supporting civil infrastructure including trenching, groundwork, and structural preparation.",
  },
  {
	title: "Maintenance & Repairs",
	desc: "Repair, replacement, and rehabilitation of existing pipeline systems.",
  },
  {
	title: "Project Management",
	desc: "End-to-end execution of engineering projects under tender or private contract frameworks.",
  },
  {
	title: "Tender Contract Execution",
	desc: "Delivery of awarded government and private sector tenders with full compliance.",
  },
  {
	title: "Infrastructure Development",
	desc: "Large-scale infrastructure support for municipalities, developers, and industrial clients.",
  },
];

export default function Services() {
  return (
	<div className="max-w-6xl mx-auto p-10">
	  <h1 className="text-3xl font-bold mb-8">Our Services</h1>

	  <div className="grid md:grid-cols-2 gap-6">
		{services.map((s) => (
		  <div key={s.title} className="border p-6 rounded">
			<h3 className="font-semibold text-lg">{s.title}</h3>
			<p className="text-gray-600 mt-2">{s.desc}</p>
		  </div>
		))}
	  </div>
	</div>
  );
}
