// Work Visa Programs Data
const workVisaPrograms = [
  // UK Programs
  {
    id: 1,
    slug: 'uk-skilled-worker-visa',
    country: 'uk',
    name: 'United Kingdom',
    title: 'UK Skilled Worker Visa',
    subtitle: 'Live and work in the UK with a licensed sponsor',
    flagImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    description: 'The UK Skilled Worker Visa allows foreign nationals to live and work in the UK in an eligible skilled job with a licensed sponsor. It replaced the Tier 2 (General) work visa in December 2020.',
    additionalInfo: 'The UK Skilled Worker visa offers a range of benefits for foreign nationals looking to live and work in the United Kingdom. This visa provides a structured pathway to build your career in one of the world\'s leading economies.',
    benefits: [
      { title: 'Pathway to Permanent Residency' },
      { title: 'Right to Work in the UK' },
      { title: 'Bring Dependents' },
      { title: 'Access to Public Services' },
      { title: 'No Cap on Numbers' },
      { title: 'Job Flexibility (to an extent)' },
      { title: 'Longer Duration' }
    ]
  },
  {
    id: 2,
    slug: 'uk-creative-worker-visa',
    country: 'uk',
    name: 'United Kingdom',
    title: 'UK Creative Worker Visa',
    subtitle: 'Temporary work visa for creative industries',
    flagImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    description: 'The UK Creative Worker visa is a temporary work visa for individuals coming to the UK to work in the creative industries, such as film, TV, dance, theatre, music, and fashion. It replaced the former Tier 5 (Creative and Sporting) visa.',
    additionalInfo: 'This visa offers unique opportunities for creative professionals to showcase their talents in the UK\'s vibrant creative sector, providing flexibility and access to world-class projects.',
    benefits: [
      { title: 'Opportunity to Work in the UK\'s Creative Industries' },
      { title: 'No English Language Requirement' },
      { title: 'Fast Processing Time' },
      { title: 'Flexibility with Multiple Employers' },
      { title: 'Bring Dependents' },
      { title: 'Up to 2 Years in the UK' },
      { title: 'No Job Cap' },
      { title: 'No Cooling-Off Period' }
    ]
  },
  {
    id: 3,
    slug: 'uk-tier-5',
    country: 'uk',
    name: 'United Kingdom',
    title: 'UK Tier 5 Visa',
    subtitle: 'Temporary work and cultural exchange opportunities',
    flagImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    description: 'The UK Tier 5 visa offers foreign nationals temporary work and cultural exchange opportunities in the UK. It includes several subcategories such as Youth Mobility Scheme, Temporary Worker - Charity Worker, Government Authorized Exchange, and International Agreement.',
    additionalInfo: 'This visa provides a unique opportunity for young professionals and temporary workers to gain valuable UK experience while exploring British culture and building international connections.',
    benefits: [
      { title: 'Temporary Work Opportunities in various fields including creative, sporting, charity work, and government exchange programs' },
      { title: 'Cultural Exchange opportunities for young people via Youth Mobility Scheme' },
      { title: 'Work for Approved Employers who are licensed sponsors' },
      { title: 'Extend or Switch Visa to different visa categories if requirements are met' },
      { title: 'Family Support - bring spouse and children to the UK' },
      { title: 'Access to Healthcare after paying Immigration Health Surcharge (IHS)' },
      { title: 'Networking and Experience for future opportunities' }
    ]
  },
  {
    id: 4,
    slug: 'uk-self-sponsorship-programs',
    country: 'uk',
    name: 'United Kingdom',
    title: 'UK Self Sponsorship Program',
    subtitle: 'Unique pathway for entrepreneurs and skilled individuals',
    flagImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    description: 'The UK Self-Sponsorship Program offers a unique pathway for entrepreneurs and skilled individuals to live and work in the UK. While not an official visa category, it allows eligible applicants to sponsor themselves for visas like the Innovator or Skilled Worker, granting them the freedom to pursue their business ventures or careers without relying on external sponsorship.',
    additionalInfo: 'This innovative program empowers ambitious professionals to take control of their UK immigration journey, offering unprecedented flexibility and independence in establishing your presence in the British market.',
    benefits: [
      { title: 'Independence - Work autonomously without need for employer sponsorship' },
      { title: 'Self-Employment - Establish and operate your own business in the UK' },
      { title: 'Pathway to Settlement - Qualify for Indefinite Leave to Remain (ILR)' },
      { title: 'Family Support - Bring dependents under specific conditions' },
      { title: 'Flexible Work Options - Run your own business while living in the UK' }
    ]
  },
  {
    id: 5,
    slug: 'uk-innovator-visa',
    country: 'uk',
    name: 'United Kingdom',
    title: 'UK Innovator Visa',
    subtitle: 'For experienced entrepreneurs with innovative business ideas',
    flagImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    description: 'The UK Innovator Visa offers experienced entrepreneurs the opportunity to establish and operate an innovative business in the United Kingdom. To qualify, applicants must secure endorsement from an approved UK organization for their viable and scalable business idea and demonstrate access to at least £50,000 in investment funds.',
    additionalInfo: 'This visa is an excellent option for experienced entrepreneurs with an innovative business idea who wish to launch and grow their business in the UK, with the potential for permanent settlement after just 3 years.',
    benefits: [
      { title: 'Business Ownership - Establish and manage your own business in the UK' },
      { title: 'Flexibility - Adapt business model or start new business maintaining innovation' },
      { title: 'Path to Permanent Residency after 3 years subject to business success' },
      { title: 'Family - Family members can join visa holders in the UK' }
    ]
  },
  // Ireland
  {
    id: 6,
    slug: 'ireland-work-visa',
    country: 'ireland',
    name: 'Ireland',
    title: 'Ireland Work Visa',
    subtitle: 'Join Europe\'s fastest-growing economy',
    flagImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80',
    description: 'Ireland welcomes skilled professionals and graduates from around the world to live and work in one of Europe\'s fastest-growing economies. The country offers several work visa and permit options depending on your qualifications and job type.',
    additionalInfo: 'Ireland\'s work visa programs include Critical Skills Employment Permit (CSEP), General Employment Permit (GEP), Post-Study Work Visa, and Intra-Company Transfer (ICT) Permit, each designed to meet different professional needs and career stages.',
    benefits: [
      { title: 'Critical Skills Employment Permit for highly skilled professionals (€32,000-€64,000 per year)' },
      { title: 'Pathway to Permanent Residency (Stamp 4) after 2 years' },
      { title: 'General Employment Permit for various industries (minimum €34,000 per year)' },
      { title: 'Post-Study Work Visa for up to 24 months for Irish graduates' },
      { title: 'Fast-growing tech and healthcare industries' },
      { title: 'Clear pathway to permanent residency' },
      { title: 'English-speaking, multicultural work environment' },
      { title: 'Gateway to European career and travel opportunities' }
    ]
  },
  // Switzerland
  {
    id: 7,
    slug: 'switzerland-work-permit',
    country: 'switzerland',
    name: 'Switzerland',
    title: 'Switzerland Work Permit',
    subtitle: 'Your gateway to a life of opportunities',
    flagImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
    description: 'Dreaming of working amidst the Swiss Alps? Switzerland is now open for skilled professionals looking to take their careers to the next level. Switzerland offers excellent career prospects for skilled professionals across multiple sectors with one of the world\'s highest living standards.',
    additionalInfo: 'Work opportunities are available for Healthcare Workers & Care Assistants, Skilled Workers across various industries, and Finance and Administrative Professionals in top cities like Zurich, Geneva, Basel, Bern, and Lausanne.',
    benefits: [
      { title: 'High standard of living' },
      { title: 'Attractive salary packages' },
      { title: 'Safe and scenic environment' },
      { title: 'Strong demand for international talent' },
      { title: 'Top employers in Zurich, Geneva, Basel, Bern, and Lausanne' },
      { title: 'Opportunities in Healthcare, Finance, and Administrative sectors' }
    ]
  },
  // Czech Republic
  {
    id: 8,
    slug: 'czech-republic-work-visa',
    country: 'czech-republic',
    name: 'Czech Republic',
    title: 'Czech Republic Work Visa',
    subtitle: 'Work legally in Central Europe\'s dynamic economy',
    flagImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80',
    description: 'The Czech Republic Work Visa allows foreign nationals to live and work legally in the Czech Republic. It is required for non-EU/EEA citizens who want to take up employment in the country, ensuring that applicants can work safely while enjoying the benefits of life in one of Central Europe\'s most dynamic and business-friendly countries.',
    additionalInfo: 'The Czech Republic offers various work visa options including Employee Work Visa, Intra-Company Transfer Visa, Blue Card EU for highly skilled professionals, and Seasonal or Short-Term Work Visa for temporary employment.',
    benefits: [
      { title: 'Employee Work Visa for individuals employed by Czech companies' },
      { title: 'Intra-Company Transfer Visa for transferred employees' },
      { title: 'Blue Card EU for highly skilled professionals in IT, engineering, or healthcare' },
      { title: 'Seasonal or Short-Term Work Visa for tourism, agriculture, or hospitality' },
      { title: 'Strategic location in Central Europe' },
      { title: 'Business-friendly environment' },
      { title: 'Access to EU mobility opportunities' }
    ]
  }
]

// Helper function to get all work visa programs
export const getAllWorkVisaPrograms = () => {
  return workVisaPrograms
}

// Helper function to get work visa program by slug
export const getWorkVisaProgramBySlug = (slug) => {
  return workVisaPrograms.find(program => program.slug === slug)
}

// Helper function to get work visa programs by country
export const getWorkVisaProgramsByCountry = (country) => {
  return workVisaPrograms.filter(program => program.country === country)
}

export default workVisaPrograms
