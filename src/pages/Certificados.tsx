
import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Users } from 'lucide-react';

const Certificados = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certificates = [
    {
      title: 'Desenvolvimento Full Stack',
      issuer: 'PUC-RIO',
      date: '2025',
      category: 'analytics',
      level: 'Pós-Graduação',
      description: 'Certificação completa em desenvolvimento front e back.',
      skills: ['Node', 'JavaScript', 'React', 'Next.js', 'SQL'],
      credentialUrl: '#'
    },
    {
      title: 'Dados, Big Data e Business Intelligence',
      issuer: 'Veiga de Almeida',
      date: '2024',
      category: 'analytics',
      level: 'Pós-Graduação',
      description: 'Especialização focada em Análise de Dados, com ênfase em extração de dados.',
      skills: ['SQL Avançado', 'ETL', 'Data Lakes', 'Amazon Kinesis', 'AWS Glue', 'Amazon QuickSight', 'Big Data'],
      credentialUrl: '#'
    },
    {
      title: 'Analista de Dados',
      issuer: 'IBM',
      date: '2024',
      category: 'ml',
      level: 'Certificado',
      description: 'Aprofundamento em ciência de dados, machine learning e automação de processos.',
      skills: ['Python para Data Science', 'Azure Machine Learning', 'Data Preparation', 'Model Evaluation'],
      credentialUrl: '#'
    },
    {
      title: 'Defesa Cibernética',
      issuer: 'Estácio de Sá',
      date: '2022',
      category: 'programming',
      level: 'Tecnólogo',
      description: 'Graduação onde adentrei no universo de T.I, voltado para análise de dados.',
      skills: ['Grafena', 'Data Visualization', 'Dashboard Design'],
      credentialUrl: '#'
    },
    {
      title: 'Power BI Data Analyst',
      issuer: 'Microsoft',
      date: '2020',
      category: 'visualization',
      level: 'Curso Livre',
      description: 'Criação de relatórios e dashboards profissionais usando Power BI.',
      skills: ['Power BI', 'DAX', 'Power Query', 'Data Modeling'],
      credentialUrl: '#'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2023',
      category: 'programming',
      level: 'Curso Livre',
      description: 'Programação Python aplicada à ciência de dados e análise estatística.',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      credentialUrl: '#'
    },
    {
      title: 'SQL - Do zero ao avançado',
      issuer: 'Udemy',
      date: '2023',
      category: 'visualização',
      level: 'Curso Livre',
      description: 'Aprofundamento em SQL, consulta e análise em banco de dados.',
      skills: ['SQL', 'SQLite', 'Postgress'],
      credentialUrl: '#'
    },
    {
      title: 'Inglês',
      issuer: 'CLAC - UFRJ',
      date: '2018',
      category: 'analytics',
      level: 'Curso Livre',
      description: 'Concluído o curso de inglês no CLAC-UFRJ',
      skills: ['Linguagem', 'Escrita', 'Vocabulário', 'Conversação'],
      credentialUrl: '#'
    },
    {
      title: 'História',
      issuer: 'Universidade Federal do Estado do Rio de Janeiro - UNIRIO',
      date: '2023',
      category: 'analytics',
      level: 'Licenciatura',
      description: 'Estudo voltado para o avanço da tecnologia na história.',
      skills: ['Leitura', 'Licenciatura'],
      credentialUrl: '#'
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos', count: certificates.length },
    { id: 'analytics', name: 'Analytics', count: certificates.filter(c => c.category === 'analytics').length },
    { id: 'visualization', name: 'Visualização', count: certificates.filter(c => c.category === 'visualization').length },
    { id: 'programming', name: 'Programação', count: certificates.filter(c => c.category === 'programming').length },
    { id: 'ml', name: 'Machine Learning', count: certificates.filter(c => c.category === 'ml').length },
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Pós-Graduação': return 'bg-blue-500/20 text-blue-400';
      case 'Certificado': return 'bg-purple-500/20 text-purple-400';
      case 'Tecnólogo': return 'bg-green-500/20 text-green-400';
      case 'Licenciatura': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Certificações
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Procuro estar sempre atualizado com as mais recentes tecnologias e metodologias 
              através de certificações reconhecidas mundialmente
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg p-4 shadow-md border border-border">
                <div className="text-2xl font-bold text-primary">9+</div>
                <div className="text-sm text-muted-foreground">Certificações</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-md border border-border">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Fornecedores</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-md border border-border">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-md border border-border">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Válidas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-border"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center text-primary font-medium mb-3">
                    <Users className="h-4 w-4 mr-1" />
                    {cert.issuer}
                  </div>

                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group"
                  >
                    Ver Credencial
                    <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Aprendizado Contínuo
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            O mundo dos dados evolui rapidamente. Mantenho-me sempre atualizado 
            com as últimas tecnologias e melhores práticas do mercado.
          </p>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-primary-foreground/20">
            <p className="text-primary-foreground/90 mb-4">
              "Podem tirar tudo de você, menos o conhecimento!"
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Frase de meu saudoso avô, que guia meu desenvolvimento profissional
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificados;
