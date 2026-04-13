// app/support/page.tsx

export const metadata = {
  title: "Support | Based",
  description: "Support page for the Based app",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] px-6 py-20 text-black">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Support
        </h1>

        <p className="mt-4 text-sm text-black/60">
          Last Updated: April 2026
        </p>

        {/* CONTACT */}

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact Support
          </h2>

          <p className="mt-5 text-base leading-7 text-black/80">
            If you need help with the Based app, subscriptions, or any technical
            issue, you can contact us directly.
          </p>

          <p className="mt-4 text-base">
            Email:{" "}
            <a
              href="mailto:wemakeitbased@gmail.com"
              className="underline underline-offset-4"
            >
              wemakeitbased@gmail.com
            </a>
          </p>

          <p className="mt-4 text-base text-black/80">
            We usually respond within 24–48 hours.
          </p>
        </section>

        {/* FAQ */}

        <section className="mt-16">

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">

            {/* QUESTION 1 */}

            <details className="group rounded-xl border border-black/10 bg-white/70 p-5">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                How do I cancel my subscription?
                <span className="text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="pt-4">
                <p className="text-base text-black/80">
                  Subscriptions are managed through your Apple App Store account.
                </p>

                <ol className="mt-4 list-decimal pl-6 space-y-2 text-black/80">
                  <li>Open Settings on your iPhone</li>
                  <li>Tap your Apple ID</li>
                  <li>Tap Subscriptions</li>
                  <li>Select Based</li>
                  <li>Tap Cancel Subscription</li>
                </ol>

                <p className="mt-4 text-black/80">
                  Your subscription will remain active until the end of the billing period.
                </p>
              </div>
            </details>


            {/* QUESTION 2 */}

            <details className="group rounded-xl border border-black/10 bg-white/70 p-5">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                I purchased Premium but it is not unlocked
                <span className="text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="pt-4">

                <p className="text-black/80">
                  Try the following:
                </p>

                <ol className="mt-4 list-decimal pl-6 space-y-2 text-black/80">
                  <li>Open the Based app</li>
                  <li>Go to Profile → Subscription</li>
                  <li>Tap Restore Purchase</li>
                </ol>

                <p className="mt-4 text-black/80">
                  If the issue continues, contact support and include your Apple purchase receipt.
                </p>

              </div>
            </details>


            {/* QUESTION 3 */}

            <details className="group rounded-xl border border-black/10 bg-white/70 p-5">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                How do quote levels work?
                <span className="text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="pt-4">

                <p className="text-black/80">
                  You can adjust the level using the upper bar to receive anything
                  from light motivation to the most brutal quotes.
                </p>

              </div>
            </details>


            {/* QUESTION 4 */}

            <details className="group rounded-xl border border-black/10 bg-white/70 p-5">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                How do streaks work?
                <span className="text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="pt-4">

                <p className="text-black/80">
                  Your streak increases every day you open the app and interact with quotes.
                </p>

                <p className="mt-3 text-black/80">
                  Missing a day resets the streak unless streak protection is active.
                </p>

                <p className="mt-3 text-black/80">
                  Free users receive additional likes after reaching certain streak milestones.
                </p>

              </div>
            </details>


            {/* QUESTION 5 */}

            <details className="group rounded-xl border border-black/10 bg-white/70 p-5">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                How do I report a bug?
                <span className="text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="pt-4">

                <p className="text-black/80">
                  Please email{" "}
                  <a
                    href="mailto:wemakeitbased@gmail.com"
                    className="underline"
                  >
                    wemakeitbased@gmail.com
                  </a>
                </p>

                <p className="mt-3 text-black/80">
                  Include:
                </p>

                <ul className="mt-3 list-disc pl-6 space-y-2 text-black/80">
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
