"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/references", label: "References" },
  { href: "/blog", label: "Blog" },
  { href: "/curator", label: "AI Curator" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string, isMobile?: boolean }) => {
    const isActive = (pathname.length > 1 && href.startsWith(pathname)) || (pathname === href);
    return (
      <Link
        href={href}
        onClick={() => isMobile && setMobileMenuOpen(false)}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground",
          isMobile && "block w-full text-left text-base"
        )}
      >
        {label}
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold font-headline text-lg">
          <Cpu className="text-primary h-7 w-7" />
          Synapse
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="flex items-center gap-2 font-bold font-headline text-lg">
                        <Cpu className="text-primary h-7 w-7" />
                        Synapse
                    </Link>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                        <X />
                        <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetTrigger>
                    </div>
                    <nav className="flex-grow p-4 space-y-2">
                    {navItems.map((item) => (
                        <NavLink key={item.href} {...item} isMobile />
                    ))}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
