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
    <details className="group border-b border-black/10 py-2">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-medium marker:content-none [&::-webkit-details-marker]:hidden">
        <span>{question}</span>

        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <span className="absolute h-[1.5px] w-4 bg-black transition-transform duration-300" />
          <span className="absolute h-4 w-[1.5px] bg-black transition-transform duration-300 group-open:rotate-90 group-open:scale-y-0" />
        </span>
      </summary>

      <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="pb-4 pr-8 text-base leading-7 text-black/75">
            {children}
          </div>
        </div>
      </div>
    </details>
  );
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] px-6 py-20 text-black">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Support
        </h1>

        <p className="mt-4 text-sm text-black/55">Last Updated: April 2026</p>

        <section className="mt-14">
          <h2 className="text-3xl font-semibold tracking-tight">
            Contact Support
          </h2>

          <p className="mt-5 text-base leading-7 text-black/75">
            If you need help with the Based app, subscriptions, or any technical
            issue, you can contact us directly.
          </p>

          <p className="mt-4 text-base leading-7">
            Email{" "}
            <a
              href="mailto:wemakeitbased@gmail.com"
              className="underline underline-offset-4"
            >
              wemakeitbased@gmail.com
            </a>
          </p>

          <p className="mt-4 text-base leading-7 text-black/75">
            We usually respond within 24–48 hours.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="mt-6">
            <FAQItem question="How do I cancel my subscription?">
              <p>
                Subscriptions are managed through your Apple App Store account.
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
                You can adjust the level using the upper bar to receive anything
                from light motivation to the most brutal quotes.
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
                  className="underline underline-offset-4"
                >
                  wemakeitbased@gmail.com
                </a>
                .
              </p>

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
    </main>
  );
}
