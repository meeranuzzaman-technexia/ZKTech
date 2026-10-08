// ---------------------------------------------------------------------------
// Structured content scraped from the public ZK Tech Solutions site.
// Crawl date: 2026-10-08. Marketing claims, FAQ answers, and pricing are reproduced as posted;
// they are not independently verified. Individual portfolio images are unnamed
// on the site, so the portfolio labels below are generic category/index labels.
// ---------------------------------------------------------------------------

export const LIVE = 'https://www.zktechsolutions.org'
const ASSETS = `${LIVE}/assets/images`

export const contact = {
  email: 'support@zktechsolutions.org',
  phone: '(346) 904-4486',
  phoneLabel: '(346) 904-4486',
  phoneHref: 'tel:+13469044486',
  address: '16927 Kaitlyn Kerria Ct., Richmond, TX 77407',
  maps: 'https://www.google.com/maps/search/?api=1&query=16927%20Kaitlyn%20Kerria%20Ct%2C%20Richmond%20TX%2077407',
  facebook: 'https://www.facebook.com/profile.php?id=61590346173208',
  instagram: 'https://www.instagram.com/zktechsolutions/',
  since: '1999',
}

// Top-level header entries; Company and Our Services open the dropdown data below.
export const navLinks = [
  { label: 'Home', href: `${LIVE}/index.php`, index: '01' },
  { label: 'Company', href: `${LIVE}/#` },
  { label: 'Our Services', href: `${LIVE}/#` },
  { label: 'Pricing', href: `${LIVE}/pages/pricing.php` },
  { label: 'Contacts', href: `${LIVE}/pages/contact-us.php` },
]

export const menuServices = [
  { label: 'Logo & Stationery Design', href: `${LIVE}/pages/logo.php` },
  { label: 'Website Design & Development', href: `${LIVE}/pages/website-dev.php` },
  { label: 'Mobile Application', href: `${LIVE}/pages/mobile-application.php` },
  { label: 'SEO Optimization', href: `${LIVE}/pages/seo-optimization.php` },
  { label: 'SEM (Google/Bing Ads)', href: `${LIVE}/pages/sem-google-bing-ads.php` },
  { label: 'Social Media Marketing', href: `${LIVE}/pages/social-media-marketing.php` },
  { label: '2D & 3D Animation', href: `${LIVE}/pages/2d-3d-animation.php` },
  { label: 'Whiteboard Animation', href: `${LIVE}/pages/whiteboard-animation.php` },
  { label: 'Motion Graphic', href: `${LIVE}/pages/motion-graphics.php` },
  { label: 'Web Copy', href: `${LIVE}/pages/web-copy.php` },
  { label: 'SEO Content Writing', href: `${LIVE}/pages/seo-writing.php` },
  { label: 'Blog Writing', href: `${LIVE}/pages/blog-writing.php` },
  { label: 'Online Tutoring', href: `${LIVE}/pages/online-tutoring.php` },
  { label: 'Book Writing', href: `${LIVE}/pages/book-writing.php` },
  { label: 'Book Publishing', href: `${LIVE}/pages/book-publishing.php` },
  { label: 'eBook', href: `${LIVE}/pages/ebook.php` },
  { label: 'Stationery Printing', href: `${LIVE}/pages/stationery-print.php` },
  { label: 'Custom Printing', href: `${LIVE}/pages/custom-print.php` },
  { label: 'Digital Printing', href: `${LIVE}/pages/digital-print.php` },
]

export const menuCompany = [
  { label: 'About Us', href: `${LIVE}/pages/about-us.php` },
  { label: 'Why Choose Us', href: `${LIVE}/pages/why-us.php` },
  { label: 'Help & FAQs', href: `${LIVE}/pages/faqs.php` },
]

export const allServicesLink = {
  label: 'View all services',
  href: `${LIVE}/pages/services.php`,
}


export const serviceCategories = [
  {
    label: 'Design & Development',
    href: `${LIVE}/pages/website-dev.php`,
    services: ['Logo & Stationery Design', 'Website Design & Development', 'Mobile Application'],
  },
  {
    label: 'Digital Marketing',
    href: `${LIVE}/pages/seo-optimization.php`,
    services: ['SEO Optimization', 'SEM (Google/Bing Ads)', 'Social Media Marketing'],
  },
  {
    label: 'Animation',
    href: `${LIVE}/pages/2d-3d-animation.php`,
    services: ['2D & 3D Animation', 'Whiteboard Animation', 'Motion Graphic'],
  },
  {
    label: 'Content Writing',
    href: `${LIVE}/pages/web-copy.php`,
    services: ['Web Copy', 'SEO Content Writing', 'Blog Writing', 'Online Tutoring'],
  },
  {
    label: 'Books & Publishing',
    href: `${LIVE}/pages/book-writing.php`,
    services: ['Book Writing', 'Book Publishing', 'eBook'],
  },
  {
    label: 'Printing Services',
    href: `${LIVE}/pages/digital-print.php`,
    services: ['Stationery Printing', 'Custom Printing', 'Digital Printing'],
  },
]

// ---- Home hero: actual carousel headlines and supporting copy --------------
export const heroWords = [
  { label: 'Build Web Platforms', pos: 'w1' },
  { label: 'Ship Mobile Apps', pos: 'w2' },
  { label: 'Scale Digital Growth', pos: 'w3' },
]

export const heroIntro =
  'Enterprise-grade websites and web platforms built for performance, security, and measurable growth.'

export const heroSlides = [
  {
    title: 'Build Web Platforms',
    description: 'Enterprise-grade websites and web platforms built for performance, security, and measurable growth.',
    ticker: 'Software · Web · Cloud',
  },
  {
    title: 'Ship Mobile Apps',
    description: 'Native and cross-platform mobile applications engineered for scale and long-term reliability.',
    ticker: 'Mobile · iOS · Android',
  },
  {
    title: 'Scale Digital Growth',
    description: 'Data-driven SEO and digital strategies that increase visibility, traffic, and conversions.',
    ticker: 'SEO · Marketing · Growth',
  },
]

export const heroTicker = [
  'Software · Web · Cloud',
  'Mobile · iOS · Android',
  'SEO · Marketing · Growth',
]

// ---- Home section 2: brand identity ---------------------------------------
export const manifesto = {
  kicker: 'Timely Service Delivery & Incident Resolutions!!',
  lines: [
    "Booming with competition, the business can't afford not to have a distinctive brand name anymore.",
    "At ZK Tech Solutions we're not just branding experts; we are your strategic partners, focused not on copying brand, but rather carefully creating unique solutions that will propel your brand forward and cause you to stand out from the crowd.",
  ],
  outro:
    'Make your potential consumers whom you target recall your distinctive branding brands for a long time with our branding solutions.',
  features: [
    'High Customer Satisfaction',
    'Customized Designs',
    'Money-Back Guarantee',
    '24/7 Customer Support',
    'Expert Design Team',
    'Flexible Timelines',
  ],
  trustLine: "Trusted By The World's Best Organizations",
  media: `${ASSETS}/home/2.webp`,
}

