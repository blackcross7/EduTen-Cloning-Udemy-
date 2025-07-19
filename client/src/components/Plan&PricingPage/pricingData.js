export const plans = [
  {
    id: "personal",
    name: "Personal Plan",
    subtitle: "For you",
    users: "Individual",
    monthlyPrice: 500,
    annualPrice: 5000,
    monthlyPriceText: "₹500",
    annualPriceText: "₹5,000",
    savings: "Save ₹1,000",
    note: "Billed monthly or annually. Cancel anytime.",
    button: { label: "Start subscription", link: "#" },
    features: [
      "Access to 26,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Mobile app access",
      "Offline viewing",
      "Certificate of completion",
    ],
    notIncluded: [
      "Team analytics",
      "Custom content",
      "Dedicated support",
    ],
    highlight: true,
    popular: true,
  },
  {
    id: "team",
    name: "Team Plan",
    subtitle: "For your team",
    users: "2 to 20 people",
    monthlyPrice: 2000,
    annualPrice: 20000,
    monthlyPriceText: "₹2,000",
    annualPriceText: "₹20,000",
    savings: "Save ₹4,000",
    note: "Billed annually. Cancel anytime.",
    button: { label: "Start subscription", link: "#" },
    features: [
      "Access to 13,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
      "Team management tools",
      "Progress tracking",
      "Custom learning paths",
      "Admin dashboard",
    ],
    notIncluded: [
      "Custom content creation",
      "Dedicated customer success team",
      "Strategic implementation services",
    ],
    highlight: false,
    popular: false,
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    subtitle: "For your whole organization",
    users: "More than 20 people",
    monthlyPrice: null,
    annualPrice: null,
    monthlyPriceText: "Contact sales",
    annualPriceText: "Contact sales",
    savings: "",
    note: "Custom pricing for large organizations",
    button: { label: "Request a demo", link: "#" },
    features: [
      "Access to 30,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on",
      "Custom integrations",
      "SSO and advanced security",
      "Custom branding",
      "Priority support",
    ],
    notIncluded: [],
    highlight: false,
    popular: false,
  },
];

export const comparisonData = [
  {
    feature: "Course access",
    personal: "26,000+",
    team: "13,000+",
    enterprise: "30,000+"
  },
  {
    feature: "Mobile app",
    personal: true,
    team: true,
    enterprise: true
  },
  {
    feature: "Offline viewing",
    personal: true,
    team: true,
    enterprise: true
  },
  {
    feature: "Team analytics",
    personal: false,
    team: true,
    enterprise: true
  },
  {
    feature: "Dedicated support",
    personal: false,
    team: false,
    enterprise: true
  },
  {
    feature: "Custom content",
    personal: false,
    team: false,
    enterprise: true
  },
  {
    feature: "SSO integration",
    personal: false,
    team: false,
    enterprise: true
  },
  {
    feature: "Custom branding",
    personal: false,
    team: false,
    enterprise: true
  }
];

export const faqs = [
  {
    question: "What's included in the Personal Plan?",
    answer: "The Personal Plan gives you access to over 26,000 top courses, certification prep, goal-focused recommendations, AI-powered coding exercises, mobile app access, offline viewing, and certificates of completion."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
  },
  {
    question: "What's the difference between monthly and annual billing?",
    answer: "Annual billing offers significant savings compared to monthly billing. For example, the Personal Plan costs ₹500/month with monthly billing, but only ₹417/month with annual billing (₹5,000/year)."
  },
  {
    question: "Do you offer team discounts?",
    answer: "Yes! Our Team Plan is designed for 2-20 people and includes team management tools, analytics, and adoption reports. For larger organizations, our Enterprise Plan offers custom pricing and additional features."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and digital wallets. For Enterprise plans, we also offer invoice-based billing."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial for the Personal Plan. You can explore all features and cancel anytime during the trial period."
  },
  {
    question: "Do you offer student discounts?",
    answer: "Yes, we offer special pricing for students with valid educational email addresses. Contact our support team for more information."
  }
]; 