import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Vaibhav Group</title>
        <meta
          name="description"
          content="Learn more about Vaibhav Group - our journey of over 15 years in promoting greenery and eco-conscious exports across the globe."
        />
      </Head>

      <section className="min-h-screen px-6 py-12 md:px-16 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 border-b-4 border-green-600 inline-block pb-2">
            About Us
          </h1>

          <p className="text-lg leading-8 mb-6">
            <strong>Vaibhav Group</strong> has proudly cultivated and exported greenery for over 15 years.
            Beginning as a passionate nursery in India, we have now grown into a global exporter
            of plants, handmade papers, and sustainable decor. Our vision is rooted in
            eco-consciousness, trust, and artisan excellence.
          </p>

          <p className="text-lg leading-8 mb-6">
            From rare ornamental plants to beautiful handcrafted paper products, our offerings
            reflect a blend of nature and culture. Our handmade papers are cherished by artists and
            crafters across borders for their texture, sustainability, and elegance.
          </p>

          <p className="text-lg leading-8 mb-6">
            Today, Vaibhav Group serves customers around the world — from botanical suppliers to
            art studios and gifting partners. We continue to grow with our core values: authenticity,
            customer-first approach, and respect for the environment.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                🌿 Green Legacy
              </h3>
              <p>
                We’ve supplied thousands of exotic and native plant species to homes and gardens
                globally, supporting a greener Earth.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                🧵 Handmade Paper Crafts
              </h3>
              <p>
                Our paper artisans preserve traditional methods to deliver premium quality,
                eco-friendly paper products to global creators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}