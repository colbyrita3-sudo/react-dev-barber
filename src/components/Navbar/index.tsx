export const Navbar = () => {
  const BOOKSY =
    "https://booksy.com/en-us/1447388_hudsons-barbershop_barber-shop_15924_apopka?hl=en-US&rwg_token=AFd1xnH3Loqm69FZRpimvAb17A3QZIjoxw_twJgbMNA9YYLfUXBZJFFIxspu9TMT0Ul-IlubUcQ4BCNmM_3eh9gUaG7vN_dDvw%3D%3D#ba_s=seo";

  const PHONE = "tel:+14074101316";

  return (
    <div>
      {/* TOP NAV */}
      <nav className="header-content container">
        <div className="header-icons" data-aos="fade-down">
          <a
            href="https://www.instagram.com/hudsons_barbershop25/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
        </div>

        <div className="header-logo" data-aos="fade-up" data-aos-delay="300">
          <img
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="1500"
            src="/logo.svg"
            alt="Hudsons Barbershop"
          />
        </div>

        <div
          data-aos="fade-down"
          style={{ display: "flex", gap: "12px", alignItems: "center" }}
        >
          <a className="header-button" target="_blank" rel="noreferrer" href={BOOKSY}>
            Book Now
          </a>

          <a className="header-button" href={PHONE}>
            Call (407) 410-1316
          </a>
        </div>
      </nav>

      {/* HERO (EXACT same background as Reviews) */}
      <section
        style={{
          position: "relative",
          padding: "56px 0 44px",
          background: "linear-gradient(180deg, #06101d 0%, #061a2a 100%)",
          overflow: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "26px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 style={{ color: "white", fontSize: "44px", lineHeight: 1.1 }}>
              Hudsons Barbershop
            </h1>

            <p style={{ color: "white", opacity: 0.92, marginTop: "14px", fontSize: "17px" }}>
              Clean cuts. Sharp line-ups. Beard detail.
              <br />
              A relaxed, professional vibe — and consistent results.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "18px" }}>
              <a
                className="header-button"
                target="_blank"
                rel="noreferrer"
                href={BOOKSY}
                style={{ display: "inline-block" }}
              >
                Book on Booksy
              </a>

              <a className="header-button" href={PHONE} style={{ display: "inline-block" }}>
                Call Now
              </a>
            </div>

            {/* Trust bar */}
            <div
              style={{
                marginTop: "18px",
                padding: "12px 14px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                color: "white",
                opacity: 0.95,
                display: "grid",
                gap: "6px",
              }}
            >
              <div style={{ fontWeight: 600 }}>
                Walk-ins accepted <span style={{ opacity: 0.85 }}>(when available)</span>
              </div>
              <div style={{ opacity: 0.9 }}>
                Thu 11–7 • Fri 10–7 • Sat 10–4 • Sun Closed • Mon Closed • Tue 11–6 • Wed 11–6
              </div>
              <div style={{ opacity: 0.9 }}>
                515 N Park Ave STE 101, Apopka, FL 32712
              </div>
            </div>
          </div>

          {/* RIGHT: Hero card image stays */}
          <div data-aos="fade-up" data-aos-delay="350">
            <div
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <img
                src="/hero.webp"
                alt="Hudsons Barbershop"
                style={{ width: "100%", height: "280px", objectFit: "cover" }}
              />
              <div style={{ padding: "12px 14px", color: "white", opacity: 0.92 }}>
                <strong>Appointments recommended</strong>
                <div style={{ marginTop: "4px", opacity: 0.85 }}>
                  Tap Book Now or call to lock in your time.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive */}
        <style>
          {`
            @media (max-width: 900px) {
              .container {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </section>
    </div>
  );
};
