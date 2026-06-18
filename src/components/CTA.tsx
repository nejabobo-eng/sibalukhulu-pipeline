import Link from "next/link";

export default function CTA() {
  return (
	<section className="bg-gray-900 text-white py-12">
	  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
		<div>
		  <h3 className="text-2xl font-semibold">Ready to discuss your project?</h3>
		  <p className="text-gray-300">Request a quote or tender submission support.</p>
		</div>
		<div className="flex gap-3">
		  <Link href="/contact" className="bg-white text-gray-900 px-5 py-3 rounded-md font-medium">
			Request Quote
		  </Link>
		  <Link href="/projects" className="border border-white/30 px-5 py-3 rounded-md font-medium hover:bg-white/10">
			View Projects
		  </Link>
		</div>
	  </div>
	</section>
  );
}
