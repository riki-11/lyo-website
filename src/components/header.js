import Hamburger from "./hamburger";
import HeaderMenu from "./header-menu";

export default function Header() {
  return (
    <header className="bg-lyo-darkgreen w-full p-5 md:px-8 drop-shadow-lg">
      <nav className="flex flex-wrap">
        <div className="w-2/3 lg:w-1/2">
          <a className="text-3xl md:text-5xl text-lyo-cream font-title" href="#">Lasallian Youth Orchestra</a>
        </div>
        {/* Menu Options: About Us, Performances, Join FamiLYO, Forte 2023 */}
        <div className="flex w-1/3 lg:w-1/2 justify-end">
        {/* Add id to this for the javascript hook? MAYBE THIS CAN BE ANOTHER COMPONENT */}
          <Hamburger/>
          <HeaderMenu/>
        </div>

        {/** Normal menu. On mobile, show vertically. On web, show horizontally*/}
        <div id="hamburger-menu" className="hidden w-full mt-5">
          <ul className="text-2xl font-body text-lyo-cream lg:inline-block space-y-1.5">
            <li>Forte 2023</li>
            <li>About Us</li>
            <li>Performance Requests</li>
            <li>Join FamiLYO</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};