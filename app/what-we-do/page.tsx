import { Section } from "@/components/Section";

export default function WhatWeDoPage() {
  return (
    <>
      <Section title="Conservation Efforts">
        <ul className="list-disc pl-5 space-y-1">
          <li>Hive Rescue Program</li>
          <li>Habitat Restoration</li>
          <li>Research Collaboration</li>
        </ul>
      </Section>
      <Section title="Education & Outreach">
        <ul className="list-disc pl-5 space-y-1">
          <li>School Workshops</li>
          <li>Community Events</li>
          <li>Online Resources</li>
        </ul>
      </Section>
      <Section title="Advocacy">
        <p>Support bee‑safe policies and practices across NSW and beyond.</p>
      </Section>
    </>
  );
}
