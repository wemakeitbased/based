// app/support/page.tsx

export const metadata = {
  title: "Support | Based",
  description: "Support page for the Based app",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] px-6 py-20 text-black">
      <div className="mx-auto max-w-2xl">

        <h1 className="text-5xl font-bold">Support</h1>

        <p className="mt-4 text-sm text-black/60">
          Last Updated: April 2026
        </p>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold">
            Contact Support
          </h2>

          <p className="mt-5 text-black/80">
            If you need help with the Based app, subscriptions, or any technical issue,
            you can contact us directly.
          </p>

          <p className="mt-4">
            Email:{" "}
            <a
              href="mailto:wemakeitbased@gmail.com"
              className="underline"
            >
              wemakeitbased@gmail.com
            </a>
          </p>

          <p className="mt-4 text-black/80">
            We usually respond within 24–48 hours.
          </p>
        </section>

        {/* FAQ */}

        <section className="mt-16">

          <h2 className="text-3xl font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 divide-y divide-black/10">

            {/* Q1 */}

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">

                <span>How do I cancel my subscription?</span>

                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="mt-4 text-black/80 space-y-3">

                <p>
                  Subscriptions are managed through your Apple App Store account.
                </p>

                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open Settings on your iPhone</li>
                  <li>Tap your Apple ID</li>
                  <li>Tap Subscriptions</li>
                  <li>Select Based</li>
                  <li>Tap Cancel Subscription</li>
                </ol>

                <p>
                  Your subscription will remain active until the end of the billing period.
                </p>

              </div>
            </details>

            {/* Q2 */}

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">

                <span>I purchased Premium but it is not unlocked</span>

                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="mt-4 text-black/80 space-y-3">

                <p>Try the following:</p>

                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open the Based app</li>
                  <li>Go to Profile → Subscription</li>
                  <li>Tap Restore Purchase</li>
                </ol>

                <p>
                  If the issue continues, contact support and include your Apple purchase receipt.
                </p>

              </div>
            </details>

            {/* Q3 */}

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">

                <span>How do quote levels work?</span>

                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="mt-4 text-black/80">

                <p>
                  You can adjust the level using the upper bar to receive anything
                  from light motivation to the most brutal quotes.
                </p>

              </div>
            </details>

            {/* Q4 */}

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">

                <span>How do streaks work?</span>

                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="mt-4 text-black/80 space-y-3">

                <p>
                  Your streak increases every day you open the app and interact with quotes.
                </p>

                <p>
                  Missing a day resets the streak unless streak protection is active.
                </p>

                <p>
                  Free users receive additional likes after reaching certain streak milestones.
                </p>

              </div>
            </details>

            {/* Q5 */}

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">

                <span>How do I report a bug?</span>

                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="mt-4 text-black/80 space-y-3">

                <p>
                  Please email{" "}
                  <a
                    href="mailto:wemakeitbased@gmail.com"
                    className="underline"
                  >
                    wemakeitbased@gmail.com
                  </a>
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Your device model</li>
                  <li>Your iOS version</li>
                  <li>Description of the issue</li>
                  <li>Screenshots if possible</li>
                </ul>

              </div>
            </details>

          </div>
        </section>

      </div>
    </main>
  );
}
