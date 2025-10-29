import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { StatCard } from "@/components/StatCard";
import BeehouseGrowth from "@/components/BeehouseGrowth";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section title="Our Recent Wins" kicker="Featured Impact">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard value="50+" label="Native bee colonies rescued" />
          <StatCard value="200+" label="Students educated" />
          <StatCard value="1,000" label="Native plants planted" />
        </div>
      </Section>
      <Section title="Why wait?" kicker="Call to Action">
        <p>
          Every action counts—donate, volunteer, or start a bee‑friendly garden
          at home.
        </p>
      </Section>
      <BeehouseGrowth />
    </>
  );
}
