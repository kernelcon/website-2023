import React, { Component } from "react";
import PunkMale from "../../static/images/punk/punk_male.png";
import PunkFemale from "../../static/images/punk/punk_female.png";
import Skyline from "../../static/images/punk/skyline.png";
import Speaker from "../../static/images/icons/speaker.png";
import Training from "../../static/images/icons/training.png";
import Arm from "../../static/images/icons/arm.png";
import Brain from "../../static/images/icons/brain.png";
import Fun from "../../static/images/icons/fun.png";
import kingpin from "../../static/images/trainers/kingpin.png";
import jen from "../../static/images/trainers/jen.png";

import FullKernelconLogo from "../../static/images/logos/kernelcon_black.png"
import FullKernelconLogoDark from "../../static/images/logos/kernelcon_white.png"
import BackGround from '../../components/BackGround/BackGround';
import Button from '../../components/Button/Button';
// import ChemSet from '../../components/ChemSet/ChemSet';
import ChemSet from '../../static/images/chem-set.png';
// import bkg from '../../static/images/earth-day.jpg';

import Lecture from "../../static/images/icons/lecture.svg"
import Jetpack from "../../static/images/icons/jetpack.svg"
import Award from "../../static/images/icons/award.svg"
import Research from "../../static/images/icons/research.svg"
import Atom from "../../static/images/icons/atom.svg"
import Experiment from "../../static/images/icons/experiment.svg"
import ExperimentTable from "../../static/images/icons/experiment-table.svg"
import LabCoat from "../../static/images/icons/lab-coat.svg"
import BrainOutline from "../../static/images/icons/brain-outline.svg"
import Certificate from "../../static/images/icons/certificate-2.svg"

import "./Home.scss";

export default class Home extends Component {
	static displayName = "Home";

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

  getRandomScientist(lengthOfArray, indexToExclude, secondLastKernelIndex) {
    // This function just grabs a random index that wasn't one of the last two.
    // Obviously, due to math, you need to send in at least an array of length 3.
    let rand = null;

    while (rand === null || rand === indexToExclude || rand === secondLastKernelIndex) {
      rand = Math.round(Math.random() * (lengthOfArray - 1));
    }
    return rand;
  }


	constructor(props) {
		super(props);
		this.state = {
			mode: "",
			isOpen: false,
		};
	}

  getScientist() {
    const randScientist = this.getRandomScientist(7, 0, 0);

    // If image DNE, assign the random Scientist we've generated.
    const img = `mad-scientists/mad_scientist_${randScientist}.png`;
    const imgSrc =  img ? require(`../../static/images/${img}`) : 'https://via.placeholder.com/150';
    return imgSrc;
  }
 


