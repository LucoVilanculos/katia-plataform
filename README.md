# 🪡 Kátia AI - Plataforma de Ensino de Costura

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=for-the-badge&logo=framer" alt="Framer Motion" />
</div>

## 🌟 Sobre o Projeto

**Kátia AI** é uma plataforma educacional inovadora que combina inteligência artificial com o ensino tradicional de costura em Moçambique. Nossa missão é preservar e modernizar as técnicas artesanais, tornando-as acessíveis através da tecnologia.

### ✨ Características Principais

- 🤖 **Assistente Virtual Kátia** - IA especializada em costura
- 📺 **Vídeo Aulas Interativas** - Integração com YouTube API
- 📱 **Responsivo** - Mobile-first design
- 🌙 **Modo Escuro/Claro** - Experiência personalizada
- 🎭 **Animações Suaves** - Micro-interações envolventes
- 🔐 **Sistema Completo** - Autenticação e dashboards

## 🚀 Tecnologias

### Frontend
- **Next.js 14** - React framework com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Styling utility-first
- **Shadcn/ui** - Componentes reutilizáveis
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos

### Backend & APIs
- **Next.js API Routes** - Endpoints serverless
- **YouTube Data API v3** - Integração de vídeos
- **Vercel** - Deploy e hosting

### Ferramentas
- **ESLint** - Linting de código
- **Prettier** - Formatação automática
- **Git** - Controle de versão

## 📱 Páginas e Funcionalidades

### 🏠 **Página Inicial**
- Hero section com gradientes vibrantes
- Apresentação da Kátia AI
- Cursos em destaque
- Depoimentos de alunas
- Call-to-action para registro

### 📚 **Cursos**
- Catálogo completo de cursos
- Filtros por nível e categoria
- Cards interativos com hover effects
- Informações detalhadas

### 📺 **Vídeos**
- Integração com YouTube API
- Player responsivo
- Categorização por tópicos
- Busca avançada
- Favoritos e playlists

### 👤 **Autenticação**
- Login/Registro responsivo
- Validação em tempo real
- Recuperação de senha
- Integração com dashboards

### 📊 **Dashboards**
- **Estudante**: Progresso, cursos, certificados
- **Instrutor**: Gestão de conteúdo, analytics
- **Admin**: Usuários, feedback, segurança

### ℹ️ **Sobre & Contato**
- História da plataforma
- Equipe e missão
- Formulário de contato
- Informações de suporte

## 🎨 Design System

### Paleta de Cores
\`\`\`css
/* Gradientes Principais */
--gradient-primary: linear-gradient(135deg, #ec4899 0%, #ef4444 100%);
--gradient-secondary: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
--gradient-accent: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);

/* Cores Moçambique */
--moz-green: #00A859;
--moz-yellow: #FFD100;
--moz-red: #DC143C;
\`\`\`

### Tipografia
- **Família**: Inter (Google Fonts)
- **Pesos**: 400, 500, 600, 700, 800
- **Escalas**: Responsivas com clamp()

### Componentes
- **Botões**: 3 variantes (primary, secondary, ghost)
- **Cards**: Hover effects e micro-animações
- **Forms**: Validação visual e estados
- **Navigation**: Mobile-first com hamburger menu

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Setup Local
\`\`\`bash
# Clonar repositório
git clone https://github.com/SEU-USUARIO/katia-costura-platform.git
cd katia-costura-platform

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Adicionar sua YOUTUBE_API_KEY

# Executar em desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:3000
\`\`\`

### Scripts Disponíveis
\`\`\`bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificar código
npm run type-check   # Verificar tipos TypeScript
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
katia-costura-platform/
├── 📁 app/                    # App Router (Next.js 14)
│   ├── 📁 api/               # API Routes
│   ├── 📁 auth/              # Páginas de autenticação
│   ├── 📁 private/           # Páginas protegidas
│   ├── 📄 layout.tsx         # Layout raiz
│   └── 📄 page.tsx           # Página inicial
├── 📁 components/            # Componentes React
│   ├── 📁 layout/           # Header, Footer, etc.
│   ├── 📁 pages/            # Componentes de página
│   └── 📁 ui/               # Componentes UI reutilizáveis
├── 📁 lib/                   # Utilitários e configurações
├── 📁 public/               # Assets estáticos
├── 📄 tailwind.config.ts    # Configuração Tailwind
├── 📄 tsconfig.json         # Configuração TypeScript
└── 📄 package.json          # Dependências
\`\`\`

## 🌍 Funcionalidades Culturais

### 🎭 **Elementos Moçambicanos**
- **Capulana Patterns** - Padrões tradicionais em CSS
- **Cores da Bandeira** - Verde, amarelo, vermelho, preto
- **Animação Marrabenta** - Inspirada na dança tradicional
- **Tipografia Africana** - Fontes que respeitam a cultura

### 🗣️ **Multilíngue** (Planejado)
- Português (padrão)
- Changana (Pesnsando no assunto para melhor integracão total e completa)
- Inglês

## 🔮 Roadmap

### 🎯 **Próximas Features**
- [ ] 💳 **Integração M-Pesa, emola, mkesh** - Pagamentos móveis
- [ ] 🗣️ **Chat em Changana** - Suporte multilíngue
- [ ] 🛒 **Marketplace Capulanas** - E-commerce integrado (em breve)
- [ ] 📊 **Analytics Avançado** - Métricas de aprendizado
- [ ] 🎮 **Gamificação** - Badges e conquistas
- [ ] 📱 **App Mobile** - React Native (em breve)
- [ ] 🤖 **IA Avançada** - Reconhecimento de padrões
- [ ] 🎥 **Live Streaming** - Aulas ao vivo (em breve)

### 🚀 **Melhorias Técnicas**
- [ ] 🧪 **Testes Automatizados** - Jest + Testing Library
- [ ] 📈 **Performance** - Otimizações avançadas
- [ ] 🔒 **Segurança** - Autenticação robusta
- [ ] 🌐 **PWA** - Progressive Web App
- [ ] 📊 **Monitoring** - Sentry + Analytics

## 🤝 Contribuição

### Como Contribuir
1. **Fork** o projeto
2. **Crie** uma branch (`git checkout -b feature/nova-feature`)
3. **Commit** suas mudanças (`git commit -m 'Add: nova feature'`)
4. **Push** para a branch (`git push origin feature/nova-feature`)
5. **Abra** um Pull Request

### Padrões de Commit
\`\`\`bash
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: manutenção
\`\`\`

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.(em construção)

## 👥 Equipe

### 🧠 **Criador**
- **Equipe...** - Arquitetura e desenvolvimento

### 🎨 **Design**
- Inspirado na rica cultura moçambicana
- Padrões de capulana tradicionais
- Cores da bandeira nacional

## 📞 Contato

- 📧 **Email**: contato@katia-ai.co.mz
- 🌐 **Website**: [katia-ai.co.mz](https://katia-ai.co.mz)
- 📱 **WhatsApp**: +258 XX XXX XXXX

## 🙏 Agradecimentos

- **Comunidade Moçambicana** - Inspiração cultural
- **Artesãs Tradicionais** - Conhecimento ancestral
- **Open Source Community** - Ferramentas incríveis
- **Vercel** - Hosting e deploy
- **YouTube** - API de vídeos

---

<div align="center">
  <p><strong>Feito com ❤️ para Moçambique</strong></p>
  <p><em>"Preservando tradições através da tecnologia"</em></p>
</div>
