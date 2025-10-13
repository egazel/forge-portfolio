import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/egazel",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/elie-gazel/",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
  }
];

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-12">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Elie GAZEL Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button asChild key={link.href} variant="ghost" size="icon">
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
