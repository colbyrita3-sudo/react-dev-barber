export const About = () => {
  return (
    <section className="about">
      <div className="container about-content">
        <div data-aos="zoom-in" data-aos-delay="100">
          <img src="/images.svg" alt="Barber tools" />
        </div>

        <div
          className="about-description"
          data-aos="zoom-out-left"
          data-aos-delay="250"
        >
          <h2>About Hudsons Barbershop</h2>

          <p>
            Hudsons Barbershop is built on consistent results and a relaxed,
            professional vibe. Whether you’re coming in for a fresh cut, a beard
            clean-up, or a full style service — we focus on detail, cleanliness,
            and making sure you leave looking right.
          </p>

          <p>
            <strong>Walk-ins accepted</strong> when available. Appointments are
            recommended for the quickest service.
          </p>

          <p>
            <strong>Address:</strong> 515 N Park Ave STE 101, Apopka, FL 32712
            <br />
            <strong>Phone:</strong> (407) 410-1316
          </p>

          <p>
            <strong>Hours:</strong> Thu 11–7 • Fri 10–7 • Sat 10–4 • Sun Closed •
            Mon Closed • Tue 11–6 • Wed 11–6
          </p>
        </div>
      </div>
    </section>
  );
};
