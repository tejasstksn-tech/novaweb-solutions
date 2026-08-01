import { Star } from "lucide-react";

function Testimonials() {

const reviews = [

{
name:"Rahul Sharma",
business:"Restaurant Owner",
city:"Bangalore",
review:"NovaWeb Solutions built our restaurant website in just 6 days. Online orders increased significantly. Highly recommended!"
},

{
name:"Sneha Patel",
business:"Gym Owner",
city:"Mysore",
review:"Professional team with excellent support. My gym membership website looks amazing."
},

{
name:"Arjun Kumar",
business:"Apartment Manager",
city:"Hyderabad",
review:"Visitor management and maintenance payment portal works perfectly. Residents love it."
},

{
name:"Priya Nair",
business:"Clinic Owner",
city:"Kochi",
review:"Appointment booking has reduced phone calls and improved patient experience."
},

{
name:"Amit Verma",
business:"Clothing Store",
city:"Delhi",
review:"Our online sales increased after launching our ecommerce website."
},

{
name:"Kiran Gowda",
business:"Hotel Owner",
city:"Bangalore",
review:"Beautiful website with online room booking. Guests love the design."
}

];

return(

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">
What Our Clients Say
</h2>

<p className="text-center text-gray-500 mt-5 mb-14">
Businesses across India trust NovaWeb Solutions.
</p>

<div className="grid md:grid-cols-3 gap-8">

{reviews.map((client,index)=>(

<div
key={index}
className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 duration-300"
>

<div className="flex mb-4">
<Star className="text-yellow-500 fill-yellow-500"/>
<Star className="text-yellow-500 fill-yellow-500"/>
<Star className="text-yellow-500 fill-yellow-500"/>
<Star className="text-yellow-500 fill-yellow-500"/>
<Star className="text-yellow-500 fill-yellow-500"/>
</div>

<p className="text-gray-600 italic">
"{client.review}"
</p>

<h3 className="font-bold text-xl mt-6">
{client.name}
</h3>

<p className="text-blue-600">
{client.business}
</p>

<p className="text-gray-500">
{client.city}
</p>

</div>

))}

</div>

</div>

</section>

)

}

export default Testimonials;