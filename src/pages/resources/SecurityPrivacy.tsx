import { Badge } from '../../components/ui/Badge';

export const SecurityPrivacy = () => {
  return (
    <div className='w-full min-h-screen bg-base font-nunito'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-[900px] py-12 md:py-20'>
        <div className='text-center mb-8'>
          <Badge className='mx-auto mb-4' icon={<span className='hidden' />}>
            Privacy policy
          </Badge>
          <h1 className='text-3xl md:text-4xl font-extrabold text-accent'>
            Privacy Policy
          </h1>
          <p className='mt-2 text-sm text-accent/70'>
            Last updated: November 1, 2025
          </p>
        </div>

        <article className='prose prose-sm md:prose md:prose-lg max-w-none text-accent/90'>
          <p>
            <strong>Welcome to Dasamonie</strong> (<em>“we”, “our”, “us”</em>).
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our website, mobile application, and any related services
            (collectively, the <strong>“Services”</strong>). Please read this
            policy carefully.
          </p>

          <p>
            By accessing or using Dasamonie, you agree to the terms of this
            Privacy Policy. If you do not agree, please do not use our Services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following categories of information:</p>

          <h3>a. Personal Information</h3>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Date of birth</li>
            <li>Gender (optional)</li>
            <li>Residential or billing address</li>
          </ul>

          <h3>b. Financial Information</h3>
          <ul>
            <li>Bank account details</li>
            <li>BVN (Bank Verification Number)</li>
            <li>
              Card information (processed securely through our payment partners)
            </li>
          </ul>

          <h3>c. Transaction Data</h3>
          <ul>
            <li>Transaction history</li>
            <li>Payment amounts</li>
            <li>Service usage logs</li>
          </ul>

          <h3>d. Technical and Device Information</h3>
          <ul>
            <li>IP address</li>
            <li>Device type and OS version</li>
            <li>App usage statistics</li>
            <li>Browser information</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>e. Identity Verification Data</h3>
          <ul>
            <li>Government-issued ID (e.g., national ID, passport)</li>
            <li>
              Selfie or live photo for KYC (Know Your Customer) verification
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and manage your access to Dasamonie’s services</li>
            <li>Process transactions and payments securely</li>
            <li>Verify your identity and comply with KYC/AML regulations</li>
            <li>
              Communicate important updates, confirmations, and support messages
            </li>
            <li>Improve our products, services, and user experience</li>
            <li>
              Prevent fraud, unauthorized access, and other illegal activities
            </li>
            <li>Comply with legal obligations and regulatory requirements</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>We may share your data with:</p>
          <ul>
            <li>
              Financial institutions and payment processors for transaction
              processing
            </li>
            <li>Identity verification providers for compliance purposes</li>
            <li>Regulatory authorities as required by law</li>
            <li>
              Service providers and partners who help us operate and maintain
              the platform
            </li>
            <li>
              Analytics and marketing partners (anonymized or aggregated data
              only)
            </li>
          </ul>
          <p className='font-semibold'>
            We do not sell or rent your personal information to third parties.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We use advanced security measures to protect your information,
            including encryption, firewalls, and secure data storage systems.
            While we strive to ensure the highest level of security, no system
            is 100% foolproof. You are responsible for keeping your login
            credentials confidential.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to fulfill the
            purposes described in this policy, comply with legal obligations,
            and resolve disputes.
          </p>

          <h2>6. Your Privacy Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent at any time</li>
            <li>Request a copy of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p>
            To exercise these rights, please contact us at
            <strong> support@dasamonie.com</strong>.
          </p>

          <h2>7. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to improve functionality and
            user experience. You can manage or disable cookies through your
            browser settings, though some features may not function properly.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our Services may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those websites.
            Please review their privacy policies before providing any personal
            data.
          </p>

          <h2>9. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in
            our practices or legal obligations. Updates will be posted with a
            revised <strong>“Last updated”</strong> date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            how we handle your data, please contact us at:
          </p>
          <ul>
            <li>
              📧 <strong>support@dasamonie.com</strong>
            </li>
            <li>
              🌐 <strong>www.dasamonie.com</strong>
            </li>
            <li>
              📍 <strong>[Insert Company Address, e.g., Lagos, Nigeria]</strong>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default SecurityPrivacy;
