export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vertex set up our finance function from scratch and ran it better than most in-house teams we'd worked with. Their reporting gave our board confidence within the first quarter.",
    name: "Group Finance Director",
    role: "Logistics & Freight Group",
    location: "Maputo, Mozambique",
  },
  {
    quote:
      "We've used their talent acquisition team for three C-suite mandates now. Every shortlist was tight, well-referenced, and delivered on schedule — no filler candidates.",
    name: "Group HR Director",
    role: "FMCG Manufacturing Group",
    location: "Lagos, Nigeria",
  },
  {
    quote:
      "Their advisory team restructured our financing across two markets and cut our effective borrowing cost meaningfully within six months, without changing our core banking relationships.",
    name: "Chief Financial Officer",
    role: "Agri-processing Business",
    location: "Nairobi, Kenya",
  },
  {
    quote:
      "As a candidate placed through Vertex, their process was the most professionally run search I've been part of — clear communication at every stage, from screening to offer.",
    name: "Regional Commercial Director",
    role: "Placed Executive",
    location: "Dubai, UAE",
  },
];
