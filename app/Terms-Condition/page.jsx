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
          Our Terms and Conditions
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
                    <h1 className='font-bold text-2xl text-center'>Terms and Conditions</h1>
<br />

Terms and conditions for Econfin-Labs
<br />

Welcome to Economic labs
These Terms of Use (`Terms`) govern your access to and use of the Economic labs website (`Economic labs ` or the `Website`) and its associated services (collectively, the `Services`). Economic labs is a platform that connects college students across India with internship and job opportunities. By accessing or using the Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access or use the Services.



<br />
<br />
<h2 className='font-bold text-xl text-center'>Eligibility</h2>
<br />
You must be at least 18 years old and a college student currently enrolled in a recognized institution in India to use the Services. By using Economic labs, you represent and warrant that you meet all of the foregoing eligibility requirements.
<br />
<br />
<h2 className='font-bold text-xl text-center'>User Accounts</h2>
<br />
You may need to create an account (`Account`) to access certain features of the Services. You are responsible for maintaining the confidentiality of your account information, including your login credentials and for all activity that occurs under your account. You agree to notify Economic labs immediately of any unauthorized use of your account or any other security breach. Economic labs reserves the right to suspend or terminate your account for any reason, at any time, without notice.
<br />
<br />
<h2 className='font-bold text-xl text-center'>Use of the Services</h2>
<br />
You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services: <br />
o	In any way that violates any applicable law or regulation. <br />
o	For any purpose that is unauthorized or prohibited by these Terms. <br />
o	To harm, abuse, harass, stalk, threaten, or defame any other person. <br />
o	To interfere with or disrupt the Services or any servers or networks connected to the Services. <br />
o	To impersonate any person or entity, or to falsely state or otherwise misrepresent your affiliation with a person or entity. <br />
o	To access, tamper with, or use any other user`s account. <br />
o	To upload or transmit any viruses, malware, or other harmful code. <br />
o	To post false, misleading, or outdated information about yourself or intenship/job opportunities. <br />
<br />
<br />
<h2 className='font-bold text-xl text-center'>Content</h2>
<br />
The Services may contain content (`Content`) uploaded by users, employers, or Economic labs. You are solely responsible for any Content you upload or transmit through the Services. Economic labs does not endorse any Content and takes no responsibility for its accuracy or completeness.
<br />
<br />
<h2 className='font-bold text-xl text-center'>Disclaimers</h2>
<br />
<br />
Job Postings: Economic labs strives to ensure the accuracy of job postings, but we cannot guarantee their completeness or legitimacy. You should always conduct your own research before applying for any position. Information Accuracy: Economic labs disclaims all warranties regarding the accuracy, reliability, and completeness of any information or content on the Website or provided through the Services.
<br />
<br />
<h2 className='font-bold text-xl text-center'>Intellectual Property</h2>
<br />
Economic labs and its licensors retain all right, title, and interest in and to the Website and Services, including all intellectual property rights. You agree not to remove, alter, or obscure any copyright, trademark, service mark or other proprietary notices contained on the Website or Services.
<br />
<br />
<h2 className='font-bold text-xl text-center'>Termination</h2>
<br />
Economic labs and its licensors retain all right, title, and interest in and to the Website and Services, including all intellectual property rights. You agree not to remove, alter, or obscure any copyright, trademark, service mark or other proprietary notices contained on the Website or Services.
<br />
<br />

<h2 className='font-bold text-xl text-center'>Governing Law and Dispute Resolution</h2>
<br />
These Terms will be governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms will be subject to the exclusive jurisdiction of the courts located in [City, State, India].
<br />
<br />
<h2 className='font-bold text-xl text-center'>Entire Agreement</h2>
<br />
These Terms constitute the entire agreement between you and Economic labs regarding your use of the Services.
<br />
<br />
<h2 className='font-bold text-xl text-center'>Updates to the Terms</h2>
<br />
Economic labs may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on the Economic labs website or by sending you an email. You are advised to review these Terms periodically for any changes. Your continued use of the Services after the revised Terms are posted will constitute your acceptance of the revised Terms.
<br />
<br />
<h3 className='font-bold text-lg text-center'>Contact Us</h3>
<br />
If you have any questions about these Terms, please contact us at <br />
This Terms of Use is more specific to your website and includes disclaimers regarding the accuracy of job postings and information. You may also want to consider adding a section about: <br />
•	Privacy Policy: A link to a separate privacy policy outlining how you collect, use, and disclose user data.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our  
                    <a href="/Terms-Condition" className="text-gray-700 underline"> terms and conditions </a>
                    and     < a href="/Privacy-Policy" className="text-gray-700 underline">privacy policy</a>.
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
