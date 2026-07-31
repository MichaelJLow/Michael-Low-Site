/**
 * Accent color theme. Change this one value to restyle the site.
 */
export const accentTheme = 'linen' as const;

export type AccentTheme = 'gold' | 'cyan' | 'silver' | 'warm' | 'champagne' | 'blue' | 'violet' | 'linen';

/*
 * Commercial source of truth for the public site.
 * Mirrors ../Applied AI Consultancy/offers-and-pricing.md.
 * Hourly rates and support retainers stay in proposals, not here.
 * House style: no em dashes in any string in this file.
 */

export const site = {
  name: 'Michael J. Low',
  practice: 'Applied AI Systems',
  brand: 'Michael J. Low · Applied AI Systems',
  title: 'Michael J. Low · Applied AI Systems',
  description:
    'I help growing businesses turn messy operations into dependable AI systems. Start with a Workflow Review from £350.',
  shortBio:
    'Applied AI systems for operations teams. I map how work really happens, build controlled automation around it, and prove the improvement.',
  tagline: 'Messy operations in. Dependable AI systems out.',
  url: 'https://michaeljlow.com',
  email: 'mike@michaeljlow.com',
  github: 'https://github.com/MichaelJLow',
  linkedin: 'https://www.linkedin.com/in/michael-j-low/',
  availability: 'Available for selected workflow projects and Workflow Reviews.',
  availabilityShort: 'Available for selected workflow projects',
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

export const primaryCta = {
  label: 'Start with a Workflow Review',
  href: '/contact',
  price: 'from £350',
} as const;

export const secondaryCta = {
  label: 'See case studies',
  href: '/projects',
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
 * Homepage
 * ------------------------------------------------------------------ */

export const homeHero = {
  kicker: 'Applied AI systems for operations teams',
  brandLines: ['Michael J. Low', 'Applied AI Systems'] as const,
  headline: 'I help growing businesses turn messy operations into dependable AI systems.',
  support:
    'I map how work really happens, build controlled automation around it, and prove the improvement before anyone is asked to trust it.',
} as const;

export const homeOfferSection = {
  kicker: 'Working with me',
  title: 'Start small, scope properly, then build.',
  intro:
    'Most work starts with a short piece of discovery. That tells us whether the workflow is worth automating, and what the build should actually be.',
} as const;

export const homeProofSection = {
  kicker: 'Selected case studies',
  title: 'Systems built around real operational work.',
  intro: 'Prototypes and working systems, labelled honestly. OpsDesk is the flagship operations build.',
} as const;

export const homeWhoLabel = 'Who this is for' as const;
export const homeWhoTitle = 'For teams running operations out of an inbox and a spreadsheet.' as const;
export const homeWhoIntro =
  'Small and growing businesses where work arrives as messages and forms, gets tracked in spreadsheets or a CRM, and depends on someone remembering to move it along.' as const;
export const homeWhoPains = [
  'A shared inbox where requests arrive and get missed',
  'Spreadsheets and a CRM that never quite agree',
  'The same information re-typed between tools',
  'Repeated admin that eats a person most of the week',
  'Mistakes that cost money, compliance or customers',
] as const;

/** Compact process strip kept on the homepage. */
export const processStrip = [
  {
    title: 'Observe',
    description:
      'Understand how the work really happens, including repeated friction, unofficial workarounds and unclear ownership.',
  },
  {
    title: 'Simplify',
    description: 'Reduce the process to its essential inputs, decisions, actions, handoffs and exceptions.',
  },
  {
    title: 'Build',
    description: 'Ship the smallest complete system people can use in real work, not a demonstration of the model.',
  },
  {
    title: 'Iterate',
    description:
      'Watch where it fails, learn from edge cases, and strengthen the workflow with clearer rules and human review.',
  },
] as const;

export const homeFounderLine = {
  text: 'Michael J. Low builds applied AI systems for operations teams.',
  linkLabel: 'About',
  href: '/about',
} as const;

/* ------------------------------------------------------------------ *
 * Contact
 * ------------------------------------------------------------------ */

const enquiryBodyLines = [
  'Hello Michael,',
  '',
  'I would like to start with a Workflow Review.',
  '',
  'Business and what we do:',
  'The workflow that is causing problems:',
  'Tools we currently use:',
  'Roughly how often it happens (per day or week):',
  'How did you find me:',
  '',
  'Thanks,',
];

export const contact = {
  kicker: 'Contact',
  title: 'Start with a Workflow Review.',
  price: 'from £350',
  intro:
    'A Workflow Review is one 90 minute working session on a single workflow, plus a short written summary with an honest recommendation. If the workflow turns out to need proper scoping, I will say so and credit the Review against an Audit.',
  subject: 'Workflow Review enquiry',
  bodyLines: enquiryBodyLines,
  helper:
    'The prompts below are prefilled in the email. Answer what you can. If it is easier to describe in your own words, do that instead.',
} as const;

export const enquiryMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  contact.subject,
)}&body=${encodeURIComponent(enquiryBodyLines.join('\n'))}`;

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
    'Two ways to start, three ways to build. Discovery scopes the work. Implementation price depends on that scope.',
  chooseDiscovery: {
    title: 'Review or Audit?',
    intro: 'The difference is depth and deliverable, not the size of your company.',
    rows: [
      { signal: 'One person can explain the whole process, one main tool chain', steer: 'Review' },
      { signal: 'Several people or teams hand work off, two or more systems', steer: 'Audit' },
      { signal: 'Mistakes have real cost in money, compliance or lost customers', steer: 'Audit' },
      { signal: 'Budget is tight and you are not sure automation is worth it', steer: 'Review' },
      { signal: 'You have already decided to build and need a proper quote', steer: 'Audit' },
    ],
    close:
      'If a Review uncovers complexity that needs proper scoping, I will recommend an Audit rather than quote a build I cannot stand behind.',
  },
  chooseBuild: {
    title: 'Which build fits?',
    rows: [
      { need: 'X should talk to Y, simple and predictable', offer: 'Starter Workflow' },
      { need: 'Several steps and tools working together', offer: 'Connected Workflows' },
      { need: 'Ambiguity, approvals, auditability, a controlled rollout', offer: 'Controlled Pilot' },
    ],
  },
  path: [
    { step: 'Review or Audit', detail: 'Discovery establishes whether to build, and what the build is.' },
    { step: 'Scope and quote', detail: 'A named workflow with acceptance criteria and a fixed price.' },
    { step: 'Build and demonstrate', detail: 'You see it working against real cases before acceptance.' },
    { step: 'Handover and stabilise', detail: 'Documentation, training, and a defect fix period.' },
  ],
} as const;

/* ------------------------------------------------------------------ *
 * Featured work
 * ------------------------------------------------------------------ */

/** Homepage: OpsDesk flagship plus two supporting case studies. */
export const homeFeaturedProjectSlugs = ['opsdesk-ai', 'ai-daily-pulse', 'macro-signal-room'] as const;

/** Case Studies index and case-study routing. */
export const featuredProjectSlugs = [
  'opsdesk-ai',
  'ai-daily-pulse',
  'macro-signal-room',
  'sentinel-mental-game-agent',
  'libertrade-journal-analytics',
] as const;

export const nav = [
  { label: 'How I work', href: '/how-i-work' },
  { label: 'Case Studies', href: '/projects' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
    'Workflow Reviews from £350',
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
