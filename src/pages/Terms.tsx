import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';

export default function Terms() {
  return (
    <Layout>
      <section
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="terms-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1
              id="terms-heading"
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Website Terms and Conditions
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
            {/* Agreement to Terms */}
            <AnimatedTextBlock delay={100}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These Terms and Conditions ("Terms") govern your access to and use of Nexalight Virtual Solutions (the "Site") and any related services or features made available through the Site (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the Services.
              </p>
            </AnimatedTextBlock>

            {/* Purpose of the Site (Recruiting and Pre-Screening) */}
            <AnimatedTextBlock delay={200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Purpose of the Site (Recruiting and Pre-Screening)</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Site provides information about opportunities to work with or under the Company and allows you to submit limited information for recruiting and pre-screening purposes. The Site is not an application portal in itself unless explicitly stated. After completing pre-screening steps on the Site, you may be directed to a third-party website to continue the application, onboarding, training, or work access process.
              </p>
            </AnimatedTextBlock>

            {/* Eligibility */}
            <AnimatedTextBlock delay={200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You must be at least the age of majority in your jurisdiction (and meet any minimum age requirements stated on the Site) to use the Services. By using the Services, you represent that you meet these requirements and that any information you submit is accurate and truthful.
              </p>
            </AnimatedTextBlock>

            {/* No Employment Guarantee; Independent Relationship */}
            <AnimatedTextBlock delay={200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">No Employment Guarantee; Independent Relationship</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Submitting information through the Site does not guarantee you will be accepted, hired, contracted, or offered work. Any decisions about eligibility, acceptance, hiring, contracting, scheduling, or work assignments are made at the Company’s discretion and/or by the applicable third-party platform or client program requirements. <br />
                Nothing on the Site creates an employment relationship, partnership, joint venture, agency, or other relationship except as may be established by separate written agreements.
              </p>
            </AnimatedTextBlock>

            {/* Third-Party Websites and Platforms */}
            <AnimatedTextBlock delay={200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Websites and Platforms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Site may link to or direct you to third-party websites, platforms, or services ("Third-Party Services"), including a third-party website used for application, onboarding, training, or work access. Third-Party Services are not owned or controlled by the Company, and your use of them is governed by their own terms and privacy policies. We are not responsible for Third-Party Services, their content, or their practices.
              </p>
            </AnimatedTextBlock>

            {/* User Submissions and Communications */}
            <AnimatedTextBlock delay={200}>
              <h1 className="text-2xl font-bold text-foreground my-4">User Submissions and Communications</h1>
              <h2 className="text-2xl font-bold text-gray-600 mb-4">1. Information You Submit</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you submit information through the Site ("User Submissions"), you agree that the information is truthful, accurate, and complete, and that you will update it if it changes during the recruiting process. You agree not to submit sensitive information unless specifically requested through an official secure process (for example, government IDs, Social Security numbers, financial account details, or health information).
              </p>
              <h2 className="text-2xl font-bold text-gray-600 mb-4">2. Communications</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you provide contact information, you consent to receive communications from us regarding your inquiry or pre-screening submission, including administrative messages about next steps. You may opt out of non-essential communications as described in our Privacy Policy. Standard message and data rates may apply if text messaging is used (if applicable).
              </p>
              <h2 className="text-2xl font-bold text-gray-600 mb-4">3. Email Delivery</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Form submissions may be transmitted to and stored in the Company’s email inboxes and systems. You understand that email is not always a fully secure method of communication. Please avoid sending sensitive information through the Site.
              </p>
            </AnimatedTextBlock>

            {/* Acceptable Use */}
            <AnimatedTextBlock delay={300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Use the Services for any unlawful purpose or in violation of any applicable law or regulation.</li>
                <li>Submit false, misleading, or fraudulent information, or submit information on behalf of another person without authorization.</li>
                <li>Interfere with or disrupt the Services, servers, or networks connected to the Services.</li>
                <li>Attempt to gain unauthorized access to any portion of the Services or related systems.</li>
                <li>Introduce malware, viruses, or other harmful code.</li>
                <li>Scrape, harvest, or collect information from the Site through automated means without our permission.</li>
                <li>Use the Services to harass, threaten, or harm others.</li>
              </ul>
            </AnimatedTextBlock>

            {/* Intellectual Property */}
            <AnimatedTextBlock delay={400}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Site and its content (including text, graphics, logos, designs, and software) are owned by or licensed to the Company and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Site for your personal, non-commercial use related to exploring opportunities and submitting information. <br />
                You may not copy, reproduce, modify, distribute, create derivative works from, publicly display, or exploit any part of the Site without our prior written consent, except as permitted by law.
              </p>
            </AnimatedTextBlock>

            {/* Disclaimers */}
            <AnimatedTextBlock delay={500}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. <br />
                We do not warrant that the Site will be uninterrupted, error-free, or secure, or that any defects will be corrected.
              </p>
            </AnimatedTextBlock>

            {/* Limitation of Liability */}
            <AnimatedTextBlock delay={600}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. <br />
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE COMPANY’S TOTAL LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICES EXCEED THE GREATER OF (A) $100 OR (B) THE AMOUNT YOU PAID TO US FOR USE OF THE SERVICES IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM. (NOTE: IF YOU PAID NOTHING, THIS AMOUNT WILL BE $100.)
              </p>
            </AnimatedTextBlock>

            {/* Indemnification */}
            <AnimatedTextBlock delay={700}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You agree to indemnify, defend, and hold harmless the Company and its owners, officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or related to: (a) your use of the Services; (b) your violation of these Terms; or (c) your violation of any law or the rights of any third party.
              </p>
            </AnimatedTextBlock>

            {/* Privacy */}
            <AnimatedTextBlock delay={800}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our collection and use of Personal Information is described in our Privacy Policy. By using the Services, you acknowledge that you have read and understand our Privacy Policy.
              </p>
            </AnimatedTextBlock>

            {/* Changes to the Services */}
            <AnimatedTextBlock delay={900}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to the Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may modify, suspend, or discontinue the Services (in whole or in part) at any time, with or without notice, to the extent permitted by law.
              </p>
            </AnimatedTextBlock>

            {/* Termination */}
            <AnimatedTextBlock delay={1000}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may suspend or terminate your access to the Services at any time if we believe you have violated these Terms or used the Services unlawfully. You may stop using the Services at any time.
              </p>
            </AnimatedTextBlock>

            {/* Governing Law & Venue */}
            <AnimatedTextBlock delay={1000}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law & Venue</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These Terms are governed by the laws of the State of Indiana, without regard to conflict-of-law rules. Any dispute arising out of or relating to these Terms or the Services will be brought exclusively in the state or federal courts located in Marion County, Indiana, and you consent to personal jurisdiction in those courts.
              </p>
            </AnimatedTextBlock>

            {/* Miscellaneous */}
            <AnimatedTextBlock delay={300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Miscellaneous</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Severability:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>If any provision of these Terms is held invalid, the remaining provisions remain in effect.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-2">
                No Waiver:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Failure to enforce any provision is not a waiver of our right to do so later.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Assignment:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>You may not assign these Terms without our consent; we may assign them as part of a business transfer.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Entire Agreement:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>These Terms and the Privacy Policy constitute the entire agreement regarding the Services, unless supplemented by a written agreement.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Headings:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Headings are for convenience and do not affect interpretation.</li>
              </ul>
            </AnimatedTextBlock>
            
            {/* Contact Us */}
            <AnimatedTextBlock delay={1100}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nexalight Virtual Solutions LLC
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>Email:</strong> [EMAIL_ADDRESS]</li>
              </ul>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>Address:</strong> Indianapolis, IN 46204</li>
              </ul>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>Street:</strong> 123 Main Street</li>
              </ul>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>Attn:</strong> Website Terms</li>
              </ul>
            </AnimatedTextBlock>
          </div>
        </div>
      </section>
    </Layout>
  );
}
