
import React from 'react';
import { GraduationCap, Briefcase, Users, Target, Code, Database, BarChart3 } from 'lucide-react';

const Sobre = () => {
  const experiences = [
    {
      company: 'RioSaúde',
      position: 'Analista de Dados',
      period: '2024 - Presente',
      description: 'Realizo extração, tratamento e análise de dados. As principais ferramentas que usamos são Looker Studio, Power Bi, Postgres, Dremio e Airflow'
    },
    {
      company: 'Estácio de Sá',
      position: 'Docente',
      period: '2025 - Presente',
      description: 'Professor do curso técnico de informática, onde leciono matérias relacionadas a banco de dados e desenvolvimento web.'
    },
  ];

  const skills = [
    {
      category: 'Desenvolvimento',
      items: ['JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS', 'Git']
    },
    {
      category: 'Análise de Dados',
      items: ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau','Looker']
    },
    {
      category: 'Machine Learning',
      items: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib']
    }
  ];

  const education = [
    {
      degree: 'Desenvolvimento Full Stack',
      institution: 'PUC-RIO',
      year: 'Em Andamento',
      description: 'Pós Graduação com foco em desenvolvimento de software, banco de dados, engenharia de software e metodologias ágeis.'
    },
    {
      degree: 'Dados com ênfase em Big Data, Business Intelligence',
      institution: 'Universidade Veiga de Almeida',
      year: '2023-2024',
      description: 'MBA em análise de dados, machine learning, visualização de dados e business intelligence.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Sobre Mim
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sou Breno Almeida, analista de dados e desenvolvedor Full Stack. Apaixonado por 
                tecnologia e inovação. Combino habilidades em desenvolvimento web com expertise 
                em análise de dados para criar soluções completas e eficientes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">3+</p>
                    <p className="text-sm text-muted-foreground">Anos Programando</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">50+</p>
                    <p className="text-sm text-muted-foreground">Projetos</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:text-center">
              <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-border">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-lg border border-primary">
              <img
                src="public\breno.png" 
                alt="Breno Almeida"
                className="object-cover w-full h-full"
              />
              </div>

                <h3 className="text-xl font-bold text-foreground mb-2">Breno Almeida</h3>
                <p className="text-primary font-medium mb-4">Data Analyst & Full Stack Developer</p>
                <div className="flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Disponível para projetos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Quem sou eu?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Meu nome é Breno Almeida, tenho 26 anos e sou um entusiasta da informática.
          Porém, nem sempre foi assim. Ao sair do Ensino Médio, fui aprovado para cursar História pela UNIRIO.
          No decorrer da graduação acabei encontrando minha verdadeira paixão, a computação.
          Concluí o curso de história e também fiz faculdade voltada para a área de tecnologia.<br />
          <br />
          Hoje sou formado em Defesa Cibernética pela Universidade Estácio de Sá, especializado com MBA em Dados com ênfase em Big Data,
          Business Intelligence e Inteligência Competitiva pela Universidade Veiga de Almeida, além de em Analista de Dados pela IBM.
          Atualmente estou cursando pós-graduação em Desenvolvimento Full Stack pela PUC-RIO. <br />
          <br />
          Atuo na RioSaúde como Analista de Dados e na Estácio de Sá como Docente, onde leciono matérias relacionadas a banco de dados e desenvolvimento web.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Desenvolvimento</h3>
              <p className="text-muted-foreground">Criação de aplicações web modernas e responsivas</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Dados</h3>
              <p className="text-muted-foreground">Análise inteligente para insights valiosos</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Resultados</h3>
              <p className="text-muted-foreground">Soluções eficientes que geram valor real</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
            <p className="text-xl text-muted-foreground">Tecnologias e ferramentas que domino</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  {skillGroup.category === 'Desenvolvimento' && <Code className="h-6 w-6 text-primary mr-2" />}
                  {skillGroup.category === 'Análise de Dados' && <BarChart3 className="h-6 w-6 text-primary mr-2" />}
                  {skillGroup.category === 'Machine Learning' && <Database className="h-6 w-6 text-primary mr-2" />}
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium inline-block mr-2 mb-2">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Experiência</h2>
            <p className="text-xl text-muted-foreground">Minha jornada profissional e projetos</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-muted to-muted/50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Formação</h2>
            <p className="text-xl text-muted-foreground">Educação e desenvolvimento contínuo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground mb-3">{edu.year}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
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

export default Sobre;
