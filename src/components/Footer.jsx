"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  Mail,
} from "lucide-react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

function Button({ className, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}`}
      {...props}
    />
  );
}

const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M 4 4 L 20 20" />
    <path d="M 20 4 L 4 20" />
  </svg>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {children}
    </Link>
  </li>
);

const FooterSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-primary">{title}</h3>
    <ul className="space-y-2">{children}</ul>
  </div>
);

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Newsletter subscription submitted with email:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 text-gray-600 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-4 lg:col-span-1">
            <h2 className="text-3xl font-light text-primary mb-4">
              Task<span className="font-black">Flow</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Simplify your life and boost your productivity with TaskFlow, the
              perfect app to manage your daily tasks.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Follow Us</h3>
              <div className="flex space-x-2">
                <SocialLink
                  href="https://facebook.com"
                  icon={Facebook}
                  label="Facebook"
                />
                <SocialLink
                  href="https://x.com"
                  icon={XIcon}
                  label="X (formerly Twitter)"
                />
                <SocialLink
                  href="https://instagram.com"
                  icon={Instagram}
                  label="Instagram"
                />
                <SocialLink
                  href="https://linkedin.com"
                  icon={Linkedin}
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>

          <FooterSection title="Sitemap">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/new">Create Task</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/docs">Documentation</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </FooterSection>

          <FooterSection title="Community">
            <FooterLink href="/forum">Forum</FooterLink>
            <FooterLink href="/support">Support</FooterLink>
          </FooterSection>

          <FooterSection title="Legal">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </FooterSection>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
              <Link
                href="/support"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Technical Support
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Help
              </Link>
              <p className="text-muted-foreground">
                123 Main Street, Anytown, USA
              </p>
            </div>
            <div className="flex items-center justify-start lg:ml-4">
              {" "}
              {/* Comentado la línea modificada */}
              <p className="text-muted-foreground text-sm flex items-center text-left lg:text-left">
                {" "}
                {/* Comentado la línea modificada */}
                Designed and developed with{" "}
                <Heart className="mx-1 text-red-500 w-4 h-4" />{" "}
                <a
                  href="https://diseins.com"
                  className="hover:underline text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diseins Digital
                </a>
              </p>
            </div>
            <div className="text-muted-foreground text-sm justify-start lg:text-left">
              <p>
                Version 1.0.0 |{" "}
                <Link href="/privacy" className="hover:underline text-primary">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="/terms" className="hover:underline text-primary">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
            <div className="relative flex-grow">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="pr-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white shadow-md text-primary hover:bg-gray-50 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
