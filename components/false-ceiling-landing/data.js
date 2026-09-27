import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  CircleDot,
  Home,
  Lightbulb,
  Layers3,
  Maximize2,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Wrench,
} from "lucide-react";

export const falseCeilingServices = [
  {
    number: "01",
    title: "Residential False Ceiling",
    description:
      "Ceiling solutions planned around your room size, furniture layout, lighting and overall interior style.",
    icon: Home,
  },
  {
    number: "02",
    title: "Commercial False Ceiling",
    description:
      "Clean, practical ceiling installations for offices, retail spaces, reception areas and commercial interiors.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Gypsum False Ceiling",
    description:
      "Versatile gypsum ceiling designs for clean lines, layered details, concealed services and modern interiors.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "POP False Ceiling",
    description:
      "Decorative POP ceiling concepts for feature details, curves, borders and customized interior styling.",
    icon: Paintbrush,
  },
  {
    number: "05",
    title: "Cove Ceiling",
    description:
      "Recessed and indirect-lighting details that create a softer, more refined ceiling appearance.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Grid / Modular Ceiling",
    description:
      "Practical modular ceiling systems suited to spaces where access, services and a clean visual grid matter.",
    icon: Maximize2,
  },
  {
    number: "07",
    title: "Decorative Ceiling",
    description:
      "Custom ceiling elements designed to add depth, proportion and a distinct visual character to your space.",
    icon: CircleDot,
  },
  {
    number: "08",
    title: "Lighting-Integrated Ceiling",
    description:
      "Ceiling layouts planned around spotlights, profile lighting, cove lighting and other selected fixtures.",
    icon: Lightbulb,
  },
];

export const ceilingTypes = [
  {
    title: "Gypsum Ceiling",
    tag: "Clean + Versatile",
    description:
      "A popular choice for contemporary interiors where smooth finishes, layers and lighting integration are important.",
    icon: Layers3,
  },
  {
    title: "POP Ceiling",
    tag: "Decorative + Custom",
    description:
      "Suitable for decorative profiles, curves and feature details where the design requires a customized finish.",
    icon: Paintbrush,
  },
  {
    title: "Cove Ceiling",
    tag: "Soft Lighting",
    description:
      "Designed with recessed edges or profiles to create indirect illumination and visual depth.",
    icon: Lightbulb,
  },
  {
    title: "Grid Ceiling",
    tag: "Practical + Modular",
    description:
      "A structured ceiling approach for offices and commercial spaces where access to services can be useful.",
    icon: Maximize2,
  },
  {
    title: "Suspended Ceiling",
    tag: "Functional + Modern",
    description:
      "A dropped ceiling arrangement that can help organize services and create a consistent finished plane.",
    icon: Ruler,
  },
  {
    title: "Custom Ceiling",
    tag: "Designed for You",
    description:
      "A project-specific concept developed around your room dimensions, lighting plan and preferred visual style.",
    icon: Sparkles,
  },
];

export const roomApplications = [
  { title: "Living Room", icon: Home },
  { title: "Bedroom", icon: Sparkles },
  { title: "Hall / Lounge", icon: Users },
  { title: "Office", icon: Building2 },
  { title: "Reception", icon: Store },
  { title: "Retail Space", icon: Store },
  { title: "Commercial Areas", icon: Building2 },
  { title: "Hospitality", icon: Sparkles },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We understand your space, preferred style, functional requirements and initial budget expectations.",
    icon: Users,
  },
  {
    step: "02",
    title: "Site Visit & Measurement",
    description:
      "Room dimensions, ceiling height, existing conditions and practical installation requirements are reviewed.",
    icon: Ruler,
  },
  {
    step: "03",
    title: "Design Discussion",
    description:
      "We discuss ceiling levels, visual details, lighting positions and the finish you want to achieve.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Material & Work Planning",
    description:
      "The scope, material requirements, installation sequence and finishing expectations are organized before execution.",
    icon: Wrench,
  },
  {
    step: "05",
    title: "Installation",
    description:
      "The ceiling work is executed according to the agreed scope with attention to alignment, levels and detailing.",
    icon: Layers3,
  },
  {
    step: "06",
    title: "Finishing & Inspection",
    description:
      "Final finishing, visual checks and handover are completed so the ceiling is ready for the next stage of the interior.",
    icon: CheckCircle2,
  },
];

