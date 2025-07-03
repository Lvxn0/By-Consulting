"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Heading from "@/components/Heading";

// Page title text
const title = "Our Services";

// Data structure holding content sections with image, heading, and list items
const sections = [
  {
    imageUrl: "/Service1.jpg",
    heading: "IMC Trolleybus Service Offering",
    items: [
      {
        title: "Technical Feasibility",
        content: `• Feasibility Studies: Traffic and demand analysis, route planning, energy availability and reliability, depot sizing, and system-wide resilience to climate and urban conditions.
• Infrastructure Design: Selection of optimal depot location, layout design, vehicle flows, maintenance areas, integration with the electrical grid.
• Supporting Analysis:
  - Cost-benefit analysis (CBA)
  - Lifecycle costing
  - Environmental and social impact assessments
  - High-level engineering concepts to guide procurement and investment planning`,
      },
      {
        title: "Governance & Institutional Setup",
        content: `• Creation of a ‘PTA’: Public Transport Authority within the municipality for planning, monitoring, and coordination.
• Development of Public Service Contracts (PSC): Enforceable standards for private operators with KPIs and metrics.
• Organizational Structuring: Define roles among municipal departments, utilities, and private actors.
• Capacity Building: Tools and training for planning, performance monitoring, user feedback, and fare management.`,
      },
      {
        title: "Contracting & Procurement",
        content: `• Procurement Strategy: Packaging of fleet supply with technical specs, service support, and long-term maintenance. Integration with civil and electrical infrastructure (depots, substations).
• Advisory Support: Assistance with drafting tender documents, procurement strategy, offer evaluations, and alignment with procurement law and best practices.
• Contracting & Tender Evaluation: Turnkey or split-package models with integrated approach across civil, electrical, and rolling stock components.`,
      },
    ],
    reverse: false,
  },
  {
    imageUrl: "/Service2.jpg",
    heading: "Transaction Advisory",
    items: [
      {
        title: "Commercial Due Diligence",
        content: `• Market Analysis: Assessment of market demand, competitive landscape, revenue potential, and customer behavior to validate assumptions and commercial viability.
• Regulatory Review: Evaluation of policy frameworks, tariff structures, and compliance risks affecting commercial operations and profitability.
• Revenue and Cost Modelling: Independent review of business case models, cost assumptions, and financial projections to identify risks and value drivers.
• Partner and Stakeholder Review: Assessment of key stakeholders, consortiums, and partner capabilities to support long-term project sustainability.`,
      },
      {
        title: "Technical Due Diligence",
        content: `• Asset Condition and Design Review: Evaluation of proposed or existing infrastructure (e.g., rolling stock, depots, signaling) for compliance with technical standards and fitness for purpose.
• Technology Assessment: Validation of selected technologies (e.g., propulsion systems, electrification, IT systems) for integration, scalability, and lifecycle performance.
• Operational Readiness: Examination of maintenance regimes, operational plans, and staffing to determine capacity to meet service standards.
• Resilience and Sustainability Check: Review of climate resilience, energy efficiency, and environmental impacts across asset lifecycle.`,
      },
      {
        title: "Strategic Advisory & Transaction Support",
        content: `• Bid Strategy and Positioning: Crafting compelling and compliant bids with a strong value proposition, tailored to client procurement frameworks and evaluation criteria.
• Consortium Structuring: Advisory on forming and managing multi-party consortia, defining roles, governance models, and risk-sharing mechanisms.
• Proposal Development: Hands-on support with technical narratives, financial models, and ESG positioning to deliver complete and persuasive bid submissions.
• Negotiation and Closing Support: Guidance through clarification, negotiation, and contract finalization phases, aligning technical, legal, and financial perspectives.`,
      },
    ],
    reverse: true,
  },
];

// Helper: Formats the bullet-point content string into nested HTML lists
function formatContent(content: string) {
  const lines = content.split("\n");
  return (
    <ul className="list-disc pl-5 space-y-1">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        // Nested list items marked with '-'
        if (trimmed.startsWith("-")) {
          return (
            <li key={i} className="ml-4 list-[circle]">
              {trimmed.slice(1).trim()}
            </li>
          );
        }
        // Bold titles followed by colon in main bullets
        const match = trimmed.match(/^•\s*(.+?):\s*(.*)$/);
        if (match) {
          return (
            <li key={i}>
              <strong>{match[1]}:</strong> {match[2]}
            </li>
          );
        }
        // Default bullet
        return <li key={i}>{trimmed.replace(/^•\s*/, "")}</li>;
      })}
    </ul>
  );
}

// Accordion item component for each service detail
const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // Animate accordion open/close by adjusting maxHeight dynamically
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b border-charcoal">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left font-semibold text-charcoal"
      >
        {title} {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        <div className="pb-4 text-gray-600">{formatContent(content)}</div>
      </div>
    </div>
  );
};

// Main Services page component
export default function Services() {
  // Tracks currently open accordion item index per section
  const [openItems, setOpenItems] = useState<{
    [sectionIndex: number]: number | null;
  }>(() => {
    // Initialize first item open in each section by default
    const initial: { [key: number]: number } = {};
    sections.forEach((_, i) => {
      initial[i] = 0;
    });
    return initial;
  });

  // Toggle open/close state of accordion items
  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <section className="bg-white">
      {/* Hero image banner with dark overlay */}
      <div className="relative w-full h-[40vh] md:h-[60vh]">
        <Image
          src="/ServiceHero.jpg"
          alt="Trains"
          fill
          className="object-cover md:object-[0%_55%]"
          priority
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Page content container */}
      <div className="max-w-6xl mx-auto px-4 md:px-16 py-20">
        {/* Page title */}
        <Heading text={title} mdmaxW="md:max-w-xl" />

        {/* Services sections rendered here */}
        <div className="space-y-16 pt-16 md:pt-24">
          {sections.map((section, sectionIndex) => {
            const fromX = section.reverse ? -50 : 50;
            return (
              <div
                key={sectionIndex}
                className={`flex flex-col md:flex-row ${
                  section.reverse ? "md:flex-row-reverse" : ""
                } items-stretch gap-12 md:gap-16 h-auto md:h-[600px]`}
              >
                {/* Section image with animation */}
                <motion.div
                  initial={{ opacity: 0, x: fromX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full md:w-1/2 h-[450px] md:h-[600px]"
                >
                  <Image
                    src={section.imageUrl}
                    alt={section.heading}
                    width={700}
                    height={900}
                    className="w-full h-full object-cover rounded-xl shadow"
                  />
                </motion.div>

                {/* Section accordion content with animation */}
                <motion.div
                  initial={{ opacity: 0, x: fromX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                  className="w-full md:w-1/2 h-[650px] flex flex-col space-y-4 md:mt-4"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                    {section.heading}
                  </h2>

                  {/* Accordion items for service details */}
                  <div className="space-y-2 pr-2 flex-1 min-h-0 overflow-y-auto">
                    {section.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={`${sectionIndex}-${itemIndex}`}
                        title={item.title}
                        content={item.content}
                        isOpen={openItems[sectionIndex] === itemIndex}
                        onClick={() => toggleItem(sectionIndex, itemIndex)}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
