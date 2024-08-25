"use client"; // Indica que este código debe ejecutarse en el cliente

import React from "react"; // Importa React
import Link from "next/link"; // Importa el componente Link de Next.js para navegación
import {
  Heart, // Importa iconos de lucide-react
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  ArrowRight,
} from "lucide-react";

// Componente Input para renderizar un campo de entrada con estilo
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

Input.displayName = "Input"; // Nombre para depuración

// Componente Button para renderizar un botón con estilo
function Button({ className, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}`}
      {...props}
    />
  );
}

// Componente XIcon para renderizar un icono SVG de una X
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

// Componente SocialLink para renderizar un enlace social con icono
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

// Componente FooterLink para renderizar un enlace en el pie de página
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

// Componente FooterSection para renderizar una sección en el pie de página
const FooterSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-primary">{title}</h3>
    <ul className="space-y-2">{children}</ul>
  </div>
);

// Componente principal Footer
export default function Footer() {
  // Función para desplazar la página hacia arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 text-gray-600 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sección de información sobre la aplicación */}
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
                {/* Enlaces a redes sociales */}
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

          {/* Sección de mapa del sitio */}
          <FooterSection title="Sitemap">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/new">Create Task</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/docs">Documentation</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </FooterSection>

          {/* Sección de comunidad */}
          <FooterSection title="Community">
            <FooterLink href="/forum">Forum</FooterLink>
            <FooterLink href="/support">Support</FooterLink>
          </FooterSection>

          {/* Sección legal */}
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
              <p className="text-muted-foreground">Neiva Huila, Colombia</p>
            </div>
            <div className="flex items-center justify-start lg:ml-4">
              <p className="text-muted-foreground text-sm flex items-center text-left lg:text-left">
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
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Ready to boost your productivity?
          </h3>
          <p className="text-muted-foreground mb-6">
            Start organizing your tasks and achieving your goals with TaskFlow
            today!
          </p>
          <Link href="/" passHref>
            <Button className="w-full sm:w-auto text-lg py-3 px-6">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm text-gray-500 text-center">
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
