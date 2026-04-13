// app/support/page.tsx

export const metadata = {
  title: "Support | Based",
  description: "Support page for the Based app",
};

function FAQItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl bg-white/70 px-6 py-5 ring-1 ring-black/8 transition-all duration-200">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="text-xl font-semibold text-black">{question}</span>

        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <span className="absolute h-[1.5px] w-4 rounded-full bg-black transition-transform duration-300" />
          <span className="absolute h-4 w-[1.5px] rounded-full bg-black transition-all duration-300 group-open:scale-y-0" />
        </span>
      </summary>

      <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="pt-5 text-base leading-8 text-black/60">
            {children}
          </div>
        </div>
      </div>
    </details>
  );
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] px-6 py-12 text-black sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-5xl">
          <h1 className="max-w-4xl text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Support for
            <br />
            Based
          </h1>

          <p className="mt-10 text-base font-semibold text-black/55 sm:text-lg">
            Last Updated: April 2026
          </p>

          <section className="mt-12 max-w-5xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Contact Support
            </h2>

            <p className="mt-5 text-xl leading-9 text-black/60">
              If you need help with the Based app, subscriptions, or any
              technical issue, you can contact us directly.
            </p>

            <p className="mt-5 text-xl leading-9 text-black/60">
              Email:{" "}
              <a
                href="mailto:wemakeitbased@gmail.com"
                className="underline underline-offset-4 text-black/75"
              >
                wemakeitbased@gmail.com
              </a>
            </p>

            <p className="mt-5 text-xl leading-9 text-black/60">
              We usually respond within 24–48 hours.
            </p>
          </section>

          <section className="mt-14 max-w-5xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-4">
              <FAQItem question="How do I cancel my subscription?">
                <p>
                  Subscriptions are managed through your Apple App Store
                  account.
                </p>

                <ol className="mt-4 list-decimal space-y-2 pl-6">
                  <li>Open Settings on your iPhone</li>
                  <li>Tap your Apple ID</li>
                  <li>Tap Subscriptions</li>
                  <li>Select Based</li>
                  <li>Tap Cancel Subscription</li>
                </ol>

                <p className="mt-4">
                  Your subscription will remain active until the end of the
                  billing period.
                </p>
              </FAQItem>

              <FAQItem question="I purchased Premium but it is not unlocked">
                <p>Try the following:</p>

                <ol className="mt-4 list-decimal space-y-2 pl-6">
                  <li>Open the Based app</li>
                  <li>Go to Profile → Subscription</li>
                  <li>Tap Restore Purchase</li>
                </ol>

                <p className="mt-4">
                  If the issue continues, contact support and include your Apple
                  purchase receipt.
                </p>
              </FAQItem>

              <FAQItem question="How do quote levels work?">
                <p>
                  You can adjust the level using the upper bar to receive
                  anything from light motivation to the most brutal quotes.
                </p>
              </FAQItem>

              <FAQItem question="How do streaks work?">
                <p>
                  Your streak increases every day you open the app and interact
                  with quotes.
                </p>

                <p className="mt-4">
                  Missing a day resets the streak unless streak protection is
                  active.
                </p>

                <p className="mt-4">
                  Free users receive additional likes after reaching certain
                  streak milestones.
                </p>
              </FAQItem>

              <FAQItem question="How do I report a bug?">
                <p>
                  Please email{" "}
                  <a
                    href="mailto:wemakeitbased@gmail.com"
                    className="underline underline-offset-4 text-black/75"
                  >
                    wemakeitbased@gmail.com
                  </a>
                  .
                </p>

                <p className="mt-4">Include:</p>

                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Your device model</li>
                  <li>Your iOS version</li>
                  <li>Description of the issue</li>
                  <li>Screenshots if possible</li>
                </ul>
              </FAQItem>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
