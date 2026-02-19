export const Map = () => {
  return (
    <section className="map">
      <div className="container">
        <h2>Location</h2>
        <p style={{ textAlign: "center", marginTop: "12px" }}>
          Golden Touch Barber Studio — walk-ins welcome when available.
          Appointments recommended.
        </p>

        <div style={{ marginTop: "24px" }}>
          {/* Replace the src below with your Google Maps embed link when ready */}
          <iframe
            title="Golden Touch Location"
            src="https://www.google.com/maps?q=Orlando,+FL&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p style={{ textAlign: "center", marginTop: "16px" }}>
          Mon–Fri 10:00 AM – 6:30 PM • Sat 10:00 AM – 5:30 PM • Sun Closed
        </p>
      </div>
    </section>
  );
};
