/**
 * Accent color theme. Change this one value to restyle the site.
 * ink = cool paper + ink CTAs (brand pack v1.1).
 */
export const accentTheme = 'ink' as const;

export type AccentTheme = 'gold' | 'cyan' | 'silver' | 'warm' | 'champagne' | 'blue' | 'violet' | 'linen' | 'ink';

/*
 * Commercial source of truth for the public site.
 * Mirrors ../Applied AI Consultancy/offers-and-pricing.md.
 * Hourly rates and support retainers stay in proposals, not here.
 * House style: no em dashes in any string in this file.
 */

export const site = {
  name: 'Layer',
  practice: 'Applied AI Systems Consultancy',
  brand: 'Layer',
  title: 'Layer · Applied AI Systems Consultancy',
  description:
    'Layer designs and builds controlled AI systems that connect your people, processes and existing software.',
  shortBio:
    'Controlled AI systems for the way your business actually works.',
  tagline: 'The operating layer between your team and your tools.',
  url: 'https://www.workwithlayer.com',
  email: 'contact@workwithlayer.com',
  founder: 'Michael J. Low',
  github: 'https://github.com/MichaelJLow',
  linkedin: 'https://www.linkedin.com/in/michael-j-low/',
  availability: 'Available for selected workflow reviews and implementation projects.',
  availabilityShort: 'Available for selected projects',
  location: 'Based in São Paulo, working with clients remotely',
  headshot: '/images/headshot-portfolio-tight.png',
  headshotCutout: '/images/headshot-portfolio-cutout.png',
  headshotFallback: '/images/headshot-placeholder.svg',
} as const;

/** Consistent page titles: "Label · Michael J. Low · Applied AI Systems". */
export const pageTitle = (label?: string) => (label ? `${label} · ${site.brand}` : site.brand);

/* ------------------------------------------------------------------ *
 * Primary commercial CTA
 * ------------------------------------------------------------------ */

/** Homepage and nav primary CTA: no-cost workflow review. */
export const primaryCta = {
  label: 'Book a no-cost workflow review',
  shortLabel: 'No-cost review',
  href: '/#contact',
  note: 'No-cost workflow review. No obligation.',
} as const;

/** Same offer as primaryCta. Kept so older pages keep compiling. */
export const reviewCta = {
  label: 'Book a no-cost workflow review',
  href: '/#contact',
} as const;

export const secondaryCta = {
  label: 'See what Layer builds',
  href: '/#what-we-build',
} as const;

export const howIWorkCta = {
  label: 'How I work',
  href: '/how-i-work',
} as const;

/**
 * No-cost workflow review (homepage primary CTA).
 * Maps one real process and recommends the next step. Not a build.
 */
export const discoveryCall = {
  label: 'Book a no-cost workflow review',
  shortLabel: 'No-cost review',
  href: '/#contact',
  duration: 'usually about 45 minutes',
  title: 'Book a no-cost workflow review',
  intro:
    'A focused conversation about one important process: how it actually runs, where time is being lost, and whether there is a worthwhile next step. If there is not, we will say so.',
  includes: [
    'How one important workflow actually runs today',
    'Where manual work, handoffs and delays are costing time',
    'A recommended starting point, or an honest recommendation to leave it',
  ],
  subject: 'No-cost workflow review',
  bodyLines: [
    'Hello Michael,',
    '',
    'I would like to book a no-cost workflow review.',
    '',
    'Business and what we do:',
    'The workflow that is causing problems:',
    'Tools we currently use:',
    '',
    'Thanks,',
  ],
} as const;

/** @deprecated Prefer discoveryCall. Kept for older imports and lab pages. */
export const fitCheck = {
  label: discoveryCall.label,
  shortLabel: discoveryCall.shortLabel,
  href: discoveryCall.href,
  duration: discoveryCall.duration,
  title: 'Not sure a Review is right?',
  intro: discoveryCall.intro,
  includes: discoveryCall.includes,
  subject: discoveryCall.subject,
  bodyLines: discoveryCall.bodyLines,
} as const;

/* ------------------------------------------------------------------ *
 * Offer ladder
 * ------------------------------------------------------------------ */

