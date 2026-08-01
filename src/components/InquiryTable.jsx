import { inquiries } from "../data/dashboardData";

export default function InquiryTable() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Recent Inquiries
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Name</th>
              <th className="text-left py-3">Business</th>
              <th className="text-left py-3">City</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {inquiries.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">

                <td className="py-4">{item.name}</td>

                <td>{item.business}</td>

                <td>{item.city}</td>

                <td>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}