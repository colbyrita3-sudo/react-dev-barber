export const Reviews = () => {
  const reviews = [
    {
      name: "Local Client",
      text: "Super clean cut and great attention to detail. Definitely coming back.",
    },
    {
      name: "Walk-in Customer",
      text: "Came in as a walk-in and got taken care of fast. Fade came out perfect.",
    },
    {
      name: "Apopka Resident",
      text: "Professional vibe, on time, and the beard work is A1. Highly recommend.",
    },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Reviews</h2>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Real clients. Real results.
        </p>

        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            marginTop: "24px",
          }}
        >
          {reviews.map((r, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: "16px",
                padding: "18px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div style={{ fontSize: "18px" }}>★★★★★</div>
              <p style={{ marginTop: "10px" }}>{r.text}</p>
              <p style={{ marginTop: "12px", opacity: 0.85 }}>
                <strong>{r.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