export const offerLadder = {
  supportingLine:
    'Prices are starting points for typical scope. The final quote is confirmed after a Review or Audit. Tool subscriptions (automation hosting, email, CRM, model usage) are usually client owned.',
  creditLine:
    'A Workflow Review is credited in full against a Workflow Audit on the same workflow within 30 days.',
  scopeLine:
    'Implementation price depends on the scope of the work, not on which discovery route you took.',
  groups: [
    {
      name: 'Discovery',
      summary: 'Work out whether the workflow is worth fixing, and how.',
      tiers: [
        {
          name: 'Workflow Review',
          price: 'from £350',
          job: 'Is this worth fixing, and roughly how?',
          bestFor:
            'One owner or office manager who can explain the whole process, one main tool chain, one obvious pain point.',
          includes: [
            'One 90 minute working session',
            'One workflow walked through end to end',
            'Top friction points and quick wins',
            'Rough hours saved and error risk estimate',
            'An honest go or no-go recommendation',
            'Short written summary, usually within 48 hours',
          ],
          excludes: [
            'Multi-stakeholder interviews',
            'Current and future-state workflow diagrams',
            'Integration and data ownership assessment',
            'A written build scope or fixed quote',
          ],
        },
        {
          name: 'Workflow Audit',
          price: 'from £950',
          job: 'Design the fix properly and scope a build.',
          bestFor:
            'Several people or handoffs, two or more systems, or mistakes that carry real cost. Ready to fund implementation if it is recommended.',
          includes: [
            'Discovery with everyone involved in the workflow',
            'Current-state workflow map',
            'Bottlenecks, risks and unofficial workarounds',
            'Future-state workflow recommendation',
            'Integration and data ownership assessment',
            'Success measures you can hold me to',
            'A scoped implementation recommendation and proposal',
          ],
          note: 'Usually 5 to 7 business days after the discovery sessions.',
        },
      ],
    },
    {
      name: 'Implementation',
      summary: 'Build the workflow, hand it over, and stabilise it.',
      tiers: [
        {
          name: 'Starter Workflow',
          price: 'from £750',
          job: 'Fix one annoying manual step quickly.',
          bestFor: 'One or two straightforward automations between tools you already pay for.',
          includes: [
            '1 to 2 straightforward workflows',
            'Standard integrations such as Gmail, Sheets, HubSpot, Calendly or Stripe',
            'Basic error notifications',
            'Short handover document',
            '7 day defect fix period against agreed scope',
          ],
          note: 'Usually 3 to 5 days after kickoff.',
        },
        {
          name: 'Connected Workflows',
          price: 'from £1,800',
          job: 'Join up the tools you already use so data stops getting re-typed.',
          bestFor: 'Three to five linked workflows, for example lead capture, onboarding, or quote to invoice.',
          includes: [
            '3 to 5 connected workflows',
            'Error handling and retries',
            'Consistent naming and shared logic where it helps',
            'One training session',
            '14 day defect fix period against agreed scope',
          ],
          note: 'Usually 1 to 2 weeks after kickoff.',
        },
        {
          name: 'Controlled Pilot',
          price: 'from £4,500',
          job: 'One controlled operational system for a messy, high-volume or high-risk workflow.',
          bestFor:
            'Work that involves ambiguity, approvals and auditability, where a rollout needs to be controlled rather than switched on.',
          includes: [
            'One named workflow for one team',
            'Agreed integrations and bounded edge cases',
            'Restricted execution or shadow mode',
            'Human approval where it matters',
            'AI used for language and ambiguity only where it earns its place',
            'Demonstration and acceptance testing',
            'Handover, training and 14 day stabilisation',
          ],
        },
      ],
    },
  ],
} as const;

/** Compact ladder for the homepage: names and starting prices only. */
export const offerSummary = offerLadder.groups.map((group) => ({
  name: group.name,
  summary: group.summary,
  tiers: group.tiers.map((tier) => ({
    name: tier.name,
    price: tier.price,
    bestFor: tier.bestFor,
  })),
}));

/** What stays under human control, and what you keep at handover. */
export const whatYouGet = [
  'A working system your team operates, not a demo',
  'Documentation and a credential and ownership register',
  'Administrator and user training, with a recorded walkthrough where useful',
  'An acceptance test against the criteria we agreed',
  'A defect fix period after handover',
] as const;

export const humanControl = [
  'Approval stays with a person wherever a mistake would be expensive to undo',
  'AI is used for language and ambiguity, not for decisions that need to be auditable',
  'Every automated action leaves a trace you can inspect',
  'You own the accounts, the data and the tools',
] as const;

