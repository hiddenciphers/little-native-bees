export function Section({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container py-14 sm:py-20">
      {kicker && <div className="kicker mb-3">{kicker}</div>}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-4">{title}</h2>
      <div className="max-w-none">{children}</div>
    </section>
  );
}
