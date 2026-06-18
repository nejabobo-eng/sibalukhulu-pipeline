import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppFAB() {
  const wa = siteConfig.whatsapp.replace(/\D/g, "");
  const href = wa ? `https://wa.me/${wa}` : "#";
  return (
	<a
	  href={href}
	  aria-label="WhatsApp"
	  className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
	  target="_blank"
	  rel="noopener noreferrer"
	>
	  WhatsApp
	</a>
  );
}