export const notOffered = [
  'Vague "AI strategy" decks with no implementation',
  'Black-box automation you cannot audit or maintain',
  'Hype-first consulting without shipped artifacts',
] as const;

/* ------------------------------------------------------------------ *
 * Homepage (lean six-section layout)
 * ------------------------------------------------------------------ */

export const homeHero = {
  kicker: 'Michael J. Low · Applied AI Systems',
  brandLines: ['Michael J. Low', 'Applied AI Systems'] as const,
  headline: 'Save time, respond faster, and grow with smarter business automation.',
  support:
    'Custom AI and workflow automation for service businesses. Practical solutions built around the tools you already use.',
  riskLine: 'Practical solutions built around the tools you already use. No obligation workflow review.',
  priceLine: 'No-cost workflow review · no obligation',
} as const;

export const homeProblems = [
  'Leads waiting too long for a reply',
  'Staff copying the same details between tools',
  'Follow-ups and appointments getting missed',
  'Reporting eating hours every week',
] as const;

export const homeServicesSection = {
  kicker: 'Services',
  title: 'Problems your team recognises. Automations that fix them.',
  intro:
    'Each engagement starts from a real operational bottleneck, not a technology wishlist. Here is how automation usually helps service businesses.',
  closing:
    'Not sure what to automate? We will identify the highest-impact opportunity during your workflow review.',
} as const;

export const homeServices = [
  {
    title: 'Lead capture and follow-up',
    problem: 'Enquiries sit in an inbox while the team is busy elsewhere.',
    automation:
      'Qualify website enquiries, update the CRM, send a personalised response, and notify the right person.',
    outcome: 'Faster response and fewer lost opportunities.',
  },
  {
    title: 'Customer service',
    problem: 'Common questions and requests pile up in shared inboxes.',
    automation:
      'Answer frequent questions, route requests, summarise conversations, and escalate exceptions to a person.',
    outcome: 'Quicker service without removing the human touch.',
  },
  {
    title: 'Appointments and onboarding',
    problem: 'Scheduling, forms, and setup still depend on someone remembering every step.',
    automation:
      'Schedule meetings, collect information, create records, send reminders, and trigger welcome sequences.',
    outcome: 'Smoother handoffs and less administration.',
  },
  {
    title: 'Operations and reporting',
    problem: 'Documents, tools, and weekly reports stay manual and fragile.',
    automation:
      'Process documents, synchronise tools, generate reports, and alert the right people when something needs attention.',
    outcome: 'Fewer errors and hours of repetitive work removed.',
  },
] as const;

export const homeProcessSection = {
  kicker: 'Process',
  title: 'How the engagement works',
  intro: 'One concrete workflow, three clear stages, and a person kept in control where risk sits.',
  humanControl:
    'Sensitive decisions and exceptions stay under human control, especially approvals and anything expensive to undo.',
} as const;

export const homeBeforeAfter = {
  title: 'A typical service enquiry, before and after',
  before: [
    'Enquiry arrives by form or email',
    'Someone replies when they notice it',
    'Details get copied into a CRM or spreadsheet',
    'Follow-up depends on memory',
    'Weekly update is another manual spreadsheet',
  ],
  after: [
    'Enquiry is qualified against simple rules',
    'A personalised reply goes out promptly',
    'CRM and tasks update automatically',
    'Follow-ups are scheduled, not remembered',
    'Results appear in a simple operating view',
  ],
} as const;

export const homeProcessSteps = [
  {
    title: 'Discover',
    description: 'Map the current process and select the highest-impact automation opportunity.',
  },
  {
    title: 'Build',
    description: 'Design, integrate, and test the workflow, with human approval points where they matter.',
  },
  {
    title: 'Launch',
    description: 'Train the team, monitor performance, document ownership, and provide post-launch support.',
  },
] as const;

export const homeResultsSection = {
  kicker: 'Results',
  title: 'What good automation should change.',
  intro:
    'I do not invent client metrics. Until a paid engagement produces verified numbers, the proof is a labelled demonstration plus clear working practices.',
} as const;

export const homeOutcomes = [
  {
    title: 'Saved staff hours',
    detail: 'Remove copy-paste loops and chasing so people spend time on work that needs judgement.',
  },
  {
    title: 'Faster responses',
    detail: 'Qualified enquiries and common requests move without waiting on one overloaded inbox.',
  },
  {
    title: 'Fewer errors',
    detail: 'Data moves once between tools, with failures surfaced instead of silent drift.',
  },
  {
    title: 'More capacity',
    detail: 'Grow volume without adding the same amount of repetitive overhead.',
  },
] as const;

