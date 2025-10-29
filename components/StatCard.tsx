export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="card text-center">
      <div
        className="text-3xl font-semibold"
        style={{ color: "var(--color-earth-brown)" }}
      >
        {value}
      </div>
      <div className="mt-1" style={{ color: "#4b5563" }}>
        {label}
      </div>
    </div>
  );
}
