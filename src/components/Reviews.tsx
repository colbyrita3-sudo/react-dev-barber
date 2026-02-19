export const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <h2 style={{ textAlign: "center", color: "white" }}>Reviews</h2>
        <p style={{ textAlign: "center", color: "white", opacity: 0.9 }}>
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
          <div
            style={{
              borderRadius: "16px",
              padding: "18px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "white",
            }}
          >
            <div style={{ letterSpacing: "2px" }}>★★★★★</div>
            <p style={{ marginTop: "10px" }}>
              Super clean cut and great attention to detail. Definitely coming back.
            </p>
            <p style={{ marginTop: "12px", opacity: 0.85 }}>
              <strong>Local Client</strong>
            </p>
          </div>

          <div
            style={{
              borderRadius: "16px",
              padding: "18px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "white",
            }}
          >
            <div style={{ letterSpacing: "2px" }}>★★★★★</div>
            <p style={{ marginTop: "10px" }}>
              Came in as a walk-in and got taken care of fast. Fade came out perfect.
            </p>
            <p style={{ marginTop: "12px", opacity: 0.85 }}>
              <strong>Walk-in Customer</strong>
            </p>
          </div>

          <div
            style={{
              borderRadius: "16px",
              padding: "18px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "white",
            }}
          >
            <div style={{ letterSpacing: "2px" }}>★★★★★</div>
            <p style={{ marginTop: "10px" }}>
              Professional vibe, on time, and the beard work is A1. Highly recommend.
            </p>
            <p style={{ marginTop: "12px", opacity: 0.85 }}>
              <strong>Apopka Resident</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
