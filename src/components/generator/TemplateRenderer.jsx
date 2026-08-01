import RestaurantTemplate from "../../templates/RestaurantTemplate";
import SupermarketTemplate from "../../templates/SupermarketTemplate";

function TemplateRenderer({ website }) {

  switch (website.businessType.toLowerCase()) {

    case "restaurant":
      return (
        <RestaurantTemplate
          websiteData={website}
        />
      );

    case "supermarket":
      return (
        <SupermarketTemplate
          websiteData={website}
        />
      );

    default:
      return (
        <div className="min-h-screen flex justify-center items-center text-4xl font-bold">

          🚧 Template Coming Soon

        </div>
      );

  }

}

export default TemplateRenderer;