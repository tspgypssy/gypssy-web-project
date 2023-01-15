
import { AppleIcon } from 'icons/AppleIcon';
import { Circle } from 'icons/Circle';
import { CoFounder } from 'icons/CoFounder';
import Link from 'next/link';

export const PrivacyPolicy = () => {

   const lauchsoon = () =>
   {
      window.open("https://apps.apple.com/us/app/co-founder-app/id1660449196", "_blank")
   }

  return (
  <div className="bg-super-light-dash-pink ">
    <div className=" 2xl:max-w-screen-xl 2xl:mx-auto font-['Nunito Sans'] w-full h-screen bg-super-light-dash-pink overflow-y-auto text-super-light-brown">
      <div className="w-full h-24  ">
          <div className="flex items-center py-5">
            <div className="mx-8 sz-1220:mx-32 lg:mx-6 flex items-center w-full ">
                <Link href="/"><CoFounder className="cursor-pointer"></CoFounder></Link>
                <div onClick={lauchsoon} className="hidden lg:flex bg-black h-12 w-48 ml-auto  items-center px-6 cursor-pointer rounded-sm">
                    <AppleIcon className="mr-2"></AppleIcon>
                    <p className="text-super-white text-sm lg:text-base">Download App</p>
                </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center">
            <div className="w-full lg:w-[900px] mx-8 sz-1220:mx-32 lg:mx-6 lg:text-lg text-sm">
                <p className="text-2xl lg:text-6xl font-bold mt-10 lg:mt-32">Privacy Policy</p>  
                <p className="mt-3 ">Last Updated: January 06, 2023</p>   
                <p className="mt-3 ">Welcome to Co-Founder’s Privacy Policy. Thank you for taking the time to read it. We appreciate that you trust us with your information, and we intend to always keep that trust. This starts with making sure you understand the information we collect, why we collect it, how it is used, and your choices regarding your information.</p>
                <p className="mt-3 ">Quark Club XYZ, Inc. d/b/a Co-Founder (”Co-Founder”, "cofounderapp.com”, “we”, “us”, “our”, or the “Company”) is committed to protecting your privacy. We have prepared this Privacy Policy to describe to you our practices regarding the Personal Data (as defined below) we collect, use, and share in connection with the Co-Founder app, website, and other software provided on or in connection with our services, as described in our  <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="/terms-of-use" target="_blank">Terms of Use</a> (collectively, the “Service”).</p> 
           
                <div className="mt-6" >
                    <div className="flex items-top ">
                       <div className="mr-2  text-xl lg:text-3xl font-bold ">
                        1. 
                       </div>
                        <div>
                            <p className="font-bold  text-xl lg:text-3xl">Where This Privacy Policy Applies</p>
                            <div className="block mt-2 ">
                            This Privacy Policy applies to app(s), website(s), event(s), and any other service(s) we operate under the Co-Founder brand. For simplicity, we refer to all of these as our “Services” in this Privacy Policy.
                            </div> 

                        </div>                    
                    </div>
                </div>

                <div className="mt-4 lg:mt-12" >
                    <div className="flex items-top ">
                       <div className="mr-2  text-xl lg:text-3xl font-bold ">
                        2. 
                       </div>
                        <div>
                            <p className="font-bold  text-xl lg:text-3xl">Information We Collect</p>
                            <div className="block mt-2 ">
                               <span className="">It goes without saying, we can’t help you develop meaningful connections without some information about you, such as basic profile details and the types & traits of people you’d like to meet. We also collect information about your use of our services such as access logs, as well as information from third parties, like when you access our services through a 3rd party account. </span>
                            </div> 

                        </div>                    
                    </div>
                 </div>

                  <div className="mt-4 lg:mt-12" >
                              <div className="flex items-top ">
                                 <div className="mr-2 text-xl lg:text-3xl font-bold">
                                    3. 
                                 </div>
                                    <div>
                                       <p className="font-bold text-xl lg:text-3xl">Information you give us</p>
                                       <div className="block mt-2 ">
                                          You choose to give us certain information when using our services. This includes:
                                       </div> 
                                       <ul className="ml-4 list-disc ">
                                          <li className="mt-2">When you create an account, you provide us with your Apple account details, LinkedIn profile, full name, year of birth, as well as some basic details necessary for the service to work.</li>
                                          <li className="mt-2">When you complete your profile, you can share with us additional information, such as education and work experience details, ambitions, and other details about you, as well as content such as photos. To add certain content, like pictures, you may allow us to access your camera or photo album.</li>
                                          <li className="mt-2">When you participate in surveys, focus groups or market studies, you give us your insights into our products and services, responses to our questions and testimonials.</li>
                                          <li className="mt-2">When you choose to participate in our promotions, events or contests, we collect the information that you use to register or enter.</li>
                                          <li className="mt-2">If you contact our team, we collect the information you give us during the interaction.</li>
                                          <li className="mt-2">If you share with us information about other people (for example, if you use contact details of a friend for a given feature), we process this information on your behalf in order to complete your request.</li>
                                          <li className="mt-2">We also process your chats with other members, but the chats are end-to-end encrypted, so Co-Founder can not see any details of your chats or media that you might share in the chats.</li>
                                          
                                       </ul>  
                                    </div>                    
                              </div>
                  </div>


                  <div className="mt-4 lg:mt-12" >
                              <div className="flex items-top ">
                                 <div className="mr-2 text-xl lg:text-3xl font-bold">
                                    4. 
                                 </div>
                                    <div>
                                       <p className="font-bold text-xl lg:text-3xl">Information we receive from others</p>
                                       <div className="block mt-2 ">
                                          In addition to the information you may provide us directly, we receive information about you from others, including:
                                       </div> 
                                       <div className="mt-2 flex items-top ">
                                          <div className="mr-2">
                                            <Circle className="mt-2"></Circle>
                                          </div>
                                          <div>
                                             <span className="font-bold">Members - </span> 
                                             <span>Members may provide information about you as they use our services, for instance as they interact with you or if they submit a report involving you.</span>
                                          </div>               
                                       </div>

                                       <div className="mt-2 flex items-top ">
                                          <div className="mr-2">
                                             <Circle className="mt-2"></Circle>
                                          </div>
                                          <div>
                                             <span className="font-bold">Social Media - </span> 
                                             <span>You may decide to share information with us through your social media account or Apple account, for instance when you create and log into your Co-Founder account via your Apple account.</span>
                                          </div>               
                                       </div>

                                       <div className="mt-2 flex items-top ">
                                          <div className="mr-2">
                                             <Circle className="mt-2"></Circle>
                                          </div>
                                          <div>
                                             <span className="font-bold">Other Partners - </span> 
                                             <span>We may receive information about you from our partners where Co-Founder ads are published on a partner’s service (in which case they may pass along details on a campaign’s success). Where legally allowed, we can also receive information about suspected or convicted bad actors from third parties as part of our efforts to ensure our members’ safety and security.</span>
                                          </div>               
                                       </div>


                                    </div>                    
                              </div>
                  </div>
           
                  <div className="mt-4 lg:mt-12" >
                    <div className="flex items-top ">
                       <div className="mr-2 font-bold text-xl lg:text-3xl">
                        5. 
                       </div>
                        <div>
                            <p className="font-bold text-xl lg:text-3xl">Information generated when you use our services</p>
                            <div className="block mt-2 ">
                               <span className="">When you use our services, this generates technical data about which features you’ve used, how you’ve used them, and the devices you use to access our services. See below for more details: </span>
                            </div> 

                            <div className="mt-2 flex items-top  ">
                              <div className="mr-2">
                                  <Circle className="mt-2"></Circle>
                              </div>
                              <div>
                                 <span className="font-bold">Usage Information - </span> 
                                 <span className="ml-1">Using the services generates data about your activity on our services, for instance, how you use them (e.g., when you logged in, features you’ve been using, actions taken, information shown to you, referring webpages address and ads that you interacted with) and your interactions with other members (e.g., members you connect and interact with, when you exchanged with them, number of messages you send and receive).</span>          
                              </div>               
                            </div>

                            <div className="mt-2 flex items-top  ">
                              <div className="mr-2">
                                  <Circle className="mt-2"></Circle>
                              </div>
                              <div>
                                 <span className="font-bold">Device information - </span> 
                                 <span className="ml-1">We may collect information from and about the device(s) you use to access our services, including hardware and software information such as IP address, device ID and type, apps settings and characteristics, app crashes, advertising IDs (which are randomly generated numbers that you can reset by going into your device’s settings), identifiers associated with cookies or other technologies that may uniquely identify a device or browser.</span>          
                              </div>               
                            </div>

                        </div>                    
                    </div>
                  </div>


                  <div className="mt-4 lg:mt-12" >
                    <div className="flex items-top ">
                       <div className="mr-2 font-bold text-xl lg:text-3xl">
                        6. 
                       </div>
                        <div>
                            <p className="font-bold  text-xl lg:text-3xl">Cookies and Other Similar Data Collection Technologies</p>
                            <div className="block mt-2 ">
                            We use and may allow others to use cookies and similar technologies (e.g., web beacons, pixels, SDKs) to recognize you and/or your device(s).
                            </div> 

                        </div>                    
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-12" >
                    <div className="flex items-top ">
                       <div className="mr-2 text-xl lg:text-3xl font-bold">
                        7. 
                       </div>
                        <div>
                            <p className="font-bold text-xl lg:text-3xl">How We Use Information</p>
                            <div className="block mt-2 ">
                            The main reason we use your information is to deliver and improve our services. Additionally, we may use your info to help keep you safe, and might provide you with advertising that may be of interest to you. Read on for a more detailed explanation of the various reasons for which we use your information, together with practical examples.
                            </div> 

                            <div className=" ">
                              <p className="font-bold mt-2">A. To administer your account and provide our services to you</p>
                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Create and manage your account
                                    </div>               
                              </div>
                          
                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                        Provide you with <span><a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="mailto:contact@cofounderapp.com" target="_blank">customer support </a></span> and respond to your requests
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Complete your transactions
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Communicate with you about our services
                                    </div>               
                              </div>

                        </div>

                        
                        <div  className=" ">
                              <p className="font-bold mt-2">B. To help you connect with other users</p>
                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Recommend you other members to meet
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Show members’ profiles to one another
                                    </div>               
                              </div>

                        </div>

                        <div  className=" ">
                              <p className="font-bold mt-2">C. To provide new Co-Founder services to you</p>
                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Register you and display your profile on new Co-Founder features and apps
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Administer your account on these new features and apps
                                    </div>               
                              </div>
                             
                        </div>

                        <div  className=" ">
                              <p className="font-bold mt-2">D. To operate advertising and marketing campaigns</p>
                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Administer sweepstakes, contests, discounts or other offers
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns promoting Co-Founder off our services
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Communicate with you about products or services that we believe may interest you
                                    </div>               
                              </div>
                        </div>

                        <div  className=" ">
                              <p className="font-bold mt-2">E. To improve our services and develop new ones</p>
                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Administer focus groups, market studies, and surveys
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Review interactions with customer care to improve our quality of service
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Understand how members typically use the services to improve them (for instance, we may decide to change the look and feel or even substantially modify a given feature based on how members react to it)
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Develop new features and services
                                    </div>               
                              </div>

                        </div>

                        <div  className=" ">
                              <p className="font-bold mt-2">F. To prevent, detect and fight fraud and other illegal or unauthorized activities</p>
                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                        Find and address ongoing, suspected or alleged violations of our <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="/terms-of-use" target="_blank">Terms of Use</a>, notably through the review of reports and interactions between members
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Better understand and design countermeasures against violations of our <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="/terms-of-use" target="_blank">Terms of Use</a>
                                   </div>
                              </div> 

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Retain data related to violations of our
                                    <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="/terms-of-use" target="_blank">Terms of Use</a>
                                    to prevent against recurrences
                                   </div>
                              </div> 


                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Enforce or exercise our rights, for example our 
                                    <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="/terms-of-use" target="_blank">Terms of Use</a>
                                   
                                   </div>
                              </div> 

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Communicate to individuals who submit a report, what we’ve done as a result of their submission
                                   </div>
                              </div> 


                       </div>

                       <div  className=" ">
                              <p className="font-bold mt-2">G. To ensure legal compliance</p>
                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Comply with legal requirements
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                    Assist law enforcement
                                    </div>               
                              </div>

                              <p>To process your information as described in this Privacy Policy, we rely on the following legal bases:</p>   

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                        <span className="italic">Provide our service to you: </span>
                                        <span>The reason we process your information for purposes A, B and C above is to perform the contract that you have with us. For instance, as you go about using our service to build meaningful connections, we use your information to maintain your account and your profile, make it viewable to other members and recommend other members to you, and to otherwise provide our free and paid features to you and other members.</span>
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                        <span className="italic">Legitimate interests: </span>
                                        <span>We process your information for purposes D, E and F above, based on our legitimate interest. For instance, we analyze users’ behavior on our services to continuously improve our offerings, we suggest offers we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action.</span>
                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                        <span className="italic">Comply with applicable laws and regulations: </span>
                                        <span>We process your information for purpose G above where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement. We also keep data evidencing consents members give us and decisions they may have taken to opt-out of a given feature or processing.</span>

                                    </div>               
                              </div>

                              <div className="ml-2 mt-2 flex items-top">
                                    <div className="mr-2">
                                       <Circle className="mt-2"></Circle>
                                    </div>
                                    <div>
                                        <span className="italic">Consent: </span>
                                        <span>If you choose to provide us with information that may be considered “special” or “sensitive” in certain jurisdictions, such as your sexual orientation, you’re consenting to our processing of that information in accordance with this Privacy Policy. From time to time, we may ask for your consent to collect specific information such as your precise geolocation or use your information for certain specific reasons. In some cases, you may withdraw your consent by adapting your settings (for instance in relation to the collection of our precise geolocation) or by deleting your content (for instance where you entered information in your profile that may be considered “special” or “sensitive”). In any case, you may withdraw your consent at any time by contacting us at</span> 
                                        <span> <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="mailto:contact@cofounderapp.com" target="_blank">contact@cofounderapp.com.</a></span>
                                    </div>               
                              </div>


                        </div>

                        




                  </div> 
                        
                       

                    </div>
                  </div>

                  <div className="mt-4 lg:mt-12  " >
                              <div className="flex items-top">
                                 <div className="mr-2 font-bold text-xl lg:text-3xl">
                                    8. 
                                 </div>
                                    <div>
                                       <p className="font-bold text-xl lg:text-3xl">How We Share Information</p>
                                       <div className="block mt-2">
                                       Since our goal is to help you make meaningful professional connections, the main sharing of members’ information is, of course, with other members. We also share some members’ information with service providers and partners who assist us in operating the services and in some cases, legal authorities. Read on for more details about how your information is shared with others.
                                       </div> 
                                       
                                       <div className="ml-2 mt-2 flex items-top">
                                             <div className="mr-2">
                                                <Circle className="mt-2"></Circle>
                                             </div>
                                             <div>
                                               <p className="font-bold">With other members</p>
                                               <p className="mt-1">You share information with other members when you voluntarily disclose information on the service (including your public profile). Please be careful with your information and make sure that the content you share is stuff that you’re comfortable with being visible.</p>
                                               <div className="mt-1">
                                                   <span>If someone submits a report involving you (such as a claim you violated our </span>
                                                   <span><a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="/terms-of-use" target="_blank">Terms of Use)</a></span>
                                                   <span>, we may communicate to the reporter actions, if any, we took as a result of their report.</span>
                                               </div>
                                             </div>               
                                       </div>

                                       <div className="ml-2 mt-2 flex items-top">
                                             <div className="mr-2">
                                                <Circle className="mt-2"></Circle>
                                             </div>
                                             <div>
                                               <p className="font-bold">With our service providers and partners</p>
                                               <p className="mt-1">We use third parties to help us operate and improve our services. These third parties assist us with various tasks. We also share information with partners who distribute and assist us in advertising our services. For instance, we may share limited information on you in hashed, non-human readable form to advertising partners.</p>
                                               <p className="mt-1">We follow a strict vetting process prior to engaging any service provider or working with any partner. Our service providers and partners must agree to strict confidentiality obligations.</p>
                                             </div>               
                                       </div>

                                       <div className="ml-2 mt-2 flex items-top">
                                             <div className="mr-2">
                                                <Circle className="mt-2"></Circle>
                                             </div>
                                             <div>
                                               <p className="font-bold">For corporate transactions</p>
                                               <p className="mt-1">We may transfer your information if we are involved, whether in whole or in part, in a merger, sale, acquisition, divestiture, restructuring, reorganization, dissolution, bankruptcy or other change of ownership or control.</p>
                                             </div>               
                                       </div>

                                       <div className="ml-2 mt-2 flex items-top">
                                             <div className="mr-2">
                                                <Circle className="mt-2"></Circle>
                                             </div>
                                             <div>
                                               <p className="font-bold">With law enforcement / when required by law</p>
                                               <p className="mt-1">
                                                 We may disclose your information if reasonably necessary: (i) to comply with a legal process, such as a court order, subpoena or search warrant, government / law enforcement investigation or other legal requirements; (ii) to assist in the prevention or detection of crime (subject in each case to applicable law); or (iii) to protect the safety of any person.
                                                </p>
                                             </div>               
                                       </div>

                                       <div className="ml-2 mt-2 flex items-top">
                                             <div className="mr-2">
                                                <Circle className="mt-2"></Circle>
                                             </div>
                                             <div>
                                               <p className="font-bold">To enforce legal rights</p>
                                               <p className="mt-1">
                                               We may also share information: (i) if disclosure would mitigate our liability in an actual or threatened lawsuit; (ii) as necessary to protect our legal rights and legal rights of our members, business partners or other interested parties; (iii) to enforce our agreements with you; and (iv) to investigate, prevent, or take other action regarding illegal activity, suspected fraud or other wrongdoing.
                                                </p>
                                             </div>               
                                       </div>

                                       <div className="ml-2 mt-2 flex items-top">
                                             <div className="mr-2">
                                                <Circle className="mt-2"></Circle>
                                             </div>
                                             <div>
                                               <p className="font-bold">With your consent or at your request</p>
                                               <p className="mt-1">
                                               We may ask for your consent to share your information with third parties. In any such case, we will make it clear why we want to share the information.
                                                </p>
                                                <p className="mt-1">
                                                 We may use and share non-personal information (meaning information that, by itself, does not identify who you are such as device information, general demographics, general behavioral data, geolocation in de-identified form), as well as personal information in hashed, non-human readable form, under any of the above circumstances. We may also share this information with third parties (notably advertisers) to develop and deliver targeted advertising on our services and on websites or applications of third parties, and to analyze and report on advertising you see. We may combine this information with additional non-personal information or personal information in hashed, non-human readable form collected from other sources.  </p> 
                                             </div>               
                                       </div>



                                    </div>
                                    
                                                        
                              </div>
                         </div>

                         <div className="mt-4 lg:mt-12 " >
                                    <div className="flex items-top ">
                                       <div className="mr-2 font-bold text-xl lg:text-3xl">
                                          9. 
                                       </div>
                                          <div>
                                             <p className=" font-bold text-xl lg:text-3xl">Cross-Border Data Transfers</p>
                                             <div className="block mt-2">
                                                <span className="">Sharing of information laid out in Section 8 involves cross-border data transfers to the United States of America and other jurisdictions that may have different laws about data processing. When we transfer personal information outside of the EEA, the United Kingdom, Switzerland or other countries which data protection laws have been deemed adequate by the European Commission or other competent governmental body, we use</span>
                                                <span><a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en" target="_blank">standard contract clauses </a></span>
                                                <span>(standard contractual clauses are commitments between companies transferring personal data, binding them to protect the privacy and security of your data) or other appropriate transfer mechanism.</span>
                                             </div> 

                                          </div>                    
                                    </div>
                        </div>

                        <div className="mt-6" >
                                    <div className="flex items-top ">
                                       <div className="mr-2 font-bold  text-xl lg:text-3xl">
                                          10. 
                                       </div>
                                          <div>
                                             <p className="font-bold text-xl lg:text-3xl">Your Rights</p>
                                             <div className="block mt-2">
                                                 We want you to be in control of your information, so we want to remind you of the following options and tools available to you:  
                                             </div> 
                                            
                                             <div className="ml-2 mt-2 flex items-top">
                                                   <div className="mr-2">
                                                      <Circle className="mt-2"></Circle>
                                                   </div>
                                                   <div>
                                                      <span className="font-bold">Device permissions: </span>
                                                      <span>Mobile platforms can have permission systems for specific types of device data and notifications, such as phone contacts, pictures, location services, push notifications and advertising identifiers. You can change your settings on your device to either consent or oppose the collection or processing of the corresponding information or the display of the corresponding notifications. Of course, if you do that, certain services may lose functionality.</span>
                                                   </div>               
                                             </div>

                                             <div className="ml-2 mt-2 flex items-top">
                                                   <div className="mr-2">
                                                      <Circle className="mt-2"></Circle>
                                                   </div>
                                                   <div>
                                                      <span className="font-bold">Uninstall: </span>
                                                      <span>
                                                      You can stop all information collection by an app by uninstalling it using the standard uninstall process for your device. Remember that uninstalling an app does NOT close your account. To close your account, please contact our team at 
                                                      </span>
                                                      <span><a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="mailto:contact@cofounderapp.com" target="_blank">contact@cofounderapp.com.</a></span>
                                                      
                                                   
                                                   </div>               
                                             </div>

                                             <div className="ml-2 mt-2 flex items-top">
                                                   <div className="mr-2">
                                                      <Circle className="mt-2"></Circle>
                                                   </div>
                                                   <div>
                                                      <span className="font-bold">Account closure: </span>
                                                      <span>
                                                      You can close your account by contacting our team at <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="mailto:contact@cofounderapp.com" target="_blank">contact@cofounderapp.com.</a>
                                                      </span>
                                                   
                                                   </div>               
                                             </div>

                                             <p className="mt-2">We also want you to be aware of your privacy rights. Here are a few key points to remember:</p>
                                          
                                             <div className="ml-2 mt-2 flex items-top">
                                                   <div className="mr-2">
                                                      <Circle className="mt-2"></Circle>
                                                   </div>
                                                   <div>
                                                      <span className="font-bold">Reviewing your information: </span>
                                                      <span>
                                                      Applicable privacy laws may give you the right to review the personal information we keep about you (depending on the jurisdiction, this may be called right of access, right of portability, right to know or variations of those terms). You can exercise this right by contacting our team at <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="mailto:contact@cofounderapp.com" target="_blank">contact@cofounderapp.com.</a>
                                                      </span>
                                                   
                                                   </div>               
                                             </div>

                                             <div className="ml-2 mt-2 flex items-top">
                                                   <div className="mr-2">
                                                      <Circle className="mt-2"></Circle>
                                                   </div>
                                                   <div>
                                                      <span className="font-bold">Updating your information: </span>
                                                      <span>
                                                      If you believe that the information we hold about you is inaccurate or that we are no longer entitled to use it and want to request its rectification, deletion, object to or restrict its processing, please contact our team at <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="mailto:contact@cofounderapp.com" target="_blank">contact@cofounderapp.com.</a>
                                                      </span>
                                                   
                                                   </div>               
                                             </div>

                                             <p>For your protection and the protection of all of our members, we may ask you to provide proof of identity before we can answer the above requests. Keep in mind, we may reject requests, including if we are unable to authenticate you, if the request is unlawful or invalid, or if it may infringe on trade secrets or intellectual property or the privacy or other rights of someone else. If you wish to receive information relating to another member, such as a copy of any messages you received from them through our service, the other member will have to contact us to provide their written consent before the information is released. We may also ask them to provide proof of identity before we can answer the request. Also, we may not be able to accommodate certain requests to object to or restrict the processing of personal information, notably where such requests would not allow us to provide our service to you anymore. For instance, we cannot provide our service if we do not have your date of birth and thus cannot ensure that you are 18 years of age or older. In certain countries, including in the European Economic Area and the United Kingdom, you have a right to lodge a complaint with the appropriate data protection authority if you have concerns about how we process your personal information. The data protection authority you can lodge a complaint with may be that of your habitual residence, where you work or where an alleged infringement took place.</p>
                                          </div>                    
                                    </div>
                        </div>


                        <div className="mt-6" >
                                    <div className="flex items-top ">
                                       <div className="mr-2 font-bold  text-xl lg:text-3xl">
                                          11. 
                                       </div>
                                          <div>
                                             <p className="font-bold  text-xl lg:text-3xl">How Long We Retain Your Information</p>
                                             <div className="block mt-2">
                                             We keep your personal information only as long as we need it for legitimate business purposes (as laid out in Section 7) and as permitted by applicable law. If you decide to stop using our services, you can close your account and your profile will stop being visible to other members. Note that we will close your account automatically if you are inactive for a period of two years. After your account is closed, we will delete your personal information, as laid out below:  </div> 
                                             
                                             <div className="mt-6" >
                                                         <div className="flex items-top ">
                                                            <div className="mr-2">
                                                               1. 
                                                            </div>
                                                               <div>
                                                               To protect the safety and security of our members, we implement a safety retention window of three months following account closure, or one year following an account ban. During this period, we keep your information in the event that it might be necessary to investigate unlawful or harmful conducts. The retention of information during this safety retention window is based on our legitimate interest as well as that of potential third-party victims.
                                                               </div>                    
                                                         </div>
                                             </div>

                                             <div className="mt-6" >
                                                         <div className="flex items-top ">
                                                            <div className="mr-2">
                                                               2. 
                                                            </div>
                                                               <div>
                                                                  <p className="">Once the safety retention window elapses, we delete your data and only keep limited information for specified purposes, as laid out below:</p>
                                                                
                                                                  <div className="ml-2 mt-2 flex items-top">
                                                                       
                                                                        <div>
                                                                        a) We maintain limited data to comply with legal data retention obligations: in particular, we keep transaction data for 10 years to comply with tax and accounting legal requirements, and “traffic data” / logs for one year to comply with legal data retention obligations. We also keep records of consents members give us for five years to evidence our compliance with applicable law.
                                                                        </div>               
                                                                  </div>

                                                                  <div className="ml-2 mt-2 flex items-top">
                                                                        
                                                                        <div>
                                                                        b) We maintain limited information on the basis of our legitimate interest: we keep customer care records and supporting data as well as imprecise location of download/purchase for five years to support our customer care decisions, enforce our rights and enable us to defend ourselves in the event of a claim, information on the existence of past accounts and subscriptions, which we delete three years after the closure of your last account to ensure proper and accurate financial forecasting and reporting, profile data for one year in anticipation of potential litigation, for the establishment, exercise or defence of legal claims, and data necessary to prevent members who were banned from opening a new account, for as long as necessary to ensure the safety and vital interests of our members.
                                                                        </div>               
                                                                  </div>

                                                                  <div className="ml-2 mt-2 flex items-top">
                                                                        
                                                                        <div>
                                                                        c) Finally, we maintain information on the basis of our legitimate interest where there is an outstanding or potential issue, claim or dispute requiring us to keep information (in particular if we receive a valid legal subpoena or request asking us to preserve data (in which case we would need to keep the data to comply with our legal obligations) or if data would otherwise be necessary as part of legal proceedings).
                                                                        </div>               
                                                                  </div>

                                                               </div>                    
                                                         </div>
                                             </div>


                                          </div>                    
                                    </div>
                        </div>


                        <div className="mt-6" >
                                    <div className="flex items-top ">
                                       <div className="mr-2 font-bold  text-xl lg:text-3xl">
                                          12. 
                                       </div>
                                          <div>
                                             <p className="font-bold  text-xl lg:text-3xl">Children's Privacy</p>
                                             <div className="block mt-2">
                                             Our services are restricted to individuals who are 18 years of age or older. We do not permit individuals under the age of 18 on our platform. If you suspect that a member is under the age of 18, please let us know at <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="mailto:contact@cofounderapp.com" target="_blank">contact@cofounderapp.com.</a>
                                             </div> 

                                          </div>                    
                                    </div>
                        </div>

                        <div className="mt-6" >
                                    <div className="flex items-top ">
                                       <div className="mr-2 font-bold  text-xl lg:text-3xl">
                                          13. 
                                       </div>
                                          <div>
                                             <p className="font-bold  text-xl lg:text-3xl">Privacy Policy Changes</p>
                                             <div className="block mt-2">
                                             Because we’re always looking for new and innovative ways to help you build meaningful connections and strive on making sure explanations about our data practices remain up-to-date, this policy may change over time. 
                                             </div> 

                                          </div>                    
                                    </div>
                        </div>

                        <div className="mt-6" >
                                    <div className="flex items-top ">
                                       <div className="mr-2 font-bold  text-xl lg:text-3xl">
                                          14. 
                                       </div>
                                          <div>
                                             <p className="font-bold  text-xl lg:text-3xl">For California Consumers</p>
                                             <div className="block mt-2">
                                             This California section supplements the Privacy Policy and applies solely to California consumers (excluding our personnel). The Table below describes how we process California consumers’ personal information (excluding our personnel), based on definitions laid out in the California Consumer Privacy Act ("CCPA").
                                             </div>
                                             <div className="block mt-2">
                                             Not all of the items listed in the Table below may be relevant to you. For example, we do not collect Social Security numbers from our users.
                                             </div>
                                            
                                             

                                          </div>                    
                                    </div>
                        </div>
            </div>

           
        </div>
            <div className="lg:mx-16 mt-6   sz-1220:w-[1200px] w-full    !bg-super-light-dash-pink overflow-x-auto  ">
                                                <table className="mx-8 2xl:mx-8 sz-1220:mx-28  table table-fixed    w-[900px] lg:w-full  !bg-super-light-dash-pink overflow-x-auto">
                                                   
                                                   <tbody className="">
                                                      <tr  className="">
                                                      <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                         <div className="font-bold">
                                                         Categories of personal information collected over the 12-month period prior to the effective date of our Privacy Policy
                                                         </div>
                                                         <div className="italic">
                                                         Note: The categories of data below stem from a statutory list set forth under the CCPA.
                                                         </div>
                                                      </td>
                                                      <td className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0]">
                                                          <div className="font-bold">
                                                          Sources of collection over the 12-month period prior to the effective date of our Privacy Policy
                                                          </div>
                                                      </td>
                                                      <td className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0]">
                                                         <div className="font-bold">
                                                         Categories of third parties with whom the business shared or disclosed the personal information for a business purpose over the 12-month period prior to the effective date of our Privacy Policy
                                                          </div>
                                                      </td>
                                                      <td className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                         <div className="font-bold">
                                                         Business or commercial purposes for which the personal information was collected over the 12-month period prior to the effective date of our Privacy Policy (in addition to the purposes listed in the Privacy Policy)
                                                          </div>
                                                      </td>
                                                      </tr>

                                                      <tr  className="">
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            Identifiers such as a real name, alias, unique personal identifier (such as a device identifier; cookies, beacons, pixel tags, mobile ad identifiers, and similar technology; customer number, unique pseudonym, or user alias; telephone number and other forms of persistent or probabilistic identifiers), online identifier, Internet Protocol address, email address, account name, Social Security number, driver’s license number, passport number, and other similar identifiers
                                                            </td>
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                                <ul className="list-disc">
                                                                   <li className="ml-2">From you (for instance if you create an account or apply for a position at our company)</li>
                                                                   <li className="ml-2">From social media networks (for example if you log into our service through an account you have on a social media network)</li>
                                                                   <li className="ml-2">From partners (for example, where our ads promoting our services are published on a partner's website or where a partner or consumer reporting agency shares with us information about bad actors)</li>
                                                                   <li className="ml-2">From our affiliated companies (notably for anti-fraud and safety purposes)</li>
                                                                  
                                                                </ul>
                                                            </td>

                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                                <ul className="list-disc">
                                                                  <li className="ml-2">Other users as part of the general operation of the service</li>
                                                                  <li className="ml-2">Our affiliates (in particular to prevent, detect and fight fraud or other illegal or unauthorized activities under our Terms)</li>
                                                                  <li className="ml-2">Our payment service providers and fraud vendors (e.g., for anti-fraud purposes and to fight against other illegal activities)</li>
                                                                  <li className="ml-2">Joint marketing partners</li>
                                                                  <li className="ml-2">Other vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
                                                                </ul>
                                                            </td>

                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                                <ul className="list-disc">
                                                                   <li className="ml-2">Performing services, including maintaining or servicing accounts, providing customer service, processing or fulfilling orders and transactions, verifying customer information, processing payments, providing advertising or marketing services, providing analytics services, or providing similar services</li>
                                                                   <li className="ml-2">Auditing related to a current interaction with you and concurrent transactions, including, but not limited to, counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance</li>
                                                                   <li className="ml-2">Short-term, transient use, including, but not limited to, the contextual customization of ads shown as part of the same interaction</li>
                                                                   <li className="ml-2">Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity</li>
                                                                   <li className="ml-2">Debugging to identify and repair errors that impair existing intended functionality</li>
                                                                   <li className="ml-2">Undertaking internal research for technological development and demonstration</li>
                                                                   <li className="ml-2">Undertaking activities to verify or maintain the quality or safety of a service or device that is owned, manufactured, manufactured for, or controlled by us, and to improve, upgrade, or enhance the service or device that is owned, manufactured, manufactured for, or controlled by us</li>
                                                                   <li className="ml-2">Managing our career opportunities</li>
                                                                   <li className="ml-2">Establishing and managing our relationships with our vendors and consultants</li>
                                                                </ul>
                                                                </td>    
                                                      </tr>

                                                      <tr  className="">
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            Signature, physical characteristics or description, state identification card number, education, bank account number, credit card number, debit card number, other financial information, and medical information
                                                            </td>
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">From you (for instance if you create an account)
                                                                    </li>
                                                                    <li className="ml-2">From our affiliated companies (notably for anti-fraud and safety purposes)
                                                                    </li> 
                                                                </ul>
                                                            </td>
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            </td>
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            </td>
                                                     </tr>
                                                      
                                                     <tr  className="">
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            Characteristics of protected classifications under California or federal law, such as race, color, national origin, religion, age, sex, gender, gender identity, gender expression, sexual orientation, marital status, medical condition, disability, citizenship status, and military and veteran status
                                                            </td>

                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">
                                                                   From you (for instance if you create an account)
                                                                   </li>
                                                                   <li className="ml-2">
                                                                   From consumer reporting agencies (if they share with us information about bad actors)
                                                                   </li>
                                                                   <li className="ml-2">From 3rd parties (for example when you log into our service through your Apple ID)
                                                                   </li>
                                                                   <li className="ml-2">
                                                                   From our affiliated companies (notably for anti-fraud and safety purposes)
                                                                   </li>
                                                                </ul> 
                                                            </td>
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            </td>
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            </td>        
                                                      </tr> 

                                                       <tr  className="">
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            Commercial information, including records of personal property, products or services purchased, obtained, or considered, and other purchasing or consuming histories or tendencies
                                                            </td>
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">From you (if you purchase something from us)</li>
                                                               </ul>
                                                            </td>

                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">Our payment service providers and fraud vendors (e.g., for anti-fraud purposes and to fight against other illegal activities)</li>
                                                                   <li className="ml-2">Other vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
                                                               </ul>
                                                            </td>
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            </td>
                                                       </tr>
                                                        
                                                       <tr  className="">
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            Internet and other electronic network activity information, including, but not limited to, browsing history, search history, and information regarding your interaction with websites, applications or advertisements
                                                             </td>

                                                             <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">From you (for example, logs generated as you use our services)</li>
                                                                   <li className="ml-2">From users of our services (for instance through other users' interactions with you)</li>
                                                                   <li className="ml-2"> From advertising partners (for example, where our ads promoting our services are published on a partner's website)</li>
                                                                </ul>
                                                             </td>
                                                             <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">Vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
                                                               </ul>
                                                             </td>   
                                                             <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                             </td> 

                                                        </tr>  
                                                        <tr  className="">
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                              Geolocation data
                                                           </td>
                                                           <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">
                                                                   From you (if you consent that we collect and use your geolocation as you use our services)
                                                                     </li>
                                                               </ul>
                                                          </td>
                                                          <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">
                                                                   Vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein
                                                                     </li>
                                                               </ul>
                                                          </td>
                                                          <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                          </td>
                                                        </tr>  

                                                        <tr  className="">
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            Audio, electronic, visual, and similar information
                                                             </td>  

                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">
                                                                   From you (for instance the photo(s) you upload when you create an account with us)
                                                                       </li>
                                                                   <li className="ml-2">    
                                                                   From 3rd parties (for example when you use Apple ID to login)</li>
                                                                   <li className="ml-2">  
                                                                   From consumer reporting agencies if they share with us information about bad actors
                                                                   </li>
                                                                   <li className="ml-2"> From our affiliated companies (notably for anti-fraud and safety purposes
                                                                   </li>
                                                               </ul>
                                                           </td>
                                                           <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">
                                                                    Other users as part of the general operation of the service
                                                                    </li>
                                                                    <li className="ml-2">Our affiliates (in particular to prevent, detect and fight fraud or other illegal or unauthorized activities under our Terms)</li>
                                                                    <li className="ml-2">Joint marketing partners</li>
                                                                    <li className="ml-2">Other vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein</li>
                                                               </ul>
                                                           </td>
                                                           <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                              
                                                            </td>       
                                                         </tr> 

                                                         <tr  className="">
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            Professional or employment-related information
                                                             </td> 
                                                             <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">
                                                                   From you (for instance when you provide your work info while setting up your profile)
                                                                   </li>
                                                                  
                                                                </ul>
                                                              </td>  
                                                              <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">
                                                                   Other users as part of the general operation of the service
                                                                   </li>
                                                                   <li className="ml-2">
                                                                   Other vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein
                                                                   </li>
                                                                </ul>
                                                              </td> 
                                                              <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                             </td>     
                                                         </tr>  

                                                         <tr  className="">
                                                            <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                            Inferences drawn from any of the information identified above to create a profile about you reflecting your preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.
                                                             </td> 
                                                             <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">
                                                                   Created from data in your profile
                                                                     </li>
                                                                </ul>
                                                             </td>  
                                                             <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                               <ul className="list-disc">
                                                                   <li className="ml-2">
                                                                   Vendors and professional services organizations who assist us in relation to the business or commercial purposes laid out herein
                                                                     </li>
                                                                </ul>
                                                             </td> 
                                                             <td  className="align-top whitespace-pre-wrap !bg-super-light-dash-pink border !border-[#F4D2C0] ">
                                                             </td>        
                                                         </tr>    
                                                   </tbody>
                                                </table>
                                               
                                                
             </div> 

             <div className=" mx-8 sz-1220:mx-32 lg:mx-6 mt-10 ">
                                <div className="lg:mx-20">                   
                                                    <p className="font-bold mt-2 text-xl lg:text-3xl">California Consumer Privacy Rights</p>
                                                    <div className="mt-2">
                                                      <span className="underline">We do not sell your personal information so no opt-out choice is necessary. </span>
                                                      <span>What this means is that we do not sell, rent, release, disclose, disseminate, make available, transfer, or otherwise communicate in any way your personal information to another company for monetary or other valuable consideration.</span></div>
                                                    <p className="mt-2">You have the right to request, twice in a 12-month period, the following information about the personal information we have collected about you during the past 12 months:</p>
                                                    <ul className="list-disc">
                                                       <li  className="mt-2 ml-4">
                                                       the categories and specific pieces of personal information we have collected about you;
                                                       </li>
                                                       <li  className="mt-2 ml-4">
                                                       the categories of sources from which we collected the personal information;
                                                       </li>
                                                       <li  className="mt-2 ml-4">
                                                       the business or commercial purpose for which we collected or sold the personal information;
                                                       </li>
                                                       <li  className="mt-2 ml-4">
                                                       the categories of third parties with whom we shared the personal information; and
                                                         </li>
                                                         <li  className="mt-2 ml-4">
                                                         the categories of personal information about you that we sold or disclosed for a business purpose, and the categories of third parties to whom we sold or disclosed that information for a business purpose.
                                                            </li>  
                                                    </ul>
                                                    <p className="mt-2">
                                                    You have the right to request that we delete the personal information we have collected from you. If you choose to exercise any of your rights under the CCPA, you have the right to not receive discriminatory treatment.
                                                    </p>
                                                    <div className="mt-6" >
                                 </div>
                    
               </div>                                             
               </div>
             
             <div className="mx-8 sz-1220:mx-32 lg:mx-6 lg:text-lg text-sm  mb-10 lg:mb-32">
                  <div className="flex items-top ">
                           <div className="mr-2 text-xl lg:text-3xl font-bold">
                              15. 
                           </div>
                              <div>
                                 <p className=" text-xl lg:text-3xl font-bold">How to Contact Us</p>
                                 <div className="block mt-2">
                                    <span className="">If you have any questions or concerns or complaints about our Privacy Policy or our data collection or processing practices, or if you want to submit an access or deletion request, or if you want to report any security violations to us, please contact us at </span>
                                    <span className="mx-1"> <a className=" text-super-secondary-text underline mx-0.5 cursor-pointer" href="mailto:contact@cofounderapp.com" target="_blank">contact@cofounderapp.com.</a></span>
                                    <span className=""> To help protect your privacy and maintain security, we take steps to verify your identity before granting you access to your personal information or complying with your request. To the extent permitted by applicable law, we may charge a reasonable fee to comply with your request.</span>
                                 </div> 

                              </div>                    
                        </div> 
               </div>                                                                                          
       </div>
          
   </div> 
  );
};
