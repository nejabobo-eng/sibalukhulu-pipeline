import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
	<section className="px-6 sm:px-8 lg:px-10 py-16 bg-gray-100">
	  <div className="mx-auto max-w-7xl text-center">
		<h1 className="text-4xl md:text-5xl font-bold text-primary">{siteConfig.name}</h1>
		<p className="mt-3 text-lg text-secondary max-w-3xl mx-auto">
		  Pipeline Engineering • Civil Infrastructure • Water Reticulation • Industrial Construction
		</p>
		<div className="mt-8 flex gap-4 justify-center">
			<Link href="/contact" className="bg-accent text-white px-6 py-3 rounded-md">
			Request Quote
		  </Link>
			<Link href="/projects" className="border border-accent text-accent px-6 py-3 rounded-md">
			View Projects
		  </Link>
		</div>
	  </div>
	</section>
  );
}
