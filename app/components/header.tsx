import Link from 'next/link';
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="border-b border-border sticky top-0 bg-background z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold font-serif">
          Home
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="#projects">
                <Button variant="ghost" size="sm" className="font-serif hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  Projects
                </Button>
              </Link>
            </li>
            <li>
              <Link href="#skills">
                <Button variant="ghost" size="sm" className="font-serif hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  Skills
                </Button>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <Button variant="ghost" size="sm" className="font-serif hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  Contact
                </Button>
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
