const projects = [
  {
	title: "Bulk Water Pipeline Rehabilitation & Infrastructure Upgrades",
	client: "Impumelelo (King Cetshwayo District Municipality)",
	value: "R14,000,000",
	description:
	  "Comprehensive pipeline rehabilitation including CCTV condition assessments, internal pipe cleaning, Cement Mortar Lining (CML) repairs, refurbishment of structural fittings, and precision interconnection pipe laying to restore municipal water distribution infrastructure.",
  },
  {
	title: "Civil & Structural Construction: Industrial Power Generation Facility",
	client: "Thulaumme (Eskom)",
	value: "R13,000,000",
	description:
	  "Construction of Chemical Stores A & B Buildings within an active power generation environment, executed under strict industrial safety, environmental containment, and heavy structural engineering compliance requirements.",
  },
  {
	title: "Heavy Mechanical Engineering & Steel Pipeline Welding",
	client: "Biccacon (Rand Water)",
	value: "R4,000,000",
	description:
	  "Installation and precision welding of large-scale 1m diameter bulk steel water pipelines, requiring high-accuracy alignment, industrial welding expertise, and stringent quality control for high-pressure transmission systems.",
  },
  {
	title: "Civil Engineering Concrete Works & Mechanical Seals Installation",
	client: "Delmon Mining (Umngeni Water)",
	value: "R1,250,000",
	description:
	  "Specialized civil and mechanical works including installation of heavy-duty mechanical seals and reinforced concrete structures supporting bulk water distribution infrastructure.",
  },
  {
	title: "Industrial Pipeline Maintenance & Corrosion Protection",
	client: "Mapitsi Civils (Rand Water)",
	value: "R800,000",
	description:
	  "Advanced pipeline maintenance involving industrial cleaning, epoxy internal lining application, and corrosion protection systems to extend asset lifespan under aggressive environmental conditions.",
  },
  {
	title: "Specialized Corrosion Engineering & Protective Coatings",
	client: "Morena JV (Rand Water)",
	value: "R650,000",
	description:
	  "Surface preparation and application of internal epoxy lining systems for bulk water pipelines to prevent erosion, friction damage, and long-term structural degradation.",
  },
  {
	title: "Technical Engineering Consultation & Epoxy Lining Services",
	client: "Qhubekela Projects (Rand Water)",
	value: "R180,000",
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
			<h3 className="text-xl font-semibold">{p.title}</h3>

			<div className="text-sm text-gray-600 mt-2 space-y-1">
			  <p>
				<strong>Client:</strong> {p.client}
			  </p>
			  <p>
				<strong>Project Value:</strong> {p.value}
			  </p>
			</div>

			<p className="mt-3 text-gray-700">{p.description}</p>
		  </div>
		))}
	  </div>
	</div>
  );
}
