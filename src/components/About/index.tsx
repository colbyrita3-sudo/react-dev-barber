export const About = () => {
  return (
    <section className="about">
      <div className="container about-content">
        {/* LEFT: Your real photos */}
        <div data-aos="zoom-in" data-aos-delay="100">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "14px",
              alignItems: "start",
            }}
          >
            <img
              src="/about1.webp"
              alt="Hudsons Barbershop work"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            />

            <img
              src="/about2.webp"
              alt="Hudsons Barbershop haircut"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.14)",
                marginTop: "34px",
              }}
            />

            <img
              src="/about3.webp"
              alt="Hudsons Barbershop details"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            />

            {/* Spacer to keep the grid balanced on desktop */}
            <div />
          </div>

          {/* Mobile: stack the photos nicer */}
          <style>
            {`
              @media (max-width: 820px) {
                .about .container .about-content > div:first-child > div {
                  grid-template-columns: 1fr !important;
                }
                .about img[alt="Hudsons Barbershop haircut"] {
                  margin-top: 0 !important;
                }
              }
            `}
          </style>
        </div>

        {/* RIGHT: Text (keep yours) */}
        <div className="about-description" data-aos="zoom-out-left" data-aos-delay="250">
          <h2>About Hudsons Barbershop</h2>

          <p>
            Hudsons Barbershop is built on consistent results and a relaxed, professional vibe.
            Whether you’re coming in for a fresh cut, a beard clean-up, or a full style service —
            we focus on detail, cleanliness, and making sure you leave looking right.
          </p>

          <p style={{ marginTop: "14px" }}>
            <strong>Walk-ins accepted</strong> when available. Appointments are recommended for the quickest service.
          </p>

          <p style={{ marginTop: "18px" }}>
            <strong>Address:</strong> 515 N Park Ave STE 101, Apopka, FL 32712
            <br />
            <strong>Phone:</strong> (407) 410-1316
          </p>

          <p style={{ marginTop: "18px" }}>
            <strong>Hours:</strong> Thu 11–7 • Fri 10–7 • Sat 10–4 • Sun Closed • Mon Closed • Tue 11–6 • Wed 11–6
          </p>
        </div>
      </div>
    </section>
  );
};
