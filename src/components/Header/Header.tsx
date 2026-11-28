import Link from "next/link";
import ThemeToggleButton from "../ThemeToggleButton";

const Header = () => {
  return (
    <header
      className="border-border/60 bg-background/60 sticky top-0 z-50 h-16 border-b shadow-sm backdrop-blur-xl backdrop-saturate-150"
      aria-label="app-header">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="Hot Wheels">
            Hot Wheels
          </h1>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about-us"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/models"}>Models</Link>
          <Link href={"/history"}>History</Link>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