/** Home proof cards keyed to featured project slugs. */
export const homeProofCards = [
  {
    slug: 'opsdesk-ai',
    label: 'Demonstration',
    challenge: 'Maintenance requests arrive by email, get missed, and leave no clear decision trail.',
    built: 'A controlled ops workflow: intake, triage, policy drafts, approval gates, and audit history.',
    result:
      'Shows how a messy shared inbox becomes a system people can run on a normal Tuesday. Not presented as a paid client case study.',
  },
] as const;

export const homeTrust = {
  credentials: [
    'Applied AI systems practice focused on operational workflows',
    'OpsDesk demonstration with intake, routing, approvals, and audit trail',
    'Evaluation harness for scoring AI workflow behaviour before it touches customers',
  ],
  toolsLabel: 'Tools I commonly connect',
  tools: [
    'Gmail',
    'Google Sheets',
    'HubSpot',
    'Notion',
    'Slack',
    'Calendly',
    'Stripe',
    'n8n',
  ] as const,
  securityLabel: 'How trust is handled',
  security: [
    'Sensitive actions wait for human approval',
    'Accounts, credentials, and data stay client-owned where practical',
    'Automated actions leave a trail you can inspect',
    'Handover includes documentation, training, and a defect fix period',
  ],
} as const;

export const homeAboutSection = {
  kicker: 'About',
  title: 'A boutique practice with one clear job.',
  intro:
    'I design and build the operating layer between your team and the tools you already pay for.',
  paragraphs: [
    'Most service businesses are not short of software. They are short of a process that fits the work. Requests arrive in an inbox, progress lives in a spreadsheet, and the real logic sits in one person\'s head.',
    'I work directly with you: map the workflow, build controlled automation around it, document ownership, train the people who will run it, and stay available after launch while it stabilises.',
  ],
  differentiators: [
    'Built around your actual workflow, not a generic template',
    'Integrates with tools you already use where feasible',
    'Direct collaboration with one practitioner, not a revolving account team',
    'Documentation, training, and post-launch support included in the engagement',
  ],
  linkLabel: 'Full about page',
  href: '/about',
} as const;

export const homeFaqSection = {
  kicker: 'FAQ',
  title: 'Questions that usually come up before booking.',
} as const;

export const homeFaq = [
  {
    question: 'What types of businesses do you work with?',
    answer:
      'Small and mid-sized service businesses where work arrives as enquiries, forms, or emails, and progress depends on people copying information between tools.',
  },
  {
    question: 'What can you automate?',
    answer:
      'Lead capture and follow-up, customer service triage, appointments and onboarding, document handling, tool synchronisation, and recurring reporting. If a workflow is not worth automating, I will say so.',
  },
  {
    question: 'Can you work with our current software?',
    answer:
      'Usually yes. Engagements are designed around tools you already pay for, such as email, sheets, CRM, scheduling, and payment tools. Tool subscriptions stay client-owned where practical.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'The no-cost workflow review is usually about 45 minutes, plus a short written recommendation. Implementation time depends on the workflow. Where possible, Layer starts with one focused first version, then expands once it is in use.',
  },
  {
    question: 'Is our data secure, and what happens after launch?',
    answer:
      'Sensitive actions stay human-approved, and accounts stay client-owned where practical. After launch you get documentation, training, and a defect fix period so the system is yours to run.',
  },
] as const;

export const homeFinalCta = {
  kicker: 'Next step',
  title: 'Find where work is getting stuck, and whether it is worth fixing.',
  body: 'The no-cost workflow review maps one process and recommends the highest-value next step, or says so if there is not one. No obligation.',
} as const;

/** Kept for How I work / legacy pages that still reference these names. */
export const homeWaysSection = {
  kicker: homeServicesSection.kicker,
  title: homeServicesSection.title,
  intro: homeServicesSection.intro,
} as const;

export const homeWaysIHelp = homeServices.map((item) => ({
  title: item.title,
  detail: `${item.problem} ${item.automation}`,
  mapsTo: item.outcome,
}));

export const homeOfferSection = {
  kicker: 'Working with Layer',
  title: 'Start with a no-cost review, then build what is worth fixing.',
  intro:
    'Most work starts with a no-cost workflow review. If the process is worth fixing, the next step is a scoped implementation, or a technical discovery when more investigation is needed first.',
} as const;

