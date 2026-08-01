
import { useEffect, useMemo, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, deleteDoc,doc, updateDoc,} from "firebase/firestore";

function Card({title,value}) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

export default function Admin() {
  const [inquiries,setInquiries]=useState([]);
  const [loading,setLoading]=useState(false);
  const [search,setSearch]=useState("");
  const [statusFilter,setStatusFilter]=useState("All");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(()=>{(async()=>{
    const snap=await getDocs(collection(db,"inquiries"));
    setInquiries(
  snap.docs.map(d => ({
    id: d.id,
    status: d.data().status || "New Inquiry",
    ...d.data()
  }))
);
    setLoading(false);
  })()},[]);

  const filtered=useMemo(()=>inquiries.filter(i=>{
    const q=search.toLowerCase();
    const okSearch=(i.customer?.fullName||"").toLowerCase().includes(q)||
      (i.customer?.phone||"").includes(search)||
      (i.businessType||"").toLowerCase().includes(q);
    const okStatus=statusFilter==="All"||i.status===statusFilter;
    return okSearch&&okStatus;
  }),[inquiries,search,statusFilter]);

  const revenue=inquiries.reduce((a,b)=>a+Number(b.totalPrice||0),0);
  const projectSteps = [
  "New Inquiry",
  "Contacted",
  "Meeting Scheduled",
  "Payment Received",
  "Development",
  "Testing",
  "Completed",
];
const handleView = (item) => {
  setSelectedInquiry(item);
  setNotes(item.notes || "");
  setShowModal(true);
};

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this inquiry?"
  );

  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "inquiries", id));

    setInquiries((prev) =>
      prev.filter((item) => item.id !== id)
    );

    alert("Inquiry deleted successfully.");
  } catch (error) {
    console.error(error);
    alert("Failed to delete inquiry.");
  }
};

