export const businessInfo = {
  name: "Guincho Barbaroti",
  city: "Ribeirão Preto",
  fullLocation: "Ribeirão Preto e região — SP",
  phoneDisplay: "(16) 98186-8703",
  phoneRaw: "5516981868703",
  phoneCallUrl: "tel:+5516981868703",
  whatsappUrl: "https://wa.me/5516981868703?text=Ol%C3%A1!%20Preciso%20de%20um%20guincho%20em%20Ribeir%C3%A3o%20Preto%20ou%20regi%C3%A3o.%20Poderia%20me%20ajudar%20com%20um%20or%C3%A7amento%20r%C3%A1pido%3F",
  availability: "24 Horas por dia, 7 dias por semana",
  addressNotes: "Base com pronta resposta em Ribeirão Preto - SP (Atendimento urbano e rodoviário)",
  // Dados para preenchimento posterior pelo cliente
  pendingInfo: {
    cnpj: "A preencher pelo cliente (Ex: 00.000.000/0001-00)",
    enderecoBase: "Ribeirão Preto - SP (Endereço físico detalhado a confirmar pelo proprietário)",
    email: "contato@guinchobarbaroti.com.br (A confirmar)",
  }
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Área de Atendimento", href: "#atendimento" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export const vehiclesServed = [
  {
    id: "carros",
    name: "Carros",
    description: "Sedans, hatches, esportivos e rebaixados com rampa nivelada.",
    image: "/images/vehicle-carros-novo.png",
    whatsappMsg: "Olá! Preciso de guincho para um carro de passeio em Ribeirão Preto."
  },
  {
    id: "motos",
    name: "Motos",
    description: "Baixa e alta cilindrada com amarras e cinta de segurança especializada.",
    image: "/images/vehicle-motos-novo.png",
    whatsappMsg: "Olá! Preciso de guincho para uma moto em Ribeirão Preto/região."
  },
  {
    id: "utilitarios",
    name: "Utilitários",
    description: "Fiorinos, Kangoo, furgões leves e veículos de entrega comercial.",
    image: "/images/vehicle-utilitarios-novo.png",
    whatsappMsg: "Olá! Preciso de reboque para um utilitário de trabalho."
  },
  {
    id: "caminhonetes",
    name: "Caminhonetes",
    description: "Pickups 4x4, cabines duplas e SUVs de grande porte com plataforma reforçada.",
    image: "/images/vehicle-caminhonetes-novo.png",
    whatsappMsg: "Olá! Preciso de guincho para uma caminhonete/SUV grande."
  },
  {
    id: "vans",
    name: "Vans",
    description: "Transporte de passageiros e carga, van escolar e furgão longo.",
    image: "/images/vehicle-vans-novo.png",
    whatsappMsg: "Olá! Preciso de reboque para uma van em Ribeirão Preto."
  },
  {
    id: "caminhoes",
    name: "Caminhões",
    description: "Caminhões 3/4, chassis leves e transporte específico sob consulta.",
    image: "/images/vehicle-caminhoes-novo.png",
    whatsappMsg: "Olá! Preciso de guincho para um caminhão leve/veículo 3/4."
  },
];

export const regionalCities = [
  { name: "Ribeirão Preto", time: "10 a 20 min", status: "Base Principal (Pronta Resposta)", isHub: true },
  { name: "Sertãozinho", time: "15 a 25 min", status: "Atendimento Rápido", isHub: false },
  { name: "Cravinhos", time: "15 a 25 min", status: "Atendimento Rápido", isHub: false },
  { name: "Jardinópolis", time: "15 a 25 min", status: "Atendimento Rápido", isHub: false },
  { name: "Serrana", time: "20 a 30 min", status: "Atendimento Rápido", isHub: false },
  { name: "Dumont", time: "20 a 30 min", status: "Atendimento Rápido", isHub: false },
  { name: "Bonfim Paulista", time: "10 a 15 min", status: "Atendimento Imediato", isHub: false },
  { name: "Brodowski", time: "20 a 30 min", status: "Atendimento Rápido", isHub: false },
];

export const highwaysCovered = [
  { name: "Rodovia Anhanguera (SP-330)", desc: "Trecho Ribeirão Preto, Cravinhos e Jardinópolis" },
  { name: "Rodovia Cândido Portinari (SP-334)", desc: "Acesso a Brodowski e região" },
  { name: "Rodovia Attílio Balbo (SP-322)", desc: "Ligação Ribeirão Preto a Sertãozinho" },
  { name: "Rodovia Abrão Assed (SP-333)", desc: "Ligação Ribeirão Preto a Serrana" },
  { name: "Rodovia Antônio Machado Sant'Anna (SP-255)", desc: "Acesso à região de Araraquara/Rincão" },
];

export const serviceDifferentials = [
  {
    title: "Atendimento 24 Horas Real",
    desc: "Dia, noite, finais de semana ou feriados. Nossa equipe está sempre pronta para o seu socorro imediato.",
    icon: "Clock",
  },
  {
    title: "Plataforma Hidráulica Segura",
    desc: "Equipamento moderno que preserva o câmbio automático, para-choques e alinhamento do veículo.",
    icon: "ShieldCheck",
  },
  {
    title: "Preço Justo e Transparente",
    desc: "Orçamento claro antes da partida do guincho. Sem surpresas ou taxas abusivas no destino.",
    icon: "BadgePercent",
  },
  {
    title: "Pagamento Facilitado",
    desc: "Aceitamos PIX, cartões de crédito e débito direto no local do atendimento para sua comodidade.",
    icon: "CreditCard",
  },
  {
    title: "Motoristas Especializados",
    desc: "Profissionais treinados em amarração, resgate em pane mecânica, elétrica ou colisão.",
    icon: "Award",
  },
  {
    title: "Cobertura Toda a Região",
    desc: "Resgate em qualquer bairro de Ribeirão Preto e nas principais rodovias da macrorregião.",
    icon: "MapPin",
  },
];

export const faqs = [
  {
    question: "Como faço para solicitar o guincho agora?",
    answer: "Basta clicar no botão de 'Ligar Agora' no número (16) 98186-8703 ou enviar uma mensagem no WhatsApp. Informe onde você está e qual o modelo do seu veículo para passarmos o orçamento e tempo estimado na hora."
  },
  {
    question: "Quanto tempo demora para o guincho chegar?",
    answer: "Em Ribeirão Preto, o tempo médio costuma ser de 15 a 25 minutos dependendo do trânsito e bairro. Para rodovias e cidades vizinhas (Sertãozinho, Cravinhos, Jardinópolis), a equipe é despachada imediatamente pela via mais rápida."
  },
  {
    question: "Vocês atendem veículos com câmbio automático ou rebaixados?",
    answer: "Sim! Trabalhamos com guincho plataforma hidráulica basculante, o que permite o ângulo correto para veículos baixos sem raspar e o transporte sem rodar o eixo de tração em carros automáticos."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos PIX e cartões de débito e crédito (com maquininha levada pelo motorista até o local do atendimento)."
  },
  {
    question: "O serviço funciona de madrugada, domingo e feriado?",
    answer: "Sim, o Guincho Barbaroti opera 24 horas por dia, 365 dias por ano. Você pode nos contatar a qualquer momento."
  },
  {
    question: "Vocês realizam transporte para outras cidades ou viagens?",
    answer: "Sim, realizamos transporte intermunicipal e viagens programadas para veículos. Consulte a disponibilidade e valores pelo WhatsApp."
  }
];
