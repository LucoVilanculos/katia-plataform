# 🎨 Kátia AI - Design System

## 🌈 Paleta de Cores

### Cores Primárias
- **Pink**: #ec4899 (Feminino, acolhedor)
- **Red**: #ef4444 (Energia, paixão)
- **Orange**: #f97316 (Criatividade, calor)
- **Purple**: #8b5cf6 (Inovação, tecnologia)

### Cores Moçambique
- **Verde**: #00A859 (Bandeira)
- **Amarelo**: #FFD100 (Bandeira)
- **Vermelho**: #DC143C (Bandeira)
- **Preto**: #000000 (Bandeira)

### Gradientes Principais
\`\`\`css
/* Botão Principal */
background: linear-gradient(135deg, #ec4899 0%, #ef4444 100%);

/* Header */
background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);

/* Vídeos */
background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);

/* Hero */
background: linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%);
\`\`\`

## 📝 Tipografia

### Família de Fontes
- **Principal**: Inter (Google Fonts)
- **Fallback**: system-ui, sans-serif

### Escalas de Tamanho
\`\`\`css
/* Títulos Principais */
.hero-title { font-size: 3.75rem; font-weight: 800; }

/* Títulos Seção */
.section-title { font-size: 2.25rem; font-weight: 700; }

/* Subtítulos */
.subtitle { font-size: 1.25rem; font-weight: 600; }

/* Corpo */
.body { font-size: 1rem; font-weight: 400; }

/* Pequeno */
.caption { font-size: 0.875rem; font-weight: 400; }
\`\`\`

## 🎯 Componentes

### Botões
\`\`\`css
/* Primário */
.btn-primary {
  background: linear-gradient(135deg, #ec4899 0%, #ef4444 100%);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 300ms ease;
}

/* Secundário */
.btn-secondary {
  background: transparent;
  border: 2px solid #ec4899;
  color: #ec4899;
  padding: 10px 22px;
  border-radius: 8px;
}

/* Fantasma */
.btn-ghost {
  background: rgba(236, 72, 153, 0.1);
  color: #ec4899;
  padding: 12px 24px;
  border-radius: 8px;
}
\`\`\`

### Cards
\`\`\`css
.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 300ms ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
\`\`\`

### Inputs
\`\`\`css
.input {
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 1rem;
  transition: all 300ms ease;
}

.input:focus {
  border-color: #ec4899;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
}
\`\`\`

## 🎭 Animações

### Transições Padrão
\`\`\`css
/* Suave */
transition: all 300ms ease;

/* Rápida */
transition: all 150ms ease;

/* Lenta */
transition: all 500ms ease;
\`\`\`

### Animações Especiais
\`\`\`css
/* Marrabenta (dança tradicional) */
@keyframes marrabenta {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(5deg) scale(1.05); }
  50% { transform: rotate(0deg) scale(1.1); }
  75% { transform: rotate(-5deg) scale(1.05); }
}

/* Capulana (tecido tradicional) */
@keyframes capulana {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(2deg); }
  66% { transform: translateY(-5px) rotate(-2deg); }
}
\`\`\`

## 📱 Breakpoints

\`\`\`css
/* Mobile First */
.container {
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .container {
    padding: 48px;
  }
}
\`\`\`

## 🎨 Padrões Moçambicanos

### Capulana Pattern
\`\`\`css
.capulana-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
\`\`\`

## 🔧 Uso no Figma

1. **Importe** este arquivo como Style Guide
2. **Crie** Color Styles para cada cor
3. **Configure** Text Styles para tipografia
4. **Defina** Effect Styles para sombras
5. **Use** Auto Layout com os espaçamentos
