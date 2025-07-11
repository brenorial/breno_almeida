
import React from 'react';
import { ArrowRight, TrendingUp, Database, Brain, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Anos de Experiência', value: '4+' },
    { label: 'Projetos Concluídos', value: '50+' },
    { label: 'Certificações', value: '6+' },
    { label: 'Empresas Atendidas', value: '5+' },
  ];

  const skills = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'SQL & Databases',
      description: 'Expertise em PostgreSQL, MySQL, MongoDB e otimização de queries complexas.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Análise Estatística',
      description: 'Modelagem preditiva, automações através de Python.'
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: 'Machine Learning',
      description: 'Implementação de algoritmos de ML e Deep Learning para insights preditivos.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Business Intelligence',
      description: 'Criação de dashboards interativos e relatórios executivos estratégicos.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Breno Ribeiro
                  <span className="text-primary block">Almeida</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transformo dados complexos em insights estratégicos que impulsionam 
                  o crescimento dos negócios. Com uma vasta experiência, 
                  especializo-me em ETL de dados e web-scrapping.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projetos"
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/80 transition-colors group"
                >
                  Ver Projetos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Entre em Contato
                </Link>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="inline-block bg-card rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-border">
                <div className="space-y-6">
                  <div className="h-4 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="h-2 bg-muted rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="h-2 bg-muted rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="h-2 bg-muted rounded flex-1"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">Analytics Dashboard</p>
                    <p className="text-muted-foreground">Real-time Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Especialidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Domínio completo das principais tecnologias e metodologias 
              para análise de dados e business intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group hover:-translate-y-1 transform duration-300 border border-border"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para Transformar Seus Dados?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar sua empresa a extrair 
            insights valiosos dos seus dados
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors group"
          >
            Iniciar Conversa
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
