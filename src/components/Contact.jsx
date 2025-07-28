import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aqui iria a lógica de envio para o email ffbrunoff@yahoo.com.br
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: <Phone className="text-primary" />, text: '+55 44 99104 0774' },
    { icon: <Mail className="text-primary" />, text: 'ffbrunoff@yahoo.com.br' },
    {
      icon: <MapPin className="text-primary" />,
      text: 'Padre Lebret 801, G05 Bloco 03',
    },
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-dark/70">
            Tem um projeto em mente? Vamos conversar! Preencha o formulário ou
            utilize um de nossos canais de atendimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="bg-secondary text-text-light p-8 md:p-12 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <p className="mb-8 opacity-90">
              Estamos prontos para atender você e tirar todas as suas dúvidas.
            </p>
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">{item.icon}</div>
                  <span className="text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {isSubmitted ? (
              <div
                className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg text-center"
                role="alert"
              >
                <p className="font-bold text-xl">Obrigado!</p>
                <p className="mt-2">
                  Sua mensagem foi enviada com sucesso. Entraremos em contato em
                  breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={formVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-dark/80 mb-1"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </motion.div>
                <motion.div variants={formVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-dark/80 mb-1"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </motion.div>
                <motion.div variants={formVariants}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text-dark/80 mb-1"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </motion.div>
                <motion.div variants={formVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-dark/80 mb-1"
                  >
                    Sua Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </motion.div>
                <motion.div variants={formVariants}>
                  <button
                    type="submit"
                    className="w-full btn btn-primary text-lg"
                  >
                    Enviar Mensagem
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
