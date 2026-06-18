export default function Contact() {
  return (
	<div className="max-w-4xl mx-auto p-10">
	  <h1 className="text-3xl font-bold mb-6">Contact Sibalukhulu Pipeline Contractors Pty Ltd</h1>

	  <p className="text-gray-600 mb-8">
		For tenders, quotations, and project enquiries, contact us directly using the details below.
	  </p>

	  <div className="space-y-4 border p-6 rounded">
		<p><strong>Phone / WhatsApp:</strong> +27 71 971 1326</p>
		<p><strong>Email:</strong> info@sibalukhulu.co.za (placeholder)</p>
		<p><strong>Location:</strong> South Africa</p>
	  </div>

	  <div className="mt-8">
		<a
		  href="https://wa.me/27719711326"
		  className="bg-green-600 text-white px-6 py-3 inline-block rounded"
		>
		  Message on WhatsApp
		</a>
	  </div>
	</div>
  );
}
