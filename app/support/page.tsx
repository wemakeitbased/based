// app/support/page.tsx

export const metadata = {
  title: "Support | Based",
  description: "Support page for the Based app",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Support</h1>

        <p className="mt-4 text-sm text-neutral-600">Last Updated: April 2026</p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Contact Support</h2>
          <p className="mt-4">
            If you need help with the Based app, subscriptions, or any technical
            issue, you can contact us directly.
          </p>
          <p className="mt-4">
            Email:{" "}
            <a
              href="mailto:wemakeitbased@gmail.com"
              className="underline underline-offset-4"
            >
              wemakeitbased@gmail.com
            </a>
          </p>
          <p className="mt-4">We usually respond within 24–48 hours.</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                How do I cancel my subscription?
              </h3>
              <p className="mt-3">
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
                Your subscription will remain active until the end of the billing
                period.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                I purchased Premium but it is not unlocked
              </h3>
              <p className="mt-3">Try the following:</p>
              <ol className="mt-4 list-decimal space-y-2 pl-6">
                <li>Open the Based app</li>
                <li>Go to Profile → Subscription</li>
                <li>Tap Restore Purchase</li>
              </ol>
              <p className="mt-4">
                If the issue continues, contact support and include your Apple
                purchase receipt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">How do quote levels work?</h3>
              <p className="mt-3">
                You can adjust the level using the upper bar to receive anything
                from light motivation to the most brutal quotes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">How do streaks work?</h3>
              <p className="mt-3">
                Your streak increases every day you open the app and interact with
                quotes.
              </p>
              <p className="mt-3">
                Missing a day resets the streak unless streak protection is active.
              </p>
              <p className="mt-3">
                Free users receive additional likes after reaching certain streak
                milestones.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">How do I report a bug?</h3>
              <p className="mt-3">
                Please email{" "}
                <a
                  href="mailto:wemakeitbased@gmail.com"
                  className="underline underline-offset-4"
                >
                  wemakeitbased@gmail.com
                </a>
                .
              </p>
              <p className="mt-3">Include:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>your device model</li>
                <li>your iOS version</li>
                <li>a description of the issue</li>
                <li>screenshots if possible</li>
              </ul>
              <p className="mt-4">This helps us fix problems faster.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Feature requests</h3>
              <p className="mt-3">
                Have an idea for new quotes, themes, or features?
              </p>
              <p className="mt-3">
                Send it to{" "}
                <a
                  href="mailto:wemakeitbased@gmail.com"
                  className="underline underline-offset-4"
                >
                  wemakeitbased@gmail.com
                </a>
                .
              </p>
              <p className="mt-3">We read every suggestion.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
