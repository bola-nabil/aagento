import React, {lazy} from "react";

const Cta = lazy(() => import("./Cta"));
const Footer = lazy(() => import("./Footer"));

const PrivacyAndTerm = () => {
  return (
    <div className="text-white" data-aos="fade-up">
      <div className="pb-60 flex justify-center w-full">
        <div className="flex flex-col items-center max-w-3xl px-4">

          <section className="pb-8">
            <h1 className="font-bold text-lg lg:text-3xl pb-4">Acceptance of Terms</h1>
            <p className="opacity-70">
              By accessing or using this website, you agree to comply with and be bound by
              the following terms and conditions. If you do not agree to these terms, you
              should immediately discontinue use of the website. We reserve the right to
              modify, update, or revise these terms at any time, with or without notice.
              Your continued use of the website after changes have been made constitutes
              your acceptance of the updated terms.
            </p>
          </section>

          <section className="pb-8">
            <h1 className="font-bold text-lg lg:text-3xl pb-4">Modifications to Terms</h1>
            <p className="opacity-70">
              We may update these terms periodically to reflect changes in our services,
              legal requirements, or other factors. It is your responsibility to review this
              page regularly for any updates. Continued use of the website after changes are
              posted will be considered as acceptance of the revised terms.
            </p>
          </section>

          <section className="pb-8">
            <h1 className="font-bold text-lg lg:text-3xl pb-4">Use of the Website</h1>
            <p className="opacity-70">
              You may use the website for personal, lawful purposes only. Unauthorized use,
              including attempts to disrupt or interfere with the website's operation or
              security, is strictly prohibited. The website is provided on an "as is" basis,
              and we do not guarantee that the website will be error-free or available at all
              times. We are not liable for any interruptions or issues related to your
              access.
            </p>
            <p className="opacity-70 pt-4">
              By using the website, you agree not to engage in any behavior that could harm
              the website or other users. You must also ensure that your activities are in
              compliance with all applicable laws and regulations.
            </p>
          </section>

          <section className="pb-8">
            <h1 className="font-bold text-lg lg:text-3xl pb-4">Sharing of Information</h1>
            <p className="opacity-70">
              We value your privacy and handle your data responsibly. However, we may share
              your information in the following circumstances:
            </p>
            <ul className="opacity-70 px-4 list-disc text-left">
              <li>With service providers who assist us in running our business and services</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>With your consent, when required or applicable</li>
            </ul>
            <p className="opacity-70 pt-4">
              We will take reasonable measures to protect your information, in accordance
              with our privacy policy.
            </p>
          </section>

          <section className="pb-8">
            <h1 className="font-bold text-lg lg:text-3xl pb-4">User Responsibilities</h1>
            <p className="opacity-70">
              As a user, you agree to take full responsibility for your actions and
              interactions on the website. You must ensure that you do not engage in
              activities that are harmful, disruptive, or illegal. You are expected to
              maintain the security of your account and personal information, and not to use
              the website in a manner that could infringe on the rights of others.
            </p>
            <p className="opacity-70 pt-4">By using the website, you agree to:</p>
            <ul className="opacity-70 px-4 list-disc text-left">
              <li>Refrain from submitting or sharing harmful content</li>
              <li>Respect the privacy and rights of other users</li>
              <li>Use the website responsibly and in accordance with all applicable laws</li>
            </ul>
          </section>

          <section className="pb-8">
            <h1 className="font-bold text-lg lg:text-3xl pb-4">Limitation of Liability</h1>
            <p className="opacity-70">
              We strive to provide accurate and reliable services, but we are not liable for
              any damages, losses, or issues arising from your use of the website, including
              technical failures or security breaches. You use the website at your own risk.
            </p>
          </section>

        </div>
      </div>

      <Cta />
      <Footer />
    </div>
  );
};

export default PrivacyAndTerm;
