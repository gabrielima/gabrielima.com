import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

import { NavItem } from '@/types/nav';
import { buttonVariants } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Projects', href: '/projects' },
];

const socialLinks: NavItem[] = [
  {
    title: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    href: 'https://github.com/gabrielima',
  },
  {
    title: 'Twitter',
    icon: <Twitter className="h-5 w-5" />,
    href: 'https://twitter.com/rabeloglr',
  },
  {
    title: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://www.linkedin.com/in/gabrielima',
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={navLinks} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {socialLinks.map((link, index) => (
              <Link href={link.href || ''} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  {link.icon}
                  <span className="sr-only">{link.title}</span>
                </div>
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
