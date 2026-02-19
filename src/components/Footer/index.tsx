export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h2>Golden Touch Barber Studio</h2>

        <p style={{ textAlign: "center", marginTop: "12px" }}>
          Walk-ins welcome when available • Appointments recommended
        </p>

        <p style={{ textAlign: "center", marginTop: "12px" }}>
          Mon–Fri 10:00 AM – 6:30 PM • Sat 10:00 AM – 5:30 PM • Sun Closed
        </p>

        <p style={{ textAlign: "center", marginTop: "12px" }}>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/gt_barber_lounge/"
            target="_blank"
            rel="noreferrer"
          >
            @gt_barber_lounge
          </a>
        </p>
      </div>
    </footer>
  );
};
