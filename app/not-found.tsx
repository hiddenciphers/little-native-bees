import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-2" style={{ fontSize: "1.125rem", color: "#6b7280" }}>
        Sorry, we couldn’t find that page.
      </p>
      <Link href="/" className="btn btn-primary mt-6">
        Back to Home
      </Link>
    </div>
  );
}
