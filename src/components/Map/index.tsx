export const Map = () => {
  const address = "515 N Park Ave STE 101, Apopka, FL 32712";

  return (
    <section className="map">
      <div className="container">
        <h2 style={{ color: "white" }}>Location</h2>

        <p style={{ textAlign: "center", marginTop: "12px", color: "white" }}>
          Hudsons Barbershop — walk-ins accepted when available. Appointments
          recommended.
        </p>

        <p style={{ textAlign: "center", marginTop: "12px", color: "white" }}>
          <strong>{address}</strong>
        </p>

        <div style={{ marginTop: "24px" }}>
          <iframe
            title="Hudsons Barbershop Location"
            src="https://www.google.com/maps?q=515%20N%20Park%20Ave%20STE%20101%2C%20Apopka%2C%20FL%2032712&output=embed"
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
            href="https://www.google.com/maps/dir/?api=1&destination=515%20N%20Park%20Ave%20STE%20101%2C%20Apopka%2C%20FL%2032712"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>

          <span style={{ margin: "0 10px" }} />

          <a className="header-button" href="tel:+14074101316">
            Call (407) 410-1316
          </a>
        </div>

        <p style={{ textAlign: "center", marginTop: "16px", color: "white" }}>
          Thu 11–7 • Fri 10–7 • Sat 10–4 • Sun Closed • Mon Closed • Tue 11–6 •
          Wed 11–6
        </p>
      </div>
    </section>
  );
};
