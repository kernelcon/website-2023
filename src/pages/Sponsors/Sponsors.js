import React, { Component } from "react";
import ContrastDarkMode from "../../static/images/sponsors/contrast-light-logo.png";
import ContrastLightMode from "../../static/images/sponsors/contrast-dark-logo.png";
import NoStarchPress from "../../static/images/sponsors/no-starch-logo.png";
import ToooLDarkMode from "../../static/images/sponsors/toool-light-logo.png";
import TooolLightMode from "../../static/images/sponsors/toool-dark-logo.png";
import Fnbo from "../../static/images/sponsors/fnbo.png";
import CheckPoint from "../../static/images/sponsors/checkpoint-dark-logo.png";
import AppGateDark from "../../static/images/sponsors/appgate-dark-logo.png";
import AppGateLight from "../../static/images/sponsors/appgate-light-logo.png";
import RedCanary from "../../static/images/sponsors/red_canary.png";
import AWSDark from "../../static/images/sponsors/AWS_black.png";
import AWSLight from "../../static/images/sponsors/AWS-color.png";
import Netsecuris from '../../static/images/sponsors/Netsecuris.jpg';
import ConAgraLight from "../../static/images/sponsors/conagra-light-logo.webp";
import Protiviti from "../../static/images/sponsors/protiviti.png";
import ZScaler from "../../static/images/sponsors/zscaler.png";
import BairdHolm from "../../static/images/sponsors/bairdholm.png";
import GuidepointDark from "../../static/images/sponsors/guidepoint_black.png";
import Tanium from "../../static/images/sponsors/Tanium.png";
import Axonius from "../../static/images/sponsors/Axonius.png";
import WizLightMode from "../../static/images/sponsors/wiz-light-mode.png";
import WizDarkMode from "../../static/images/sponsors/wiz-dark-mode.png";
import Code42 from "../../static/images/sponsors/code42.png";
import FarmCreditDark from "../../static/images/sponsors/farm-credit-dark-mode.png";
import FarmCreditLight from "../../static/images/sponsors/farm-credit-light-mode.png";
import MentalHealthHackersDark from "../../static/images/logos/MHH-white.png"
import MentalHealthHackersLight from "../../static/images/logos/MHH.png"
import Bugcrowd from "../../static/images/sponsors/bugcrowd.png"
import SecurePointSolutions from "../../static/images/sponsors/secure-point-solutions.png"
import CloudSecurityPartnersLight from "../../static/images/sponsors/cloud-security-partners-light-mode.png"
import CloudSecurityPartnersDark from "../../static/images/sponsors/cloud-security-partners-dark-mode.png"
import CarrierAccessIT from "../../static/images/sponsors/cait.png"
import Crowdstrike from "../../static/images/sponsors/crowdstrike.png"
import PaloAltoLight from "../../static/images/sponsors/palo-alto-light-mode.png"
import PaloAltoDark from "../../static/images/sponsors/palo-alto-dark-mode.png"
import TekSystems from "../../static/images/logos/teksystems.png"
import FastlyLight from "../../static/images/sponsors/fastly-light-mode.png"
import FastlyDark from "../../static/images/sponsors/fastly-dark-mode.png"
import SecureworksLight from "../../static/images/sponsors/secureworks-light-mode.png"
import SecureworksDark from "../../static/images/sponsors/secureworks-dark-mode.png"


import "./Sponsors.scss";

export default class Sponsors extends Component {
	static displayName = "Sponsors";