export const homeProofSection = {
  kicker: homeResultsSection.kicker,
  title: homeResultsSection.title,
  intro: homeResultsSection.intro,
  ctaLabel: 'All case studies',
  ctaHref: '/projects',
} as const;

export const homeToolsSection = {
  kicker: 'Tools you already use',
  title: 'Built across the stack you already pay for.',
  intro: 'Tool subscriptions usually stay client owned. I connect and control the workflow, not lock you into my accounts.',
  tools: homeTrust.tools,
} as const;

export const homeWhoLabel = 'Who this is for' as const;
export const homeWhoTitle = 'Service businesses running on an inbox and a spreadsheet.' as const;
export const homeWhoIntro =
  'Growing businesses where work arrives as messages and forms, gets tracked in spreadsheets or a CRM, and depends on someone remembering to move it along.' as const;
export const homeWhoPains = homeProblems;

/** Compact process strip kept for legacy / How I work references. */
export const processStrip = homeProcessSteps.map((step) => ({
  title: step.title,
  description: step.description,
}));

export const homeFounderLine = {
  text: 'Michael J. Low builds applied AI systems for service businesses.',
  linkLabel: 'About',
  href: '/about',
} as const;

/* ------------------------------------------------------------------ *
 * Contact
 * ------------------------------------------------------------------ */

const enquiryBodyLines = [
  'Hello Michael,',
  '',
  'I would like to book a no-cost workflow review.',
  '',
  'Business and what we do:',
  'The workflow that is causing problems:',
  'Tools we currently use:',
  '',
  'Thanks,',
];

export const contact = {
  kicker: 'Contact',
  title: 'Start with a no-cost workflow review.',
  intro:
    'Tell us about one process that is costing time. We will map how it actually runs, find where effort is being lost, and recommend the highest-value next step, or say so if there is not a worthwhile problem.',
  subject: 'No-cost workflow review',
  bodyLines: enquiryBodyLines,
  helper: 'Answer what you can. A short note about the process is enough to start.',
} as const;

export const enquiryMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  contact.subject,
)}&body=${encodeURIComponent(enquiryBodyLines.join('\n'))}`;

export const discoveryMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  discoveryCall.subject,
)}&body=${encodeURIComponent(discoveryCall.bodyLines.join('\n'))}`;

/** @deprecated Prefer discoveryMailto. */
export const fitCheckMailto = discoveryMailto;

/* ------------------------------------------------------------------ *
 * About
 * ------------------------------------------------------------------ */

export const about = {
  intro:
    'I design and build applied AI systems for businesses whose operations have outgrown the tools holding them together.',
  paragraphs: [
    'Most of the businesses I work with are not short of software. They are short of a process that fits the work. Requests arrive in a shared inbox, progress lives in a spreadsheet, and the real logic sits in one person\u2019s head.',
    'I start by watching how the work actually happens, including the workarounds nobody documented. Then I reduce it to the decisions and handoffs that matter, and build automation around those with a person kept in the loop wherever a mistake would be expensive.',
    'I use AI where language and ambiguity are the hard part, and ordinary automation everywhere else. The point is a workflow your team can run on a normal Tuesday, not a demonstration of a model.',
    'I document what I build, hand over the accounts and the runbook, and train the people who will operate it. You should not need me to keep the system running.',
  ],
  clientWork: [
    {
      label: 'Observe',
      detail: 'Sit with the workflow as it really runs, including the exceptions and the unofficial fixes.',
    },
    {
      label: 'Simplify',
      detail: 'Strip the process back to the inputs, decisions, actions and handoffs that actually matter.',
    },
    {
      label: 'Build',
      detail: 'Ship the smallest complete system people can use, with human approval where risk sits.',
    },
    {
      label: 'Hand over',
      detail: 'Documentation, credentials, training and a stabilisation period, so the system is yours.',
    },
  ],
  traits: [
    {
      label: 'Practical by default',
      detail: 'Working systems and operating rhythms, not strategy decks or one-off hacks.',
    },
    {
      label: 'Human in the loop',
      detail: 'Approval and judgement stay with people wherever a mistake would be costly to undo.',
    },
    {
      label: 'Honest about limits',
      detail: 'I will tell you when a workflow is not worth automating, and when a prototype is only a prototype.',
    },
    {
      label: 'Comfortable with mess',
      detail: 'I am happy starting where the process is half-formed and the information is scattered.',
    },
  ],
  personal:
    'I live in São Paulo and travel when I can. New places reset my attention, and I notice the same pattern everywhere: people invent workarounds when the system does not fit the work.',
  hiring: {
    title: 'Bring me into your team',
    body:
      'Alongside client work I am open to applied AI product and systems roles where I can do this from inside a team: framing ambiguous problems, building the workflow around the model, and shipping it into real use.',
  },
} as const;

