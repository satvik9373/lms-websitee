import React from 'react'

function Page() {
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Our Privacy-Policy
        </h2>
              </a>
            </div>
            
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-lg w-full space-y-8">
              <form className="space-y-6">
                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <span className="text-sm text-gray-700">
                    <h1 className='font-bold text-2xl text-center'>Privacy Policy and Terms of Service</h1>
<br />

Privacy Policy for Hustlers27
<br />

Welcome to Hustlers27, an affiliate company dedicated to providing top-notch courses and membership options to help you achieve your professional and personal goals. This Privacy Policy outlines how we collect, use, disclose, and protect your information. By using our services, you agree
   to the terms of this policy.

<br />
<br />
<h2 className='font-bold text-xl text-center'>Information We Collect</h2>
<br />
-Personal Information: When you sign up for our courses or membership options, we may collect personal information such as your name, email address, phone number, and payment details.
<br />
<br />
-Usage Data: We collect data on how you interact with our website, including your IP address, browser type, pages visited, and the duration of your visit.
<br />
<br />
-Cookies: We use cookies to enhance your experience on our site. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
<br />
<br />
<h2 className='font-bold text-xl text-center'>How We Use Your Information</h2>
<br />
-To Provide Services: We use your information to process your registration, manage your account, and provide you with the courses and membership benefits.
<br />
<br />
-To Improve Our Services: We analyze usage data to improve our website and services.
<br />
<br />
-To Communicate: We may send you updates, promotional materials, and other information related to our services. You can opt out of these communications at any time.
<br />
<br />
<h2 className='font-bold text-xl text-center'>Disclosure of Your Information</h2>
<br />
-Third-Party Service Providers: We may share your information with third-party service providers who assist us in operating our website and delivering our services.
<br />
<br />
-Legal Requirements: We may disclose your information if required by law or in response to legal proceedings.
<br />
<br />

<h2 className='font-bold text-xl text-center'>Data Security</h2>
<br />
We implement various security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
Your Rights
<br />
<br />
-Access: You have the right to request access to the personal information we hold about you.
<br />
<br />
-Correction: You can request corrections to your personal information if it is inaccurate or incomplete.
<br />
<br />
-Deletion: You can request the deletion of your personal information under certain circumstances.
<br />
<br />

<h2 className='font-bold text-xl text-center'>Terms of Service</h2>
<h3 className='font-bold text-lg text-center'>Refund Policy</h3>
<br />
Please note that once you purchase a course through any of our membership options, refunds are not allowed. All sales are final, and payments cannot be reclaimed.

<h2 className='font-bold text-xl text-center'>Affiliate Marketing Rules</h2>

-Compliance: Affiliates must comply with all applicable laws and regulations while promoting Hustlers27 courses and memberships.
<br />
<br />
-Ethical Conduct: Affiliates must promote our services honestly and ethically, avoiding any deceptive or misleading marketing practices.
<br />
<br />
-Prohibited Activities: Affiliates are prohibited from engaging in spamming, using unauthorized promotional materials, and participating in fraudulent activities.
<br />
<br />

<h2 className='font-bold text-xl text-center'>Withdrawal of Affiliate Earnings</h2>
<br />
Affiliate earnings can only be withdrawn once the admin confirms the request. This is to ensure the accuracy and legitimacy of all transactions. Any attempt to engage in malicious activities or fraud will result in an immediate ban from our website.
<br />
<br />

<h2 className='font-bold text-xl text-center'>Changes to This Policy</h2>

We may update our Privacy Policy and Terms of Service from time to time. We will notify you of any changes by posting the new policy on our website. Your continued use of our services after any changes indicates your acceptance of the new terms.
<br />
<br />

<h2 className='font-bold text-xl text-center'>Contact Us</h2>

If you have any questions about this Privacy Policy or our Terms of Service, please contact us at support@hustlers27.com.

<br />
This document is designed to be professional, clear, and comprehensive, ensuring that users understand their rights and responsibilities while using Hustlers27’s services.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                    and
                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  )
}

export default Page
