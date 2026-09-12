import { IncomeProfile } from '../types';

export const WHATSAPP_GROUP_URL =
  'https://chat.whatsapp.com/CHJvSYr2jxdBgzW7REnOX5?s=sh&p=a&mlu=4&ilr=4';

export const INCOME_PROFILES: IncomeProfile[] = [
  {
    id: 'salary-survivor',
    title: 'Salary Survivor',
    shortDesc: 'One bad month from panic',
    scoreRange: 'Tier 1 • Emergency Vulnerable',
    badge: 'High Exposure',
    symptoms: [
      '100% of your current livelihood depends on a single monthly paycheck',
      'If payroll delayed for 30–60 days, savings would evaporate rapidly',
      'High monthly fixed commitments leaving little to no reinvestment margin',
    ],
    hiddenCost:
      'Living in perpetual anxiety under the illusion of corporate security, vulnerable to sudden company restructurings.',
    nextStep:
      'Build your immediate 90-day Liquidity Shield and map your core marketable high-leverage skill.',
  },
  {
    id: 'income-explorer',
    title: 'Income Explorer',
    shortDesc: 'Busy, but going nowhere',
    scoreRange: 'Tier 2 • Dispersed Energy',
    badge: 'Common Trap',
    symptoms: [
      'Consuming endless podcasts, YouTube videos, courses, and business ideas',
      'Starting multiple side-projects but abandoning them after a few weeks',
      'Spending precious evening hours busy on tasks that don’t generate cashflow',
    ],
    hiddenCost:
      'Action faking — feeling productive while staying exactly where you started 12 months ago.',
    nextStep:
      'Eliminate 4 out of 5 distractions and build one single validated monetization offer.',
  },
  {
    id: 'ready-but-stuck',
    title: 'Ready But Stuck',
    shortDesc: 'Sitting on unpaid skill',
    scoreRange: 'Tier 3 • Latent Potential',
    badge: 'Highest Leverage',
    symptoms: [
      'Possesses high-level expertise, industry domain insight, or technical mastery',
      'Watching less qualified peers package their knowledge and generate revenue',
      'Paralyzed by overthinking pricing, packaging, imposter syndrome, or audience launch',
    ],
    hiddenCost:
      'Leaving hundreds of thousands in lifetime earnings uncollected because knowledge stays unmonetized.',
    nextStep:
      'Package your primary professional skill into a high-ticket advisory or productized service.',
  },
  {
    id: 'income-builder',
    title: 'Income Builder',
    shortDesc: 'One system away from scale',
    scoreRange: 'Tier 4 • Growth Engine',
    badge: 'Ready for Scale',
    symptoms: [
      'Already generated side income or secondary cash flow outside salary',
      'Current workflow relies heavily on manual hustle, trading time directly for money',
      'Need automated acquisition, delivery frameworks, and recurring revenue retention',
    ],
    hiddenCost:
      'Plateauing at 50-60 hour weeks without scalable systems, risking burnout.',
    nextStep:
      'Implement predictable inbound client pipelines and systemize operations for leverage.',
  },
];
