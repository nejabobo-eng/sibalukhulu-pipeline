import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
	<footer className="border-t mt-16">
	  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600">
		<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
		  <p>
			© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
		  </p>
		  <div className="space-x-4">
			<a href={`mailto:${siteConfig.email}`} className="hover:text-gray-900">{siteConfig.email}</a>
			<span>•</span>
			<span>{siteConfig.address}</span>
		  </div>
		</div>
	  </div>
	</footer>
  );
}
