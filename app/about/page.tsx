import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <>
      <Section title="Who We Are">
        <p>
          Little Native Bees Inc. is a registered Australian charity based in
          East Tamworth, NSW.
        </p>
      </Section>
      <Section title="Our Mission">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Conservation:</strong> Rescuing colonies, restoring
            habitats, and policy advocacy.
          </li>
          <li>
            <strong>Education:</strong> Workshops, school programs, and online
            resources.
          </li>
          <li>
            <strong>Community:</strong> Partnerships with farmers, gardeners,
            and locals.
          </li>
        </ul>
      </Section>
    </>
  );
}
