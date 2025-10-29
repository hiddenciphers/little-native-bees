export function Footer() {
  return (
    <footer
      className="mt-16"
      style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
    >
      <div className="container py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold mb-2">Little Native Bees Inc</div>
          <p className="text-[color:var(--color-foreground)]/70">
            East Tamworth, NSW 2340
          </p>
          <p className="text-[color:var(--color-foreground)]/70">
            info@littlenativebees.org.au
          </p>
          <p className="text-[color:var(--color-foreground)]/70">
            (02) 1234 5678
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow</div>
          <ul className="space-y-2 text-[color:var(--color-foreground)]/70">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X (Twitter)</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Get Involved</div>
          <ul className="space-y-2 text-[color:var(--color-foreground)]/70">
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Adopt a Hive</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <p className="text-[color:var(--color-foreground)]/70">
            © 2025 Little Native Bees Inc
          </p>
          <p className="text-[color:var(--color-foreground)]/70">
            Privacy • Terms
          </p>
        </div>
      </div>
    </footer>
  );
}
