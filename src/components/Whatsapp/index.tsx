export const BtnWhatsapp = () => {
  const BOOKSY =
    "https://booksy.com/en-us/1447388_hudsons-barbershop_barber-shop_15924_apopka?hl=en-US&rwg_token=AFd1xnH3Loqm69FZRpimvAb17A3QZIjoxw_twJgbMNA9YYLfUXBZJFFIxspu9TMT0Ul-IlubUcQ4BCNmM_3eh9gUaG7vN_dDvw%3D%3D#ba_s=seo";

  return (
    <a
      className="btn-whatsapp"
      href={BOOKSY}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on Booksy"
      title="Book on Booksy"
      style={{ fontSize: "22px" }}
    >
      📅
    </a>
  );
};