/* ------------------------------------------------------------------ *
 * Capabilities
 * ------------------------------------------------------------------ */

export const capabilities = {
  intro:
    'What I can assemble into how a business operates. Each capability below is backed by something I have built. Where the evidence is a prototype or uses synthetic data, it says so.',
  proven: [
    {
      title: 'Workflow intake, routing and approval',
      outcome:
        'Requests arrive in one place, get classified and routed, and wait for human approval before anything irreversible happens.',
      evidence: 'OpsDesk prototype, with an audit trail and approval gates.',
      caseStudy: '/projects/opsdesk-ai',
      tier: 'Controlled Pilot',
    },
    {
      title: 'AI workflow evaluation',
      outcome:
        'Know whether an AI step is actually good enough before it touches customers, and keep measuring it after launch.',
      evidence: 'Scorecard driven evaluation harness, demonstrated on synthetic cases.',
      tier: 'Audit or Controlled Pilot',
    },
    {
      title: 'Workflow automation and connected tools',
      outcome:
        'The tools you already pay for stop needing a human to copy data between them, with errors surfaced rather than silent.',
      evidence: 'Standard integrations across email, sheets, CRM, scheduling and payments.',
      tier: 'Starter or Connected',
    },
    {
      title: 'Knowledge capture and internal search',
      outcome:
        'Scattered documents, notes and decisions become something a team can search and reuse instead of asking someone again.',
      evidence: 'Knowledge and research pipelines built for daily use.',
      caseStudy: '/projects/ai-daily-pulse',
      tier: 'Connected or Controlled Pilot',
    },
    {
      title: 'Decision support and monitoring',
      outcome:
        'Information is gathered, summarised and surfaced on a schedule, so decisions do not wait on someone checking ten sources.',
      evidence: 'Signal and briefing systems running against live sources.',
      caseStudy: '/projects/macro-signal-room',
      tier: 'Connected or Controlled Pilot',
    },
  ],
  developing: {
    title: 'Developing from client demand',
    intro: 'Areas I am actively building toward. I will say plainly if your workflow lands here rather than above.',
    items: [
      'Customer support triage and drafting with approval gates',
      'Document and invoice extraction into finance systems',
      'Company and market intelligence gathering at scale',
    ],
  },
} as const;

/* ------------------------------------------------------------------ *
 * How I work page
 * ------------------------------------------------------------------ */

export const howIWork = {
  intro:
    'Every engagement starts with a no-cost review of one real workflow. Further work only begins if that review finds something worth fixing.',
  fitCheckNote:
    'The review is not a build. It is enough to decide whether implementation, further discovery, or no work is the right next step.',
  chooseDiscovery: {
    title: 'After the no-cost review',
    intro: 'Which route we recommend depends on how clearly the workflow can be scoped.',
    rows: [
      { signal: 'The process is bounded, the systems are understood, and the work can be estimated', steer: 'Scoped implementation' },
      { signal: 'Integrations, data, security or exceptions still need investigation before a responsible build', steer: 'Technical discovery' },
      { signal: 'The process should be simplified before any system is built', steer: 'Change the process first' },
      { signal: 'There is no worthwhile problem, or the timing is wrong', steer: 'No build' },
    ],
    close:
      'Technical discovery is not automatic. It is only recommended when the no-cost review is not enough to scope an implementation responsibly.',
  },
  chooseBuild: {
    title: 'What can follow',
    rows: [
      { need: 'Build the recommended first workflow, with controls and a handover', offer: 'Scoped implementation' },
      { need: 'Investigate access, APIs, data, risk or architecture before a build', offer: 'Technical discovery' },
      { need: 'Extend a working first workflow across more tools and teams', offer: 'Connected system' },
    ],
  },
  path: [
    { step: 'No-cost workflow review', detail: 'Map one process as it actually runs, find the friction, and recommend one starting point.' },
    { step: 'Agreed next step', detail: 'A scoped implementation if the path is clear, or technical discovery if it is not.' },
    { step: 'Build and demonstrate', detail: 'You see the workflow working against real cases before acceptance.' },
    { step: 'Handover and improve', detail: 'Documentation, training, and a defect fix period, then support as the work changes.' },
  ],
  nextStepLabel: 'Next step',
} as const;