// ---- Portfolio: the live site shows category galleries, not named case studies.
const webPortfolio = Array.from({ length: 12 }, (_, i) => {
  const n = i + 1
  const index = String(n).padStart(2, '0')
  return {
    index,
    name: `Website Design ${index}`,
    category: 'Website Design',
    image: `${ASSETS}/portfolio/web/${n}.webp`,
    href: `${ASSETS}/portfolio/web/t-${n}.webp`,
  }
})

const numberedPortfolio = (folder, category, count = 12) =>
  Array.from({ length: count }, (_, i) => {
    const n = i + 1
    const index = String(n).padStart(2, '0')
    const image = `${ASSETS}/portfolio/${folder}/${n}.webp`
    return { index, name: `${category} ${index}`, category, image, href: image }
  })

export const portfolioSets = {
  websiteDesign: webPortfolio,
  logoDesign: numberedPortfolio('logo', 'Logo Design'),
  appDesign: numberedPortfolio('app', 'App Design'),
  stationeryDesign: numberedPortfolio('statio', 'Stationery Design'),
}

export const featured = {
  name: 'Website Design',
  blurb: 'For us, a magnificent website is one that sells, excels, and enthralls.',
  tags: ['WEBSITE DESIGN'],
  cover: `${ASSETS}/portfolio/web/1.webp`,
  href: `${LIVE}/pages/website-dev.php`,
}

export const projects = webPortfolio.slice(0, 6)

// ---- Services: labels from /pages/services.php; descriptions from each linked service page.
export const services = [
  {
    index: '01',
    title: 'Logo & Stationery Design',
    desc: "Our team strives to design logos that resonate with your brand while meeting your industry’s standards.",
    image: `${ASSETS}/services/logo-design/4.webp`,
    href: `${LIVE}/pages/logo.php`,
  },
  {
    index: '02',
    title: 'Website Design & Development',
    desc: "While nobody could, but our website designs will promote you 24/7.",
    image: `${ASSETS}/services/website-developemnt/1.webp`,
    href: `${LIVE}/pages/website-dev.php`,
  },
  {
    index: '03',
    title: 'Mobile Application',
    desc: "From Stores to Apps, we care for your comfort while compromising ours!",
    image: `${ASSETS}/services/Ios-android/3.webp`,
    href: `${LIVE}/pages/mobile-application.php`,
  },
  {
    index: '04',
    title: 'SEO Optimization',
    desc: "With shorter product cycles, innovation, and mergers contributing to constant change, you are faced making business decisions every day.",
    image: `${ASSETS}/services/seo/2.webp`,
    href: `${LIVE}/pages/seo-optimization.php`,
  },
  {
    index: '05',
    title: 'SEM (Google/Bing Ads)',
    desc: "Drive more leads, sales, and revenue for your business with pay-per-click (PPC) advertising and search engine optimization (SEO).",
    image: `${ASSETS}/services/sem/2.webp`,
    href: `${LIVE}/pages/sem-google-bing-ads.php`,
  },
  {
    index: '06',
    title: 'Social Media Marketing',
    desc: "create the right business strategies to build your brand, maximize your ranking and sales to take your business to the next level in the digital landscape",
    image: `${ASSETS}/services/socail-media/5.webp`,
    href: `${LIVE}/pages/social-media-marketing.php`,
  },
  {
    index: '07',
    title: '2D & 3D Animation',
    desc: "We realize, that customers are not always in to be engaged but they are looking to be entertained.",
    image: `${ASSETS}/services/2D-3D-animation/4.webp`,
    href: `${LIVE}/pages/2d-3d-animation.php`,
  },
  {
    index: '08',
    title: 'Whiteboard Animation',
    desc: "Make sure when you are viewed your viewer has more to take from you than to give.",
    image: `${ASSETS}/services/white-bord/3.webp`,
    href: `${LIVE}/pages/whiteboard-animation.php`,
  },
  {
    index: '09',
    title: 'Motion Graphic',
    desc: "Before we read, we view. So make sure it is worth viewing.",
    image: `${ASSETS}/services/motion-graphics/3.webp`,
    href: `${LIVE}/pages/motion-graphics.php`,
  },
  {
    index: '10',
    title: 'Web Copy',
    desc: "We believe, content is the reason search began in the first place.",
    image: `${ASSETS}/services/web-copy-content/3.webp`,
    href: `${LIVE}/pages/web-copy.php`,
  },
  {
    index: '11',
    title: 'SEO Content Writing',
    desc: "SEO content writing services are an essential part of every digital marketing program.",
    image: `${ASSETS}/services/seo/3.webp`,
    href: `${LIVE}/pages/seo-writing.php`,
  },
  {
    index: '12',
    title: 'Blog Writing',
    desc: "We are not the king but the Kingdom of Writers.",
    image: `${ASSETS}/services/blog-wrting/2.webp`,
    href: `${LIVE}/pages/blog-writing.php`,
  },
  {
    index: '13',
    title: 'Online Tutoring',
    desc: "Live, flexible online sessions tailored to your learning goals — academics, test prep, and professional skills.",
    image: `${ASSETS}/services/online-tutoring/about.png`,
    href: `${LIVE}/pages/online-tutoring.php`,
  },
  {
    index: '14',
    title: 'Book Writing',
    desc: "Turn your ideas into a compelling manuscript with expert writers and structured editorial support.",
    image: `${ASSETS}/services/web-copy-content/2.webp`,
    href: `${LIVE}/pages/book-writing.php`,
  },
  {
    index: '15',
    title: 'Book Publishing',
    desc: "Publish with confidence — we guide your book from finished manuscript to a professional, market-ready release.",
    image: `${ASSETS}/services/web-copy-content/3.webp`,
    href: `${LIVE}/pages/book-publishing.php`,
  },
  {
    index: '16',
    title: 'eBook',
    desc: "Create, design, and distribute professional digital books that engage readers on any device.",
    image: `${ASSETS}/services/web-copy-content/2.webp`,
    href: `${LIVE}/pages/ebook.php`,
  },
  {
    index: '17',
    title: 'Stationery Printing',
    desc: "Professional stationery printing is an important step for any business to take for several reasons.",
    image: `${ASSETS}/services/cloth-printing/2.webp`,
    href: `${LIVE}/pages/stationery-print.php`,
  },
  {
    index: '18',
    title: 'Custom Printing',
    desc: "Get your presence far and beyond with our printed apparel.",
    image: `${ASSETS}/services/flyer-brocher-printing/1.webp`,
    href: `${LIVE}/pages/custom-print.php`,
  },
  {
    index: '19',
    title: 'Digital Printing',
    desc: "We could save you from wastes of bin and darkness of pockets.",
    image: `${ASSETS}/services/bussines-card/3.webp`,
    href: `${LIVE}/pages/digital-print.php`,
  },
]

