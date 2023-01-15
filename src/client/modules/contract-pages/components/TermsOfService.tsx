import { AppleIcon } from "icons/AppleIcon";
import { useRouter } from "next/router";
import { CoFounder } from "icons/CoFounder";
import Link from "next/link";

export const TermsOfService = () => {
  const router = useRouter();

  const lauchsoon = () =>
   {
      window.open("https://apps.apple.com/us/app/co-founder-app/id1660449196", "_blank")
   }

  return (
    <div className="bg-super-light-dash-pink ">
    <div className="2xl:max-w-screen-xl 2xl:mx-auto pb-10 lg:pb-32 font-['Nunito Sans'] w-full h-screen bg-super-light-dash-pink overflow-y-auto text-super-light-brown">
      <div className="w-full h-24  ">
        <div className="flex items-center py-5">
          <div className="mx-8 sz-1220:mx-32 lg:mx-6 flex items-center w-full ">
           <Link href="/"><CoFounder className="cursor-pointer"></CoFounder></Link>
            <div onClick={lauchsoon} className="hidden lg:flex bg-black h-12 w-48 ml-auto  items-center px-6 cursor-pointer rounded-sm">
              <AppleIcon className="mr-2"></AppleIcon>
              <p className="text-super-white text-sm lg:text-base">
                Download App
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center">
        <div className="w-full lg:w-[900px] mx-8 sz-1220:mx-32 lg:mx-6 lg:text-lg text-sm">
          <p className="text-2xl lg:text-6xl font-bold mt-10 lg:mt-32">Terms of Use</p>
          <p className="mt-3">Last Updated: January 06, 2023</p>
          <p className="mt-3 font-bold">Introduction</p>

          <div>
            <p className="mt-3">
              Welcome to Co-Founder, owned and operated by Quark Club XYZ, Inc.
              d/b/a Co-Founder (”Co-Founder”, "cofounderapp.com”, “we”, “us”,
              “our”, “Application”, “Licensed Application” or the “Company”).
              These Terms of Service (“Terms”) govern your access to and use of
              the Co-Founder mobile app (the “App”), website(s), and any other
              software, tools, features, or functionalities provided on or in
              connection with our services.
            </p>
            <p className="mt-3">
              For purposes of these Terms, “user,” “you,” and “your” means you
              as the user of the Service. If you use the Service on behalf of a
              company or other entity, then “you” includes you and that entity,
              and you represent and warrant that (a) you are an authorized
              representative of the entity with the authority to bind the entity
              to these Terms, and (b) you agree to these Terms on the entity’s
              behalf.
            </p>
            <p className="mt-3">
              By downloading the Application from the Apple AppStore, and any
              update thereto (as permitted by this Agreement), you indicate that
              you agree to be bound by all of the terms and conditions of this
              License Agreement, and that you accept this License Agreement.
            </p>
            <div className="mt-3 font-bold">
              The parties of this License Agreement acknowledge that Apple is
              not a Party to this License Agreement and is not bound by any
              provisions or obligations with regard to the Application, such as
              warranty, liability, maintenance and support thereof. Quark Club
              XYZ, Inc., not Apple, is solely responsible for the Licensed
              Application and the content thereof. You can reach Co-Founder at
              <p className="inline-block text-super-secondary-text underline mx-1 cursor-pointer">
                <a href="mailto:contact@cofounderapp.com">
                  contact@cofounderapp.com
                </a>
              </p>
              for any queries regarding this Application.
            </div>
            <p className="mt-3 font-bold">
              You are given a non-transferable, non-exclusive, non-sublicensable
              license to install and use the Application on any Apple-branded
              Products that you own or control and as permitted by the Rules set
              forth in this agreement and the App Store Terms of Service, with
              the exception that such Application may be accessed and used by
              other accounts associated with you via Family Sharing or volume
              purchasing.
            </p>
          </div>

          <div className="mt-8  font-bold">
            <p>
              PLEASE READ THESE TERMS OF SERVICE CAREFULLY, AS THEY CONTAIN
              IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN
              SECTION 15 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT
              AND CLASS ACTION WAIVER, WHICH (WITH LIMITED EXCEPTIONS) REQUIRE
              ANY DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL
              ARBITRATION RATHER THAN BY A JUDGE OR JURY IN COURT.
            </p>
            <p className="mt-1">
              BY CLICKING TO ACCEPT AND/OR USE OUR SERVICE, YOU AGREE TO BE
              BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY
              REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS
              OR USE THE SERVICE.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-top">
              <div>
                <p className="mt-8 font-bold">
                  1. Acceptance of Terms of Service Agreement
                </p>
                <div className="mt-3">
                  By creating a Co-Founder account or by using any Co-Founder
                  service, whether through a mobile device, mobile application,
                  or computer (collectively, the “Service”), you agree to be
                  bound by (i) these Terms of Service, (ii) our
                  <p className="text-super-secondary-text inline-block mx-1 bg-[#EEF8F3] font-semibold">
                    <a href="/privacy-policy" target="_blank">
                      Privacy Policy
                    </a>
                  </p>
                  , which is incorporated by reference into this Agreement, and
                  (iii) any terms disclosed to you if you purchase or have
                  purchased additional features, products or services we offer
                  on the Service (collectively, this “Agreement”). If you do not
                  accept and agree to be bound by all of the terms of this
                  Agreement, you should not access or use the Service.
                </div>
                <p>
                  PLEASE CAREFULLY REVIEW THE DISPUTE RESOLUTION PROVISIONS IN
                  SECTION 15 BELOW. THESE GOVERN THE MANNER IN WHICH CLAIMS WILL
                  BE ADDRESSED BETWEEN YOU AND CO-FOUNDER. THESE PROVISIONS
                  INCLUDE A MANDATORY PRE-ARBITRATION INFORMAL DISPUTE
                  RESOLUTION PROCESS, AN ARBITRATION AGREEMENT, SMALL CLAIMS
                  COURT ELECTION, CLASS ACTION WAIVER, ADDITIONAL PROCEDURES FOR
                  MASS ARBITRATION FILINGS, AND JURY TRIAL WAIVER THAT AFFECT
                  YOUR RIGHTS. IN ARBITRATION, THERE IS TYPICALLY LESS DISCOVERY
                  AND APPELLATE REVIEW THAN IN COURT. We may make changes to
                  this Agreement and to the Service from time to time. We may do
                  this for a variety of reasons including to reflect changes in
                  or requirements of the law, new features, or changes in
                  business practices. The most recent version of this Agreement
                  will be posted on the Terms of Service link while registering
                  on the app and also on
                  <span className="text-super-secondary-text inline-block mx-1 underline">
                    <a href="/" target="_blank">
                      cofounderapp.com,
                    </a>
                  </span>
                  and you should regularly check for the most recent version.
                  The most recent version is the version that applies. If the
                  changes include material changes to your rights or
                  obligations, we will notify you in advance of the changes
                  (unless we’re unable to do so under applicable law) by
                  reasonable means, which could include notification through the
                  Service or via email. If you continue to use the Service after
                  the changes become effective, then you agree to the revised
                  Agreement. You agree that this Agreement shall supersede any
                  prior agreements (except as specifically stated herein), and
                  shall govern your entire relationship with Co-Founder,
                  including but not limited to events, agreements, and conduct
                  preceding your acceptance of this Agreement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top">
              <div>
                <p className="font-bold">2. Eligibility</p>
                <p className="mt-2">
                  You must be at least 18 years of age to create an account on
                  Co-Founder and use the Service. By creating an account and
                  using the Service, you represent and warrant that:
                </p>
                <ul className="ml-6 list-disc">
                  <li className="mt-2">
                    you can form a binding contract with Co-Founder,
                  </li>
                  <li className="mt-2">
                    you are not a person who is barred from using the Service
                    under the laws of the United States or any other applicable
                    jurisdiction,
                  </li>
                  <li className="mt-2">
                    you will comply with this Agreement and all applicable
                    local, state, national and international laws, rules and
                    regulations, including without limitation, privacy laws,
                    intellectual property laws, anti-spam laws, and regulatory
                    requirements,
                  </li>
                  <li className="mt-2">
                    you will use the latest version of the Service (via app or
                    website),
                  </li>
                  <li className="mt-2">
                    you do not have more than one account on the Service, and
                  </li>
                  <li className="mt-2">
                    you have not previously been removed from the Service by us,
                    unless you have our express written permission to create a
                    new account.
                  </li>
                </ul>
                <p className="mt-2">
                  If at any time you cease to meet these requirements, all
                  authorization to access our Service or systems is
                  automatically revoked, and you must immediately delete your
                  account.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top">
              <div>
                <p className="font-bold">3. Your Account</p>
                <p className="mt-2">
                  In order to use Co-Founder, you may sign in using an Apple
                  login, or any other social login that might be available to
                  you on Co-Founder. If you choose to use your social login, you
                  authorize us to access and use certain account information,
                  including but not limited to your public profile on that
                  social website.{" "}
                </p>
                <div className="mt-1">
                  You are responsible for maintaining the confidentiality of
                  your login credentials you use to sign up for Co-Founder, and
                  you are solely responsible for all activities that occur under
                  those credentials. If you think someone has gained access to
                  your account, please immediately
                  <a
                    className=" text-super-secondary-text underline mx-1 cursor-pointer  bg-[#EEF8F3]"
                    href="mailto:contact@cofounderapp.com"
                    target="_blank"
                  >
                    contact us.
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top">
              <div>
                <p className="font-bold">
                  4. Modifying the Service and Termination
                </p>
                <p className="mt-2">
                  Co-Founder is always striving to improve the Service and bring
                  you additional functionality that you will find engaging and
                  valuable. This means we may add new product features or
                  enhancements from time to time and remove some features, and
                  if these actions do not materially affect your rights or
                  obligations, we may not provide you with notice before taking
                  them. We may even suspend the Service entirely, in which event
                  we will notify you in advance unless extenuating
                  circumstances, such as safety or security concerns, prevent us
                  from doing so.
                </p>
                <div className="mt-1">
                  <div>
                    <span className="">
                      You may terminate your account at any time, for any
                      reason, by
                    </span>
                    <span className="">
                      <a
                        className="inline-block  text-super-secondary-text underline mx-1 cursor-pointer  bg-[#EEF8F3]"
                        href="mailto:contact@cofounderapp.com"
                        target="_blank"
                      >
                        {" "}
                        contacting us.
                      </a>
                    </span>
                    <span className=" font-bold">
                      You will also need to manage in-app purchases through
                      Apple’s App Store to avoid additional billing.
                    </span>
                    <p className="mt-1">
                      Co-Founder may terminate your account at any time without
                      notice if it believes that you have violated this
                      Agreement. Upon such termination, you will not be entitled
                      to any refund for purchases. After your account is
                      terminated, this Agreement will terminate, except that the
                      following provisions will still apply to you and
                      Co-Founder: Section 4, Section 5, and Sections 12 through
                      18.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">
                  5. Safety: Your Interactions with Other Members
                </p>
                <div className="block mt-2">
                  <div className="inline-block">
                    You agree to treat other users in a courteous and respectful
                    manner, both on and off our Services, and to be respectful
                    when communicating with any of our customer care
                    representatives or other employees. Though Co-Founder
                    strives to encourage a respectful member experience through
                    features,
                    <span className="ml-1 font-bold">
                      Co-Founder is not responsible for the conduct of any
                      member on or off of the Service. You agree to use caution
                      in all interactions with other members, particularly if
                      you decide to communicate off the Service or meet in
                      person. You agree that you will not provide your financial
                      information (for example, your credit card or bank account
                      information), or wire or otherwise send money to other
                      members.{" "}
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="font-bold">
                      YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH
                      OTHER MEMBERS. YOU UNDERSTAND THAT CO-FOUNDER DOES NOT
                      CONDUCT CRIMINAL BACKGROUND CHECKS ON ITS MEMBERS OR
                      OTHERWISE INQUIRE INTO THE BACKGROUND OF ITS MEMBERS.
                      CO-FOUNDER MAKES NO REPRESENTATIONS OR WARRANTIES AS TO
                      THE CONDUCT OR COMPATIBILITY OF MEMBERS. 
                    </span>
                    <span className="">
                       CO-FOUNDER RESERVES THE RIGHT TO CONDUCT – AND YOU
                      AUTHORIZE CO-FOUNDER TO CONDUCT – ANY CRIMINAL BACKGROUND
                      CHECK OR OTHER SCREENINGS AT ANY TIME USING AVAILABLE
                      PUBLIC RECORDS OBTAINED BY IT OR WITH THE ASSISTANCE OF A
                      CONSUMER REPORTING AGENCY, AND YOU AGREE THAT ANY
                      INFORMATION YOU PROVIDE MAY BE USED FOR THAT PURPOSE.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">6. Rights Co-Founder Grants You.</p>
                <div className="block mt-2">
                  <p>
                    Co-Founder grants you a personal, worldwide, royalty-free,
                    non-assignable, non-exclusive, revocable, and
                    non-sublicensable license to access and use the Service.
                    This license is for the sole purpose of letting you use and
                    enjoy the Service’s benefits as intended by Co-Founder and
                    permitted by this Agreement. This license and any
                    authorization to access the Service are automatically
                    revoked in the event that you do any of the following:
                  </p>

                  <ul className="ml-6 list-disc">
                    <li className="mt-2">
                      use the Service or any content contained in the Service
                      for recruitment purposes.
                    </li>
                    <li className="mt-2">
                      copy, modify, transmit, create any derivative works from,
                      make use of, or reproduce in any way any copyrighted
                      material, images, trademarks, trade names, service marks,
                      or other intellectual property, content or proprietary
                      information accessible through the Service without
                      Co-Founder’s prior written consent.
                    </li>
                    <li className="mt-2">
                      express or imply that any statements you make are endorsed
                      by Co-Founder.
                    </li>
                    <li className="mt-2">
                      use any robot, bot, spider, crawler, scraper, site
                      search/retrieval application, proxy or other manual or
                      automatic device, method or process to access, retrieve,
                      index, “data mine,” or in any way reproduce or circumvent
                      the navigational structure or presentation of the Service
                      or its contents.
                    </li>
                    <li className="mt-2">
                      use the Service in any way that could interfere with,
                      disrupt or negatively affect the Service or the servers or
                      networks connected to the Service.
                    </li>
                    <li className="mt-2">
                      upload viruses or other malicious code or otherwise
                      compromise the security of the Service.
                    </li>
                    <li className="mt-2">
                      forge headers or otherwise manipulate identifiers in order
                      to disguise the origin of any information transmitted to
                      or through the Service.
                    </li>
                    <li className="mt-2">
                      “frame” or “mirror” any part of the Service without
                      Co-Founder’s prior written authorization.
                    </li>
                    <li className="mt-2">
                      use meta tags or code or other devices containing any
                      reference to Co-Founder or the Service (or any trademark,
                      trade name, service mark, logo or slogan of Co-Founder) to
                      direct any person to any other website for any purpose.
                    </li>
                    <li className="mt-2">
                      modify, adapt, sublicense, translate, sell, reverse
                      engineer, decipher, decompile or otherwise disassemble any
                      portion of the Service, or cause others to do so.
                    </li>
                    <li className="mt-2">
                      use or develop any third-party applications that interact
                      with the Service or other members’ Content or information
                      without our written consent.
                    </li>
                    <li className="mt-2">
                      use, access, or publish the Co-Founder application
                      programming interface without our written consent.
                    </li>
                    <li className="mt-2">
                      probe, scan or test the vulnerability of our Service or
                      any system or network.
                    </li>
                    <li className="mt-2">
                      encourage, promote, or agree to engage in any activity
                      that violates this Agreement.
                    </li>
                  </ul>

                  <p className="mt-1">
                    Co-Founder may investigate and take any available legal
                    action in response to illegal and / or unauthorized uses of
                    the Service, including termination of your account.
                  </p>
                  <p className="mt-1">
                    Any software that we provide you may automatically download
                    and install upgrades, updates, or other new features. You
                    may be able to adjust these automatic downloads through your
                    device’s settings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">7. Rights you Grant Co-Founder.</p>
                <div className="block mt-2">
                  <p>
                    By creating an account, you grant to Co-Founder a worldwide,
                    transferable, sub-licensable, royalty-free, right and
                    license to host, store, use, copy, display, reproduce,
                    adapt, edit, publish, modify, reformat, incorporate into
                    other works, advertise, distribute, and otherwise make
                    available to the general public information you authorize us
                    to access from third parties, as well as any information you
                    post, upload, display or otherwise make available
                    (collectively, “post”) on the Service or transmit to other
                    members (collectively, “Content”). Co-Founder’s license to
                    your Content shall be non-exclusive, except that
                    Co-Founder’s license shall be exclusive with respect to
                    derivative works created through the use of the Service. For
                    example, Co-Founder would have an exclusive license to
                    screenshots of the Service that include your Content. In
                    addition, so that Co-Founder can prevent the use of your
                    Content outside of the Service, you authorize Co-Founder to
                    act on your behalf with respect to infringing uses of your
                    Content taken from the Service by other members or third
                    parties. This expressly includes the authority, but not the
                    obligation, to send notices pursuant to 17 U.S.C. §
                    512(c)(3) (i.e., DMCA Takedown Notices) on your behalf if
                    your Content is taken and used by third parties outside of
                    the Service. Our license to your Content is subject to your
                    rights under applicable law (for example laws regarding
                    personal data protection to the extent any Content contains
                    personal information as defined by those laws) and is for
                    the limited purpose of operating, developing, providing, and
                    improving the Service and researching and developing new
                    ones. You agree that any Content you place or that you
                    authorize us to place on the Service may be viewed by other
                    members and may be viewed by any person visiting or
                    participating in the Service (such as individuals who may
                    receive shared Content from other Co-Founder members).
                  </p>
                  <p className="mt-1">
                    You agree that all information that you submit upon creation
                    of your account, including information submitted from your
                    Apple account, is accurate and truthful, and you have the
                    right to post the Content on the Service and grant the
                    license to Co-Founder above.
                  </p>
                  <p className="mt-1">
                    You understand and agree that we may monitor or review any
                    Content you post as part of the Service. We may delete any
                    Content, in whole or in part, that in our sole judgment,
                    violates this Agreement or may harm the reputation of the
                    Service.
                  </p>
                  <p className="mt-1">
                    When communicating with any Co-Founder employees, you agree
                    to be respectful and kind. If we feel that your behavior
                    towards any of our employees is at any time threatening,
                    harassing, or offensive, we reserve the right to immediately
                    terminate your account.
                  </p>
                  <p className="mt-1">
                    In consideration for Co-Founder allowing you to use the
                    Service, you agree that we, our affiliates, and our
                    third-party partners may place advertising on the Service.
                    By submitting suggestions or feedback to Co-Founder
                    regarding our Service, you agree that Co-Founder may use and
                    share such feedback for any purpose without compensating
                    you.
                  </p>
                  <p className="mt-1">
                    You agree that Co-Founder may access, store, and disclose
                    your account information and Content if required to do so by
                    law, by performing its agreement with you, or in a good
                    faith belief that such access, storage or disclosure
                    satisfies a legitimate interest, including to: (i) comply
                    with legal process; (ii) enforce the Agreement; (iii)
                    respond to claims that any Content violates the rights of
                    third parties; (iv) respond to your requests for customer
                    service; or (v) protect the rights, property or personal
                    safety of the Company or any other person.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">8. Community Rules</p>
                <div className="block mt-2">
                  <p>By using the Service, you agree that you will not:</p>

                  <ul className="ml-6 list-disc">
                    <li className="mt-2">
                      use the Service for any purpose that is illegal or
                      prohibited by this Agreement.
                    </li>
                    <li className="mt-2">
                      use the Service for recruiting talent for any organization
                      (apart from finding co-founders).
                    </li>
                    <li className="mt-2">
                      use the Service for any harmful or nefarious purpose.
                    </li>
                    <li className="mt-2">
                      use the Service in order to damage Co-Founder.
                    </li>
                    <li className="mt-2">
                      spam or solicit money or other items of value from another
                      member, whether as a gift, loan, or other forms of
                      compensation, or otherwise defraud any members.
                    </li>
                    <li className="mt-2">
                      impersonate any person or entity or post any images of
                      another person without his or her permission.
                    </li>
                    <li className="mt-2">
                      bully, stalk, intimidate, assault, harass, mistreat or
                      defame, or otherwise mistreat any person.
                    </li>
                    <li className="mt-2">
                      post any Content that violates or infringes anyone’s
                      rights, including rights of publicity, privacy, copyright,
                      trademark or other intellectual property or contract
                      right.
                    </li>
                    <li className="mt-2">
                      post any Content that is hate speech, threatening,
                      sexually explicit or pornographic; incites violence; or
                      contains nudity or graphic or gratuitous violence.
                    </li>
                    <li className="mt-2">
                      post any Content that promotes racism, bigotry, hatred or
                      physical harm of any kind against any group or individual.
                    </li>
                    <li className="mt-2">
                      solicit passwords for any purpose, or personal identifying
                      information for commercial or unlawful purposes from other
                      users or disseminate another person’s personal information
                      without his or her permission.
                    </li>
                    <li className="mt-2">
                      use another user’s account, share an account with another
                      user, or maintain more than one account.
                    </li>
                    <li className="mt-2">
                      misrepresent your identity, age, current or previous
                      positions, qualifications, or affiliations with a person
                      or entity.
                    </li>
                    <li className="mt-2">
                      create another account if we have already terminated your
                      account, unless you have our permission.
                    </li>
                  </ul>

                  <p className="mt-1">
                    Co-Founder reserves the right to investigate and/or
                    terminate your account without a refund of any purchases if
                    you have violated this Agreement, misused the Service or
                    behaved in a way that Co-Founder regards as inappropriate or
                    unlawful, including actions or communications that occur on
                    or off the Service. In the event that you violate these
                    rules, your authorization to use the Service will be
                    automatically revoked.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">9. Other Members’ Content</p>
                <div className="block mt-2">
                  <span>
                    Although Co-Founder reserves the right to review and remove
                    Content that violates this Agreement, such Content is the
                    sole responsibility of the member who posts it, and
                    Co-Founder cannot guarantee that all Content will comply
                    with this Agreement. If you see Content on the Service that
                    violates this Agreement, please report it within the Service
                    or{" "}
                  </span>
                  <span>
                    {" "}
                    <a
                      className=" bg-[#EEF8F3] text-super-secondary-text underline mx-1 cursor-pointer"
                      href="mailto:contact@cofounderapp.com"
                      target="_blank"
                    >
                      contact support.
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">10. Purchases</p>
                <ul className="ml-6 list-disc">
                  <li className="mt-2">
                    <span className="font-bold">Generally. </span>From time to
                    time, Co-Founder may offer products and services for
                    purchase (“in app purchases”) through the App Store. If you
                    choose to make an in-app purchase, you will be prompted to
                    confirm your purchase with the applicable payment provider,
                    and your method of payment will be charged for the in-app
                    purchase at the prices displayed to you for the service(s)
                    you’ve selected as well as any sales or similar taxes that
                    may be imposed on your payments, and you authorize
                    Co-Founder or the third party account, as applicable, to
                    charge you.
                  </li>
                  <li className="mt-2">
                    <span className="font-bold">Trial. </span>Co-Founder may
                    offer you a free trial to allow you to try our Service.
                    Co-Founder reserves the right to set eligibility
                    requirements and the duration for free trials and pilots. At
                    the end of your free trial, Co-Founder will charge the
                    relevant subscription fee for the next billing cycle to your
                    nominated payment method, unless you cancel your
                    subscription prior to the end of the free trial. Co-Founder
                    reserves the right to change its prices at any time. If you
                    are on a subscription plan, changes to pricing will not
                    apply until your next renewal or thirty (30) days after
                    notice, whichever is later.
                  </li>
                  <li className="mt-2">
                    <span className="font-bold">Auto-Renewal. </span>If you
                    purchase an auto-recurring periodic subscription through an
                    in-app purchase, your Payment Method will continue to be
                    billed for the subscription until you cancel. After your
                    initial subscription commitment period, and again after any
                    subsequent subscription period, your subscription will
                    automatically continue for an additional equivalent period,
                    at the price you agreed to when subscribing. Your card
                    payment information will be stored and subsequently used for
                    the automatic card payments in accordance with the
                    Agreement.
                  </li>
                </ul>

                <div className="block mt-2">
                  <span className="font-bold">
                    If you do not wish your subscription to renew automatically,
                    or if you want to change or terminate your subscription, you
                    will need to log in to your App Store and follow the
                    instructions to terminate or cancel your subscription, even
                    if you have otherwise deleted your account with us or if you
                    have deleted the Co-Founder application from your device. {" "}
                  </span>
                  <span>
                    Deleting your account on Co-Founder or deleting the
                    Co-Founder application from your device does not terminate
                    or cancel your subscription; Co-Founder will retain all
                    funds charged to your Payment Method until you terminate or
                    cancel your subscription on App Store, as applicable. If you
                    terminate or cancel your subscription, you may use your
                    subscription until the end of your then-current subscription
                    term, and your subscription will not be renewed after your
                    then-current term expires.
                  </span>
                </div>
                <ul className="ml-6 list-disc">
                  <li className="mt-2">
                    <span className="font-bold">Refunds. </span>App refunds are
                    handled by Apple, not Co-Founder. To request a refund, go to
                    the App Store, click on your Apple ID, select “Purchase
                    history,” find the transaction and hit “Report a Problem”.
                    You can also visit
                    <p className="text-super-secondary-text inline-block mx-1 underline">
                      <a
                        href="https://support.apple.com/en-us/HT204084"
                        target="_blank"
                      >
                        https://support.apple.com/en-us/HT204084
                      </a>
                    </p>{" "}
                    for more info on requesting refund via App Store.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">
                  11. Notice and Procedure for Making Claims of Copyright
                  Infringement
                </p>
                <div className="block mt-2">
                  <span className="">
                    If you believe that your work has been copied and posted on
                    the Service in a way that constitutes copyright
                    infringement, please submit a takedown request by contacting{" "}
                  </span>
                  <span>
                    {" "}
                    <a
                      className=" text-super-secondary-text underline mx-1 cursor-pointer"
                      href="mailto:contact@cofounderapp.com"
                      target="_blank"
                    >
                      contact@cofounderapp.com.
                    </a>
                  </span>
                </div>
                <p className="ml-1">
                  If you contact us regarding alleged copyright infringement,
                  please be sure to include the following information:
                </p>
                <ul className="ml-6 list-disc">
                  <li className="mt-2">
                    an electronic or physical signature of the person authorized
                    to act on behalf of the owner of the copyright interest;
                  </li>
                  <li className="mt-2">
                    a description of the copyrighted work that you claim has
                    been infringed;
                  </li>
                  <li>
                    a description of where the material that you claim is
                    infringing is located on the Service (and such description
                    must be reasonably sufficient to enable us to find the
                    alleged infringing material);
                  </li>
                  <li>
                    your contact information, including address, telephone
                    number and email address, and the copyright owner’s
                    identity;
                  </li>
                  <li>
                    a written statement by you that you have a good faith belief
                    that the disputed use is not authorized by the copyright
                    owner, its agent, or the law; and
                  </li>
                  <li>
                    a statement by you, made under penalty of perjury, that the
                    above information in your notice is accurate and that you
                    are the copyright owner or authorized to act on the
                    copyright owner’s behalf.
                  </li>
                </ul>
                <p>
                  Co-Founder will terminate the accounts of repeat infringers.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">12. Disclaimers</p>
                <div className="block mt-2">
                  <p className="mt-1">
                    CO-FOUNDER PROVIDES THE SERVICE ON AN “AS IS” AND “AS
                    AVAILABLE” BASIS AND TO THE EXTENT PERMITTED BY APPLICABLE
                    LAW, GRANTS NO WARRANTIES OF ANY KIND, WHETHER EXPRESS,
                    IMPLIED, STATUTORY OR OTHERWISE WITH RESPECT TO THE SERVICE
                    (INCLUDING ALL CONTENT CONTAINED THEREIN), INCLUDING,
                    WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF SATISFACTORY
                    QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
                    OR NON-INFRINGEMENT. CO-FOUNDER DOES NOT REPRESENT OR
                    WARRANT THAT (A) THE SERVICE WILL BE UNINTERRUPTED, SECURE
                    OR ERROR FREE, (B) ANY DEFECTS OR ERRORS IN THE SERVICE WILL
                    BE DISCOVERED OR CORRECTED, OR (C) THAT ANY CONTENT OR
                    INFORMATION YOU OBTAIN ON OR THROUGH THE SERVICE WILL BE
                    ACCURATE, OR APPROPRIATE FOR YOUR PURPOSES.{" "}
                  </p>
                  <p className="font-bold mt-1">
                    APPLE OR APPLE APP STORE WILL HAVE NO WARRANTY OBLIGATION
                    WHATSOEVER WITH RESPECT TO THE APP, AND ANY OTHER LOSSES,
                    CLAIMS, DAMAGES, LIABILITIES, EXPENSES AND COSTS
                    ATTRIBUTABLE TO ANY NEGLIGENCE.
                  </p>
                  <p className="mt-1">
                    CO-FOUNDER ASSUMES NO RESPONSIBILITY FOR ANY CONTENT THAT
                    YOU OR ANOTHER MEMBER OR THIRD PARTY POSTS, SENDS OR
                    RECEIVES THROUGH THE SERVICE. ANY MATERIAL DOWNLOADED OR
                    OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS
                    ACCESSED AT YOUR OWN DISCRETION AND RISK.
                  </p>
                  <p className="mt-1">
                    CO-FOUNDER DISCLAIMS AND ASSUMES NO RESPONSIBILITY FOR ANY
                    CONDUCT OF YOU OR ANY OTHER MEMBER, ON OR OFF THE SERVICE.
                  </p>
                  <p className="font-bold mt-1">
                    CO-FOUNDER AND THE USER ACKNOWLEDGE THAT QUARK CLUB XYZ,
                    INC., AND NOT APPLE, IS RESPONSIBLE FOR ADDRESSING ANY
                    CLAIMS OF THE USER OR ANY THIRD PARTY RELATING TO THE
                    LICENSED APPLICATION OR THE USER’S POSSESSION AND/OR USE OF
                    THAT LICENSED APPLICATION, INCLUDING, BUT NOT LIMITED TO
                    PRODUCT LIABILITY CLAIMS, ANY CLAIM THAT THE LICENSED
                    APPLICATION FAILS TO CONFORM TO ANY APPLICABLE LEGAL OR
                    REGULATORY REQUIREMENT; AND CLAIMS ARISING UNDER CONSUMER
                    PROTECTION, PRIVACY, OR SIMILAR LEGISLATION.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">13. Third-Party Services</p>
                <div className="block mt-2">
                  <span className="font-bold">
                    In accordance with Section 9 of the "Instructions for
                    Minimum Terms of Developer's End-User License Agreement,"
                    Apple and Apple's subsidiaries shall be third-party
                    beneficiaries of this End User License Agreement and - upon
                    your acceptance of the terms and conditions of this license
                    agreement, Apple will have the right (and will be deemed to
                    have accepted the right) to enforce this Agreement against
                    you as a third-party beneficiary thereof.{" "}
                  </span>
                </div>
                <p className="mt-1">
                  The Service may contain advertisements and promotions offered
                  by third parties and links to other web sites or resources.
                  Co-Founder is not responsible for the availability (or lack of
                  availability) of such external websites or resources. If you
                  choose to interact with the third parties made available
                  through our Service, such party’s terms will govern their
                  relationship with you. Co-Founder is not responsible or liable
                  for such third parties’ terms or actions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">14. Limitation of Liability</p>
                <div className="block mt-2">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                  SHALL CO-FOUNDER, ITS AFFILIATES, EMPLOYEES, LICENSORS OR
                  SERVICE PROVIDERS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL,
                  EXEMPLARY, INCIDENTAL, SPECIAL, PUNITIVE, FIXED, OR ENHANCED
                  DAMAGES, INCLUDING, WITHOUT LIMITATION, LOSS OF PROFITS,
                  WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA,
                  USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (I)
                  YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
                  SERVICE; (II) THE CONDUCT OR CONTENT OF ANY MEMBERS OR THIRD
                  PARTIES ON OR THROUGH ANY OF OUR WEBSITES OR IN CONNECTION
                  WITH THE SERVICE; OR (III) ANY UNAUTHORIZED ACCESS, USE OR
                  ALTERATION OF YOUR CONTENT, EVEN IF CO-FOUNDER HAS BEEN
                  ADVISED AT ANY TIME OF THE POSSIBILITY OF SUCH DAMAGES. TO THE
                  FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                  CO-FOUNDER’S AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS
                  ARISING OUT OF OR RELATING TO THE SERVICE OR THIS AGREEMENT
                  EXCEED THE AMOUNT PAID, IF ANY, BY YOU TO CO-FOUNDER DURING
                  THE TWENTY-FOUR (24) MONTH PERIOD IMMEDIATELY PRECEDING THE
                  DATE THAT YOU FIRST FILE A LAWSUIT, ARBITRATION OR ANY OTHER
                  LEGAL PROCEEDING AGAINST CO-FOUNDER, WHETHER IN LAW OR IN
                  EQUITY, IN ANY TRIBUNAL. THE DAMAGES LIMITATION SET FORTH IN
                  THE IMMEDIATELY PRECEDING SENTENCE APPLIES (i) REGARDLESS OF
                  THE GROUND UPON WHICH LIABILITY IS BASED (WHETHER DEFAULT,
                  CONTRACT, TORT, STATUTE, OR OTHERWISE), (ii) IRRESPECTIVE OF
                  THE TYPE OF BREACH OF OBLIGATIONS, AND (iii) WITH RESPECT TO
                  ALL EVENTS, THE SERVICE, AND THIS AGREEMENT.
                </div>
                <div className="mt-1">
                  THE LIMITATION OF LIABILITY PROVISIONS SET FORTH IN THIS
                  SECTION 14 SHALL APPLY EVEN IF YOUR REMEDIES UNDER THIS
                  AGREEMENT FAIL WITH RESPECT TO THEIR ESSENTIAL PURPOSE.
                </div>
                <div className="mt-1">
                  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                  CERTAIN DAMAGES, SO SOME OR ALL OF THE EXCLUSIONS AND
                  LIMITATIONS IN THIS SECTION MAY NOT APPLY TO YOU.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">15. Dispute Resolution; Arbitration</p>
                <div className="block mt-2">
                  <span className="font-bold">
                    In the unlikely event that we have a legal dispute, here is
                    how the Parties agree to proceed, except where prohibited by
                    applicable law.{" "}
                  </span>
                </div>
                <p className="mt-1">
                  Any Subsection in this Dispute Resolution Section that is
                  prohibited by law shall not apply to the users residing in
                  that jurisdiction.
                </p>

                <div className="mt-6">
                  <div className="flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Applicability of Arbitration Agreement -
                        </span>
                        <span>
                          {" "}
                          You agree that any dispute, controversy, or claim
                          relating in any way to your access or use of the
                          Service, to any products sold or distributed through
                          the Service, or to any aspect of your relationship
                          with Co-Founder, will be resolved by binding
                          arbitration, rather than in court, including threshold
                          questions of the arbitrability of such dispute,
                          controversy, or claim except that (1) you or
                          Co-Founder may assert claims in small claims court,
                          but only if the claims qualify, the claims remain only
                          in such court, and the claims remain on an individual,
                          non-representative, and non-class basis; and (2) you
                          or Co-Founder may seek injunctive or equitable relief
                          in a court of proper jurisdiction if the claim relates
                          to intellectual property infringement or other misuses
                          of intellectual property rights.
                        </span>
                      </div>
                      <div className="font-bold">
                        Co-Founder and you acknowledge that, in the event of any
                        third-party claim that the Licensed Application or your
                        possession and use of that Licensed Application
                        infringes on the third party's intellectual property
                        rights, Quark Club XYZ, Inc., and not Apple, will be
                        solely responsible for the investigation, defense,
                        settlement and discharge or any such intellectual
                        property infringement claims.
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Dispute resolution process.
                        </span>
                        <span>
                          You and Co-Founder both agree to engage in good-faith
                          efforts to resolve disputes prior to either party
                          initiating an arbitration, small claims court
                          proceeding, or equitable relief for intellectual
                          property infringement. You must initiate this dispute
                          resolution process by sending a letter describing the
                          nature of your claim and desired resolution to
                          Co-Founder, Attn: Legal Department, 750 McDonough
                          street, apt 1, BROOKLYN, NY, 11233. Both parties agree
                          to meet and confer personally, by telephone, or by
                          videoconference (hereinafter “Conference”) to discuss
                          the dispute and attempt in good faith to reach a
                          mutually beneficial outcome that avoids the expenses
                          of arbitration or, where applicable, litigation. If
                          you are represented by counsel, your counsel may
                          participate in the Conference as well, but you agree
                          to fully participate in the Conference. Likewise, if
                          Co-Founder is represented by counsel, its counsel may
                          participate in the Conference as well, but Co-Founder
                          agrees to have a company representative fully
                          participate in the Conference. The statute of
                          limitations and any filing fee deadlines shall be
                          tolled while the parties engage in the informal
                          dispute resolution process and Conference required by
                          this paragraph. If the parties do not reach agreement
                          to resolve the dispute within thirty (30) days after
                          initiation of this dispute resolution process, either
                          party may commence arbitration, file an action in
                          small claims court, or file a claim for injunctive or
                          equitable relief in a court of proper jurisdiction for
                          matters relating to intellectual property
                          infringement, if the claims qualify.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Arbitration Rules and Forum. 
                        </span>
                        <span>
                          The Federal Arbitration Act governs the interpretation
                          and enforcement of this Arbitration Agreement. To
                          begin an arbitration proceeding after participating in
                          the dispute resolution process, you must send a letter
                          requesting arbitration and describing your claim to
                          our registered agent at Co-Founder, Attn: Legal
                          Department, 750 macdonough street, apt 1, BROOKLYN,
                          NY, 11233. The arbitration will be conducted by JAMS,
                          an established alternative dispute resolution
                          provider. Disputes involving claims and counterclaims
                          under $250,000, not inclusive of attorneys’ fees and
                          interest, shall be subject to JAMS’s most current
                          version of the Streamlined Arbitration Rules and the
                          JAMS Consumer Minimum Standards then in effect; all
                          other claims shall be subject to JAMS’s most current
                          version of the Comprehensive Arbitration Rules and
                          Procedures and the JAMS Consumer Minimum Standards
                          then in effect. JAMS’s rules are available at
                          </span>
                          <span> <a className=" text-super-secondary-text underline mx-1 cursor-pointer" href="https://www.jamsadr.com/" target="_blank">jamsadr.com</a></span> 
                          <span>or by calling JAMS at 800-352- 5267. If
                          JAMS is not available to arbitrate, the parties will
                          select an alternative arbitral forum. If the
                          arbitrator finds that you cannot afford to pay JAMS
                          filing, administrative, hearing, and/or other fees and
                          cannot obtain a waiver from JAMS, Co-Founder will pay
                          them for you if you complied with the dispute
                          resolution process set forth above. In addition,
                          Co-Founder will reimburse all such JAMS filing,
                          administrative, hearing, and/or other fees for claims
                          totaling less than $10,000 unless the arbitrator
                          determines the claims are frivolous or you did not
                          comply with the dispute resolution process set forth
                          above, except that if you have initiated the
                          arbitration claim, you will still be required to pay
                          the lesser of $250 or the maximum amount permitted
                          under the JAMS Rules for arbitration claims initiated
                          by you. You are still responsible for all additional
                          costs that you incur in the arbitration, including
                          without limitation, fees for attorneys or expert
                          witnesses. You may choose to have the arbitration
                          conducted by telephone or videoconference, based on
                          written submissions, in-person in your hometown area
                          (if you live in the United States), or at another
                          mutually agreed upon location that is reasonably
                          convenient to you. Any judgment on the award rendered
                          by the arbitrator may be entered in any court of
                          competent jurisdiction.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Authority of Arbitrator. 
                        </span>
                        <span>
                          The arbitrator shall have exclusive authority to (a)
                          determine the scope and enforceability of this
                          Arbitration Agreement and (b) resolve any dispute
                          related to the interpretation, applicability,
                          enforceability, or formation of this Arbitration
                          Agreement including, but not limited to, any claim
                          that all or any part of this Arbitration Agreement is
                          void or voidable. The arbitration will decide the
                          rights and liabilities, if any, of you and Co-Founder.
                          The arbitration proceeding will not be consolidated
                          with any other matters or joined with any other cases
                          or parties. The arbitrator shall have the authority to
                          grant motions dispositive of all or part of any claim.
                          The arbitrator shall have the authority to award
                          monetary damages and to grant any non-monetary remedy
                          or relief available to an individual under applicable
                          law, the arbitral forum’s rules, and these Terms. The
                          arbitrator shall issue a written award and statement
                          of decision describing the essential findings and
                          conclusions on which the award is based, including the
                          calculation of any damages awarded. The arbitrator has
                          the same authority to award relief on an individual
                          basis that a judge in a court of law would have. The
                          award of the arbitrator is final and binding upon you
                          and us.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Waiver of Jury Trial. 
                        </span>
                        <span>
                          YOU AND CO-FOUNDER HEREBY WAIVE ANY CONSTITUTIONAL AND
                          STATUTORY RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN
                          FRONT OF A JUDGE OR A JURY. You and Co-Founder are
                          instead electing that all claims and disputes shall be
                          resolved by arbitration under this Arbitration
                          Agreement, except as specified in the first bullet of
                          this Section 15, above (“Applicability of Arbitration
                          Agreement”). An arbitrator can award on an individual
                          basis the same damages and relief as a court and must
                          follow these Terms as a court would. However, there is
                          no judge or jury in arbitration, and court review of
                          an arbitration award is subject to very limited
                          review.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Waiver of Class Actions and Class Arbitrations. 
                        </span>
                        <span>
                          ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS
                          ARBITRATION AGREEMENT MUST BE ARBITRATED ON AN
                          INDIVIDUAL BASIS AND NOT ON A REPRESENTATIVE OR
                          COLLECTIVE CLASS BASIS. ONLY INDIVIDUAL RELIEF IS
                          AVAILABLE, AND CLAIMS OF MORE THAN ONE USER, PERSON,
                          OR ENTITY CANNOT BE ARBITRATED OR CONSOLIDATED WITH
                          THOSE OF ANY OTHER USER, PERSON, OR ENTITY.
                          Accordingly, under the arbitration procedures outlined
                          in this section, an arbitrator shall not combine or
                          consolidate more than one party’s claims without the
                          written consent of all affected parties to an
                          arbitration proceeding. Without limiting the
                          generality of the foregoing, you and Co-Founder agree
                          that no dispute shall proceed by way of class
                          arbitration without the written consent of all
                          affected parties. If a decision is issued stating that
                          applicable law precludes enforcement of any part of
                          this subsection’s limitations as to a given claim for
                          relief, then that claim must be severed from the
                          arbitration and brought in the state or federal courts
                          located in New York County in the State of New York.
                          All other claims shall be arbitrated.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Waiver of Class Actions and Class Arbitrations. 
                        </span>
                        <span>
                          ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS
                          ARBITRATION AGREEMENT MUST BE ARBITRATED ON AN
                          INDIVIDUAL BASIS AND NOT ON A REPRESENTATIVE OR
                          COLLECTIVE CLASS BASIS. ONLY INDIVIDUAL RELIEF IS
                          AVAILABLE, AND CLAIMS OF MORE THAN ONE USER, PERSON,
                          OR ENTITY CANNOT BE ARBITRATED OR CONSOLIDATED WITH
                          THOSE OF ANY OTHER USER, PERSON, OR ENTITY.
                          Accordingly, under the arbitration procedures outlined
                          in this section, an arbitrator shall not combine or
                          consolidate more than one party’s claims without the
                          written consent of all affected parties to an
                          arbitration proceeding. Without limiting the
                          generality of the foregoing, you and Co-Founder agree
                          that no dispute shall proceed by way of class
                          arbitration without the written consent of all
                          affected parties. If a decision is issued stating that
                          applicable law precludes enforcement of any part of
                          this subsection’s limitations as to a given claim for
                          relief, then that claim must be severed from the
                          arbitration and brought in the state or federal courts
                          located in New York County in the State of New York.
                          All other claims shall be arbitrated.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">Severability. </span>
                        <span>
                          Except as provided in this Section, if any part or
                          parts of this Arbitration Agreement are found under
                          the law to be invalid or unenforceable, then such
                          specific part or parts shall be of no force and effect
                          and shall be severed and the remainder of the
                          Arbitration Agreement shall continue in full force and
                          effect.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Survival of Agreement. 
                        </span>
                        <span>
                          This Arbitration Agreement will survive the
                          termination of your relationship with Co-Founder.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-top">
                    <div className="mr-2 font-extrabold">&#x2022;</div>
                    <div>
                      <div>
                        <span className="font-bold">Modification. </span>
                        <span>
                          Notwithstanding any provision in these Terms to the
                          contrary, we agree that if Co-Founder makes any future
                          material change to this Arbitration Agreement, you may
                          reject that change within thirty (30) days of such
                          change becoming effective by writing to Co-Founder at
                          the following address: Co-Founder, Attn: Legal
                          Department, 750 macdonough street, apt 1, BROOKLYN,
                          NY, 11233.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">16. Governing Law and Venue</p>
                <div className="block mt-2">
                  These Terms and your access to and use of the Service shall be
                  governed by and construed and enforced in accordance with the
                  laws of the State of New York (without regard to conflict of
                  law rules or principles of the State of New York, or any other
                  jurisdiction that would cause the application of the laws of
                  any other jurisdiction). Any dispute between the parties that
                  is not subject to arbitration as set forth in Section 15 or
                  cannot be heard in small claims court, shall be resolved in
                  the state or federal courts of New York County in the State of
                  New York, and the United States, respectively, sitting in the
                  State of New York.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">17. Indemnity by You.</p>
                <div className="block mt-2">
                  You agree, to the extent permitted under applicable law, to
                  indemnify, defend and hold harmless Co-Founder, our
                  affiliates, and their and our respective officers, directors,
                  agents, and employees from and against any and all complaints,
                  demands, claims, damages, losses, costs, liabilities and
                  expenses, including attorney’s fees, due to, arising out of,
                  or relating in any way to your access to or use of the
                  Service, your Content, or your breach of this Agreement.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-top ">
              <div>
                <p className="font-bold">18. Entire Agreement; Other.</p>
                <div className="block mt-2">
                  You represent and warrant that you are not located in a
                  country that is subject to a U.S. Government embargo, or that
                  has been designated by the U.S. Government as a "terrorist
                  supporting" country; and that you are not listed on any U.S.
                  Government list of prohibited or restricted parties.
                </div>
                <div className="mt-1">
                  <span>This Agreement, which includes the</span>
                  <span>
                    {" "}
                    <a
                      className=" bg-[#EEF8F3] text-super-secondary-text underline mx-1 cursor-pointer"
                      href="/privacy-policy"
                      target="_blank"
                    >
                      Privacy Policy,
                    </a>
                  </span>
                  <span>
                    and any terms that might have been disclosed to you if you
                    purchase or have purchased additional features, products or
                    services we offer on the Service, contains the entire
                    agreement between you and Co-Founder regarding your
                    relationship with Co-Founder and the use of the Service,
                    with the following exception: anyone who opted out of the
                    retroactive application of Section 15 is still subject to
                    and bound by any prior agreements to arbitrate with
                    Co-Founder as well as this agreement to arbitrate on a going
                    forward basis. If any provision of this Agreement is held
                    invalid, the remainder of this Agreement shall continue in
                    full force and effect. The failure of Co-Founder to exercise
                    or enforce any right or provision of this Agreement shall
                    not constitute a waiver of such right or provision. You
                    agree that your Co-Founder account is non-transferable and
                    all of your rights to your account and its Content terminate
                    upon your death. No agency, partnership, joint venture,
                    fiduciary or other special relationship or employment is
                    created as a result of this Agreement and you may not make
                    any representations on behalf of or bind Co-Founder in any
                    manner.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 font-bold">
            For general inquiries, complaints, questions or claims concerning
            the Licensed Application, please contact:{" "}
            <a
              className=" text-super-secondary-text underline mx-1 cursor-pointer"
              href="mailto:contact@cofounderapp.com"
              target="_blank"
            >
              contact@cofounderapp.com
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
