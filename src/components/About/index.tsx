export const About = () => {
  return (
    <section className="about">
      <div className="container about-content">
        <div data-aos="zoom-in" data-aos-delay="100">
          <img src="/images.svg" alt="Golden Touch barber tools" />
        </div>

        <div className="about-description" data-aos="zoom-out-left" data-aos-delay="250">
          <h2>About Golden Touch</h2>

          <p>
            Golden Touch is a private barber studio focused on premium grooming and consistent results.
            Every appointment is detailed, on time, and built around the client — clean fades, sharp
            line-ups, and beard work that stays crisp. If you’re looking for a modern, luxury experience
            (without the barbershop chaos), you’re in the right place.
          </p>

          <p>
            <strong>By appointment only.</strong> Book ahead to secure your time.
          </p>

          <p>
            Studio Hours: <strong>9:00 AM</strong> to <strong>7:00 PM</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
