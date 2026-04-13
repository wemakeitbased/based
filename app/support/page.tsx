export default function SupportPage() {
  return (
    <main className="legalPage">
      <h1>Support for Based</h1>
      <p><strong>Last Updated:</strong> April 2026</p>

      <section>
        <h2>Contact Support</h2>

        <p>
          If you need help with the Based app, subscriptions, or any technical
          issue, you can contact us directly.
        </p>

        <p>
          Email: <a href="mailto:wemakeitbased@gmail.com">wemakeitbased@gmail.com</a>
        </p>

        <p>
          We usually respond within 24–48 hours.
        </p>
      </section>

      <section>
        <h2>FAQs</h2>

        <div className="faqList">

          <details className="faqItem">
            <summary>How do I cancel my subscription?</summary>
            <div className="faqAnswer">
              <p>Subscriptions are managed through your Apple App Store account.</p>

              <p>
                1. Open Settings on your iPhone<br/>
                2. Tap your Apple ID<br/>
                3. Tap Subscriptions<br/>
                4. Select Based<br/>
                5. Tap Cancel Subscription
              </p>

              <p>
                Your subscription will remain active until the end of the billing period.
              </p>
            </div>
          </details>

          <details className="faqItem">
            <summary>I purchased Premium but it is not unlocked</summary>
            <div className="faqAnswer">
              <p>Try the following:</p>

              <p>
                1. Open the Based app<br/>
                2. Go to Profile → Subscription<br/>
                3. Tap Restore Purchase
              </p>

              <p>
                If the issue continues, contact support and include your Apple purchase receipt.
              </p>
            </div>
          </details>

          <details className="faqItem">
            <summary>How do quote levels work?</summary>
            <div className="faqAnswer">
              <p>
                You can adjust the level using the upper bar to receive anything
                from light motivation to the most brutal quotes.
              </p>
            </div>
          </details>

          <details className="faqItem">
            <summary>How do streaks work?</summary>
            <div className="faqAnswer">
              <p>Your streak increases every day you open the app and interact with quotes.</p>
              <p>Missing a day resets the streak unless streak protection is active.</p>
              <p>Free users receive additional likes after reaching certain streak milestones.</p>
            </div>
          </details>

          <details className="faqItem">
            <summary>How do I report a bug?</summary>
            <div className="faqAnswer">
              <p>Please email wemakeitbased@gmail.com</p>

              <p>
                Include:<br/>
                Your device model<br/>
                Your iOS version<br/>
                Description of the issue<br/>
                Screenshots if possible
              </p>
            </div>
          </details>

        </div>
      </section>
    </main>
  );
}
