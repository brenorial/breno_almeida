
import React from 'react';
import { Github, Linkedin, Mail, BarChart3 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Breno Almeida</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando dados em informação. <br/>
              Insights valiosos para impulsionar decisões estratégicas de negócio.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="/sobre" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Sobre Mim
              </a>
              <a href="/projetos" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Projetos
              </a>
              <a href="/contato" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contato
              </a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Conecte-se</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/breno-ribeiro-almeida/"
                className="bg-muted p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/brenorial"
                className="bg-muted p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=brenorialmeida@gmail.com"
                className="bg-muted p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Breno Almeida. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
