
import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, TrendingUp } from 'lucide-react';

const Projetos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'Sistema de Gestão de Estoque',
      description: 'Sistema completo para controle de estoque desenvolvido em Python com interface web, incluindo cadastro de produtos, controle de entrada e saída, relatórios automatizados e dashboard analítico.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
      metrics: ['↑ 40% Eficiência', '↓ 60% Tempo de consulta', '100% Automação'],
      date: '2024',
      githubUrl: 'https://github.com/brenorial',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Dashboard de Vendas E-commerce',
      description: 'Painel interativo para análise de vendas online com métricas em tempo real, gráficos dinâmicos e relatórios personalizados para tomada de decisão estratégica.',
      image: '/api/placeholder/400/250',
      category: 'analytics',
      technologies: ['Python', 'Power BI', 'SQL Server', 'Excel'],
      metrics: ['↑ 35% ROI', '15 KPIs monitorados', 'Tempo real'],
      date: '2024',
      githubUrl: 'https://github.com/brenorial',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Automação de Relatórios Financeiros',
      description: 'Solução automatizada para geração de relatórios financeiros mensais, integrando múltiplas fontes de dados e reduzindo tempo de processamento em 80%.',
      image: '/api/placeholder/400/250',
      category: 'automation',
      technologies: ['Python', 'Pandas', 'Excel', 'API Integration'],
      metrics: ['↓ 80% Tempo processamento', '100% Automação', '0 Erros manuais'],
      date: '2023',
      githubUrl: 'https://github.com/brenorial',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Sistema de CRM Personalizado',
      description: 'Plataforma completa de gestão de relacionamento com clientes, incluindo pipeline de vendas, automação de follow-up e análise de conversão.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      metrics: ['↑ 50% Conversão', '300+ Clientes gerenciados', '↑ 25% Vendas'],
      date: '2023',
      githubUrl: 'https://github.com/brenorial',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Análise Preditiva de Demanda',
      description: 'Modelo de machine learning para previsão de demanda de produtos, auxiliando na otimização de compras e redução de desperdícios.',
      image: '/api/placeholder/400/250',
      category: 'analytics',
      technologies: ['Python', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
      metrics: ['92% Precisão', '↓ 30% Desperdício', 'R$ 500K economia'],
      date: '2023',
      githubUrl: 'https://github.com/brenorial',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Portal de Business Intelligence',
      description: 'Portal web para visualização de KPIs empresariais com dashboards interativos, permitindo análise de performance em tempo real.',
      image: '/api/placeholder/400/250',
      category: 'analytics',
      technologies: ['Python', 'Dash', 'Plotly', 'PostgreSQL'],
      metrics: ['20+ KPIs', 'Tempo real', '↑ 40% Produtividade'],
      date: '2022',
      githubUrl: 'https://github.com/brenorial',
      liveUrl: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'analytics', name: 'Analytics', count: projects.filter(p => p.category === 'analytics').length },
    { id: 'automation', name: 'Automação', count: projects.filter(p => p.category === 'automation').length },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meus Projetos
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Soluções desenvolvidas com foco em eficiência, automação e resultados mensuráveis. 
            Cada projeto representa um desafio superado e valor entregue.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-card/50 rounded-lg p-4 shadow-md border border-border/50">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Projetos</div>
            </div>
            <div className="bg-card/50 rounded-lg p-4 shadow-md border border-border/50">
              <div className="text-2xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Tecnologias</div>
            </div>
            <div className="bg-card/50 rounded-lg p-4 shadow-md border border-border/50">
              <div className="text-2xl font-bold text-primary">R$ 2M+</div>
              <div className="text-sm text-muted-foreground">Valor Economizado</div>
            </div>
            <div className="bg-card/50 rounded-lg p-4 shadow-md border border-border/50">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Taxa Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-muted-foreground">Os projetos com maior impacto nos resultados de negócio</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div key={index} className="bg-card/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-border/50">
                <div className="aspect-video bg-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">Projeto Preview</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      DESTAQUE
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
                        <div className="text-sm font-bold text-primary">{metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-muted/70 text-muted-foreground px-3 py-1 rounded-full text-sm font-medium border border-border/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center px-4 py-2 bg-muted/70 text-foreground rounded-lg hover:bg-muted transition-colors border border-border/30"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Todos os Projetos</h2>
            <p className="text-xl text-muted-foreground">Explore por categoria</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/50 text-muted-foreground hover:bg-card/80 border border-border/50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-card/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-border/50">
                <div className="aspect-video bg-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Preview</p>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                        DESTAQUE
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-card/90 text-muted-foreground px-2 py-1 rounded-full text-xs font-medium border border-border/30">
                      {project.date}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-medium border border-primary/20">
                        {metric}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-muted/70 text-muted-foreground px-2 py-1 rounded text-xs border border-border/30">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-muted/70 text-muted-foreground px-2 py-1 rounded text-xs border border-border/30">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="flex items-center px-3 py-2 bg-muted/70 text-muted-foreground rounded hover:bg-muted transition-colors text-sm border border-border/30"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Código
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center px-3 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/80 transition-colors text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Ver
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
