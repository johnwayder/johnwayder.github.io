(function () {
  "use strict";

  var translations = {
    pt: {
      roles: ["Senior Web Developer", "Engenheiro Full Stack", "Especialista Node.js & React", "Arquiteto Serverless"],
      "meta.description": "John Wayder — Senior Web Developer Full Stack com mais de 12 anos de experiência em Node.js, React, TypeScript, AWS e arquiteturas serverless.",
      "nav.about": "Sobre",
      "nav.skills": "Skills",
      "nav.experience": "Experiência",
      "nav.highlights": "Destaques",
      "nav.contact": "Contato",
      "hero.eyebrow": "Olá, eu sou",
      "hero.rolePrefix": "Sou um",
      "hero.desc": "Desenvolvedor Full Stack com mais de 12 anos construindo aplicações web escaláveis — do frontend em React e TypeScript a microsserviços serverless em Node.js sobre a AWS.",
      "hero.ctaPrimary": "Ver experiência",
      "hero.ctaSecondary": "Entrar em contato",
      "about.tag": "Sobre",
      "about.title": "Quem está por trás do código",
      "about.p1": "Sou Engenheiro da Computação e desenvolvedor Full Stack Sênior com mais de 12 anos de carreira. Já atuei em projetos para os setores bancário, jurídico, de criptoativos, financeiro e educacional, sempre focado em entregar software confiável, performático e seguro.",
      "about.p2": "Minha base técnica vai do frontend moderno em React e TypeScript ao backend em Node.js, com forte experiência em arquiteturas serverless na AWS, testes automatizados (TDD) e pipelines de CI/CD.",
      "about.p3": "Também já realizei diversas integrações com Inteligência Artificial, incluindo a construção de agentes de IA diretamente via código — sem ferramentas no-code ou low-code.",
      "about.card1Title": "Formação",
      "about.card1Text": "Engenharia da Computação",
      "about.card2Title": "Localização",
      "about.card2Text": "Goiânia, Brasil — Remoto",
      "about.card3Title": "Especialidade",
      "about.card3Text": "Full Stack & Arquitetura Serverless",
      "stats.years": "Anos de experiência",
      "stats.tech": "Tecnologias dominadas",
      "stats.hackathons": "Hackathons mentorados",
      "stats.sectors": "Setores atendidos",
      "skills.tag": "Skills",
      "skills.title": "Tecnologias que utilizo",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend",
      "skills.cloud": "Cloud & DevOps",
      "skills.databases": "Bancos de dados",
      "skills.quality": "Qualidade & Busca",
      "skills.integrationTests": "Testes de integração",
      "skills.ai": "Integrações com IA",
      "skills.aiAgents": "Agentes de IA",
      "skills.aiApis": "APIs de IA",
      "skills.aiCode": "Via código",
      "exp.tag": "Experiência",
      "exp.title": "Desafios técnicos que já enfrentei",
      "exp.sub": "Áreas de atuação acumuladas ao longo da carreira.",
      "exp.c1Title": "Arquitetura serverless",
      "exp.c1Text": "Desenvolvimento de microsserviços serverless em Node.js, com frontend em React e TypeScript, para aplicações escaláveis.",
      "exp.c2Title": "Buscas complexas",
      "exp.c2Text": "Estruturação de mecanismos de busca complexos — múltiplos filtros combinados, ranqueamento por relevância e respostas rápidas mesmo sobre grandes volumes de dados.",
      "exp.c3Title": "CI/CD e automação",
      "exp.c3Text": "Automação de deploy e pipelines de CI/CD com GitHub Actions, AWS CloudFormation, CDK e CodePipeline.",
      "exp.c4Title": "Sistemas financeiros",
      "exp.c4Text": "Sistemas web para os setores bancário, de criptoativos e financeiro, com foco em segurança e confiabilidade.",
      "exp.c5Title": "Liderança técnica",
      "exp.c5Text": "Liderança e supervisão de equipes de desenvolvimento, definindo padrões de código e boas práticas.",
      "exp.c6Title": "Qualidade & testes",
      "exp.c6Text": "Testes unitários e de integração com Jest sob abordagem TDD, garantindo entregas estáveis.",
      "high.tag": "Destaques",
      "high.title": "Além do desenvolvimento",
      "high.aiTitle": "Integrações com Inteligência Artificial",
      "high.aiText": "Já desenvolvi diversas integrações com IA, incluindo a construção de agentes de IA diretamente via código — sem depender de plataformas no-code ou low-code.",
      "high.nasaText": "Mentor convidado no hackathon internacional da NASA, apoiando equipes na criação de soluções para desafios do planeta e do espaço.",
      "high.climaText": "Mentor convidado em evento focado no desenvolvimento de ideias locais para enfrentar desafios climáticos.",
      "high.unodcText": "Mentor convidado no hackathon da ONU sobre Drogas e Crime, voltado à promoção da integridade corporativa no Brasil.",
      "contact.tag": "Contato",
      "contact.title": "Vamos conversar",
      "contact.sub": "Escolha o canal que preferir para falar comigo.",
      "contact.email": "E-mail",
      "footer.rights": "Senior Web Developer"
    },
    en: {
      roles: ["Senior Web Developer", "Full Stack Engineer", "Node.js & React Specialist", "Serverless Architect"],
      "meta.description": "John Wayder — Senior Full Stack Web Developer with over 12 years of experience in Node.js, React, TypeScript, AWS and serverless architectures.",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.highlights": "Highlights",
      "nav.contact": "Contact",
      "hero.eyebrow": "Hello, I'm",
      "hero.rolePrefix": "I'm a",
      "hero.desc": "Full Stack Developer with over 12 years building scalable web applications — from React and TypeScript frontends to serverless Node.js microservices on AWS.",
      "hero.ctaPrimary": "View experience",
      "hero.ctaSecondary": "Get in touch",
      "about.tag": "About",
      "about.title": "Who's behind the code",
      "about.p1": "I'm a Computer Engineer and Senior Full Stack Developer with over 12 years of experience. I've worked on projects across the banking, legal, crypto, financial and education sectors, always focused on delivering reliable, performant and secure software.",
      "about.p2": "My technical foundation spans modern React and TypeScript frontends to Node.js backends, with strong experience in serverless architectures on AWS, automated testing (TDD) and CI/CD pipelines.",
      "about.p3": "I've also delivered several AI integrations, including building AI agents directly through code — without any no-code or low-code tools.",
      "about.card1Title": "Education",
      "about.card1Text": "Computer Engineering",
      "about.card2Title": "Location",
      "about.card2Text": "Goiânia, Brazil — Remote",
      "about.card3Title": "Specialty",
      "about.card3Text": "Full Stack & Serverless Architecture",
      "stats.years": "Years of experience",
      "stats.tech": "Technologies mastered",
      "stats.hackathons": "Hackathons mentored",
      "stats.sectors": "Sectors served",
      "skills.tag": "Skills",
      "skills.title": "Technologies I work with",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend",
      "skills.cloud": "Cloud & DevOps",
      "skills.databases": "Databases",
      "skills.quality": "Quality & Search",
      "skills.integrationTests": "Integration testing",
      "skills.ai": "AI Integrations",
      "skills.aiAgents": "AI agents",
      "skills.aiApis": "AI APIs",
      "skills.aiCode": "Through code",
      "exp.tag": "Experience",
      "exp.title": "Technical challenges I've tackled",
      "exp.sub": "Areas of work accumulated throughout my career.",
      "exp.c1Title": "Serverless architecture",
      "exp.c1Text": "Development of serverless microservices in Node.js, with React and TypeScript frontends, for scalable applications.",
      "exp.c2Title": "Complex search",
      "exp.c2Text": "Building complex search engines — multiple combined filters, relevance ranking and fast responses even over large volumes of data.",
      "exp.c3Title": "CI/CD & automation",
      "exp.c3Text": "Deploy automation and CI/CD pipelines with GitHub Actions, AWS CloudFormation, CDK and CodePipeline.",
      "exp.c4Title": "Financial systems",
      "exp.c4Text": "Web systems for the banking, crypto and financial sectors, focused on security and reliability.",
      "exp.c5Title": "Technical leadership",
      "exp.c5Text": "Leading and supervising development teams, setting code standards and best practices.",
      "exp.c6Title": "Quality & testing",
      "exp.c6Text": "Unit and integration testing with Jest under a TDD approach, ensuring stable deliveries.",
      "high.tag": "Highlights",
      "high.title": "Beyond development",
      "high.aiTitle": "Artificial Intelligence Integrations",
      "high.aiText": "I've built several AI integrations, including AI agents developed directly through code — without relying on no-code or low-code platforms.",
      "high.nasaText": "Invited mentor at NASA's international hackathon, supporting teams in creating solutions for challenges on Earth and in space.",
      "high.climaText": "Invited mentor at an event focused on developing local ideas to tackle climate challenges.",
      "high.unodcText": "Invited mentor at the UN Office on Drugs and Crime hackathon, focused on promoting corporate integrity in Brazil.",
      "contact.tag": "Contact",
      "contact.title": "Let's talk",
      "contact.sub": "Pick whichever channel you prefer to reach me.",
      "contact.email": "Email",
      "footer.rights": "Senior Web Developer"
    }
  };

  var STORAGE_KEY = "jw-lang";
  var current = localStorage.getItem(STORAGE_KEY) || "pt";
  if (!translations[current]) current = "pt";

  function translate(key) {
    var dict = translations[current] || translations.pt;
    return dict[key];
  }

  function apply(lang) {
    current = translations[lang] ? lang : "pt";
    localStorage.setItem(STORAGE_KEY, current);

    document.documentElement.setAttribute("lang", current === "pt" ? "pt-BR" : "en-US");

    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (el) {
      var value = translate(el.getAttribute("data-i18n"));
      if (value === undefined) return;
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    });

    var flag = document.getElementById("langFlag");
    var label = document.getElementById("langLabel");
    if (flag) flag.className = "fi " + (current === "pt" ? "fi-br" : "fi-us");
    if (label) label.textContent = current === "pt" ? "PT" : "EN";

    document.querySelectorAll(".lang-option").forEach(function (opt) {
      opt.classList.toggle("active", opt.getAttribute("data-lang") === current);
    });

    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: current } }));
  }

  window.I18N = {
    apply: apply,
    getRoles: function () {
      return (translations[current] || translations.pt).roles;
    },
    getLang: function () {
      return current;
    }
  };

  function initSwitch() {
    var wrap = document.getElementById("langSwitch");
    var btn = document.getElementById("langToggle");
    if (!wrap || !btn) return;

    function close() {
      wrap.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = wrap.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    wrap.querySelectorAll(".lang-option").forEach(function (opt) {
      opt.addEventListener("click", function () {
        apply(opt.getAttribute("data-lang"));
        close();
      });
    });

    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(current);
    initSwitch();
  });
})();