// ---- Section 5: process (the homepage's four steps) ------------------------
export const process = [
  {
    step: '01',
    title: 'Research And Analysis',
    body: 'Being part of ZK Tech Solutions, we look specifically at the project and the requirements, doing extensive scrutiny and studies, to holistically detect any possible cracks and to prioritize them.',
  },
  {
    step: '02',
    title: 'Strategic Planning',
    body: 'Our competent team will develop highly customized tactics, together with all the plans that will point you toward success.',
  },
  {
    step: '03',
    title: 'Design And Development',
    body: 'Upon strategy implementation, our design and development team, which is comprised of experts in the field of research and new technologies is taking it from there to conduct product creation according to the plan.',
  },
  {
    step: '04',
    title: 'The Launch',
    body: 'One of the key things before the official launch of your website, app, or logo is thorough testing to make sure every feature in it is working properly to provide an excellent launch with no hassles.',
  },
]

// ---- Section 6: figures shown on the live homepage -------------------------
export const stats = [
  { value: 400, suffix: '+', label: 'Projects Ordered' },
  { value: 1000, suffix: '+', label: 'Happy Clients' },
  { value: 900, suffix: '+', label: 'Projects Completed' },
  { value: 300, suffix: '+', label: 'Comments' },
]

export const clientLogos = [1, 2, 3, 4].map((n) => ({
  image: `${ASSETS}/clients/${n}.webp`,
  label: 'Client logo',
}))

export const badges = [
  { image: `${ASSETS}/awards/icons/1.webp`, label: 'CSS Design Award' },
  { image: `${ASSETS}/awards/icons/2.webp`, label: 'W3 Design Award' },
  { image: `${ASSETS}/awards/icons/3.webp`, label: 'The FWA Award' },
  { image: `${ASSETS}/process-2.webp`, label: 'WWW Awards' },
]

export const awards = ['W3 Design Award', 'The FWA Award', 'WWW Awards', 'CSS Design Award']

export const industries = [
  'Engineering',
  'Construction',
  'Technology',
  'Automotive',
  'Catalogues',
  'Religion',
  'Social',
  'Education',
  'Resource',
  'Sports',
  'Financial',
  'Insurance',
  'Consultation',
  'Architectural',
  'Food',
  'Medical',
  'Health',
  'Travel',
  'Matrimony',
  'Art',
  'Communication',
  'Entertainment',
  'Environmental',
  'Fashion',
  'Spa',
  'Children',
  'Craft',
  'Music',
  'Navigation',
  'News',
]

// Quotes are attributed to the names shown on the live testimonial cards;
// company names are omitted because the site does not attach companies to them.
export const testimonials = [
  {
    quote: 'I could not be happier with the results Diego F. obtained for us. He was diligent and artistic in getting us exactly the logo we were looking for. I highly recommend them- straight forward, easy and fast turn around. Thank you Diego! Our company loves your work!!!',
    name: 'Dragos Sandulescu',
  },
  {
    quote: 'They did such a great job with my logo! Responded in a timely manner and provided me with wonderful options! Will definitely be using them in the future for all my business needs!',
    name: 'Laurie Hamberlin',
  },
  {
    quote: 'My designer was Norman Sha and he was great. He changed every details I asked until we came up with the perfect logo. I would definitely recommend ZK Tech Solutions.',
    name: 'Tamra Preston',
  },
  {
    quote: 'I had a great experience with my project manager Diego. He was very professional and was able to produce an initial concept in no time! We now have a logo for our company that we can identify with, and Diego was able to make this happen. Thank you ZK Tech Solutions for such great team performance.',
    name: 'Annette Silva',
  },
]

export const recentBlogs = [
  {
    "title": "Top Worst Types of Digital Advertising",
    "date": "Jan 13, 2024",
    "categories": [
      "Consulting",
      "Sales"
    ],
    "excerpt": "Digital advertising gets a bad rap sometimes but that’s because most strategies compromise user experiences. In addition, this advertising medium is extremely powerful but if it falls into the wrong hands, it can have dire consequences for a business’s online and offline reputation. That is not to say that there aren’t any bad digital marketing strategies out there at all.",
    "image": "https://www.zktechsolutions.org/assets/images/blog/grid/1.webp",
    "href": "https://www.zktechsolutions.org/#"
  },
  {
    "title": "The Benefits of Content Marketing",
    "date": "Jan 17, 2024",
    "categories": [
      "Tech",
      "Communications"
    ],
    "excerpt": "Myriad businesses around the world today are reaping the many benefits offered by content marketing. From brand visibility to target audience engagement and from lead generation to risk mitigation, the advantages rendered by content marketing are nigh endless. It is an inbound marketing tactic which helps you attract and engage prospects, and then convert them into customers.",
    "image": "https://www.zktechsolutions.org/assets/images/blog/grid/2.webp",
    "href": "https://www.zktechsolutions.org/#"
  },
  {
    "title": "Content Marketing vs Traditional Advertising",
    "date": "Jan 20, 2024",
    "categories": [
      "Digital Business",
      "Cloud"
    ],
    "excerpt": "The purpose behind it all remains ever the same. Call out to a potential customer, get your message across, attract them, and offer them something which they'll hopefully purchase. From hawkers in the ancient bazaars of Egypt all the way through to radio and television ads, and even unto the digital age of the internet - someone, somewhere is forever trying to sell something to someone else.",
    "image": "https://www.zktechsolutions.org/assets/images/blog/grid/3.webp",
    "href": "https://www.zktechsolutions.org/#"
  }
]

