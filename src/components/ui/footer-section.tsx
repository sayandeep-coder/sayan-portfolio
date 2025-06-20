"use client";
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react';

const navbarLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'GitHub', href: '#github' },
  { title: 'Projects', href: '#projects' },
  { title: 'Connect', href: '#connect' },
  { title: 'Login', href: '#login' },
];

const socialLinks = [
  { title: 'Instagram', href: 'https://www.instagram.com/_mr.purkait_/', icon: InstagramIcon },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/sayandeeppurkait/', icon: LinkedinIcon },
  { title: 'GitHub', href: 'https://github.com/sayandeep-coder', icon: GithubIcon },
  { title: 'Gmail', href: 'mailto:sayandeeppurkait@gmail.com', icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
      <div className="grid w-full gap-8 xl:grid-cols-2 xl:gap-8">
        {/* Navbar Links Row */}
        <AnimatedContainer className="space-y-4 flex flex-col items-center">
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Navigation</h3>
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {navbarLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-all duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </AnimatedContainer>
        {/* Social Links Row */}
        <AnimatedContainer className="space-y-4 flex flex-col items-center">
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Get in Touch</h3>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-all duration-300"
                title={link.title}
              >
                <link.icon className="size-6" />
              </a>
            ))}
          </div>
        </AnimatedContainer>
      </div>
      <p className="text-muted-foreground mt-8 text-xs text-center">© {new Date().getFullYear()} Sayandeep Purkait. All rights reserved.</p>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Usage: import { Footer } from '@/components/ui/footer-section';
// Place <Footer /> at the bottom of your main layout or App component. 