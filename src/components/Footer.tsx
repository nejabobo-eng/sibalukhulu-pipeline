import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export default function Footer() {
  return (
	<footer className="border-t mt-16 bg-secondary text-white">
	  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm">
		<div className="grid md:grid-cols-4 gap-8">
		  <div>
			<h4 className="font-semibold mb-2">Company</h4>
			<ul className="space-y-1 text-white/80">
			  <li><Link href="/about" className="hover:text-white">About</Link></li>
			  <li><Link href="/capability-statement" className="hover:text-white">Capability Statement</Link></li>
			</ul>
		  </div>
		  <div>
			<h4 className="font-semibold mb-2">Services</h4>
			<ul className="space-y-1 text-white/80">
			  <li><Link href="/services" className="hover:text-white">Services</Link></li>
			</ul>
		  </div>
		  <div>
			<h4 className="font-semibold mb-2">Projects</h4>
			<ul className="space-y-1 text-white/80">
			  <li><Link href="/projects" className="hover:text-white">All Projects</Link></li>
			</ul>
		  </div>
		  <div>
			<h4 className="font-semibold mb-2">Contact</h4>
			<ul className="space-y-1 text-white/80">
			  <li><Link href="/contact" className="hover:text-white">Contact Page</Link></li>
			  <li><a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} className="hover:text-white">WhatsApp</a></li>
			</ul>
		  </div>
		</div>
		<p className="mt-8 text-xs text-white/70">
		  © {new Date().getFullYear()} {siteConfig.name}
		</p>
	  </div>
	</footer>
  );
}
