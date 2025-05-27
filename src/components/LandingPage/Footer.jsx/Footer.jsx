import FooterContent from "./FooterContent";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer id="address-contact-us" className="pt-xl-5">
      <div className="container">
        <FooterContent></FooterContent>
        <hr className="mt-4 mb-0" />
        <FooterBottom></FooterBottom>
      </div>
    </footer>
  );
};

export default Footer;
