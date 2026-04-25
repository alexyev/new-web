export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  link?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  upcoming?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "Undergraduate Learning Assistant",
    company: "UNC Department of Computer Science",
    period: "2026",
    location: "Chapel Hill, NC",
    description:
      "Teach COMP110, UNC's introductory computer science course. Run lab sections and office hours, walking first-years through how to reason about programs before writing them.",
    image: "/projects/unccs.png",
  },
  {
    role: "Director of Professional Development",
    company: "Engineering @ Carolina",
    period: "2026",
    location: "Chapel Hill, NC",
    description:
      "Inaugural Director of Professional Development for Carolina's first and premier engineering club, associated with the Department of Applied Physical Sciences. Organized career workshops with Tesla, engineering challenges with RTP companies, and secured funding for the club.",
    image: "/projects/eatc.jpg",
    imageFit: "contain",
  },
  {
    role: "Research & Philanthropy Strategy",
    company: "Middendorf Foundation",
    period: "2025",
    location: "Baltimore, MD",
    description:
      "Studied how Baltimore's nonprofits navigate the city's permitting and grantmaking systems when running Education Capital Projects. Sat down with 47 nonprofit directors, grant officers, and city officials; ran sentiment analysis on the transcripts; and wrote the findings up for the foundation and its partners at France-Merrick, Weinberg, and Abell — collectively stewarding over $4B in AUM.",
    link: "https://www.middendorffoundation.org/",
    image: "/projects/middendorf.jpeg",
  },
  {
    role: "Student Consultant",
    company: "IKEA & CAE",
    period: "2023–2024",
    location: "Toronto, Canada",
    description:
      "Worked with IKEA on the future of urban mobility (how to design products for a world where more people live without cars) and with CAE on where their simulator business should go next. Built the analysis, wrote the decks, and walked C-suite leadership at both companies through the recommendations.",
    image: "/projects/consult.jpg",
  },
  {
    role: "Featured Speaker",
    company: "WebSummit · SXSW · Microsoft Canada, among others",
    period: "2022–2024",
    location: "Lisbon · Austin · Toronto",
    description:
      "Presented my technical work and offered perspective on where technology is headed at WebSummit Lisbon, SXSW, Microsoft's Canadian HQ, and other conferences. Walked audiences of founders, operators, and researchers through the projects I'd built and the implications of the underlying technology for the decade ahead.",
    link: "https://youtu.be/vShQhBSgw0k?si=HCcXeFD5EhIWSK8V",
    image: "/projects/speaking.jpg",
  },
  {
    role: "Venture Capital Intern",
    company: "The Catherine Wheel",
    period: "2022",
    location: "Toronto, Canada",
    description:
      "Sourced deal flow across healthcare and fintech, driving 200+ new leads into the investment funnel. Mapped and connected 50+ Canadian family offices and pension funds to two general partners as TCW raised capital for its next round of investments.",
    image: "/projects/tcw.png",
    imageFit: "contain",
  },
];
