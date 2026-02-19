export const Services = () => {
  const BOOKSY =
    "https://booksy.com/en-us/1447388_hudsons-barbershop_barber-shop_15924_apopka?hl=en-US&rwg_token=AFd1xnH3Loqm69FZRpimvAb17A3QZIjoxw_twJgbMNA9YYLfUXBZJFFIxspu9TMT0Ul-IlubUcQ4BCNmM_3eh9gUaG7vN_dDvw%3D%3D#ba_s=seo";

  const services = [
    { name: "Male Haircut", price: "$30", time: "40 min", img: "/service1.webp" },
    { name: "Haircut + Beard", price: "$40", time: "45 min", img: "/service2.webp" },
    { name: "Senior's Haircut", price: "$25", time: "30 min", img: "/service3.webp" },
    { name: "Kid's Haircut", price: "$25", time: "30 min", img: "/service1.webp" },
    { name: "Men's Cut & Blowdry", price: "$40", time: "40 min", img: "/service2.webp" },
    { name: "Men's Cut & Color", price: "$95+", time: "1 hr 30 min", img: "/service3.webp" },
  ];

  return (
    <section className="services">
      <div className="services-content container">
        <h2>Services</h2>

        <p style={{ maxWidth: "820px", margin: "10px auto 0", textAlign: "center" }}>
          Clean cuts, sharp line-ups, beard work, and style services — done right.
          <strong> Walk-ins accepted</strong> when available. Appointments recommended.
        </p>

        <div style={{ textAlign: "center", marginTop: "18px" }}>
          <a className="header-button" target="_blank" rel="noreferrer" href={BOOKSY}>
            View full menu / Book on Booksy
          </a>
        </div>
      </div>

      <div className="container" style={{ marginTop: "26px" }}>
        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {services.map((s, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={120 + idx * 80}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <img
                src={s.img}
                alt={s.name}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />

              <div style={{ padding: "14px 14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                  <strong style={{ color: "white" }}>{s.name}</strong>
                  <strong style={{ color: "white" }}>{s.price}</strong>
                </div>

                <p style={{ marginTop: "6px", color: "white", opacity: 0.85 }}>{s.time}</p>

                <div style={{ marginTop: "12px" }}>
                  <a className="header-button" target="_blank" rel="noreferrer" href={BOOKSY}>
                    Book This
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "20px", color: "white", opacity: 0.9 }}>
          Prefer to call?{" "}
          <a href="tel:+14074101316" style={{ color: "white", textDecoration: "underline" }}>
            (407) 410-1316
          </a>
        </p>
      </div>
    </section>
  );
};
