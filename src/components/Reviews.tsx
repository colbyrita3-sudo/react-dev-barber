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
        <h2 style={{ textAlign: "center", color: "white" }}>Reviews</h2>
        <p style={{ textAlign: "center", marginTop: "10px", color: "white", opacity: 0.9 }}>
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
                background: "background: "rgba(0,0,0,0.35)",
",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <div style={{ fontSize: "18px", color: "white", letterSpacing: "2px" }}>
                ★★★★★
              </div>

              <p style={{ marginTop: "10px", color: "white", opacity: 0.92 }}>
                {r.text}
              </p>

              <p style={{ marginTop: "12px", color: "white", opacity: 0.85 }}>
                <strong>{r.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
