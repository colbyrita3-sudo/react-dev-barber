export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h2 style={{ color: "white" }}>Hudsons Barbershop</h2>

        <p style={{ textAlign: "center", marginTop: "12px", color: "white" }}>
          515 N Park Ave STE 101, Apopka, FL 32712
        </p>

        <p style={{ textAlign: "center", marginTop: "12px" }}>
          <a
            href="tel:+14074101316"
            style={{ color: "white", textDecoration: "underline" }}
          >
            (407) 410-1316
          </a>
        </p>

        <p style={{ textAlign: "center", marginTop: "12px", color: "white" }}>
          Walk-ins accepted • Appointments recommended
        </p>

        <p style={{ textAlign: "center", marginTop: "12px", color: "white" }}>
          Thu 11–7 • Fri 10–7 • Sat 10–4 • Sun Closed • Mon Closed • Tue 11–6 •
          Wed 11–6
        </p>

        <p style={{ textAlign: "center", marginTop: "12px" }}>
          <a
            href="https://www.instagram.com/hudsons_barbershop25/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Instagram: @hudsons_barbershop25
          </a>
        </p>
      </div>
    </footer>
  );
};
