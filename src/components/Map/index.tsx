export const Map = () => {
  return (
    <section className="map">
      <div className="container">
        <h2>Location</h2>

        <p style={{ textAlign: "center", marginTop: "12px" }}>
          Golden Touch Barber Studio —{" "}
          <strong>walk-ins welcome</strong> when available. Appointments
          recommended.
        </p>

        <p style={{ textAlign: "center", marginTop: "12px" }}>
          <strong>995 W Orange Blossom Trail</strong>, Apopka, FL 32712
        </p>

        <div style={{ marginTop: "24px" }}>
          <iframe
            title="Golden Touch Location"
            src="https://www.google.com/maps?q=995%20W%20Orange%20Blossom%20Trail%2C%20Apopka%2C%20FL%2032712&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <a
            className="header-button"
            href="https://www.google.com/maps/dir/?api=1&destination=995%20W%20Orange%20Blossom%20Trail%2C%20Apopka%2C%20FL%2032712"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>

          <span style={{ margin: "0 10px" }} />

          <a className="header-button" href="tel:+14075575702">
            Call (407) 557-5702
          </a>
        </div>

        <p style={{ textAlign: "center", marginTop: "16px" }}>
          Mon–Fri 10:00 AM – 6:30 PM • Sat 10:00 AM – 5:30 PM • Sun Closed
        </p>
      </div>
    </section>
  );
};
