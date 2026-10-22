// School of Excellence — Kingston, Jamaica
// DEMO DATA: Publicly listed information. Confirm all details with the principal before production.

export const school = {
  name: "School of Excellence",
  location: "Kingston, Jamaica",
  address: "3 Balmoral Avenue, Kingston 10",
  slogan: "Achieve Academic Success",
  email: "soesantacruz@yahoo.com",
  phones: ["876-929-5830", "876-227-4911", "876-754-4705"],
  whatsapp: "18769295830",

  // Publicly listed fees — MUST be confirmed
  fees: {
    csecPerSubjectTerm: 7000,
    registrationOneTime: 2500,
    currency: "JMD",
    promo: "Do 3 subjects, get 1 free. Do 5, get 2 free."
  },

  // Publicly listed schedules — MUST be confirmed
  schedules: {
    day: "8:30 AM – 4:00 PM",
    evening: "5:30 PM – 8:30 PM",
    saturday: "8:30 AM – 7:00 PM"
  },

  examCentre: "CXC · NCTVET · City & Guilds exam centre (per public listing)",
  amenities: ["Air-conditioned classrooms", "Free past papers", "Free WiFi", "Free parking"],
  intake: ["September", "January"],

  demo: true,
  disclaimer: "Demo concept by Codeplex Services. Not the official website. Fees, schedules and programme availability must be confirmed with the school before enrolment."
};

export const programmes = [
  { id: "mathematics", title: "Mathematics", category: "CSEC Preparation", image: "assets/images/programmes/mathematics.webp", verified: false },
  { id: "english", title: "English Language", category: "CSEC Preparation", image: "assets/images/programmes/english.webp", verified: false },
  { id: "science", title: "Sciences (Chem · Phys · Bio)", category: "CSEC Preparation", image: "assets/images/programmes/science.webp", verified: false },
  { id: "information-technology", title: "Information Technology", category: "Technology", image: "assets/images/programmes/information-technology.webp", verified: false },
  { id: "business-studies", title: "Business Studies", category: "Business", image: "assets/images/programmes/business-studies.webp", verified: false }
];