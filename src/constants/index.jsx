import { FaBookReader } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { HiBuildingLibrary } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaTools } from "react-icons/fa";

export const navItems = [
  { label: "SPARQL Queries", href: "/sparql-queries" },
  { label: "ONTOLOGIES", href: "/ontologies" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Other Resources", href: "/other-resources" },
];

export const features = [
  {
    icon: <MdOutlineTravelExplore />,
    text: "Explore the Semantic Web",
    description:
      "SPARQL is the gateway to the Semantic Web. It lets you interact with structured knowledge published by institutions, researchers, and communities across the globe.",
  },
  {
    icon: <MdOutlineExplore />,
    text: "Navigate Ontologies and Linked Data",
    description:
      "SPARQL gives you the power to query complex ontologies like Wikidata, Orphanet, and more. You can extract relationships, hierarchies, and rich metadata effortlessly.",
  },
  {
    icon: <HiBuildingLibrary />,
    text: "Used by Major Organizations",
    description:
      "Governments, universities, libraries, biotech companies, and open data initiatives all use SPARQL. It’s a trusted standard backed by the W3C.",
  },
  {
    icon: <HiOutlineLightBulb />    ,
    text: "Make Sense of Complex Data",
    description:
      "With SPARQL, you can ask meaningful questions across distributed datasets. It helps reveal connections hidden in traditional databases.",
  },
  {
    icon: <FaTools />,
    text: "Build Interoperable Applications",
    description:
      "SPARQL supports data integration across systems. It’s ideal for apps that consume, transform, and connect semantic data from diverse sources.",
  },
  {
    icon: <FaBookReader />    ,
    text: "Learn Concepts That Last",
    description:
      "SPARQL teaches you how to think semantically. You’ll learn about triples, classes, relationships, and how meaning is represented in data.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
