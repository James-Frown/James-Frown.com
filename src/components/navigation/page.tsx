// importing nav elements
import DesktopNav from "./desktop_nav";
import MobileNav from "./mobile_nav";

const Nav = () => {
  return (
    <>
      <div id="Nav" className="sticky top-0 z-100">
        <div className="hidden md:block bg-background">
          <DesktopNav />
        </div>
        <div className="block md:hidden bg-background">
          <MobileNav />
        </div>
      </div>
    </>
  );
};

export default Nav;
