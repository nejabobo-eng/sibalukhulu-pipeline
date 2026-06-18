import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
	<section className="px-6 sm:px-8 lg:px-10 py-16 bg-gray-100">
	  <div className="mx-auto max-w-7xl text-center">
		<div className="flex justify-center mb-4">
		  <Image
			src="/logo/logo.svg"
			alt="Sibalulekile Pipeline Contractors Logo"
			width={200}
			height={200}
			priority
			className="h-16 md:h-20 lg:h-24 w-auto"
		  />
		</div>
		<h1 className="text-4xl md:text-5xl font-bold text-primary">{siteConfig.name}</h1>
		<p className="mt-3 text-lg text-secondary max-w-3xl mx-auto">
		  Pipeline Engineering • Civil Infrastructure • Water Reticulation • Industrial Construction
		</p>
		<div className="mt-8 flex flex-wrap gap-3 justify-center">
		  <Link href="/contact" className="bg-accent text-white px-6 py-3 rounded-md">
			Request Quote
		  </Link>
		  <Link href="/capability-statement" className="border border-accent text-accent px-6 py-3 rounded-md">
			Capability Statement
		  </Link>
		  {siteConfig.whatsapp && (
			<a
			  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
			  className="border border-accent text-accent px-6 py-3 rounded-md"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  WhatsApp
			</a>
		  )}
		</div>
	  </div>
	</section>
  );
}
