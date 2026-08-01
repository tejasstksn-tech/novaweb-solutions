function Pricing() {
  return (
    <section
      style={{
        padding: "80px",
        background: "#f1f5f9",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "40px" }}>
        Pricing
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ padding: "30px", background: "white" }}>
          <h3>Starter</h3>
          <h1>₹2,999</h1>
        </div>

        <div style={{ padding: "30px", background: "white" }}>
          <h3>Business</h3>
          <h1>₹5,999</h1>
        </div>

        <div style={{ padding: "30px", background: "white" }}>
          <h3>Premium</h3>
          <h1>₹9,999</h1>
        </div>
      </div>
    </section>
  );
}

export default Pricing;