	render() {
		return (
      <div className="container">
        <div className='venue-section'>
          <div className="sponsors">
            <div>
              <h3>Sponsorship</h3>
              <div className="text-block">
                <p>
                  We understand your products and services play an
                  important part in our security and we can’t put on
                  this conference without your help. The Omaha
                  metropolitan area is home to 45,000 businesses,
                  including Fortune 500 companies, large financial
                  companies, global technology service providers, the
                  University of Nebraska system, and important U.S.
                  Armed forces operations. If you’re not already doing
                  business in Omaha, you should be.
                </p>
                <p>
                  Get your name and product in front of hundreds of
                  security professionals and key decision makers with
                  a Kernelcon sponsorship. We will be happy to work
                  with you on details of your sponsorship, options
                  available and sponsorship fees.
                </p>
                <p>
                  While we do appreciate our sponsors, please
                  understand that Kernelcon is first and foremost for
                  our attendees so we can only accept sponsors who
                  have their best interests in mind.
                </p>
                <div className="tab-title">
                  Sponsorships are now available. Please contact{" "}
                  <a
                    href="mailto:sponsor@kernelcon.org?Subject=Sponorship"
                    style={{ textDecoration: "underline" }}
                    target="_top">
                    sponsor@kernelcon.org
                  </a>
                  .
                </div>
              </div>
            </div>
            <div>
              <h3 className="title">Sponsor a Student</h3>
              <div className="text-block">
                <h4>
                  Interested in sponsoring a student for this year's
                  Kernelcon?
                </h4>
                <p>
                  With your assistance, Kernelcon hopes to sponsor up
                  to 50 students this year. In addition to entry for
                  you, your money will help pay for a student’s
                  admission, hotel room (for traveling students), and
                  this year’s “hacker education kit”.
                </p>
                <div className="tab-title">
                  Would you like to hear more? Please contact{" "}
                  <a
                    href="mailto:sponsor@kernelcon.org?Subject=Sponorship"
                    style={{ textDecoration: "underline" }}
                    target="_top">
                    sponsor@kernelcon.org
                  </a>
                  .
                </div>
              </div>
            </div>
            <div className="spons-page">
              <h1 className="title">Our Sponsors</h1>
              <div className="text-block">
                <p>
                  We would like to thank all of our sponsors who make
                  Kernelcon the best it can be. Without our sponsors,
                  our conference wouldn't happen.
                </p>
              </div>

              <div className="text-block spons-groups">
                {/* <div className='spons-block'>
                    <h2 className='gold spons-title'>Platinum</h2>
                    <a href="https://www.netscout.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={netscout}
                        className='spons-img plat-spons'
                        alt="NETSCOUT"/>
                    </a>
                    <a href="https://www.endgame.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={endgamelogo}
                        className='spons-img plat-spons'
                        alt="ENDGAME"/>
                    </a>
                  </div> */}
                

                  <div className='spons-block'>
                    <h2 className='gold spons-title'>Gold</h2>
                    <a href="https://www.fcsamerica.com/"
                      target="_blank"
                      className='light-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={FarmCreditLight}
                        className='spons-img other-spons'
                        alt="Farm Credit"/>
                    </a>
                    <a href="https://www.fcsamerica.com/"
                      target="_blank"
                      className='dark-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={FarmCreditDark}
                        className='spons-img other-spons'
                        alt="Farm Credit"/>
                    </a>
                    <a href="https://www.conagrabrands.com/"
                      target="_blank"
                      className='dark-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={ConAgraLight}
                        className='spons-img other-spons'
                        alt="Conagra"/>
                    </a>
                    <a href="https://www.conagrabrands.com/"
                      target="_blank"
                      className='all-dark light-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={ConAgraLight}
                        className='spons-img other-spons'
                        alt="Conagra"/>
                    </a>
                    <a href="https://aws.amazon.com/"
                      target="_blank"
                      className='light-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={AWSLight}
                        className='spons-img other-spons'
                        alt="Amazon Web Services"/>
                    </a>
                    <a href="https://aws.amazon.com/"
                      target="_blank"
                      className='dark-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={AWSDark}
                        className='spons-img other-spons'
                        alt="Amazon Web Services"/>
                    </a>
                    
                    <div className='sub-party-logos'>
                      <span className='sub-party-logos'>
                        <a href="http://www.carrieraccessit.com/"
                          target="_blank"
                          rel='noopener noreferrer'>
                          <img src={CarrierAccessIT}
                            className='spons-img sub-party-spons'
                            alt="Carrier Access IT"/>
                        </a>

                        <a href="https://www.crowdstrike.com/"
                          target="_blank"
                          rel='noopener noreferrer'>
                          <img src={Crowdstrike}
                            className='spons-img sub-party-spons'
                            alt="Crowdstrike"/>
                        </a>
                      </span>
                    </div>

                    <a href="http://www.paloaltonetworks.com/"
                      target="_blank"
                      className='light-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={PaloAltoLight}
                        className='spons-img other-spons'
                        alt="Palo Alto Networks"/>
                    </a>
                    <a href="http://www.paloaltonetworks.com/"
                      target="_blank"
                      className='dark-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={PaloAltoDark}
                        className='spons-img other-spons'
                        alt="Palo Alto Networks"/>
                    </a>
                    <a href="https://www.wiz.io/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='dark-mode-logo'>
                      <img src={WizDarkMode}
                        className='spons-img other-spons'
                        alt="Wiz"/>
                    </a>
                    <a href="https://www.wiz.io/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='light-mode-logo'>
                      <img src={WizLightMode}
                        className='spons-img other-spons'
                        alt="Wiz"/>
                    </a>

                    <div className='gp-logo'>
                      <a href="https://www.guidepointsecurity.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='all-bright dark-mode-logo'>
                        <img src={GuidepointDark}
                          className='spons-img other-spons'
                          alt="Guidepoint Security"/>
                      </a>
                      <a href="https://www.guidepointsecurity.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='light-mode-logo'>
                        <img src={GuidepointDark}
                          className='spons-img other-spons'
                          alt="Guidepoint Security"/>
                      </a>
                    </div>
                    <div className='sub-party-logos'>
                      <span className='sub-party-logos'>
                        <a href="https://www.fastly.com/"
                          target="_blank"
                          rel='noopener noreferrer'
                          className='dark-mode-logo'>
                          <img src={FastlyDark}
                            className='spons-img sub-party-spons'
                            alt="Fastly"/>
                        </a>
                        <a href="https://www.fastly.com/"
                          target="_blank"
                          rel='noopener noreferrer'
                          className='light-mode-logo'>
                          <img src={FastlyLight}
                            className='spons-img sub-party-spons'
                            alt="Fastly"/>
                        </a>

                        <a href="https://www.secureworks.com/"
                          target="_blank"
                          rel='noopener noreferrer'
                          className='dark-mode-logo'>
                          <img src={SecureworksDark}
                            className='spons-img sub-party-spons'
                            alt="Secureworks"/>
                        </a>
                        <a href="https://www.secureworks.com/"
                          target="_blank"
                          rel='noopener noreferrer'
                          className='light-mode-logo'>
                          <img src={SecureworksLight}
                            className='spons-img sub-party-spons'
                            alt="Secureworks"/>
                        </a>
                      </span>
                    </div>



                  </div>

                  <div className='spons-block'>
                    <h3 className='silver spons-title'>Silver</h3>
                    <a href="https://fnbo.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={Fnbo}
                        className='spons-img other-spons'
                        alt="First National Bank of Omaha"/>
                    </a>
                    {/* <a href="https://redcanary.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={RedCanary}
                        className='spons-img other-spons'
                        alt="Red Canary"/>
                    </a> */}
                  </div>

                  <div className='spons-block'>
                    <h4 className='bronze spons-title'>Bronze</h4>
                    <a href="https://www.contrastsecurity.com/"
                      target="_blank"
                      className='dark-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={ContrastLightMode}
                        className='spons-img other-spons'
                        alt="Contrast Security"/>
                    </a>
                    <a href="https://www.contrastsecurity.com/"
                      target="_blank"
                      className='light-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={ContrastDarkMode}
                        className='spons-img other-spons'
                        alt="Contrast Security"/>
                    </a>
                    {/* <a href="https://www.appgate.com/"
                          target="_blank"
                          rel='noopener noreferrer'
                          className='light-mode-logo'>
                          <img src={AppGateDark}
                            className='spons-img other-spons'
                            alt="AppGate"/>
                        </a>
                        <a href="https://www.appgate.com/"
                          target="_blank"
                          rel='noopener noreferrer'
                          className='dark-mode-logo'>
                          <img src={AppGateLight}
                            className='spons-img other-spons'
                            alt="AppGate"/>
                        </a> */}
                  </div>

                  {/* <div className='spons-block'>
                    <h5 className='tin spons-title'>Tin</h5>
                    <a href="https://www.bairdholm.com/"
                          target="_blank"
                          rel='noopener noreferrer'
                          className=''>
                          <img src={BairdHolm}
                            className='spons-img other-spons'
                            alt="Biard Holm"/>
                        </a>
                  </div> */}


                
                  {/* <div className='spons-block'>
                    <h4 className='ctf-spons spons-title'>Party Sponsors</h4>

                    
                  </div> */}


                  


                  {/* <div className='spons-block'>
                    <h4 className='ctf-spons spons-title'>CTF Sponsors</h4>
                    <a href="https://www.checkpoint.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={CheckPoint}
                        className='spons-img other-spons'
                        alt="Check Point"/>
                    </a>
                    <a href="https://www.protiviti.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={Protiviti}
                        className='all-bright dark-mode-logo spons-img other-spons'
                        alt="Protiviti"/>
                    </a>
                    <a href="https://www.protiviti.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={Protiviti}
                        className='light-mode-logo spons-img other-spons'
                        alt="Protiviti"/>
                    </a>
                  </div> */}

                  <div className='spons-block'>
                    <h4 className='gold spons-title'>Other Sponsors</h4>
                    <a href="https://toool.us/"
                      target="_blank"
                      className='dark-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={ToooLDarkMode}
                        className='spons-img other-spons'
                        alt="TOOOL"/>
                    </a>
                    <a href="https://toool.us/"
                      target="_blank"
                      className='light-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={TooolLightMode}
                        className='spons-img other-spons'
                        alt="TOOOL"/>
                    </a>
                    <a href="https://nostarch.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={NoStarchPress}
                        className='spons-img other-spons'
                        alt="NoStarchPress"/>
                    </a>
                    <a href="https://www.mentalhealthhackers.org/"
                      target="_blank"
                      className='dark-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={MentalHealthHackersDark}
                        className='spons-img other-spons'
                        alt="Mental Health Hackers"/>
                    </a>
                    <a href="https://www.mentalhealthhackers.org/"
                      target="_blank"
                      className='light-mode-logo'
                      rel='noopener noreferrer'>
                      <img src={MentalHealthHackersLight}
                        className='spons-img other-spons'
                        alt="Mental Health Hackers"/>
                    </a>
                    <a href="https://www.teksystems.com/en/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={TekSystems}
                        className='spons-img other-spons'
                        alt="TEKsystems"/>
                    </a>
                    <br />
                  </div>


                <div className='spons-block'>
                    <div className='foodbev-spons'>
                    
                      <div className='single-foodbev-spons'>
                        <h6 className='text-highlight spons-title'>Coffee</h6>
                        <a href="https://www.bugcrowd.com/"
                          target="_blank"
                          rel='noopener noreferrer'>
                          <img src={Bugcrowd}
                            className='spons-img fdbev-spons'
                            alt="Bugcrowd"/>
                        </a>
                        <a href="https://cloudsecuritypartners.com/"
                          target="_blank"
                          className='dark-mode-logo'
                          rel='noopener noreferrer'>
                          <img src={CloudSecurityPartnersDark}
                            className='spons-img fdbev-spons'
                            alt="Cloud Security Partners"/>
                        </a>
                        <a href="https://cloudsecuritypartners.com/"
                          target="_blank"
                          className='light-mode-logo'
                          rel='noopener noreferrer'>
                          <img src={CloudSecurityPartnersLight}
                            className='spons-img fdbev-spons'
                            alt="Cloud Security Partners"/>
                        </a>
                      </div>

                      <div className='single-foodbev-spons'>
                        <h6 className='text-highlight spons-title'>Popcorn</h6>
                        <a href="https://www.secureps.net/"
                          target="_blank"
                          rel='noopener noreferrer'>
                          <img src={SecurePointSolutions}
                            className='spons-img fdbev-spons'
                            alt="Secure Point Solutions"/>
                        </a>
                      </div>

                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
