function LoadingScreen() {
  return (
    <section className="py-24 flex flex-col items-center justify-center">

      <div className="w-20 h-20 border-8 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

      <h2 className="text-4xl font-bold mt-8">
        AI is Building Your Website...
      </h2>

      <p className="text-gray-500 mt-4 text-lg">
        Please wait while NovaWeb AI generates your website.
      </p>

    </section>
  );
}

export default LoadingScreen;