export const faqs = [
  {
    "question": "I'D LOVE TO WORK WITH YOU, HOW DO WE GET STARTED?",
    "answer": "We couldn’t be happier! Please get in touch with us to say hi and tell us about your project. We’ll be sending through more information about our services, and we love to hear from you any questions or details that you may require. Once you questions being answered we will start working on your project , after contract has been signed and deposit taken."
  },
  {
    "question": "DO YOU WORK WITH LOCAL AND INTERNATIONAL CLIENTS?",
    "answer": "Yes we do! We have worked with clients all over the world, and our tried and tested processes allow us to work with you from wherever you are. If you have access to your emails, and internet then we’re all set!"
  },
  {
    "question": "DO YOU REQUIRE UPFRONT PAYMENT?",
    "answer": "Yes, to start any project, we require an upfront depending upon the services and non-refundable deposit of 50% to secure your spot in the design queue."
  },
  {
    "question": "WHAT ARE YOUR PAYMENT TERMS?",
    "answer": "We require a deposit of 50% depending upon our services and before we start working together and the remaining 50% is invoiced mid-project. Since no two projects are the same, and in some cases, we might allow for a different payment plan that suits both parties."
  },
  {
    "question": "HOW LONG WILL IT TAKE TO COMPLETE MY PROJECT?",
    "answer": "A branding project takes on average 2/3 weeks depending on complexity, while a website design can take up to 6 weeks. Every project is different so if you have a deadline, please let us know when you get in touch."
  },
  {
    "question": "WHAT'S THE DIFFERENCE BETWEEN A LOGO AND A VISUAL IDENTITY?",
    "answer": "These two terms, often used interchangeably are actually not the same. A logo is just a mark that visually identifies a brand. It can be a graphic image, the typographical representation of the brand or a combination of both. A visual identity is a broader concept that encompases all of the visual elements that make up the look and feel of a brand. It includes the logo, the colour palette, the fonts, image style, layouts and any other graphic element supporting the brand (business cards, packaging etc). All of these elements are outlined in a brand style guide."
  },
  {
    "question": "WHAT IS INCLUDED IN A ROUND OF REVISIONS?",
    "answer": "Our process is very collaborative, and when working on your branding, we provide you with 2 design concepts for you to choose, and up to 3 rounds of revisions on your chosen one. Each round of revisions refers to you providing with a set of limitless feedback (doesn’t matter if you give us 1 or 20 points of feedback), and us actioning this feedback and presenting the revised concept back to you. Most of our clients don’t use them all up, but they are there in case you need them."
  },
  {
    "question": "WHAT'S THE DIFFERENCE BETWEEN A 'ROUND OF REVISIONS' AND A 'DESIGN CONCEPT'?",
    "answer": "Each concept is an entirely different design or visual direction. We will start by presenting you with 2 concepts, and once you choose your preferred one, you have up to 3 revision rounds to refine that concept in terms of shape, fonts, layout etc. Usually they don’t involve changing the design concept all together, and our clients typically don’t use all 3 rounds up."
  },
  {
    "question": "DO YOU REDESIGN EXISTING WEBSITE?",
    "answer": "We certainly can do! It’s important to approach website redesigns sensitively to make sure your reasons for redesigning are valid. This will ensure the project is an overall success from your ROI point of view."
  },
  {
    "question": "CAN YOU HELP ME RANK HIGH IN GOOGLE?",
    "answer": "A page one position in the Google search results is like gold dust. Not so long ago it was relatively easy to achieve. These days it’s a lot more challenging, and getting it wrong can affect your reputation. Thankfully we have all the SEO tools and know-how to maximize your chances and some happy customers to vouch for us."
  }
]

// Package names and advertised prices from /pages/pricing.php.
export const pricingPackages = [
  {
    "packageType": "Dynamic Package",
    "name": "Basic Website Package",
    "priceLabel": "$ 388",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Startup Website Package",
    "priceLabel": "$ 788",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Professional Website Package",
    "priceLabel": "$ 1688",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Elite Website Package",
    "priceLabel": "$ 2988",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Corporate Website Package",
    "priceLabel": "$ 4788",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Business Website Package",
    "priceLabel": "$ 5988",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Basic Logo Package",
    "priceLabel": "$ 44",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Startup Logo Package",
    "priceLabel": "$ 84",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Professional Logo Package",
    "priceLabel": "$ 124",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Elite Logo Package",
    "priceLabel": "$ 174",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Business Logo Package",
    "priceLabel": "$ 244",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Gold Logo Package",
    "priceLabel": "$ 514",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "3D Logo Package",
    "priceLabel": "$ 534",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Professional Illustrative Package",
    "priceLabel": "$ 584",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Basic Illustrative Package",
    "priceLabel": "$ 284",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Startup Illustrative Package",
    "priceLabel": "$ 384",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Startup Collateral Package",
    "priceLabel": "$ 198",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Collateral Classic Package",
    "priceLabel": "$ 398",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Premium Collateral Package",
    "priceLabel": "$ 798",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Unlimited Collateral Package",
    "priceLabel": "$ 988",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Startup E-Commerce Package",
    "priceLabel": "$ 1588",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Professional Package",
    "priceLabel": "$ 2788",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Elite E-Commerce Package",
    "priceLabel": "$ 7388",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Startup Video Package",
    "priceLabel": "$ 1598",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Classic Video Package",
    "priceLabel": "$ 2198",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Premium Video Package",
    "priceLabel": "$ 2998",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Unlimited Video Package",
    "priceLabel": "$ 4598",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Basic 2D Package",
    "priceLabel": "$ 398",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Startup 2D Package",
    "priceLabel": "$ 798",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Advance 2D Package",
    "priceLabel": "$ 1198",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Premium 2D Package",
    "priceLabel": "$ 1598",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Deluxe 2D Package",
    "priceLabel": "$ 2398",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Basic 3D Package",
    "priceLabel": "$ 5990",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Startup 3D Package",
    "priceLabel": "$ 9990",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Advance 3D Package",
    "priceLabel": "$ 13990",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Basic Whiteboard Package",
    "priceLabel": "$ 490",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Startup Whiteboard Package",
    "priceLabel": "$ 990",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Advance Whiteboard Package",
    "priceLabel": "$ 1990",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Premium Whiteboard Package",
    "priceLabel": "$ 2990",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Dynamic Package",
    "name": "Web Content Package",
    "priceLabel": "$ 70 Per Page",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "Go-Commerce Package",
    "name": "Article Writing Package",
    "priceLabel": "$ 40 Per Page",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Creative Writing Package",
    "priceLabel": "$ 75 Per Page",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Blog Writing Package",
    "priceLabel": "$ 40 Per Page",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  },
  {
    "packageType": "All In One Combo Package",
    "name": "Infographics Package",
    "priceLabel": "$ 200 Per Page",
    "source": "https://www.zktechsolutions.org/pages/pricing.php"
  }
]