	render() {
    const imgSrc = this.getScientist();

		return (
      <div id='main_hero' className='hero'>
        <BackGround />
        <div className="container">
          <div className="home-page">
            <div className="centered-top">
              <img src={FullKernelconLogo} className="light-mode-logo"  alt="kernelcon-logo"/>
              <img src={FullKernelconLogoDark} className="dark-mode-logo"  alt="kernelcon-logo"/>
              <h2 className="sub-title">The Science of Hacking</h2>
              {/* <div className="font-punk">The Science of Hacking</div> */}
              
              {/* <img src={PunkFemale} className="punk-img"  alt="punk-female"/>
              <img src={PunkMale} className="punk-img" alt="punk-male"/> */}
            </div>

            <div className="col left">
              <div className="sizzle">
                <div className="sizzle-header">
                  <div className="sizzle-text-title">
                    Welcome to Kernelcon
                  </div>
                  {/* <ChemSet /> */}
                  {/* <img src={ChemSet} className="sizzle-image"  alt="chemistry set"/> */}
                </div>
                <div className="sizzle-text-section">
                  {/* <div className="sizzle-text">
                    Join us on a trip to the cyber playground where you can let your punk flag fly whatever it is: biopunk, cyberpunk, steampunk, etc.
                  </div> */}
                  <div className="sizzle-text">
                    Put your lab coat on and join us to test the hypothesis that Kernelcon is still one of the midwest's premier information security conferences.
                  </div>
                  <div className="sizzle-bullets">
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Lecture} alt="speaker-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Excellent Speakers
                        </div>
                        <div className='sizzle-bullet-desc'>
                          We are bringing in some of information security's top talents from the midwest and across the nation. Come learn from and network with our speakers!
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Certificate} alt="training-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Professional Training
                        </div>
                        <div className='sizzle-bullet-desc'>
                          Some of the industry's leading trainers descend on Omaha, Nebraska to lead two days of intensive coursework for attendees. Interested in doing the training? Contact us through our open calls.
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Research} alt="hands-on-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Hands-On Villages
                        </div>
                        <div className='sizzle-bullet-desc'>
                        We have huge plans for our village area - including classics like Lockpicking and Hardware Hacking. Got an idea for a fun village? Check out our open calls.
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={BrainOutline} alt="competitions-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Challenging Competitions
                        </div>
                        <div className='sizzle-bullet-desc'>
                          Our Capture-the-Flag event is always a big hit and this year promises to be no less than 8-bits of CTF fun! Join us in a quest to win an eternal kernel aka lifetime entry to Kernelcon!
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Experiment} alt="activities-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Fun Activities
                        </div>
                        <div className='sizzle-bullet-desc'>
                          Join us at out raging party / social event Kernel Panic party.  Details to come but this event is always an attendee favorite!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="col right">

            <span className='button-left-margin'>
              <div className='order-button'>
                <a
                  className="cybr-btn btn-bottom"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reg.kernelcon.org/web/event?eventid=2138571278">
                  Register Now
                  <span aria-hidden className="cybr-btn__glitch">
                    Register Now
                  </span>
                </a>
              </div>
                {/* <<img
                  className="img-responsive"
                  alt="future-is-now"
                  src="https://cdn0.vox-cdn.com/thumbor/O8IF6wSLdIz4JoG6abHHSn2qWhg=/cdn0.vox-cdn.com/uploads/chorus_asset/file/6274065/Apr_01__2016_09_25.0.gif"
                />
                <p className="photo-credit">
                  The Future Is Now by Josan Gonzalez
                </p> */}
              </span>

              <div className='pop'>

              {/* <center>
                <div className='order-button'>
                  <a
                    className="cybr-btn btn-bottom"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://reg.kernelcon.org/">
                    Register Now
                    <span aria-hidden className="cybr-btn__glitch">
                      Register Now
                    </span>
                  </a>
                </div>
              </center> */}

              

              {/* <div className='updates'>
                <h2>REGISTER</h2>
                <div className='update-text'>
                  <p>Registration is now open for tickets and all workshops!</p>
                  <p>On-site registration will also be available, but register now to secure your portion of the limited availability of electronic badges, t-shirts, and more!</p>
                </div>
                <div className='sign-up-btn'>
                  <Button href="/register" title="Register" />
                </div>
              </div> */}

              <div className='theme-description'>
                <h3>This year's theme is <span className='underline'>Science</span>.</h3> 
                <p>Look at any science-related discipline and you'll find hackers learning and iterating, making discoveries and proving theories that have shaped the world we live in today.</p>
                <br />
                <p>Whether you are into engineering, physics, biology, electronics, mathematics, or chemistry <b>you belong here at Kernelcon.</b></p>
              </div>

              <img src={imgSrc} className="mad-scientist" alt="mad scientist in lab"/>
              
              {/* <img src={ChemSet} alt="chemistry set"/> */}
              
              
              {/* <div className='keynote'>
                <div className='keynote-header'>
                  <div className='keynote-title'>
                    Keynote Speaker:
                  </div>
                  <div className='keynote-speaker'>
                    <div className='keynote-speaker-name'>
                      Joe Grand (aka Kingpin)
                    </div>
                    <div className='keynote-speaker-info'>
                      <img src={kingpin} className='keynote-image' alt="Joe Grand"/>

                      <p className='keynote-para'>We all loved watching him <a className="text-highlight" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=AQpv_6Se6VM&list=PL9RA5HoG1guy7oz3m4Y0aHqsNumai2o8v&index=6">reverse engineer hardware components in Hack Live</a>. And now he's back as our 2022 Keynote Speaker... please welcome, Joe Grand!</p>
                      <p className='keynote-para'>Joe Grand, also known as Kingpin, is a computer engineer,
                      hardware hacker, teacher, advisor, daddy, honorary doctor, and
                      proprietor of Grand Idea Studio.</p>
                      <p className='keynote-para'>He was formerly a technological juvenile delinquent, member of
                      legendary hacker group L0pht Heavy Industries, co-host of
                      Discovery Channel's Prototype This, and DEFCON's original
                      electronic badge designer. He has been creating, exploring, and
                      manipulating electronic systems since the 1980s.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='keynote'>
                <div className='keynote-header'>
                  <div className='keynote-title'>
                    Keynote Speaker:
                  </div>
                  <div className='keynote-speaker'>
                    <div className='keynote-speaker-name'>
                      Jen Easterly
                    </div>
                    <div className='keynote-speaker-info'>
                      <img src={jen} className='keynote-image' alt="Joe Grand"/>

                      <p className='keynote-para'>Jen Easterly is the Director of the Cybersecurity and Infrastructure Security Agency (CISA). Ms. Easterly was nominated by President Biden in April 2021 and unanimously confirmed by the Senate on July 12, 2021. As Director, Ms. Easterly leads CISA???s efforts to understand, manage, and reduce risk to the cyber and physical infrastructure Americans rely on every day.</p>
                      <p className='keynote-para'>Before serving in her current role, Ms. Easterly was the head of Firm Resilience at Morgan Stanley, responsible for ensuring preparedness and response to business-disrupting operational incidents and risks to the Firm.</p>
                      <p className='keynote-para'>Ms. Easterly has a long tradition of public service, to include two tours at the White House, most recently as Special Assistant to President Obama and Senior Director for Counterterrorism. She also served as the Deputy for Counterterrorism at the National Security Agency.</p>
                      <p className='keynote-para'>A two-time recipient of the Bronze Star, Ms. Easterly retired from the U.S. Army after more than twenty years of service in intelligence and cyber operations, including tours of duty in Haiti, the Balkans, Iraq, and Afghanistan. Responsible for standing up the Army???s first cyber battalion, Ms. Easterly was also instrumental in the design and creation of United States Cyber Command.</p>
                      <p className='keynote-para'>A distinguished graduate of the United States Military Academy at West Point, Ms. Easterly holds a master???s degree in Philosophy, Politics, and Economics from the University of Oxford, where she studied as a Rhodes Scholar. She is the recipient of the James W. Foley Legacy Foundation American Hostage Freedom Award and the Bradley W. Snyder Changing the Narrative Award.</p>
                      <p className='keynote-para'>A member of the Council on Foreign Relations and a French-American Foundation Young Leader, Ms. Easterly is the past recipient of numerous fellowships, including the Aspen Finance Leaders Fellowship, the National Security Institute Visiting Fellowship, the New America Foundation Senior International Security Fellowship, the Council on Foreign Relations International Affairs Fellowship, and the Director, National Security Agency Fellowship.</p>
                    </div>
                  </div>
                </div>
              </div> */}



    {/* 
              <center>
              <div className='order-button'>
                <a
                  className="cybr-btn btn-bottom"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reg.kernelcon.org/">
                  Register Now
                  <span aria-hidden className="cybr-btn__glitch">
                    Register Now
                  </span>
                </a>
              </div>
                <img
                  className="img-responsive"
                  alt="future-is-now"
                  src="https://cdn0.vox-cdn.com/thumbor/O8IF6wSLdIz4JoG6abHHSn2qWhg=/cdn0.vox-cdn.com/uploads/chorus_asset/file/6274065/Apr_01__2016_09_25.0.gif"
                />
                <p className="photo-credit">
                  The Future Is Now by Josan Gonzalez
                </p>
              </center> */}
              </div>
            </div>

            {/* <a className='reg-button'
              href="https://reg.kernelcon.org"
              rel='noopener noreferrer'
              target='_blank'>
              Register Now
            </a>
            <a className='reg-button'
              onClick={this.toggleModal}
              href="#"
              rel='noopener noreferrer'>
              Sign up for updates
            </a>

            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}
              title='Subscribe for Updates'
              modalContentStyle={modalContentStyle}
              height='620'
              width='600'>
                <iframe src="https://mailchi.mp/4305c17b886e/kernelcon"
                  title="sign-up-form"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className='mail-form'
                  style={{'marginLeft': '0px', 'width': '580px', 'height': '720px'}}>
                  Loading...
                </iframe>
            </Modal> */}
          </div>
        </div>
      </div>
		);
	}
}
