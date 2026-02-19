export const Navbar = () => {
    return (
        <div>
            <nav className="header-content container">
               <div className="header-icons" data-aos="fade-down">
  <a
    href="https://www.instagram.com/gt_barberlounge/"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fa-brands fa-instagram fa-2x"></i>
  </a>

  <a
    href="https://www.facebook.com/p/Golden-Touch-Barber-Lounge-100094509364655/"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fa-brands fa-facebook fa-2x"></i>
  </a>
</div>
                <div className="header-logo" data-aos="fade-up" data-aos-delay="300">
                    <img data-aos="flip-up" data-aos-delay="300" data-aos-duration="1500" src="/logo.svg" alt="Logo da barbearia" />
                </div>
                <div data-aos="fade-down">
                    <a className="header-button" target="_blank" href="https://api.whatsapp.com/send?phone=5518999999999&text=Quero%20fazer%20um%20agendamento%20hoje!">Agendar horário</a>
                </div>
            </nav>
            <main className="hero container" data-aos="fade-up" data-aos-delay="400">
                <h1>Golden Touch Barber Studio.</h1>
                <p>Private, luxury grooming — precision cuts, clean fades, and beard artistry.</p>
                <a href="https://booksy.com/en-us/792234_golden-touch-barber-lounge_barber-shop_15924_apopka?hl=en-US&rwg_token=AFd1xnF6HRcnhJ3nNaomEc8XYhKS5qtH--UpzKriTYJqjB6PKz25_yaWqvU_4ow_D1tHHJ7xHWjtLNqs38NU1KUM7vW4ZiuuvQ%3D%3D#ba_s=seo" className="button-contact" target="_blank">
                    BOOK NOW
                </a>
            </main>
        </div>
    )
}