export const servicePagePricing = {
  websiteDevelopment: {
    source: `${LIVE}/pages/website-dev.php`,
    plans: [
      { name: 'Starter Plan', priceLabel: '$399' },
      { name: 'Basic Plan', priceLabel: '$799' },
      { name: 'Advanced Plan', priceLabel: '$1,999' },
    ],
  },
  seoOptimization: {
    source: `${LIVE}/pages/seo-optimization.php`,
    monthlyPriceLabels: ['$350', '$700', '$1,200'],
  },
  socialMediaMarketing: {
    source: `${LIVE}/pages/social-media-marketing.php`,
    monthlyPriceLabels: ['$350', '$700', '$1,200'],
  },
  note: 'Prices above are transcribed from the individual service pages. They are separate from the 44 package entries on /pages/pricing.php and may not be directly comparable.',
}

export const footerLinks = {
  company: [
    { label: 'About Us', href: `${LIVE}/pages/about-us.php` },
    { label: 'Why Choose Us', href: `${LIVE}/pages/why-us.php` },
    { label: 'Help & FAQs', href: `${LIVE}/pages/faqs.php` },
    { label: 'Pricing', href: `${LIVE}/pages/pricing.php` },
    { label: 'Request a Quote', href: `${LIVE}/pages/form.php` },
    { label: 'Contact Us', href: `${LIVE}/pages/contact-us.php` },
    { label: 'Terms & Conditions', href: `${LIVE}/pages/terms.php` },
    { label: 'Privacy Policy', href: `${LIVE}/pages/privacy.php` },
  ],
  services: [
    { label: 'Web Development', href: `${LIVE}/pages/website-dev.php` },
    { label: 'Mobile Applications', href: `${LIVE}/pages/mobile-application.php` },
    { label: 'UI/UX & Brand Design', href: `${LIVE}/pages/logo.php` },
    { label: 'Book Writing', href: `${LIVE}/pages/book-writing.php` },
    { label: 'Book Publishing', href: `${LIVE}/pages/book-publishing.php` },
    { label: 'Online Tutoring', href: `${LIVE}/pages/online-tutoring.php` },
    { label: 'eBook', href: `${LIVE}/pages/ebook.php` },
    { label: 'SEO & Performance', href: `${LIVE}/pages/seo-optimization.php` },
    { label: 'All Services', href: `${LIVE}/pages/services.php` },
  ],
  legal: [
    { label: 'Terms & Conditions', href: `${LIVE}/pages/terms.php` },
    { label: 'Privacy Policy', href: `${LIVE}/pages/privacy.php` },
  ],
}

