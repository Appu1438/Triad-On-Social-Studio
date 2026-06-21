// Shared service data — single source of truth for the Services overview
// page and every individual /services/:slug detail page.

const ICONS = {
    social: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="6" cy="12" r="2.6" />
            <circle cx="18" cy="6" r="2.6" />
            <circle cx="18" cy="18" r="2.6" />
            <line x1="8.2" y1="11" x2="15.8" y2="7" />
            <line x1="8.2" y1="13" x2="15.8" y2="17" />
        </svg>
    ),
    seo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="6.5" />
            <line x1="20" y1="20" x2="15.8" y2="15.8" />
        </svg>
    ),
    google: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 3.5v17M3.5 12h17" />
        </svg>
    ),
    meta: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 20V10.5C7 7 9.2 4.5 12 4.5s5 2.5 5 6V20" />
            <path d="M4.5 13.2C6 9.5 8.8 9.5 10.3 13.2M13.7 13.2c1.5-3.7 4.3-3.7 5.8 0" />
        </svg>
    ),
    branding: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 3l2.4 5.1 5.6.8-4 4 1 5.6L12 16l-5 2.5 1-5.6-4-4 5.6-.8z" />
        </svg>
    ),
    content: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 4h9l3 3v13H6z" />
            <line x1="9" y1="10" x2="15" y2="10" />
            <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
    ),
    web: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
        </svg>
    ),
    leads: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="9" cy="8" r="3" />
            <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
            <path d="M16 9.5l2 2 4-4.2" />
        </svg>
    ),
    analytics: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 4v16h16" />
            <path d="M8 15l3-4 3 2 4-6" />
        </svg>
    ),
}

