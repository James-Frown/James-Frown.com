// importing nav elements
import DesktopNav from "./desktop_nav";
import MobileNav from "./mobile_nav";

const Nav = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Nav;
