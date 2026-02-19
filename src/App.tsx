import { useEffect } from "react";
import { Header } from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/style.css";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Reviews } from "./components/Reviews";

import { Map } from "./components/Map";
import { Footer } from "./components/Footer";
import { BtnWhatsapp } from "./components/Whatsapp";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <About />

      <Services />

      <Reviews />

      <Map />

      <Footer />

      <BtnWhatsapp />
    </>
  );
}

export default App;
