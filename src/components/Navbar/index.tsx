export const Navbar = () => {
  const BOOKSY =
    "https://booksy.com/en-us/1447388_hudsons-barbershop_barber-shop_15924_apopka?hl=en-US&rwg_token=AFd1xnH3Loqm69FZRpimvAb17A3QZIjoxw_twJgbMNA9YYLfUXBZJFFIxspu9TMT0Ul-IlubUcQ4BCNmM_3eh9gUaG7vN_dDvw%3D%3D#ba_s=seo";

  return (
    <div>
      <nav className="header-content container">
        {/* Social Icons */}
        <div className="header-icons" data-aos="fade-down">
          <a
            href="https://www.instagram.com/hudsons_barbershop25/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
        </div>

        {/* Logo */}
        <div className="header-logo" data-aos="fade-up" data-aos-delay="300">
          <img
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="1500"
            src="/logo.svg"
            alt="Hudsons Barbershop logo"
          />
        </div>

        {/* Top Right Buttons */}
        <div
          data-aos="fade-down"
          style={{ display: "flex", gap: "12px", alignItems: "center" }}
        >
          <a className="header-button" target="_blank" rel="noreferrer" href={BOOKSY}>
            Book Now
          </a>

          <a className="header-button" href="tel:+14074101316">
            Call (407) 410-1316
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="hero container" data-aos="fade-up" data-aos-delay="400">
        <h1>Hudsons Barbershop</h1>

        <p>
          Apopka’s go-to spot for clean cuts, sharp line-ups, and beard work done
          right. <strong>Walk-ins accepted</strong> — appointments recommended to
          lock in your time.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a className="header-button" target="_blank" rel="noreferrer" href={BOOKSY}>
            BOOK NOW
          </a>

          <a className="header-button" href="tel:+14074101316">
            CALL (407) 410-1316
          </a>
        </div>

        <p style={{ marginTop: "14px" }}>
          515 N Park Ave STE 101, Apopka, FL 32712
        </p>

        <p style={{ marginTop: "8px" }}>
          Thu 11–7 • Fri 10–7 • Sat 10–4 • Sun Closed • Mon Closed • Tue 11–6 • Wed
          11–6
        </p>
      </main>
    </div>
  );
};
