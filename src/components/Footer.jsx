import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752816669584_0.png';

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.footer
      className="bg-accent text-text-light"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="max-w-xs text-text-light/80">
              Construindo sonhos e edificando realidades com qualidade e
              excelência.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-light/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">
              Endereço
            </h3>
            <p className="text-text-light/80">
              Padre Lebret, 801
              <br />
              G05, Bloco 03
              <br />
              Maringá - PR, Brasil
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary/30 text-center text-text-light/60">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
