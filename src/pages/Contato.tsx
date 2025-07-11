
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Calendar, CheckCircle } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'brenorialmeida@gmail.com',
      link: 'mailto:brenorialmeida@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefone',
      content: '+55 (21) 97039-9615',
      link: 'tel:+5521970399615'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Localização',
      content: 'Rio de Janeiro, RJ - Brasil',
      link: 'https://www.google.com.br/maps/place/Rio+de+Janeiro,+RJ/@-22.9137295,-43.6107894,11z/data=!3m1!4b1!4m6!3m5!1s0x9bde559108a05b:0x50dc426c672fd24e!8m2!3d-22.9068467!4d-43.1728965!16zL20vMDZnbXI?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Disponibilidade',
      content: 'Segunda a Sexta, 8h às 17h'
    }
  ];

  const services = [
    {
      title: 'Consultoria em Data Analytics',
      description: 'Análise estratégica dos seus dados para identificar oportunidades de crescimento',
      duration: '2-4 semanas'
    },
    {
      title: 'Desenvolvimento de Dashboards',
      description: 'Criação de painéis interativos para monitoramento de KPIs em tempo real',
      duration: '1-3 semanas'
    },
    {
      title: 'Implementação de ML',
      description: 'Desenvolvimento de modelos preditivos para otimização de processos',
      duration: '4-8 semanas'
    },
    {
      title: 'Auditoria de Dados',
      description: 'Avaliação da qualidade e governança dos dados da sua empresa',
      duration: '1-2 semanas'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos Conversar?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Estou sempre aberto a novos desafios e oportunidades de colaboração. 
            Entre em contato para discutirmos como posso ajudar sua empresa a 
            extrair o máximo valor dos seus dados.
          </p>
          <div className="bg-card rounded-lg p-6 max-w-md mx-auto shadow-lg border border-border">
            <div className="flex items-center justify-center space-x-2 text-green-400 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Disponível para novos projetos</span>
            </div>
            <p className="text-muted-foreground text-sm">Resposta em até 24 horas</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-muted rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Envie uma Mensagem</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-green-400">Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-input text-foreground"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-input text-foreground"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-input text-foreground"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Projeto
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-input text-foreground"
                    >
                      <option value="">Selecione...</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="dashboard">Dashboard</option>
                      <option value="ml">Machine Learning</option>
                      <option value="auditoria">Auditoria de Dados</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none bg-input text-foreground"
                    placeholder="Descreva seu projeto ou necessidade..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 px-6 rounded-lg hover:bg-primary/80 transition-colors flex items-center justify-center group"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary/20 p-3 rounded-lg text-primary hover:bg-primary/30 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-muted p-3 rounded-lg text-muted-foreground hover:bg-muted/80 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/20 p-3 rounded-lg text-primary hover:bg-primary/30 transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-2">Tempo de Resposta</h3>
                <p className="text-muted-foreground mb-4">
                  Geralmente respondo em até 24 horas. Para projetos urgentes, 
                  entre em contato diretamente via WhatsApp.
                </p>
                <div className="flex items-center text-green-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Online agora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Serviços Oferecidos</h2>
            <p className="text-xl text-muted-foreground">Como posso ajudar sua empresa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {service.duration}
                  </span>
                  <button className="text-primary hover:text-primary/80 font-medium text-sm">
                    Saiba mais →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
