function Portfolio() {
  const projects = [
    {
      name: "Restaurant Website",
      image: "https://picsum.photos/400/250?1",
    },
    {
      name: "Gym Website",
      image: "https://picsum.photos/400/250?2",
    },
    {
      name: "Apartment Website",
      image: "https://picsum.photos/400/250?3",
    },
  ];

  return (
    <section style={{ padding: "80px 40px" }}>
      <h2 style={{ textAlign: "center", fontSize: "40px" }}>
        Our Portfolio
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={project.image}
              width="100%"
              alt={project.name}
            />

            <h3 style={{ padding: "20px" }}>{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;