// Crawl index: title, first-screen copy, major section headings, and image URLs
// for the 29 same-domain URLs discovered by recursively following site links.
export const internalPages = [
  {
    "path": "/",
    "url": "https://www.zktechsolutions.org/",
    "title": "ZK Tech Solutions | Software Development & Digital Solutions",
    "headline": "Build Web Platforms",
    "intro": "Enterprise-grade websites and web platforms built for performance, security, and measurable growth.",
    "metaDescription": "ZK Tech Solutions delivers custom software, web applications, mobile apps, and digital products for modern businesses worldwide.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Create a Distinctive Brand Identity",
      "Our Portfolio",
      "Nationwide Service, Local Expertise",
      "Your All-in-One Branding Destination For a Complete Branding Solution Package",
      "Streamlined Branding Process for Maximum Impact",
      "Logos, Web Designs & Development Solutions for",
      "Boost Your Brand with Exceptional Logos, Web Designs & Development Solutions",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Elevate Your Brand and Captivate Your Audience",
      "500,000 Impressions Made!"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/sliders/hero-web.png",
      "https://www.zktechsolutions.org/assets/images/sliders/hero-mobile.png",
      "https://www.zktechsolutions.org/assets/images/sliders/hero-growth.png",
      "https://www.zktechsolutions.org/assets/images/home/2.webp"
    ]
  },
  {
    "path": "/pages/about-us.php",
    "url": "https://www.zktechsolutions.org/pages/about-us.php",
    "title": "About Us | Digital Design Agency | ZK Tech Solutions",
    "headline": "We’re Transforming The Digital Landscape",
    "intro": "Digital is the backbone of winning businesses today. ZK Tech Solutions is a leading IT firm that enables your business to strengthen that backbone and lead the modern marketplace.",
    "metaDescription": "Explore about us services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Building Industry-Specific Collateral To Enhance Your Online Presence",
      "Explore Our Great History!!",
      "Our Journey From Inception To A Full-Fledged Digital Marketing Firm",
      "We Enable Your Business To Stand Out In The Market",
      "500,000 Impressions Made!",
      "Robust Digital Solutions For A Contemporary Marketplace",
      "We have decades of work experience!",
      "Awards and Achievements",
      "Recent Articles",
      "Resource Library",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/about/about-us.webp",
      "https://www.zktechsolutions.org/assets/images/about/1.webp",
      "https://www.zktechsolutions.org/assets/images/testimonials/thumbs/1.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/why-us.php",
    "url": "https://www.zktechsolutions.org/pages/why-us.php",
    "title": "Why Choose Us | Digital Design Agency | ZK Tech Solutions",
    "headline": "Reliable Digital Design Agency To Ensure A Leading Edge For Your Business",
    "intro": "We believe in building top-tier collateral for digital to help our clients and their end customers enjoy seamless experiences online. Our diverse and well-trained team of experts allows us to build and deliver these unprecedented value propositions.",
    "metaDescription": "Explore why us services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Robust Digital Solutions For A Contemporary Marketplace",
      "We Guarantee Sustainable Infrastructure",
      "Capitalize On Our Contemporary And Affordable Digital Solutions Today!",
      "Recent Articles",
      "Resource Library",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/why-choose/1.webp",
      "https://www.zktechsolutions.org/assets/images/about/2.webp",
      "https://www.zktechsolutions.org/assets/images/why-choose/4.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/faqs.php",
    "url": "https://www.zktechsolutions.org/pages/faqs.php",
    "title": "FAQs | Digital Design Agency | ZK Tech Solutions",
    "headline": "FAQs",
    "intro": "We couldn’t be happier! Please get in touch with us to say hi and tell us about your project. We’ll be sending through more information about our services, and we love to hear from you any questions or details that you may require. Once you questions being answered we will start working on your project , after contract has been signed and deposit taken.",
    "metaDescription": "Frequently asked questions about ZK Tech Solutions web design, branding, development, and digital services.",
    "sectionHeadings": [
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/page-titles/6.webp"
    ]
  },
  {
    "path": "/pages/services.php",
    "url": "https://www.zktechsolutions.org/pages/services.php",
    "title": "Our Services | ZK Tech Solutions",
    "headline": "Our Services",
    "intro": "Strategy, design, development, and growth — everything your brand needs to win online, delivered by one expert team.",
    "metaDescription": "Explore design, development, digital marketing, animation, content, publishing, and printing services from ZK Tech Solutions.",
    "sectionHeadings": [
      "End-to-end technology & creative services",
      "Design & Development",
      "Logo & Stationery Design",
      "Website Design & Development",
      "Mobile Application",
      "Digital Marketing",
      "SEO Optimization",
      "SEM (Google/Bing Ads)",
      "Social Media Marketing",
      "Animation",
      "2D & 3D Animation",
      "Whiteboard Animation",
      "Motion Graphic",
      "Content Writing"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/backgrounds/services-banner.png"
    ]
  },
  {
    "path": "/pages/website-dev.php",
    "url": "https://www.zktechsolutions.org/pages/website-dev.php",
    "title": "Website Design | Digital Design Agency | ZK Tech Solutions",
    "headline": "Website Development",
    "intro": "While nobody could, but our website designs will promote you 24/7.",
    "metaDescription": "Explore website dev services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "For us, a magnificent website is one that sells, excels, and enthralls.",
      "Our Portfolio",
      "Our Website Design Process",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/website-developemnt/3.webp",
      "https://www.zktechsolutions.org/assets/images/services/website-developemnt/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/website-developemnt/4.webp",
      "https://www.zktechsolutions.org/assets/images/portfolio/web/1.webp"
    ]
  },
  {
    "path": "/pages/logo.php",
    "url": "https://www.zktechsolutions.org/pages/logo.php",
    "title": "Logo Design | Digital Design Agency | ZK Tech Solutions",
    "headline": "We Create Logos that stand out",
    "intro": "Our team strives to design logos that resonate with your brand while meeting your industry’s standards.",
    "metaDescription": "Explore logo services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Creative Logo Designing Services That Shape A Strong Brand Identity",
      "Our Portfolio",
      "Your journey to purpose",
      "Logos, Web Designs & Development Solutions for",
      "We’ve Made Logos For Fortune 500 Companies",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Affordable Logo Design Solutions For Small And Medium Enterprises",
      "Choose a plan that meets your needs",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/logo-design/logo-banner.webp",
      "https://www.zktechsolutions.org/assets/images/services/logo-design/4.webp",
      "https://www.zktechsolutions.org/assets/images/services/logo-design/5.webp",
      "https://www.zktechsolutions.org/assets/images/portfolio/logo/1.webp"
    ]
  },
  {
    "path": "/pages/mobile-application.php",
    "url": "https://www.zktechsolutions.org/pages/mobile-application.php",
    "title": "Mobile Application | Digital Design Agency | ZK Tech Solutions",
    "headline": "Mobile Application",
    "intro": "From Stores to Apps, we care for your comfort while compromising ours!",
    "metaDescription": "Explore mobile application services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "We build experiences that grow and connect.",
      "Our Portfolio",
      "Custom Application Development Solutions",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/Ios-android/app.webp",
      "https://www.zktechsolutions.org/assets/images/services/Ios-android/3.webp",
      "https://www.zktechsolutions.org/assets/images/services/Ios-android/1.webp",
      "https://www.zktechsolutions.org/assets/images/portfolio/app/1.webp"
    ]
  },
  {
    "path": "/pages/seo-optimization.php",
    "url": "https://www.zktechsolutions.org/pages/seo-optimization.php",
    "title": "SEO Optimization | Digital Design Agency | ZK Tech Solutions",
    "headline": "SEO Optimization",
    "intro": "With shorter product cycles, innovation, and mergers contributing to constant change, you are faced making business decisions every day.",
    "metaDescription": "Explore seo optimization services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Advanced SEO services to transform your business.",
      "Explore Our SEO Strategy Timeline",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/seo/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/seo/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/seo/3.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/15.webp"
    ]
  },
  {
    "path": "/pages/sem-google-bing-ads.php",
    "url": "https://www.zktechsolutions.org/pages/sem-google-bing-ads.php",
    "title": "SEM Google/Bing Ads | Digital Design Agency | ZK Tech Solutions",
    "headline": "SEM Google/Bing Ads",
    "intro": "Drive more leads, sales, and revenue for your business with pay-per-click (PPC) advertising and search engine optimization (SEO).",
    "metaDescription": "Explore sem google bing ads services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "The Leading Choice for Search Engine Marketing Services",
      "HOW DO WE DO IT?",
      "Credible & Agency-focused SEM Services",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/sem/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/sem/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/sem/3.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/social-media-marketing.php",
    "url": "https://www.zktechsolutions.org/pages/social-media-marketing.php",
    "title": "Social Media Marketing | Digital Design Agency | ZK Tech Solutions",
    "headline": "Social Media Marketing",
    "intro": "create the right business strategies to build your brand, maximize your ranking and sales to take your business to the next level in the digital landscape",
    "metaDescription": "Explore social media marketing services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Connecting the dots between users and business goals",
      "Explore Our SMM Strategy Timeline",
      "Amplify Your Brand Awareness With Our SMM Services",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/socail-media/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/socail-media/5.webp",
      "https://www.zktechsolutions.org/assets/images/services/socail-media/2.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/2d-3d-animation.php",
    "url": "https://www.zktechsolutions.org/pages/2d-3d-animation.php",
    "title": "2D & 3D Animation | Digital Design Agency | ZK Tech Solutions",
    "headline": "2D & 3D Animation",
    "intro": "We realize, that customers are not always in to be engaged but they are looking to be entertained.",
    "metaDescription": "Explore 2d 3d animation services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "IGNITE YOUR IMAGINATION Quality Animation Can Bring Your Ideas To Life Like Nothing Else",
      "Our Portfolio",
      "OUR DISTINCT VIDEO ANIMATION SERVICES THAT CAN EASILY MONETIZE YOUR INVESTMENT",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/2D-3D-animation/5.webp",
      "https://www.zktechsolutions.org/assets/images/services/2D-3D-animation/4.webp",
      "https://www.zktechsolutions.org/assets/images/services/2D-3D-animation/2.webp",
      "https://www.zktechsolutions.org/assets/images/portfolio/web/1.webp"
    ]
  },
  {
    "path": "/pages/whiteboard-animation.php",
    "url": "https://www.zktechsolutions.org/pages/whiteboard-animation.php",
    "title": "Whiteboard Animation | Digital Design Agency | ZK Tech Solutions",
    "headline": "Whiteboard Video",
    "intro": "Make sure when you are viewed your viewer has more to take from you than to give.",
    "metaDescription": "Explore whiteboard animation services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "IGNITE YOUR IMAGINATION Quality Animation Can Bring Your Ideas To Life Like Nothing Else",
      "Our Portfolio",
      "OUR DISTINCT VIDEO ANIMATION SERVICES THAT CAN EASILY MONETIZE YOUR INVESTMENT",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/white-bord/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/white-bord/3.webp",
      "https://www.zktechsolutions.org/assets/images/services/white-bord/2.webp",
      "https://www.zktechsolutions.org/assets/images/portfolio/web/1.webp"
    ]
  },
  {
    "path": "/pages/motion-graphics.php",
    "url": "https://www.zktechsolutions.org/pages/motion-graphics.php",
    "title": "Motion Graphics | Digital Design Agency | ZK Tech Solutions",
    "headline": "Motion Graphic Animation",
    "intro": "Before we read, we view. So make sure it is worth viewing.",
    "metaDescription": "Explore motion graphics services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "IGNITE YOUR IMAGINATION Quality Animation Can Bring Your Ideas To Life Like Nothing Else",
      "Our Portfolio",
      "OUR DISTINCT VIDEO ANIMATION SERVICES THAT CAN EASILY MONETIZE YOUR INVESTMENT",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/motion-graphics/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/motion-graphics/3.webp",
      "https://www.zktechsolutions.org/assets/images/services/motion-graphics/4.webp",
      "https://www.zktechsolutions.org/assets/images/portfolio/web/1.webp"
    ]
  },
  {
    "path": "/pages/web-copy.php",
    "url": "https://www.zktechsolutions.org/pages/web-copy.php",
    "title": "Web Copy | Digital Design Agency | ZK Tech Solutions",
    "headline": "Web Copy",
    "intro": "We believe, content is the reason search began in the first place.",
    "metaDescription": "Explore web copy services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Web Copywriting That Boosts Search Results",
      "Web Copywriting Process",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/3.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/1.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/seo-writing.php",
    "url": "https://www.zktechsolutions.org/pages/seo-writing.php",
    "title": "SEO Optimized Content | Digital Design Agency | ZK Tech Solutions",
    "headline": "SEO Content Writing",
    "intro": "SEO content writing services are an essential part of every digital marketing program.",
    "metaDescription": "Explore seo writing services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Get Rank, Traffic, and Leads with an Experienced SEO Content Writing Agency",
      "Optimized websites need quality content",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/seo/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/seo/3.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/1.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/blog-writing.php",
    "url": "https://www.zktechsolutions.org/pages/blog-writing.php",
    "title": "Blog Writing | Digital Design Agency | ZK Tech Solutions",
    "headline": "Blog Writing",
    "intro": "We are not the king but the Kingdom of Writers.",
    "metaDescription": "Explore blog writing services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "We build experiences that grow and connect.",
      "Your Company Deserves A Blog Writer That Gets It",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/blog-wrting/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/blog-wrting/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/1.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/online-tutoring.php",
    "url": "https://www.zktechsolutions.org/pages/online-tutoring.php",
    "title": "Online Tutoring | Digital Design Agency | ZK Tech Solutions",
    "headline": "Online Tutoring",
    "intro": "Live, flexible online sessions tailored to your learning goals — academics, test prep, and professional skills.",
    "metaDescription": "Online tutoring for students and professionals from ZK Tech Solutions.",
    "sectionHeadings": [
      "Personalized Learning Online",
      "Online Tutoring That Builds Confidence",
      "Learn Online With Expert Tutors",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/seo/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/online-tutoring/about.png",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/1.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/book-writing.php",
    "url": "https://www.zktechsolutions.org/pages/book-writing.php",
    "title": "Book Writing | Digital Design Agency | ZK Tech Solutions",
    "headline": "Book Writing",
    "intro": "Turn your ideas into a compelling manuscript with expert writers and structured editorial support.",
    "metaDescription": "Professional book writing services from ZK Tech Solutions — manuscripts, editing, and author-ready content.",
    "sectionHeadings": [
      "From Concept To Published-Ready Manuscript",
      "Book Writing That Captivates Readers",
      "Your Story Deserves Expert Writers",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/3.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/book-publishing.php",
    "url": "https://www.zktechsolutions.org/pages/book-publishing.php",
    "title": "Book Publishing | Digital Design Agency | ZK Tech Solutions",
    "headline": "Book Publishing",
    "intro": "Publish with confidence — we guide your book from finished manuscript to a professional, market-ready release.",
    "metaDescription": "Book publishing services — formatting, distribution guidance, and launch support from ZK Tech Solutions.",
    "sectionHeadings": [
      "Print & Digital Publishing Support",
      "Publishing Services For Modern Authors",
      "Publish With A Team Behind You",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/3.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/1.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/ebook.php",
    "url": "https://www.zktechsolutions.org/pages/ebook.php",
    "title": "eBook Services | Digital Design Agency | ZK Tech Solutions",
    "headline": "eBook",
    "intro": "Create, design, and distribute professional digital books that engage readers on any device.",
    "metaDescription": "eBook creation, design, and publishing support from ZK Tech Solutions.",
    "sectionHeadings": [
      "Digital Books That Sell & Educate",
      "eBook Creation & Publishing",
      "Digital Books Built For Your Brand",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Suitable For Small To Midsize Businesses",
      "Effective & flexible pricing that adapts your needs!",
      "Satisfied Users Over The Globe",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/web-copy-content/3.webp",
      "https://www.zktechsolutions.org/assets/images/backgrounds/1.webp"
    ]
  },
  {
    "path": "/pages/digital-print.php",
    "url": "https://www.zktechsolutions.org/pages/digital-print.php",
    "title": "Digital Printing | Digital Design Agency | ZK Tech Solutions",
    "headline": "Digital Printing",
    "intro": "We could save you from wastes of bin and darkness of pockets.",
    "metaDescription": "Explore digital print services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Unleash Your Creativity With Our Digital Printing Services",
      "Our Portfolio",
      "One Stop Solution for Digital and Offset Printing",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Satisfied Users Over The Globe",
      "Our Pricing Features",
      "Frequently asked questions",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/bussines-card/business-card.webp",
      "https://www.zktechsolutions.org/assets/images/services/bussines-card/3.webp",
      "https://www.zktechsolutions.org/assets/images/services/bussines-card/1.webp",
      "https://www.zktechsolutions.org/assets/images/portfolio/statio/1.webp"
    ]
  },
  {
    "path": "/pages/stationery-print.php",
    "url": "https://www.zktechsolutions.org/pages/stationery-print.php",
    "title": "Stationery Items | Digital Design Agency | ZK Tech Solutions",
    "headline": "Stationery Printing",
    "intro": "Professional stationery printing is an important step for any business to take for several reasons.",
    "metaDescription": "Explore stationery print services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Professional stationery tells the world you mean business.",
      "Our Portfolio",
      "From luxurious paper stocks to vibrant colors",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Satisfied Users Over The Globe",
      "Our Pricing Features",
      "Frequently asked questions",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/cloth-printing/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/cloth-printing/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/cloth-printing/3.webp",
      "https://www.zktechsolutions.org/assets/images/portfolio/statio/1.webp"
    ]
  },
  {
    "path": "/pages/custom-print.php",
    "url": "https://www.zktechsolutions.org/pages/custom-print.php",
    "title": "Custom Printing | Digital Design Agency | ZK Tech Solutions",
    "headline": "Custom Printing",
    "intro": "Get your presence far and beyond with our printed apparel.",
    "metaDescription": "Explore custom print services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Timely Service Delivery & Incident Resolutions!!",
      "Print Anything & Everything, We’ve Got Your Back",
      "Our Portfolio",
      "Turn Any Idea Into Printed Reality",
      "Logos, Web Designs & Development Solutions for",
      "Fortune 500 Companies From 40+ Industries",
      "400+",
      "1000+",
      "900+",
      "300+",
      "Satisfied Users Over The Globe",
      "Our Pricing Features",
      "Frequently asked questions",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/services/flyer-brocher-printing/2.webp",
      "https://www.zktechsolutions.org/assets/images/services/flyer-brocher-printing/1.webp",
      "https://www.zktechsolutions.org/assets/images/services/flyer-brocher-printing/3.webp",
      "https://www.zktechsolutions.org/assets/images/portfolio/statio/1.webp"
    ]
  },
  {
    "path": "/pages/contact-us.php",
    "url": "https://www.zktechsolutions.org/pages/contact-us.php",
    "title": "Contact Us | Digital Design Agency | ZK Tech Solutions",
    "headline": "GIVING BUSINESS AN EDGE IT DESERVES",
    "intro": "Our Creative thinkers is here to assist you out everything to do with your Design Needs.",
    "metaDescription": "Explore contact us services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/contact.webp"
    ]
  },
  {
    "path": "/pages/pricing.php",
    "url": "https://www.zktechsolutions.org/pages/pricing.php",
    "title": "Pricing | Digital Design Agency | ZK Tech Solutions",
    "headline": "Affordable Service Bundles",
    "intro": "Designs Engine software developers offer you data-driven solutions to boost your business efficiency and to automate business processes across various industries.",
    "metaDescription": "Explore pricing services from ZK Tech Solutions.",
    "sectionHeadings": [
      "ADVANCE COMBO",
      "$4,994 .00",
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/contact.webp"
    ]
  },
  {
    "path": "/pages/form.php",
    "url": "https://www.zktechsolutions.org/pages/form.php",
    "title": "Forms | Digital Design Agency | ZK Tech Solutions",
    "headline": "Hire Us To Get Started!",
    "intro": "Our team at ZK Tech Solutions is ready to discuss your vision. Fill out the form below and we will respond within 24 hours.",
    "metaDescription": "Explore form services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Ready to build your next digital product?"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/contact.webp"
    ]
  },
  {
    "path": "/pages/terms.php",
    "url": "https://www.zktechsolutions.org/pages/terms.php",
    "title": "Terms And Conditions | Digital Design Agency | ZK Tech Solutions",
    "headline": "Terms and Conditions",
    "intro": "",
    "metaDescription": "Explore terms services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Terms and Conditions",
      "Revision Policy",
      "New Order Turnaround Time",
      "Refund Policy",
      "Ownership of the projects",
      "Claim Your Refund",
      "You can claim your refund by:",
      "Quality Assurance Policy",
      "100% SATISFACTION GUARANTEE",
      "Delivery Policy",
      "Record Maintenance",
      "Customer Support",
      "Communication Policy"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/term-condition.webp"
    ]
  },
  {
    "path": "/pages/privacy.php",
    "url": "https://www.zktechsolutions.org/pages/privacy.php",
    "title": "Privacy And Policy | Digital Design Agency | ZK Tech Solutions",
    "headline": "Privacy Policy",
    "intro": "",
    "metaDescription": "Explore privacy services from ZK Tech Solutions.",
    "sectionHeadings": [
      "Privacy Policy",
      "Privacy Policy Statement",
      "Information Collection",
      "Usage Of Collected Information",
      "Privacy Of Payments",
      "Confidentiality",
      "Amendments",
      "Conditions Of Information Disclosure",
      "Contact Us"
    ],
    "media": [
      "https://www.zktechsolutions.org/assets/images/terms.webp"
    ]
  }
]