export const whyChooseUs = [
  {
    title: "Requirement-Focused Planning",
    description:
      "Every ceiling starts with the room, its use, lighting needs and the finish you want—not a one-size-fits-all layout.",
    icon: Ruler,
  },
  {
    title: "Clean Execution",
    description:
      "Attention to alignment, levels, edges and finishing helps create a more polished final appearance.",
    icon: CheckCircle2,
  },
  {
    title: "Design-Led Approach",
    description:
      "We consider proportions, ceiling height, lighting and surrounding interiors together when planning the work.",
    icon: Sparkles,
  },
  {
    title: "Clear Communication",
    description:
      "The scope, requirements and installation considerations are discussed before work begins.",
    icon: Users,
  },
  {
    title: "Attention to Detail",
    description:
      "Details such as corners, profiles, lighting zones and transitions are considered during execution.",
    icon: Maximize2,
  },
  {
    title: "Project Coordination",
    description:
      "The work is planned around the practical sequence of ceiling installation and related interior requirements.",
    icon: Building2,
  },
];

export const trustPoints = [
  {
    label: "Design",
    value: "Space-specific",
    description: "Planned around your room and interior direction.",
    icon: Sparkles,
  },
  {
    label: "Planning",
    value: "Measured",
    description: "Dimensions and site conditions considered before execution.",
    icon: Ruler,
  },
  {
    label: "Execution",
    value: "Detail-focused",
    description: "Attention to levels, alignment and finishing.",
    icon: ShieldCheck,
  },
  {
    label: "Support",
    value: "Direct",
    description: "A straightforward consultation and enquiry process.",
    icon: BadgeCheck,
  },
];

export const projects = [
  {
    title: "Contemporary Living Room",
    propertyType: "Residential",
    location: "Ahmedabad",
    ceilingType: "Layered / Cove Ceiling",
    designStyle: "Contemporary",
    lighting: "Cove + recessed lighting",
    image: "/FalseCiling/false_ceiling_project1.png",
    highlights: [
      "Balanced ceiling proportions",
      "Integrated lighting zones",
      "Clean contemporary detailing",
    ],
  },
  {
    title: "Modern Bedroom Ceiling",
    propertyType: "Residential",
    location: "Ahmedabad",
    ceilingType: "Gypsum Ceiling",
    designStyle: "Minimal Modern",
    lighting: "Recessed + ambient lighting",
    image: "/FalseCiling/false_ceiling_project2.png",
    highlights: [
      "Minimal layered profile",
      "Soft ambient lighting",
      "Designed around furniture layout",
    ],
  },
  {
    title: "Professional Office Interior",
    propertyType: "Commercial",
    location: "Ahmedabad",
    ceilingType: "Grid / Modular Ceiling",
    designStyle: "Professional",
    lighting: "Panel + recessed lighting",
    image: "/FalseCiling/false_ceiling_project3.png",
    highlights: [
      "Structured ceiling layout",
      "Practical service access",
      "Clean professional appearance",
    ],
  },
];

export const faqs = [
  {
    question: "What is a false ceiling?",
    answer:
      "A false ceiling is a secondary ceiling installed below the structural ceiling to create a finished interior surface. It can also provide a planned space for selected lighting and services.",
  },
  {
    question: "Which false ceiling is suitable for a home?",
    answer:
      "The suitable option depends on room size, ceiling height, interior style, lighting requirements and the desired finish. Gypsum, POP, cove and custom designs can all be considered depending on the space.",
  },
  {
    question: "What is the difference between gypsum and POP ceilings?",
    answer:
      "Gypsum boards provide a clean and versatile finished surface, while POP is commonly used for more customized decorative profiles and details. The right choice depends on the design and site requirements.",
  },
  {
    question: "Can lights be integrated into a false ceiling?",
    answer:
      "Yes. A ceiling layout can be planned around selected spotlights, recessed fixtures, cove lighting or profile lighting, subject to the electrical and installation requirements of the project.",
  },
  {
    question: "Can the false ceiling design be customized?",
    answer:
      "Yes. The layout can be discussed around the room dimensions, furniture arrangement, lighting plan and preferred design language.",
  },
  {
    question: "Is false ceiling suitable for offices?",
    answer:
      "False ceilings can be used in offices and commercial interiors where a clean finished ceiling, organized lighting and practical service planning are required.",
  },
  {
    question: "What affects false ceiling cost?",
    answer:
      "Cost can vary with room size, ceiling design, material/system selected, number of levels, lighting integration, site conditions, finishing requirements and overall scope.",
  },
  {
    question: "Do you provide site visits?",
    answer:
      "Site visits can be discussed as part of the consultation process. Share your location and project requirement through the enquiry form so the team can advise on the next step.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Use the enquiry form, call the team or start a WhatsApp conversation. Providing room dimensions, location, property type and a few reference images can help with the initial discussion.",
  },
];

export const propertyTypes = [
  "Residential",
  "Office",
  "Commercial",
  "Retail",
  "Other",
];

export const ceilingRequirements = [
  "Living Room Ceiling",
  "Bedroom Ceiling",
  "Office Ceiling",
  "Gypsum Ceiling",
  "POP Ceiling",
  "Cove Ceiling",
  "Grid Ceiling",
  "Decorative Ceiling",
  "Lighting-integraFted Ceiling",
  "Custom Requirement",
];
