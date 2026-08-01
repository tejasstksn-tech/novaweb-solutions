function Contact() {
  return (
    <section style={{ padding: "80px" }}>
      <h2 style={{ textAlign: "center" }}>
        Contact Us
      </h2>

      <form
        style={{
          maxWidth: "500px",
          margin: "30px auto",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "15px",
          }}
        />

        <textarea
          placeholder="Message"
          rows="5"
          style={{
            width: "100%",
            padding: "15px",
          }}
        ></textarea>

        <button
          style={{
            marginTop: "20px",
            padding: "15px 40px",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;