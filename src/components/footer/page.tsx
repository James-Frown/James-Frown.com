// importing footer elements
import DesktopFooter from "./desktop_footer";
import MobileFooter from "./mobile_footer";

const Footer = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;