const updateStatus = async (id, status) => {
  try {
    await updateDoc(doc(db, "inquiries", id), {
      status,
    });

    setInquiries((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status }
          : item
      )
    );
    if (selectedInquiry?.id === id) {
  setSelectedInquiry((prev) => ({
    ...prev,
    status,
  }));
}
  } catch (error) {
    console.error(error);
  }
};
const saveNotes = async () => {
  try {
    await updateDoc(doc(db, "inquiries", selectedInquiry.id), {
      notes: notes,
    });

   setInquiries((prev) =>
  prev.map((item) =>
    item.id === selectedInquiry.id
      ? { ...item, notes }
      : item
  )
);

setSelectedInquiry((prev) => ({
  ...prev,
  notes,
}));

alert("Notes saved successfully.");
  } catch (error) {
    console.error(error);
    alert("Failed to save notes.");
  }
};

  return (
  <div className="min-h-screen bg-slate-100">
    <header className="bg-blue-700 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">NovaWeb Solutions</h1>
        <p>Admin Dashboard</p>
      </div>
    </header>
    <main className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card title="Total Inquiries" value={inquiries.length}/>
        <Card title="New" value={inquiries.filter(x=>x.status==="New Inquiry").length}/>
        <Card title="Completed" value={inquiries.filter(x=>x.status==="Completed").length}/>
        <Card title="Revenue" value={"₹"+revenue.toLocaleString()}/>
      </div>
      <div className="bg-white rounded-xl shadow p-4 flex gap-4 mb-6">
        <input className="border rounded-lg px-4 py-2 flex-1" placeholder="Search..." value={search} onChange={e=>setSearch(e.target.value)}/>
        <select className="border rounded-lg px-4 py-2" value={statusFilter} onChange={e=>setStatusFilter(e.target.value)}>
          <option>All</option><option>New Inquiry</option><option>Contacted</option><option>Development</option><option>Completed</option>
        </select>
      </div>
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr><th className="p-4 text-left">Customer</th><th className="p-4 text-left">Business</th><th className="p-4 text-left">Package</th><th className="p-4 text-left">Phone</th><th className="p-4 text-left">Price</th><th className="p-4 text-left">Status</th><th className="p-4 text-center">Actions</th></tr>
          </thead>
          <tbody>
  {loading ? (
    <tr>
      <td colSpan="7" className="p-8 text-center">
        Loading...
      </td>
    </tr>
  ) : (
    filtered.map((i) => (
      <tr key={i.id} className="border-b">

        <td className="p-4">{i.customer?.fullName}</td>

        <td className="p-4">{i.businessType}</td>

        <td className="p-4">{i.package}</td>

        <td className="p-4">{i.customer?.phone}</td>

        <td className="p-4">
          ₹{Number(i.totalPrice || 0).toLocaleString()}
        </td>

        <td className="p-4">
          <select
            value={i.status}
            onChange={(e) => updateStatus(i.id, e.target.value)}
            className="border rounded-lg px-2 py-1"
          >
            <option>New Inquiry</option>
            <option>Contacted</option>
            <option>Meeting Scheduled</option>
            <option>Payment Received</option>
            <option>Development</option>
            <option>Testing</option>
            <option>Completed</option>
          </select>
        </td>

        <td className="p-4 text-center">
          <button
            onClick={() => handleView(i)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
          >
            View
          </button>

          <button
            onClick={() => handleDelete(i.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </td>

      </tr>
    ))
  )}
</tbody>
        </table>
      </div>
      </main>

{showModal && selectedInquiry && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8">
   <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-700">
          Inquiry Details
        </h2>

        <button
          onClick={() => setShowModal(false)}
          className="text-red-600 font-bold text-xl"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <p className="text-gray-500">Customer Name</p>
          <h3 className="font-semibold">
            {selectedInquiry.customer?.fullName}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Phone</p>
          <h3 className="font-semibold">
            {selectedInquiry.customer?.phone}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <h3 className="font-semibold">
            {selectedInquiry.customer?.email}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Business</p>
          <h3 className="font-semibold">
            {selectedInquiry.businessType}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Package</p>
          <h3 className="font-semibold">
            {selectedInquiry.package}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Price</p>
          <h3 className="font-semibold">
            ₹{Number(selectedInquiry.totalPrice || 0).toLocaleString()}
          </h3>
        </div>

      </div>

      <div className="mt-6">
        <p className="text-gray-500 mb-2">
          Requirements
        </p>

        <div className="border rounded-lg p-4 bg-gray-50">
          {selectedInquiry.customer?.requirements || "No requirements provided"}
        </div>
      </div>
      <div className="mt-6">
  <p className="text-gray-500 mb-3 font-semibold">
    Project Progress
  </p>

  <div className="space-y-2">
    {projectSteps.map((step, index) => {
      const currentIndex = projectSteps.indexOf(selectedInquiry.status);

      return (
        <div
          key={step}
          className={`flex items-center gap-3 p-2 rounded-lg ${
            index <= currentIndex
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          <span className="text-lg">
            {index < currentIndex
              ? "✅"
              : index === currentIndex
              ? "⏳"
              : "⬜"}
          </span>

          <span>{step}</span>
        </div>
      );
    })}
  </div>
</div>
      <div className="mt-6">
  <p className="text-gray-500 mb-2">
    Internal Notes
  </p>

  <textarea
    rows="5"
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    placeholder="Write follow-up notes here..."
    className="w-full border rounded-lg p-3"
  />
</div>
      <div className="flex flex-wrap gap-3 mt-6">

  <a
    href={`https://wa.me/91${selectedInquiry.customer?.whatsapp || selectedInquiry.customer?.phone}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
  >
    WhatsApp
  </a>

  <a
    href={`tel:${selectedInquiry.customer?.phone}`}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
  >
    Call
  </a>

  <a
    href={`mailto:${selectedInquiry.customer?.email}`}
    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
  >
    Email
  </a>

</div>
<div className="mt-6 flex justify-end">
  <button
    onClick={saveNotes}
    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
  >
    Save Notes
  </button>
</div>

    </div>
  </div>
)}

</div>
);
}