/* ------------------------------------------------------------------ *
 * Featured work
 * ------------------------------------------------------------------ */

/** Homepage: OpsDesk demonstration as the lean proof block. */
export const homeFeaturedProjectSlugs = ['opsdesk-ai'] as const;

/** Case Studies index and case-study routing. */
export const featuredProjectSlugs = ['opsdesk-ai'] as const;

export const nav = [
  { label: 'What We Build', href: '/#what-we-build' },
  { label: 'How It Works', href: '/#systems' },
  { label: 'Work Together', href: '/#how-we-work' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const footerNav = [
  { label: 'What We Build', href: '/#what-we-build' },
  { label: 'How It Works', href: '/how-i-work' },
  { label: 'Work Together', href: '/#how-we-work' },
  { label: 'Case Studies', href: '/projects' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Privacy', href: '/privacy' },
] as const;

/* ------------------------------------------------------------------ *
 * Legacy exports
 *
 * Kept so the /*-lab.astro design sandboxes keep compiling. These derive
 * from the ladder above so there is still one source of commercial truth.
 * ------------------------------------------------------------------ */

export const homeHelpLabel = homeOfferSection.kicker;
export const homeHelpTitle = homeOfferSection.title;
export const homeHelpIntro = homeOfferSection.intro;
export const homeHelpCta = primaryCta;

export const homeHelpAreas = offerLadder.groups.flatMap((group) =>
  group.tiers.map((tier) => ({
    title: `${tier.name} · ${tier.price}`,
    description: tier.bestFor,
  })),
);

export const workPage = {
  intro: howIWork.intro,
  whoBestFor: {
    lead: homeWhoIntro,
    bullets: homeWhoPains,
    close: 'I turn that into a workflow your team can actually run.',
  },
  bestFitIf: [
    'You have repeated manual work with enough volume to justify fixing',
    'Information is re typed between an inbox, a spreadsheet and a CRM',
    'You know AI could help but not what to implement',
    'You need someone who can design, build, document and hand over the system',
  ],
  offerings: homeHelpAreas,
  whatYouGet,
} as const;

export const engagementProcess = howIWork.path;

export const hero = {
  role: 'Applied AI Systems',
  title: homeHero.headline,
  titleLines: ['Messy operations in.', 'Dependable', 'AI systems out.'] as const,
  intro: homeHero.support,
  punchline: {
    before: 'Built from ',
    messyWord: 'messy',
    after: ' operations.',
  },
  terminal: {
    filename: 'workflow.ts',
    lines: [
      { subject: 'intake', method: 'route' },
      { subject: 'repeat_tasks', method: 'automate' },
      { subject: 'approvals', method: 'gate' },
      { subject: 'clean_system', method: 'ready', arrow: true },
    ],
  },
  tagline: site.tagline,
  statusLabel: 'Available:',
  statusPill: 'For selected workflow projects' as const,
  statusChips: [
    'For selected workflow projects',
    'No-cost workflow review',
    'Intake · automation · approvals',
  ] as const,
  cta: primaryCta,
} as const;

export const homeWhyMattersTitle = 'The shift from answers to systems.' as const;
export const homeWhyMattersBody = [
  'The real shift in AI is the move from one-off answers to systems that can carry work across an entire workflow.',
  'A system can monitor information, coordinate tools, apply rules, escalate exceptions and produce useful output without a human pushing every step.',
  'That changes AI from something you consult into something that helps you operate.',
] as const;

export const workflowPattern = {
  title: 'How I work',
  steps: ['Messy Input', 'Structured Process', 'Useful Output', 'Review Loop'],
  examples: [
    { input: 'Shared inbox request', output: 'Classified, routed, approved, logged' },
    { input: 'Form submission', output: 'CRM record plus an alert to the right person' },
    { input: 'Quote accepted', output: 'Job created, invoice raised, chase scheduled' },
    { input: 'Scattered documents', output: 'Searchable knowledge the team can reuse' },
  ],
} as const;
