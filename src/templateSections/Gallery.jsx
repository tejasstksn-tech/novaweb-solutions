import galleryData from "../businessData/galleryData";

function Gallery({ websiteData }) {
  const gallery =
    galleryData[websiteData?.businessType] ||
    galleryData.Restaurant;

  return (
    <section
      id="gallery"
      className="py-20 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Our Gallery
          </h2>

          <p className="text-gray-600 mt-4">
            Explore our business through beautiful images.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;