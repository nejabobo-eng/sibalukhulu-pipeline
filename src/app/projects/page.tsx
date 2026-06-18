const projects = [
  {
	title: "Bulk Water Pipeline Rehabilitation & Infrastructure Upgrades",
	client: "Impumelelo (King Cetshwayo District Municipality)",
	image: "/projects/project-1.jpg",
	description:
	  "Comprehensive pipeline rehabilitation including CCTV condition assessments, internal pipe cleaning, Cement Mortar Lining (CML) repairs, refurbishment of structural fittings, and precision interconnection pipe laying to restore municipal water distribution infrastructure.",
  },
  {
	title: "Civil & Structural Construction: Industrial Power Generation Facility",
	client: "Thulaumme (Eskom)",
	image: "/projects/project-2.jpg",
	description:
	  "Construction of Chemical Stores A & B Buildings within an active power generation environment, executed under strict industrial safety, environmental containment, and heavy structural engineering compliance requirements.",
  },
  {
	title: "Heavy Mechanical Engineering & Steel Pipeline Welding",
	client: "Biccacon (Rand Water)",
	image: "/projects/project-3.jpg",
	description:
	  "Installation and precision welding of large-scale 1m diameter bulk steel water pipelines, requiring high-accuracy alignment, industrial welding expertise, and stringent quality control for high-pressure transmission systems.",
  },
  {
	title: "Civil Engineering Concrete Works & Mechanical Seals Installation",
	client: "Delmon Mining (Umngeni Water)",
	image: "/projects/project-4.jpg",
	description:
	  "Specialized civil and mechanical works including installation of heavy-duty mechanical seals and reinforced concrete structures supporting bulk water distribution infrastructure.",
  },
  {
	title: "Industrial Pipeline Maintenance & Corrosion Protection",
	client: "Mapitsi Civils (Rand Water)",
	image: "/projects/project-5.jpg",
	description:
	  "Advanced pipeline maintenance involving industrial cleaning, epoxy internal lining application, and corrosion protection systems to extend asset lifespan under aggressive environmental conditions.",
  },
  {
	title: "Specialized Corrosion Engineering & Protective Coatings",
	client: "Morena JV (Rand Water)",
	image: "/projects/project-6.jpg",
	description:
	  "Surface preparation and application of internal epoxy lining systems for bulk water pipelines to prevent erosion, friction damage, and long-term structural degradation.",
  },
  {
	title: "Technical Engineering Consultation & Epoxy Lining Services",
	client: "Qhubekela Projects (Rand Water)",
	image: "/projects/project-7.jpg",
	description:
	  "Engineering consultation and targeted pipeline rehabilitation services, including technical advisory on pipeline integrity and application of protective epoxy linings to improve flow efficiency and durability.",
  },
];

export default function Projects() {
  return (
	<div className="max-w-6xl mx-auto p-10">
	  <h1 className="text-3xl font-bold mb-2">Projects Portfolio</h1>

	  <p className="text-gray-600 mb-8">
		Selected engineering projects delivered across municipal, industrial,
		and water infrastructure sectors.
	  </p>

		<div className="space-y-6">
		{projects.map((p) => (
		  <div key={p.title} className="border rounded p-6">
			{/* Image proof layer */}
			{p.image && (
			  // eslint-disable-next-line @next/next/no-img-element
			  <img
				src={p.image}
				alt={p.title}
				className="w-full h-48 object-cover rounded mb-4"
				loading="lazy"
			  />
			)}
			<h3 className="text-xl font-semibold">{p.title}</h3>

			<p className="text-sm text-gray-600 mt-2">
			  <strong>Client:</strong> {p.client}
			</p>

			<p className="mt-3 text-gray-700">{p.description}</p>
		  </div>
		))}
	  </div>
	</div>
  );
}
