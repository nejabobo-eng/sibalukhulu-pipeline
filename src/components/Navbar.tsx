"use client";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/tenders", label: "Tenders" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
	<header className="border-b bg-primary text-white sticky top-0 z-30">
	  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
		<Link href="/" className="flex items-center gap-3">
		  <Image src="/logo/logo.svg" alt="Sibalukhulu Pipeline Contractors" width={48} height={48} />
		  <span className="font-semibold text-sm md:text-base text-white">Sibalukhulu Pipeline Contractors Pty Ltd</span>
		</Link>
		<nav className="hidden md:flex items-center gap-6 text-sm">
		  {navItems.map((item) => (
			<Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
			  {item.label}
			</Link>
		  ))}
		  <Link
			href="/contact"
			className="ml-2 inline-flex items-center rounded-md bg-accent px-4 py-2 text-white hover:opacity-90"
		  >
			Request Quote
		  </Link>
		</nav>
		<div className="md:hidden">
		  <Link
			href="/contact"
			className="inline-flex items-center rounded-md bg-accent px-3 py-2 text-white text-sm"
		  >
			Quote
		  </Link>
		</div>
	  </div>
	</header>
  );
}
