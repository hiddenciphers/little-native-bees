import { Section } from "@/components/Section";

export default function GetInvolvedPage() {
  return (
    <>
      <Section title="Ways to Support Us">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Donate:</strong> Fund a rescue, workshop, or habitat plot.
          </li>
          <li>
            <strong>Volunteer:</strong> Field teams, events, or admin.
          </li>
          <li>
            <strong>Adopt a Hive:</strong> Sponsor a colony and receive updates.
          </li>
          <li>
            <strong>Spread the Word:</strong> Share and plant native flowers.
          </li>
        </ul>
      </Section>
    </>
  );
}
