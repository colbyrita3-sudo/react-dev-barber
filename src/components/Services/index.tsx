export const Services = () => {
  return (
    <div>
      <section className="services">
        <div className="services-content container">
          <h2>Services</h2>
          <p>
            Walk-ins accepted when available — appointments recommended. Book
            online for the fastest service and guaranteed time.
          </p>
        </div>

        <section className="haircuts">
          <div className="haircut" data-aos="fade-up" data-aos-delay="150">
            <img src="/corte1.png" alt="Male haircut" />
            <div className="haircut-info">
              <strong>Male Haircut</strong>
              <button>$30</button>
            </div>
          </div>

          <div className="haircut" data-aos="fade-up" data-aos-delay="250">
            <img src="/corte2.png" alt="Haircut and beard" />
            <div className="haircut-info">
              <strong>Haircut + Beard</strong>
              <button>$40</button>
            </div>
          </div>

          <div className="haircut" data-aos="fade-up" data-aos-delay="350">
            <img src="/corte3.png" alt="Senior haircut" />
            <div className="haircut-info">
              <strong>Senior’s Haircut</strong>
              <button>$25</button>
            </div>
          </div>

          <div className="haircut" data-aos="fade-up" data-aos-delay="450">
            <img src="/corte1.png" alt="Kids haircut" />
            <div className="haircut-info">
              <strong>Kid’s Haircut</strong>
              <button>$25</button>
            </div>
          </div>

          <div className="haircut" data-aos="fade-up" data-aos-delay="550">
            <img src="/corte2.png" alt="Men's cut and blowdry" />
            <div className="haircut-info">
              <strong>Men’s Cut & Blowdry</strong>
              <button>$40</button>
            </div>
          </div>

          <div className="haircut" data-aos="fade-up" data-aos-delay="650">
            <img src="/corte3.png" alt="Men's cut and color" />
            <div className="haircut-info">
              <strong>Men’s Cut & Color</strong>
              <button>$95+</button>
            </div>
          </div>
        </section>
      </section>

      <div className="services">
        <h2>Walk-ins Accepted</h2>
        <p style={{ textAlign: "center", marginTop: "12px" }}>
          Appointments recommended to guarantee your time.
        </p>
      </div>
    </div>
  );
};
