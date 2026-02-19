export const Services = () => {
  const BOOKSY =
    "https://booksy.com/en-us/1447388_hudsons-barbershop_barber-shop_15924_apopka?hl=en-US&rwg_token=AFd1xnH3Loqm69FZRpimvAb17A3QZIjoxw_twJgbMNA9YYLfUXBZJFFIxspu9TMT0Ul-IlubUcQ4BCNmM_3eh9gUaG7vN_dDvw%3D%3D#ba_s=seo";

  const services = [
    {
      name: "Male Haircut",
      price: "$30",
      time: "40 min",
      img: "/service1.webp",
      note: "Clean fade, sharp line-up, finished styling.",
    },
    {
      name: "Haircut + Beard",
      price: "$40",
      time: "45 min",
      img: "/service2.webp",
      note: "Full cut plus beard shape-up and detail work.",
    },
    {
      name: "Men's Cut & Color",
      price: "$95+",
      time: "1 hr 30 min",
      img: "/service3.webp",
      note: "Premium service. Consultation included.",
    },
  ];

  return (
    <section
      className="services"
      style={{
        background: "linear-gradient(180deg, #07111f 0%, #071a2a 100%)",
        padding: "56px 0",
      }}
    >
      <div className="container">
        <h2 style={{ textAlign: "center", color: "white" }}>Services</h2>

        <p
          style={{
            maxWidth: "820px",
            margin: "10px auto 0",
            textAlign: "center",
            color: "white",
            opacity: 0.9,
          }}
        >
          Our most requested services — built for clean, consistent results.
          <strong> Walk-ins accepted</strong> when available. Appointments recommended.
        </p>

        <div style={{ textAlign: "center", marginTop: "18px" }}>
          <a
            className="header-button"
            target="_blank"
            rel="noreferrer"
            href={BOOKSY}
            style={{ display: "inline-block" }}
          >
            View full menu / Book on Booksy
          </a>
        </div>

        {/* 3-up desktop, 2-up tablet, 1-up mobile */}
        <div
          style={{
            display: "grid",
            gap: "18px",
            marginTop: "28px",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          }}
        >
          {services.map((s, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={120 + idx * 120}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <img
                src={s.img}
                alt={s.name}
                style={{ width: "100%", height: "190px", objectFit: "cover" }}
              />

              <div style={{ padding: "14px 14px 16px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                    color: "white",
                  }}
                >
                  <strong>{s.name}</strong>
                  <strong>{s.price}</strong>
                </div>

                <p style={{ marginTop: "6px", color: "white", opacity: 0.85 }}>
                  {s.time}
                </p>

                <p style={{ marginTop: "10px", color: "white", opacity: 0.9 }}>
                  {s.note}
                </p>

                <div style={{ marginTop: "14px" }}>
                  <a
                    className="header-button"
                    target="_blank"
                    rel="noreferrer"
                    href={BOOKSY}
                    style={{ display: "inline-block" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive tweak without touching your CSS files */}
        <style>
          {`
            @media (max-width: 920px) {
              .services .container > div[style*="grid-template-columns: repeat(3"] {
                grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              }
            }
            @media (max-width: 620px) {
              .services .container > div[style*="grid-template-columns: repeat(3"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>

        <p style={{ textAlign: "center", marginTop: "22px", color: "white", opacity: 0.92 }}>
          Prefer to call?{" "}
          <a href="tel:+14074101316" style={{ color: "white", textDecoration: "underline" }}>
            (407) 410-1316
          </a>
        </p>
      </div>
    </section>
  );
};
