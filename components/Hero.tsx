import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section style={{ background: "var(--color-gum-pale)" }}>
      <div className="container py-16 sm:py-24 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="kicker">Australia&apos;s Native Bees</p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Tiny wings, mighty impact
          </h1>
          <p className="lead mt-4">
            Safeguarding small pollinators through conservation, education, and
            community.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/get-involved" className="btn btn-primary">
              Donate Now
            </Link>
            <Link href="/what-we-do" className="btn btn-ghost">
              Learn More
            </Link>
          </div>
        </div>

        <div className="order-first lg:order-last flex justify-center">
          <Image
            src="/beeshouse.svg"
            alt="Bee house illustration"
            width={480}
            height={360}
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