// Additional About Us page content. These published company claims are kept
// distinct from the homepage counter row in `stats` because the site presents
// different figures in different sections.
export const aboutPage = {
  url: `${LIVE}/pages/about-us.php`,
  headline: 'We’re Transforming The Digital Landscape',
  intro: 'Digital is the backbone of winning businesses today. ZK Tech Solutions is a leading IT firm that enables your business to strengthen that backbone and lead the modern marketplace.',
  timeline: [
    {
      year: '2005',
      description: 'We laid the basis of ZK Tech Solutions as a dedicated web design and development company with a team of 10 people.',
    },
    {
      year: '2010',
      description: 'Our operations grew tenfold as we successfully landed our 500th customer on board, maintaining an over 99% customer satisfaction rate.',
    },
    {
      year: '2015',
      description: 'ZK Tech Solutions launched two new wings: app development and logo designs. We went from 0 to 50 clients over a period of twelve short months.',
    },
    {
      year: '2020',
      description: 'We’re a full-fledged digital marketing agency with more than 50k satisfied clients across multiple industries, still managing an impressive 99% customer satisfaction rate.',
    },
  ],
  publishedMetrics: [
    { value: 'Over 30,000', label: 'logos developed' },
    { value: 'More than 15,000', label: 'websites developed' },
    { value: '50+', label: 'unique industries catered' },
    { value: 'Over 500,000', label: 'impressions made' },
    { value: '6,154', label: 'websites built from scratch in 2021' },
    { value: '100+', label: 'experts with decades worth of experience in the team' },
    { value: '100k+', label: 'satisfied clients across 50+ unique industries' },
  ],
  note: 'These are claims from the About Us page and are not reconciled with the separate homepage figures.',
}

export const crawlInfo = {
  date: '2026-10-08',
  pageCount: internalPages.length,
  scope: 'Homepage plus 28 same-domain /pages/ URLs; all returned HTTP 200 during the crawl.',
  fields: ['title', 'headline', 'intro', 'meta description', 'section headings', 'image URLs'],
  note: 'Homepage portfolio thumbnails are image-only; no client or project names were assigned.',
}

export const homePage = {
  hero: heroSlides,
  brandIdentity: manifesto,
  featuredPortfolio: featured,
  portfolio: portfolioSets,
  services,
  process,
  stats,
  industries,
  awards: badges,
  blogs: recentBlogs,
  testimonials,
}

