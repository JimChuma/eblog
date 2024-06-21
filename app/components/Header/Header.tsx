import Logo from "./sub-components/Logo";
import NavBar from "./sub-components/NavBar";
import Search from "./sub-components/Search";

export default function Header() {
  return (
    <header>
      <div className="box">
        <Logo />
        <NavBar />
        <Search />
      </div>
    </header>
  );
}
