<ctrl60>import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-secondary" />,
      title: 'Construção Residencial',
      description: 'Criamos lares que combinam conforto, design e funcionalidade. Do projeto à entrega das chaves, cuidamos de cada detalhe para construir a casa dos seus sonhos.',
    },
    {
      icon: <Building className="h-10 w-10 text-secondary" />,
      title: 'Edificações Comerciais',
      description: 'Desenvolvemos espaços comerciais e corporativos otimizados para o seu negócio. Soluções inteligentes que valorizam sua marca e impulsionam o crescimento.',
    },
    {
      icon: <Wrench className="h-10 w-10 text-secondary" />,
      title: 'Reformas e Renovações',
      description: 'Transformamos ambientes com projetos de reforma completos. Modernização, ampliação ou reparos estruturais, garantindo qualidade e cumprimento de prazos.',
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Nossas <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-dark/70">
            Oferecemos um portfólio completo de serviços de construção, adaptados para atender às necessidades específicas de cada cliente e projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-primary p-8 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-shrink-0 mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10">
                  {service.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-dark mb-3">{service.title}</h3>
                <p className="text-text-dark/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto pt-6">
                 <a href="#contact" className="font-semibold text-secondary hover:text-accent transition-colors duration-300">
                    Saiba Mais &rarr;
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}