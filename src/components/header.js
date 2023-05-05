export default function Header() {
  return (
    <header className="bg-lyo-darkgreen w-full p-5 md:px-8">
      <nav className="flex flex-wrap">
        <div className="w-2/3 lg:w-1/2">
          <a className="text-3xl md:text-5xl text-lyo-cream font-title" href="#">Lasallian Youth Orchestra</a>
        </div>
        {/* Menu Options: About Us, Performances, Join FamiLYO, Forte 2023 */}
        <div className="lg:w-1/2 bg-lyo-cream">
          <ul>
            <li>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};