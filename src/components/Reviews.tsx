export const Reviews = () => {
  const reviews = [
    {
      name: "Juliet & Herman Client",
      stars: 5,
      text:
        "Juliet and Herman have really created something special at Hudson's Barbershop. It is so much more than your typical barbershop. Juliet really listened to me and delivered the style I was looking for. The absolute best haircut I have had in Apopka!",
    },
    {
      name: "Verified Customer",
      stars: 5,
      text:
        "You have not experienced service until you have gone to Hudson's. Herman & Juliette offer best-in-class service. Run, don’t walk, to treat yourself. Girls—you want Juliette’s hands in your hair today!",
    },
    {
      name: "Parent Visit",
      stars: 5,
      text:
        "Love this barbershop! My son's haircut is perfect along with the great vibes the place has as a whole. Highly recommend and will be visiting again!",
    },
  ];

  return (
    <section
      className="reviews"
      style={{
        background: "linear-gradient(180deg, #06101d 0%, #061a2a 100%)",
        padding: "56px 0",
      }}
    >
      <div className="container">
        <h2 style={{ textAlign: "center", color: "white" }}>Reviews</h2>

        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "white",
            opacity: 0.9,
          }}
        >
          Real clients. Real results.
        </p>

        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            marginTop: "26px",
          }}
        >
          {reviews.map((r, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={120 + idx * 120}
              style={{
                borderRadius: "16px",
                padding: "18px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  color: "white",
                  letterSpacing: "2px",
                }}
              >
                {"★".repeat(r.stars)}
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

        <div style={{ textAlign: "center", marginTop: "22px" }}>
          <a
            className="header-button"
            target="_blank"
            rel="noreferrer"
            href="https://booksy.com/en-us/1447388_hudsons-barbershop_barber-shop_15924_apopka?hl=en-US&rwg_token=AFd1xnH3Loqm69FZRpimvAb17A3QZIjoxw_twJgbMNA9YYLfUXBZJFFIxspu9TMT0Ul-IlubUcQ4BCNmM_3eh9gUaG7vN_dDvw%3D%3D#ba_s=seo"
            style={{ display: "inline-block" }}
          >
            Book an appointment
          </a>
        </div>
      </div>
    </section>
  );
};