const SERVICES_DATA = [
    {
        slug: 'social-media-marketing',
        icon: ICONS.social,
        title: 'Social Media Marketing',
        shortDesc:
            'Always-on content, community management and influencer partnerships that turn followers into customers.',
        heroDesc:
            'We build social presences that feel native to each platform and engineered to convert — from the first post to the last sale.',
        stats: [
            { value: '4.2x', label: 'Avg. Engagement Lift' },
            { value: '180+', label: 'Accounts Managed' },
            { value: '12+', label: 'Platforms Supported' },
        ],
        overview: [
            'Most brands treat social as a content calendar. We treat it as a growth channel — every post, story and reel is built around a measurable goal, whether that\u2019s awareness, traffic or direct sales.',
            'Our team handles strategy, creative production and community management end to end, so your brand shows up consistently without consuming your internal team\u2019s time.',
        ],
        benefits: [
            { title: 'Audience-first strategy', desc: 'Every platform and format choice is backed by where your customers actually spend their time.' },
            { title: 'Consistent brand voice', desc: 'One creative system across every channel, so your brand feels unmistakably you.' },
            { title: 'Creative that stops the scroll', desc: 'In-house designers and editors produce thumb-stopping content on a weekly cadence.' },
            { title: 'Community that converts', desc: 'Real-time response and moderation that turns comments and DMs into customers.' },
        ],
        included: [
            'Platform audit & channel strategy',
            'Monthly content calendar & creative production',
            'Photo, video and graphic asset creation',
            'Community management & response',
            'Influencer & creator partnerships',
            'Monthly performance reporting',
        ],
        process: [
            { step: '01', title: 'Audit', desc: 'Review current channels, audience and competitor activity.' },
            { step: '02', title: 'Plan', desc: 'Build a content pillars strategy mapped to your goals.' },
            { step: '03', title: 'Create & Post', desc: 'Produce and publish on a consistent, tested cadence.' },
            { step: '04', title: 'Engage & Optimize', desc: 'Manage community and double down on what performs.' },
        ],
        faqs: [
            { q: 'Which platforms do you manage?', a: 'Instagram, TikTok, Facebook, LinkedIn, Pinterest and X are most common — we recommend a mix based on where your audience actually is.' },
            { q: 'Do you handle paid social too?', a: 'Organic and paid are managed by the same team for full-funnel consistency; paid social is available standalone or bundled with Meta Ads.' },
            { q: 'How is content approved?', a: 'You get a shared content calendar with built-in approval rounds before anything goes live.' },
        ],
        caseStudy: { client: 'Coastline Hotels', tag: 'Hospitality', result: '+86k organic sessions / mo', desc: 'A platform-by-platform content overhaul turned social into the brand\u2019s top traffic source.' },
    },
    {
        slug: 'seo-optimization',
        icon: ICONS.seo,
        title: 'SEO Optimization',
        shortDesc:
            'Technical fixes, content strategy and link building that compound your organic traffic over time.',
        heroDesc:
            'Search is the channel that keeps paying you back. We build the technical foundation, content and authority needed to own your category.',
        stats: [
            { value: '3.4x', label: 'Avg. Organic Traffic Growth' },
            { value: '92%', label: 'Keywords Reaching Page 1' },
            { value: '6\u201312mo', label: 'Typical Time to Compound' },
        ],
        overview: [
            'SEO only works when technical health, content and authority move together. We start with a full audit to fix what\u2019s holding your site back, then layer in content and links engineered around real buyer intent.',
            'Every recommendation is tied to a ranking or traffic target, with monthly reporting that shows exactly what moved and why.',
        ],
        benefits: [
            { title: 'Technical foundation first', desc: 'Site speed, crawlability and structure fixed before a single keyword is targeted.' },
            { title: 'Content built to rank and convert', desc: 'Pages designed to satisfy search intent and move visitors toward a decision.' },
            { title: 'Authority that compounds', desc: 'Digital PR and link building that builds durable domain trust, not rented rankings.' },
            { title: 'Transparent tracking', desc: 'Rank and traffic dashboards updated in real time, no black-box reporting.' },
        ],
        included: [
            'Technical SEO audit & fixes',
            'Keyword & competitive research',
            'On-page optimization',
            'SEO content strategy & production',
            'Link building & digital PR',
            'Monthly ranking & traffic reports',
        ],
        process: [
            { step: '01', title: 'Audit', desc: 'Identify technical issues and content gaps holding back rankings.' },
            { step: '02', title: 'Strategy', desc: 'Map keyword opportunities to a prioritized content roadmap.' },
            { step: '03', title: 'Optimize & Publish', desc: 'Fix technical issues and ship optimized content on schedule.' },
            { step: '04', title: 'Build Authority', desc: 'Earn links and citations that compound rankings over time.' },
        ],
        faqs: [
            { q: 'How long until I see results?', a: 'Technical fixes can show impact within weeks; content and authority gains typically compound over 3\u20136 months.' },
            { q: 'Do you write the content yourselves?', a: 'Yes — our in-house content team writes, edits and optimizes every page using your brand voice.' },
            { q: 'Is link building safe for my site?', a: 'We only pursue white-hat, editorially earned links — no link farms or paid schemes that risk penalties.' },
        ],
        caseStudy: { client: 'Northbeam Analytics', tag: 'SaaS', result: '4.1x increase in demo signups', desc: 'An organic-first overhaul rebuilt the site\u2019s ranking footprint in a crowded SaaS category.' },
    },
    {
        slug: 'google-ads',
        icon: ICONS.google,
        title: 'Google Ads',
        shortDesc:
            'Search, shopping and display campaigns built around cost-efficient, high-intent conversions.',
        heroDesc:
            'We build Google Ads accounts around one number: cost-efficient revenue. Every campaign is structured, tested and optimized against it.',
        stats: [
            { value: '4.6x', label: 'Avg. ROAS' },
            { value: '$42M', label: 'Ad Spend Managed' },
            { value: '\u221238%', label: 'Avg. CPA Reduction' },
        ],
        overview: [
            'Most accounts are built once and left alone. Ours are managed like living systems — bids, budgets and creative reviewed weekly against performance data, not assumptions.',
            'We work across Search, Shopping, Display and Performance Max, structuring campaigns around how your customers actually search and buy.',
        ],
        benefits: [
            { title: 'Built around real revenue targets', desc: 'Campaigns structured to hit a CPA or ROAS goal, not just a click-through rate.' },
            { title: 'Full-funnel campaign structure', desc: 'Search, Shopping and remarketing working together instead of competing for budget.' },
            { title: 'Constant testing', desc: 'Ad copy, creative and landing pages tested on a continuous sprint cycle.' },
            { title: 'Clear, honest reporting', desc: 'You see exactly where every dollar went and what it returned.' },
        ],
        included: [
            'Account audit & restructure',
            'Search, Shopping & Display campaign builds',
            'Keyword & negative keyword strategy',
            'Ad copy & creative testing',
            'Conversion tracking setup',
            'Weekly bid & budget optimization',
        ],
        process: [
            { step: '01', title: 'Audit', desc: 'Review account history, wasted spend and conversion tracking.' },
            { step: '02', title: 'Build', desc: 'Restructure campaigns around intent and funnel stage.' },
            { step: '03', title: 'Launch', desc: 'Go live with tested creative and tight budget controls.' },
            { step: '04', title: 'Optimize', desc: 'Weekly bid, budget and creative refinements against targets.' },
        ],
        faqs: [
            { q: 'Do you manage the ad spend budget?', a: 'No — budget is paid directly to Google by you; our fee covers strategy and management of that spend.' },
            { q: 'Can you take over an existing account?', a: 'Yes, account audits and takeovers are part of our standard onboarding process.' },
            { q: 'What\u2019s a realistic ROAS target?', a: 'It depends on margin and average order value — we set a realistic target together during onboarding.' },
        ],
        caseStudy: { client: 'Lumen Skincare', tag: 'E-Commerce', result: 'CPA reduced from $58 to $24', desc: 'A full account restructure and creative testing program cut acquisition costs in half.' },
    },
    {
        slug: 'meta-ads',
        icon: ICONS.meta,
        title: 'Meta Ads',
        shortDesc: 'Facebook and Instagram media buying with creative testing built into every sprint.',
        heroDesc:
            'Meta rewards brands that test relentlessly. We run structured creative sprints so your account never stops improving.',
        stats: [
            { value: '3.8x', label: 'Avg. ROAS' },
            { value: '210k+', label: 'Audience Growth Generated' },
            { value: '15+', label: 'Creative Variants per Sprint' },
        ],
        overview: [
            'Meta Ads success comes down to creative velocity and audience precision. We run continuous testing pods that ship new ad variants every sprint, paired with audience and retargeting strategy built around your actual funnel.',
            'Every campaign is set up with clean tracking from day one, so attribution stays accurate as iOS and platform changes continue to shift the landscape.',
        ],
        benefits: [
            { title: 'Full-funnel campaign structure', desc: 'Awareness, consideration and conversion campaigns working together, not duplicating spend.' },
            { title: 'Creative testing frameworks', desc: 'Structured sprints that systematically find your next winning ad.' },
            { title: 'Precise audience strategy', desc: 'Lookalikes, interest stacks and retargeting built around your actual customer data.' },
            { title: 'Clean, accurate tracking', desc: 'Pixel and Conversions API setup that keeps attribution reliable.' },
        ],
        included: [
            'Account audit & campaign structure',
            'Awareness, consideration & conversion campaigns',
            'Creative testing pods',
            'Audience & retargeting strategy',
            'Pixel & Conversions API setup',
            'Weekly optimization & reporting',
        ],
        process: [
            { step: '01', title: 'Audit', desc: 'Review tracking, past performance and creative library.' },
            { step: '02', title: 'Build', desc: 'Structure campaigns around funnel stage and audience.' },
            { step: '03', title: 'Launch', desc: 'Ship the first wave of tested creative.' },
            { step: '04', title: 'Optimize', desc: 'Run weekly creative and audience refinement sprints.' },
        ],
        faqs: [
            { q: 'How many ad variants do you test?', a: 'Typically 10\u201315 new variants per sprint, narrowed down based on early performance signals.' },
            { q: 'Do you produce the ad creative?', a: 'Yes, our in-house creative team produces static, video and UGC-style ad assets.' },
            { q: 'How do you handle iOS tracking limitations?', a: 'We pair pixel tracking with server-side Conversions API for more reliable attribution.' },
        ],
        caseStudy: { client: 'Verdant Coffee Co.', tag: 'Retail', result: '2.9x ROAS', desc: 'A creative-led testing program turned a stagnant ad account into the brand\u2019s top revenue channel.' },
    },
    {
        slug: 'branding',
        icon: ICONS.branding,
        title: 'Branding',
        shortDesc: 'Identity systems, messaging and guidelines that make your brand instantly recognizable.',
        heroDesc:
            'A strong brand makes every other marketing dollar work harder. We build identity systems rooted in strategy, not just aesthetics.',
        stats: [
            { value: '14', label: 'Industry Awards' },
            { value: '180+', label: 'Brands Built' },
            { value: '100%', label: 'Asset Ownership, Always' },
        ],
        overview: [
            'Branding isn\u2019t a logo — it\u2019s the system that makes every touchpoint feel unmistakably yours. We start with discovery to understand your audience and category, then build a visual and verbal identity designed to scale across every channel.',
            'You walk away with a complete guideline system and asset library, fully owned by you, ready to hand to any future team or vendor.',
        ],
        benefits: [
            { title: 'Identity rooted in strategy', desc: 'Every design decision traces back to your audience, category and positioning.' },
            { title: 'Consistent across every touchpoint', desc: 'From social to packaging to your website, one cohesive system.' },
            { title: 'A voice that resonates', desc: 'Messaging frameworks that make your brand sound like a person, not a press release.' },
            { title: 'Guidelines that scale', desc: 'Documentation thorough enough for any future designer or agency to follow.' },
        ],
        included: [
            'Brand discovery workshop',
            'Logo & visual identity system',
            'Color, typography & brand guidelines',
            'Voice & messaging framework',
            'Brand asset library',
            'Launch toolkit',
        ],
        process: [
            { step: '01', title: 'Discover', desc: 'Research your audience, category and competitive landscape.' },
            { step: '02', title: 'Define', desc: 'Lock in positioning, voice and creative direction.' },
            { step: '03', title: 'Design', desc: 'Build the full visual identity and guideline system.' },
            { step: '04', title: 'Deliver', desc: 'Hand off a complete, ready-to-use asset library.' },
        ],
        faqs: [
            { q: 'Do I own the final files?', a: 'Yes, all logo files, guidelines and assets are fully owned by you upon delivery.' },
            { q: 'Can you rebrand an existing company?', a: 'Yes, rebrands follow the same discovery process with extra attention to legacy equity worth keeping.' },
            { q: 'How long does a brand project take?', a: 'Most full identity projects take 6\u20138 weeks from discovery to final delivery.' },
        ],
        caseStudy: { client: 'Forge Fitness App', tag: 'Health Tech', result: 'Full rebrand launch', desc: 'A complete identity overhaul repositioned the app ahead of a major funding round.' },
    },
    {
        slug: 'content-marketing',
        icon: ICONS.content,
        title: 'Content Marketing',
        shortDesc: 'Articles, video and lifecycle content that build trust long before the sales conversation starts.',
        heroDesc:
            'Content is the asset that keeps working after the campaign ends. We build editorial systems that compound trust and traffic over time.',
        stats: [
            { value: '2.8x', label: 'Avg. Content-Driven Traffic Growth' },
            { value: '120+', label: 'Pieces Published per Quarter' },
            { value: '6', label: 'Content Formats Covered' },
        ],
        overview: [
            'Great content marketing sits at the intersection of SEO, brand voice and genuine usefulness. We build an editorial calendar tied directly to your search and audience strategy, then produce it across the formats your buyers actually consume.',
            'Every asset is built to be repurposed — one article becomes a newsletter, a few social posts and a sales enablement piece, multiplying the return on every hour of production.',
        ],
        benefits: [
            { title: 'Strategy tied to SEO', desc: 'Editorial calendars built around real keyword and audience opportunity, not guesswork.' },
            { title: 'Multi-format production', desc: 'Articles, video, email and social content produced from a single strategy.' },
            { title: 'Builds trust before the pitch', desc: 'Content that earns attention long before a sales conversation starts.' },
            { title: 'A compounding asset library', desc: 'Every piece keeps working long after it\u2019s published.' },
        ],
        included: [
            'Content strategy & editorial calendar',
            'SEO-optimized articles & guides',
            'Video & short-form production',
            'Email & lifecycle content',
            'Content repurposing across channels',
            'Monthly performance reporting',
        ],
        process: [
            { step: '01', title: 'Research', desc: 'Identify topics and formats your audience is actively searching for.' },
            { step: '02', title: 'Plan', desc: 'Build an editorial calendar mapped to funnel stage.' },
            { step: '03', title: 'Produce', desc: 'Write, film and design content on a consistent cadence.' },
            { step: '04', title: 'Repurpose & Report', desc: 'Extend reach across channels and report on what\u2019s working.' },
        ],
        faqs: [
            { q: 'Who writes the content?', a: 'Our in-house editorial team writes and edits everything, briefed on your brand voice and subject matter.' },
            { q: 'Do you handle video production?', a: 'Yes, short-form and long-form video production is included for brands that want it.' },
            { q: 'How is content strategy decided?', a: 'Topics are prioritized using keyword research, competitor gaps and your sales team\u2019s most common customer questions.' },
        ],
        caseStudy: { client: 'Pivot Legal Group', tag: 'Professional Services', result: '#1 ranking on 6 target keywords', desc: 'An editorial overhaul built topical authority that out-ranked larger competitors.' },
    },
    {
        slug: 'web-design',
        icon: ICONS.web,
        title: 'Web Design',
        shortDesc: 'Conversion-focused websites and landing pages, designed and shipped fast.',
        heroDesc:
            'Your website is your hardest-working salesperson. We design and build sites that load fast, look sharp and convert visitors into leads.',
        stats: [
            { value: '+47%', label: 'Avg. Conversion Lift' },
            { value: '<2s', label: 'Avg. Page Load Time' },
            { value: '100', label: 'Avg. Accessibility Score' },
        ],
        overview: [
            'We design websites the way we run campaigns — backed by research into how your specific audience browses and buys. Every layout decision is made to reduce friction between a visitor and a conversion.',
            'From there, our development team ships fast, accessible, easy-to-maintain builds so your site stays fast and on-brand long after launch.',
        ],
        benefits: [
            { title: 'UX-led design', desc: 'Wireframes and flows built around how your customers actually make decisions.' },
            { title: 'Conversion-focused', desc: 'Every page designed around a clear next action, not just aesthetics.' },
            { title: 'Fast & accessible', desc: 'Built to modern performance and accessibility standards from day one.' },
            { title: 'Easy to manage', desc: 'Clean CMS setup so your team can update content without a developer.' },
        ],
        included: [
            'UX research & wireframes',
            'Custom visual design',
            'Responsive development',
            'Landing page systems',
            'Speed & accessibility optimization',
            'CMS setup & team training',
        ],
        process: [
            { step: '01', title: 'Discover', desc: 'Understand your goals, audience and content needs.' },
            { step: '02', title: 'Design', desc: 'Build wireframes and visual design for key pages.' },
            { step: '03', title: 'Build', desc: 'Develop a fast, responsive, accessible site.' },
            { step: '04', title: 'Launch', desc: 'Ship the site and train your team on the CMS.' },
        ],
        faqs: [
            { q: 'What platform do you build on?', a: 'We recommend a platform based on your needs — common choices include Webflow, WordPress and custom React builds.' },
            { q: 'Will I be able to update the site myself?', a: 'Yes, every build includes CMS training so your team can manage content independently.' },
            { q: 'How long does a website project take?', a: 'Most marketing sites take 6\u201310 weeks from discovery to launch, depending on scope.' },
        ],
        caseStudy: { client: 'Mintly Finance', tag: 'FinTech', result: '+47% landing page conversion', desc: 'A full redesign focused on clarity and trust signals dramatically lifted conversion rate.' },
    },
    {
        slug: 'lead-generation',
        icon: ICONS.leads,
        title: 'Lead Generation',
        shortDesc: 'Funnels, forms and outreach systems engineered to fill your pipeline with qualified leads.',
        heroDesc:
            'More traffic doesn\u2019t matter if it doesn\u2019t convert. We build funnels engineered specifically to turn visitors into qualified, sales-ready leads.',
        stats: [
            { value: '6.1%', label: 'Avg. Landing Page Conversion' },
            { value: '3.2x', label: 'Avg. Pipeline Growth' },
            { value: '24hr', label: 'Avg. Lead Response Window' },
        ],
        overview: [
            'Lead generation lives at the intersection of traffic, offer and follow-up. We design funnels and lead magnets that match real buyer intent, then connect them to nurture sequences that keep leads warm until they\u2019re ready to talk.',
            'Every funnel is built with your CRM in mind, so leads flow straight to your sales team with the context they need to close.',
        ],
        benefits: [
            { title: 'Funnels engineered to convert', desc: 'Every step designed to reduce drop-off between click and conversion.' },
            { title: 'Qualified leads, not just clicks', desc: 'Targeting and offers built to attract buyers, not browsers.' },
            { title: 'Nurture that closes', desc: 'Automated sequences that keep leads engaged until they\u2019re sales-ready.' },
            { title: 'Full pipeline visibility', desc: 'Reporting that shows exactly where leads come from and where they drop off.' },
        ],
        included: [
            'Funnel & landing page builds',
            'Lead magnets & gated content',
            'CRM & nurture automation setup',
            'Multi-channel lead capture',
            'Lead scoring framework',
            'Monthly pipeline reporting',
        ],
        process: [
            { step: '01', title: 'Map', desc: 'Define your ideal lead profile and current funnel gaps.' },
            { step: '02', title: 'Build', desc: 'Design landing pages, offers and capture forms.' },
            { step: '03', title: 'Automate', desc: 'Connect funnels to CRM and nurture sequences.' },
            { step: '04', title: 'Optimize', desc: 'Test and refine based on lead quality and conversion data.' },
        ],
        faqs: [
            { q: 'What counts as a qualified lead?', a: 'We define lead scoring criteria together during onboarding, based on your actual sales-qualified criteria.' },
            { q: 'Do you integrate with our CRM?', a: 'Yes, we work with most major CRMs including HubSpot, Salesforce and Pipedrive.' },
            { q: 'Is this different from your Web Design service?', a: 'Lead Generation focuses on funnels, offers and nurture; Web Design covers your broader site — many clients combine both.' },
        ],
        caseStudy: { client: 'Mintly Finance', tag: 'FinTech', result: '1.4% \u2192 6.1% landing page conversion', desc: 'A redesigned funnel and lead-scoring framework quadrupled qualified pipeline volume.' },
    },
    {
        slug: 'analytics-reporting',
        icon: ICONS.analytics,
        title: 'Analytics & Reporting',
        shortDesc: 'Dashboards and attribution models that show exactly which channels drive growth.',
        heroDesc:
            'You can\u2019t scale what you can\u2019t see clearly. We build dashboards and attribution models that connect every dollar spent to the outcomes that matter.',
        stats: [
            { value: '100%', label: 'Channels Tracked Accurately' },
            { value: '1', label: 'Single Source of Truth Dashboard' },
            { value: 'Monthly', label: 'Plain-Language Reviews' },
        ],
        overview: [
            'Most reporting tells you what happened — ours tells you why, and what to do next. We start by auditing your tracking setup, then build a custom dashboard that pulls every channel into one clear view.',
            'Multi-touch attribution modeling shows which touchpoints actually drive conversions, so budget moves toward what works instead of what\u2019s easiest to measure.',
        ],
        benefits: [
            { title: 'One source of truth', desc: 'Every channel\u2019s performance in a single dashboard, no more spreadsheet stitching.' },
            { title: 'Multi-touch attribution', desc: 'See which touchpoints actually drive conversions, not just the last click.' },
            { title: 'Plain-language reviews', desc: 'Monthly walkthroughs that explain the numbers, not just display them.' },
            { title: 'Decisions backed by data', desc: 'Budget and strategy shifts grounded in what the data actually shows.' },
        ],
        included: [
            'Tracking & tagging audit',
            'Custom dashboard build',
            'Multi-touch attribution modeling',
            'Goal & KPI framework setup',
            'Monthly performance reviews',
            'Ad-hoc deep-dive reporting',
        ],
        process: [
            { step: '01', title: 'Audit', desc: 'Review existing tracking, tagging and reporting gaps.' },
            { step: '02', title: 'Build', desc: 'Set up clean tracking and a custom dashboard.' },
            { step: '03', title: 'Model', desc: 'Layer in attribution modeling across channels.' },
            { step: '04', title: 'Review', desc: 'Walk through results monthly in plain language.' },
        ],
        faqs: [
            { q: 'What tools do you use?', a: 'We typically build on GA4, Looker Studio and your CRM, customized to your existing stack.' },
            { q: 'Can you fix broken tracking from another agency?', a: 'Yes, tracking audits and cleanup are a common starting point for new clients.' },
            { q: 'Do you offer this as a standalone service?', a: 'Yes, though most clients bundle it with at least one paid media service for full-funnel visibility.' },
        ],
        caseStudy: { client: 'Northbeam Analytics', tag: 'SaaS', result: 'Full-funnel attribution clarity', desc: 'A unified dashboard finally connected marketing spend to pipeline and revenue outcomes.' },
    },
]

// eslint-disable-next-line react-refresh/only-export-components
export function getServiceBySlug(slug) {
    return SERVICES_DATA.find((s) => s.slug === slug)
}

export default SERVICES_DATA