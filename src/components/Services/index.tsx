export const Services = () => {
  return (
    <div>
      <section className="services">
        <div className="services-content container">
          <h2>Services</h2>
          <p>
            Premium barbering with clean finishes and consistent results. Walk-ins
            are welcome when available — appointments recommended for the fastest
            service.
          </p>
        </div>

        <section className="haircuts">
          <div className="haircut" data-aos="fade-up" data-aos-delay="150">
            <img src="/corte1.png" alt="Signature haircut" />
            <div className="haircut-info">
              <strong>Golden Touch Haircut</strong>
              <button>From $__</button>
            </div>
          </div>

          <div className="haircut" data-aos="fade-up" data-aos-delay="250">
            <img src="/corte2.png" alt="Beard grooming" />
            <div className="haircut-info">
              <strong>Beard Sculpt & Line-Up</strong>
              <button>From $__</button>
            </div>
          </div>

          <div className="haircut" data-aos="fade-up" data-aos-delay="350">
            <img src="/corte3.png" alt="Haircut and beard combo" />
            <div className="haircut-info">
              <strong>Haircut + Beard Combo</strong>
              <button>From $__</button>
            </div>
          </div>
        </section>
      </section>

      <div className="services">
        <h2>Walk-ins Welcome</h2>
        <p style={{ textAlign: "center", marginTop: "12px" }}>
          Appointments recommended. Book ahead to lock in your time.
        </p>
      </div>
    </div>
  );
};
