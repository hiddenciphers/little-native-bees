import Link from "next/link";
import { Section } from "@/components/Section";

const posts = [
  {
    title: "Tiny Pollinators of Tamworth",
    date: "January 2025",
    slug: "tiny-pollinators-of-tamworth",
  },
  {
    title: "Build a Bee Hotel This Weekend",
    date: "February 2025",
    slug: "build-a-bee-hotel",
  },
  {
    title: "2025 Bee Festival Announcement",
    date: "March 2025",
    slug: "bee-festival-2025",
  },
];

export default function BlogPage() {
  return (
    <Section title="Blog & News">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug} className="card">
            <div className="kicker mb-1">{p.date}</div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <Link
              href={`/blog/${p.slug}`}
              style={{ color: "var(--color-gum-green)", fontWeight: 500 }}
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
