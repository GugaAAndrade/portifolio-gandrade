import type { Project } from "@/types/project";

export const seedProjects: Project[] = [
  {
    title: "Landing premium para SaaS",
    slug: "landing-premium-saas",
    shortDescription:
      "Landing page de alta conversão com performance (Core Web Vitals), animações suaves e copy orientada a resultado.",
    fullDescription:
      "Projeto focado em conversão e velocidade. Estruturei a página em seções com storytelling, microinterações discretas e hierarquia visual forte. Otimizei imagens, carregamento e entreguei um setup de SEO (metadata, OpenGraph e sitemap).",
    tags: ["Next.js", "Landing Page", "SEO"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    coverImage: null,
    galleryImages: [],
    repoUrl: null,
    liveUrl: null,
    featured: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 25,
  },
  {
    title: "Sistema interno (Admin + CRUD)",
    slug: "sistema-interno-admin-crud",
    shortDescription:
      "Painel administrativo com autenticação, CRUD, upload de mídia e métricas para operação diária.",
    fullDescription:
      "Desenvolvi um dashboard com autenticação, permissões, CRUD de entidades e busca/filtros. O foco foi previsibilidade, escalabilidade e UX: feedbacks claros, loading states e validação robusta no front e no servidor.",
    tags: ["Firebase", "Admin", "CRUD"],
    stack: ["Next.js", "Firebase Auth", "Firestore", "Zod", "React Hook Form"],
    coverImage: null,
    galleryImages: [],
    repoUrl: null,
    liveUrl: null,
    featured: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 18,
  },
  {
    title: "Automação e integrações",
    slug: "automacao-e-integracoes",
    shortDescription:
      "Automação de rotinas com integrações e painéis, reduzindo trabalho manual e erros operacionais.",
    fullDescription:
      "Mapeei gargalos, desenhei o fluxo e implementei automações com validações e logs. Entrega com foco em confiabilidade e observabilidade, reduzindo retrabalho e aumentando a produtividade.",
    tags: ["Automação", "Integrações", "RPA"],
    stack: ["Node.js", "APIs", "Firestore", "Jobs"],
    coverImage: null,
    galleryImages: [],
    repoUrl: null,
    liveUrl: null,
    featured: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10,
  },
];

