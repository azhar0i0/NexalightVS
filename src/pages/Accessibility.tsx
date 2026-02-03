import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';

export default function Accessibility() {
  return (
    <Layout>
      <section
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="accessibility-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1
              id="accessibility-heading"
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Accessibility Statement
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Last Updated: February 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            {/* Our Commitment to Accessibility */}
            <AnimatedTextBlock delay={100}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Accessibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nexalight Virtual Solutions is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
              </p>
            </AnimatedTextBlock>

            {/* Accessibility Standards We Aim to Follow */}
            <AnimatedTextBlock delay={200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Standards We Aim to Follow</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We aim for our Site to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, as widely recognized standards for accessible web content. Where appropriate, we also consider applicable accessibility laws and guidance, including the Americans with Disabilities Act (ADA) and related regulations.
              </p>
            </AnimatedTextBlock>

            {/* Scope of This Statement */}
            <AnimatedTextBlock delay={300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Scope of This Statement</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This statement applies to content and functionality provided on [WEBSITE URL] and its primary pages and forms. Some content or functionality may be provided by third parties (for example, a third-party site you are directed to for application/onboarding). We cannot control third-party accessibility, but we encourage third parties to provide accessible content.
              </p>
            </AnimatedTextBlock>

            {/* measures */}
            <AnimatedTextBlock delay={400}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Measures We Take to Support Accessibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take the following measures to help ensure accessibility:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Include accessibility in our design and development practices.</li>
                <li>Use semantic HTML and appropriate ARIA attributes where needed.</li>
                <li>Provide text alternatives for non-text content when applicable.</li>
                <li>Support keyboard navigation for site functionality and forms.</li>
                <li>Maintain sufficient color contrast and readable typography.</li>
                <li>Provide clear labels, instructions, and error messages on forms.</li>
                <li>Test core workflows (such as the pre-screening form) for accessibility.</li>
                <li>Work to fix accessibility issues discovered through testing or user feedback.</li>
              </ul>
            </AnimatedTextBlock>

            {/* Accessibility features */}
            <AnimatedTextBlock delay={500}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your Site implementation, accessibility features may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Form labels and instructions that can be read by screen readers.</li>
                <li>Logical heading structure for easier navigation.</li>
                <li>Keyboard-accessible buttons, menus, and form controls.</li>
                <li>Focus indicators that show where a user is on the page.</li>
                <li>Responsive layout for zoom and mobile accessibility.</li>
                <li>Avoidance of content that flashes more than three times per second.</li>
                <li>Error prevention and suggestions when form validation fails.</li>
              </ul>
            </AnimatedTextBlock>

            {/* Known Limitations and Alternatives */}
            <AnimatedTextBlock delay={300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Known Limitations and Alternatives</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Despite our efforts, some users may encounter issues. Known limitations may include anything in your mind. We are working to address any issues in a timely manner. <br />If you need an alternative format or assistance completing any step on our Site, please contact us and we will provide reasonable support.
              </p>
            </AnimatedTextBlock>

            {/* Third-Party Content and Links */}
            <AnimatedTextBlock delay={300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Content and Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Site may link to or direct users to third-party websites for application, onboarding, training, or related steps. We do not control those websites and cannot guarantee their accessibility. If you encounter an accessibility barrier on a third-party site, please contact that provider directly and/or notify us so we can note the issue and, where possible, provide alternatives or guidance.
              </p>
            </AnimatedTextBlock>

            {/* Feedback */}
            <AnimatedTextBlock delay={400}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Feedback</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We welcome your feedback on the accessibility of our Site. If you encounter accessibility barriers or need assistance, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mb-6">
                <li><strong>Name:</strong> Nexalight Virtual Solutions</li>
                <li><strong> Attn:</strong> Accessibility</li>
                <li><strong>Email:</strong> info@nexalightvs.com</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Please include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>The web page URL (for verification)</li>
                <li>Description of the issue (to understand it fully)</li>
                <li>The assistive technology you were using (if any)</li>
                <li>Your preferred way to be contacted.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We try to respond to feedback as soon as possible.
              </p>
            </AnimatedTextBlock>

            {/* Compatibility with Browsers and Assistive Technology */}
            <AnimatedTextBlock delay={500}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Compatibility with Browsers and Assistive Technology</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We aim to support recent versions of major browsers (Chrome, Safari, Firefox, Edge) and common assistive technologies (such as screen readers and voice control). Accessibility may vary depending on device, browser, and settings.
              </p>
            </AnimatedTextBlock>

            {/* Assessment Methods */}
            <AnimatedTextBlock delay={500}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Assessment Methods</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may evaluate the accessibility of our Site through methods such as:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Self-evaluation and manual testing of key user flows (especially the pre-screening form).</li>
                <li>Automated accessibility testing tools.</li>
                <li>Periodic reviews as content or functionality changes.</li>
                <li>Reviewing user feedback and addressing reported barriers.</li>
              </ul>
            </AnimatedTextBlock>

            {/* Continuous Improvement */}
            <AnimatedTextBlock delay={600}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Continuous Improvement</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Accessibility is an ongoing effort. We will continue to work toward improving accessibility and usability for all users, including by addressing issues identified through testing and feedback.
              </p>
            </AnimatedTextBlock>
          </div>
        </div>
      </section>
    </Layout>
  );
}
