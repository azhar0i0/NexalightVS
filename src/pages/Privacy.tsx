import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';

export default function Privacy() {
  return (
    <Layout>
      <section
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="privacy-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1
              id="privacy-heading"
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Privacy Policy
            </h1>
            <p className="mt-2 text-muted-foreground">Recruiting & Pre‑Screening Website (Form Submissions Email to Company • No Payments/Analytics)</p>
            <p className="mt-6 text-xl text-muted-foreground">
              Last Updated: February 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <AnimatedTextBlock delay={100}>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This Privacy Policy explains how [LEGAL BUSINESS NAME] ("we," "us," "our," or the "Company") collects, uses, discloses, and protects information when you visit or use [WEBSITE NAME] (the "Site") and any related features (collectively, the "Services"). The Site is used to collect limited information for recruiting and pre‑screening purposes—specifically, to determine whether an individual appears to meet minimum requirements before being directed to a third‑party website to continue the application or onboarding process. <br />
                By using the Services, you agree to this Privacy Policy. If you do not agree, please do not use the Services.
              </p>
            </AnimatedTextBlock>
            <AnimatedTextBlock delay={200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Scope and Third‑Party Websites / Systems</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Services may direct you to a third‑party website to continue the application or onboarding process (the "Third‑Party Site"). In addition, if you proceed through the hiring/onboarding process, your information may later be processed in separate company systems (for example, HR or payroll systems). Those systems are not part of this Site. <br />
                When you leave our Site or interact with third‑party services, the third party’s privacy policy and terms apply. We are not responsible for third‑party privacy practices.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Information We Collect</h2>
              <p className='text-muted-foreground leading-relaxed'>We collect information in two ways: </p>
              <ul className='text-muted-foreground leading-relaxed mb-4'>
                <li>(A) information you provide directly through our form(s) and communications.</li>
                <li>(B) limited information collected automatically through standard web technologies.</li>
              </ul>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">3.1 Information You Provide</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you complete our sign‑up or pre‑screening form, we collect:
                  Full legal name. <br />
                  Country and state (or similar region/province field, if applicable). <br />
                  General eligibility and minimum‑requirement questions, such as:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Age / confirmation of meeting minimum age requirements.</li>
                  <li>Prior customer service experience (yes/no or general description).</li>
                  <li>Internet speed (self‑reported).</li>
                  <li>Whether you have a laptop or desktop computer that meets minimum requirements.</li>
                  <li>Information about your work experience</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">Form submissions are sent to our company email inbox(es) so our team can review and respond. This means your information may be processed by our email service provider in order to deliver and store those messages. <br />
                  We do not intentionally request sensitive information (such as Social Security numbers, government ID numbers, financial account details, or health information) through this Site. Please do not submit that information to us through the Site.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">3.2 Information Collected Automatically</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Like most websites, our servers may automatically receive limited information when you access the Site, such as IP address, browser type, device type, and basic log information (date/time of access, pages requested, and error logs). <br />
                  We do not use third‑party analytics tools (such as Google Analytics) or advertising pixels as part of our current Site setup.
                </p>
              </div>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={400}>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Review your submission and determine whether you appear to meet minimum requirements (pre‑screening).</li>
                <li>Communicate with you about next steps (typically via email) and respond to your questions.</li>
                <li>Direct you to the Third‑Party Site to continue application/onboarding steps.</li>
                <li>Maintain the security and integrity of the Site (prevent abuse, troubleshoot).</li>
                <li>Comply with legal obligations and enforce our policies.</li>
              </ul>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={500}>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Arise Platform:</strong> As part of the registration and onboarding process for work opportunities</li>
                <li><strong>Service Providers:</strong> Third parties who help us operate our website and services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={600}>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Employment, HR, and Payroll Processing (Outside This Site)</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you move forward in the hiring/onboarding process, additional information may be collected and used for employment, contractor engagement, HR administration, and/or payroll and tax purposes. That processing typically occurs through separate company processes or third‑party systems—not through this Site. <br />
                The information you submit on this Site may be used to initiate or support those processes (for example, to identify you and link your pre‑screening submission to your onboarding file), but payroll‑related collection (such as tax forms, direct deposit details, or government identifiers) is not collected through this Site.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={700}>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. How We Share Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may share information only in limited ways:
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">6.1 Email Delivery and Hosting Providers</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Because submissions are delivered to our company email inbox(es), your information may be processed by our email provider to transmit, store, and secure messages. We may also use web hosting or form‑processing providers to operate the Site. These providers may access information only to provide services to us.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">6.2 Third‑Party Sites</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Site directs you to the Third‑Party Site to continue the application/onboarding process. Unless we clearly state otherwise, your form responses submitted on our Site are not automatically transmitted to the Third‑Party Site. If we do transmit limited information (for example, a referral identifier or basic contact details), we will do so only as needed to connect your submission to the next step.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">6.3 Legal and Safety</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may disclose information if we believe disclosure is necessary to comply with law or legal process, enforce our policies, protect our rights, or protect the safety and security of users and the Services.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">6.4 Business Transfers</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If we are involved in a merger, acquisition, reorganization, bankruptcy, or sale of assets, information may be transferred as part of that transaction.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={800}>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Similar Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use essential cookies or similar technologies necessary for the Site to function (for example, security or session cookies). We do not currently use cookies for targeted advertising.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control cookies through your browser settings. If you disable cookies, some Site features may not work properly.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={900}>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We retain form submissions and related communications for as long as reasonably necessary for recruiting and recordkeeping purposes. Customize a specific retention period that matches your workflow, for example: "We retain pre‑screening submissions for up to [X] months after submission, unless a longer period is required by law."
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1000}>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use reasonable administrative and technical safeguards designed to protect information submitted through the Site and stored in our systems (including email). However, no method of transmission or storage is 100% secure. Please avoid sending sensitive information through the Site.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1100}>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Children’s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Site is intended for adults seeking work opportunities and is not directed to children under 13. If you believe a child has provided us information, contact us so we can delete it.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Depending on where you live, you may have rights regarding your Personal Information, such as the right to access, correct, delete, or obtain a copy of your information. To submit a request, contact us. We may need to verify your identity before responding.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. International Users</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Depending on where you live, you may have rights regarding your Personal Information, such as the right to access, correct, delete, or obtain a copy of your information. To submit a request, contact us. We may need to verify your identity before responding.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1400}>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will post the updated version on the Site and update the "Last Updated" date.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1500}>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>Nexalight Virtual Solutions LLC</strong></li>
                <li><strong>Attn:</strong> Privacy</li>
                <li><strong>Email:</strong> azharisworking@gmail.com</li>
              </ul>
            </AnimatedTextBlock>
          </div>
        </div>
      </section>
    </Layout>
  );
}
