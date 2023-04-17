import React, { Component } from "react";
import "./ScienceFair.scss";

export default class ScienceFair extends Component {
	static displayName = "ScienceFair";

	render() {
		return (
            <div className='venue-section'>
                <div className='science-fair'>
                    <h3 className='closed-text'>Science Fair submissions for 2023 have closed.</h3>
                    <p><b>Kernelcon is excited to welcome its first ever Science Fair!</b></p>
                    <p>Given our theme this year, join us at Kernelcon for our inaugural Science Fair, where we celebrate the creativity and innovation of our hacker community.</p>
                    <br />
                    <p>Are you someone who does amazing research, experiments, builds your own machines, automations, or software? Please bring a demo to Kernelcon to compete in our Science Fair!  Each registrant gets a Kernelcon Lab Coat and there will be some pretty special prizes in store for the winners.</p>
                    <br />
                    <p>Registration ahead of the conference is not required, but registering ahead of the con helps us plan and reserves you a Lab Coat.</p>
                    <br />

                    {/* <div className='order-button'>
                        <a
                        className="cybr-btn btn-bottom"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSe8NLNykutTFjpQXvjSjK0J_Y9JUAhZxQZkMrLnjWWjohmK5g/viewform?usp=sf_link">
                        Register Now
                        <span aria-hidden className="cybr-btn__glitch">
                            Register Now
                        </span>
                        </a>
                    </div> */}
                    <br />
                    <p><b>How It Works</b></p>
                    <p>First, bring a demo of your project to Kernelcon, poster board not required (but could be a fun touch). We will have you setup in a hotel secured room. During the conference we will have two Science Fair sessions (Fri and Sat) where the rest of the public will be able to walk through and ask you about your project. In Saturday’s session, the judges will come by as well as the other con attendees (they’ll be the ones holding very official looking clipboards).</p>
                    <br />
                    <p>Otherwise, you just enjoy the conference. Your hard work was all done before the con to get the project together so this event should be a celebration, not stressful. During the closing session we’ll announce competition winners and maybe a few extra drawings as well.</p>
                    <br />
                    <p><b>Project Guidelines</b></p>
                    <p>Science Fair entries must still adhere to the <a href="https://kernelcon.org/about#code-of-conduct" className="text-highlight" rel="noopener noreferrer" target="_blank">Kernelcon Code of Conduct.</a> Projects must also follow Embassy Suites policies.</p>
                    <br />
                    <p>
                        Addtional constraints are as follows:
                        <ul className='example-projects'>
                            <li>No open flame.</li>
                            <li>No spillable liquids.</li>
                            <li>No loose gaseous materials.</li>
                            <li>No hazardous materials.</li>
                            <li>Unsecured glassware.</li>
                            <li>No Live animals.</li>
                            <li>Ultimately, nothing that would damage the environment.</li>
                        </ul>
                    </p>
                    <br />
                    <p>Kernelcon staff reserves the right to remove any project prior to or during the con. If there are any questions regarding submissions, please send to <span className='text-highlight'>adam@kernelcon.org</span>.</p>
                    <br />
                    <p><b>Example Projects</b></p>
                    <p>
                        <ul className='example-projects'>
                            <li>Bring in a hacked IOT device that has been repurposed.</li>
                            <li>A machine learning algorithm that detects types of corn to identify best ways to grow and harvest.</li>
                            <li>Software defined radio project with proof of concept. (Video if it cannot fit in the space).</li>
                            <li>A popcorn delivery system.</li>
                            <li>Create a Yagi antenna out of yardsticks, copper, and corn to transmit across the conference.</li>
                            <li>Building a popcorn monitoring station that uses sensors to measure temperature, humidity, and atmospheric pressure, then sending the data to a computer for analysis and display.</li>
                            <li>Repurpose a password cracking machine out of old GPU mining rigs to also make popcorn.</li>
                        </ul>
                    </p>
                    <br />
                    <p>These are just a few examples, and there are many more possibilities. The key is to choose a project that interests you and aligns with your skills and resources.</p>
                </div>
          </div>
		);
	}
}
