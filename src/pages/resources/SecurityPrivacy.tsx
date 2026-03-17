import { Badge } from "../../components/ui/Badge";

export const SecurityPrivacy = () => {
  return (
    <div className="w-full min-h-screen bg-base font-nunito">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[900px] py-12 md:py-20">
        <div className="text-center mb-8">
          <Badge className="mx-auto mb-4" icon={<span className="hidden" />}>
            Privacy policy
          </Badge>
          <h1 className="text-3xl md:text-4xl font-extrabold text-accent">
            Dasamonie Digital Service Ltd
          </h1>
          <p className="mt-2 text-sm text-accent/70">
            Effective Date: November 1, 2025
          </p>
        </div>

        <article className="prose prose-sm md:prose md:prose-lg max-w-none text-accent/90">
          <p>
            Dasamonie Digital Service Ltd ("Dasamonie", "we", "our", or "us")
            respects your privacy and is committed to protecting your personal
            information.
          </p>

          <p>
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use the Dasamonie mobile
            application and related services. By using the Dasamonie app, you
            agree to the practices described in this Privacy Policy.
          </p>

          <div className="mt-4">
            <>
              <h2 className="font-bold">1. Company Information</h2>
              <p>
                This application is operated by: Company Name: Dasamonie Digital
                Service Ltd Registration Number: RC 9017159 Support Email:
                support@dasamonie.com Legal Email: legal@dasamonie.com Dasamonie
                provides digital financial services and business support
                services through its platform.
              </p>
            </>

            <>
              <h2 className="font-bold"> Information We Collect</h2>
              <p>
                To provide our services, we may collect the following types of
                information.
              </p>
            </>

            <>
              <h2 className="font-bold">Personal Information</h2>

              <ul className="ml-4 list-decimal">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Date of birth</li>
                <li>
                  Government identification information such as BVN or NIN
                </li>
                <li>
                  Business registration information (for company registration
                  services)
                </li>
                <li>Account Information</li>
                <li>Login credentials</li>
                <li>Transaction history</li>
                <li>Service usage records</li>
                <li>Device Information</li>
                <li>Device model</li>
                <li>Operating system</li>
                <li>Device identifiers</li>
                <li>IP address</li>
                <li>App usage data</li>
                <li>Documents Provided by Users</li>
              </ul>
              <p>
                Users may upload documents for services such as: Identity
                verification Business registration
              </p>
            </>
          </div>

          <>
            <h2>Transaction verification</h2>

            <ul className="ml-4 list-decimal">
              <li>
                How We Use Your Information Dasamonie uses collected information
                for the following purposes: Creating and managing user accounts
                Identity verification and Know Your Customer (KYC) compliance
                Processing financial transactions Providing loan services
                Facilitating company registration services Fraud prevention and
                security monitoring Customer support Regulatory compliance
                Improving our services and platform performance
              </li>

              <li>
                BVN and NIN Services Dasamonie may assist users with retrieving
                or printing information related to BVN or NIN through authorized
                channels. Dasamonie: Does not generate or issue BVN numbers Does
                not generate or issue NIN numbers Does not store biometric data
                Dasamonie is not affiliated with the National Identity
                Management Commission unless explicitly stated. Users are
                responsible for providing accurate information when requesting
                these services.
              </li>

              <li>
                Company Registration Services Dasamonie provides company
                registration assistance services and may work with authorized
                filing agents or government agencies such as the Corporate
                Affairs Commission. Dasamonie is not the Corporate Affairs
                Commission and does not represent the government.
              </li>

              <li>
                How We Share Your Information Your information may be shared
                with trusted third parties when necessary to provide services.
                These may include: Licensed financial institution partners
                Payment processors Government agencies where required by law
                Identity verification providers Company registration partners
                Fraud prevention and compliance partners Dasamonie does not sell
                or rent personal data to third parties.
              </li>

              <li>
                Data Security Dasamonie implements industry-standard security
                measures to protect your information. Security measures include:
                Secure encrypted connections Restricted system access Continuous
                monitoring for security threats Secure data storage systems
                However, no system is completely secure, and users are
                responsible for protecting their account credentials.
              </li>

              <li>
                {" "}
                Data Retention We retain personal information only as long as
                necessary to: Provide services Comply with legal obligations
                Prevent fraud Resolve disputes Certain records may be retained
                as required by financial regulations.
              </li>

              <li>
                User Rights Users have the right to: Access their personal data
                Request correction of inaccurate information Request account
                deletion Withdraw consent for certain data processing Requests
                can be made by contacting support.
              </li>

              <li>
                {" "}
                Account Deletion Users may delete their account through the
                Delete Account option in the app settings. When an account
                deletion request is submitted: Personal data will be removed
                from active systems Some data may be retained where required by
                law or regulatory compliance Account deletion may take up to 30
                days to complete.
              </li>

              <li>
                Children's Privacy Dasamonie services are not intended for
                individuals under the age of 18. We do not knowingly collect
                personal information from children. Dasamonie may update this
                Privacy Policy periodically. Users will be notified of
                significant updates through the application or email. Continued
                use of the app after updates indicates acceptance of the revised
                policy.
              </li>

              <li>
                {" "}
                Contact Us If you have questions about this Privacy Policy or
                our data practices, please contact us
              </li>
            </ul>

            <div className="mt-4">
              <h2 className="font-bold">
                Dasamonie Digital Service Ltd Support
              </h2>
              <ul>
                <li>Email: support@dasamonie.com</li>
                <li>Legal Email: legal@dasamonie.com</li>
                <li> Business Address: NNPC 63BLOCK GARKI ABUJA</li>
              </ul>
            </div>
          </>
        </article>
      </div>
    </div>
  );
};

export default SecurityPrivacy;
