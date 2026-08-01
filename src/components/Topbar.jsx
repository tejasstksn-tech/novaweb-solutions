export default function Topbar() {
  return (
    <div className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Admin"
          className="w-12 h-12 rounded-full"
        />
      </div>

    </div>
  );
}