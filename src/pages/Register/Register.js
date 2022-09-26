import React, { Component } from "react";
import "./Register.scss";

class Register extends Component {
	static displayName = "Register";

	render() {
		return (
			<div className="con-page">
				<div className="venue-section">
					<h3 className="title">Register</h3>
					<p className="tab-paragraph">
						Welcome! We are happy to have your interest. We are working on a brand new registration experience for 2023. 
						Check back soon !
						{/* Welcome! We are happy to have your interest. Below is
						the registration page for Kernelcon 2022! */}
					</p>


					{/* <div className='order-button'>
						<a
							class="cybr-btn btn-bottom"
							target="_blank"
							rel="noopener noreferrer"
							href="https://reg.kernelcon.org/">
							Register Now
							<span aria-hidden class="cybr-btn__glitch">
								Register Now
							</span>
						</a>
					</div><br /> */}
				</div>
				<div className="venue-section">
					<h3 className="title">Registering as a Group?</h3>
					<p className="tab-paragraph">
						We give discounts at 10 or more signups! Contact us
						about our group rates here:{" "}
						<a
							className="text-highlight"
							href="mailto:info@kernelcon.org">
							info@kernelcon.org
						</a>
					</p>
				</div>
				<div className="venue-section">
					<h3 className="title">Students</h3>
          {/* <h3 className='closed-text'>The Student Submission for 2022 has closed.</h3> */}

					<p className="text-highlight">
						Are you interested in attending Kernelcon, but cannot
						afford the con?
					</p>
					<p className="tab-paragraph">
						Students, aged 18 and over, who are interested in
						applying for this opportunity will need the following:
					</p>
					<ul className="students-list">
						<li>
							Proof that you are a student. Picture at school with
							your student ID.
						</li>
						<li>
							Letter of recommendation from an advisor or
							instructor from your institution.
						</li>
						<li>
							A brief letter of interest, telling us why you are
							interested in attending Kernelcon and what you hope
							to learn.
						</li>
						<li>
							Lastly, one or both of the letters should be sent
							from a school email address.
						</li>
					</ul>
					<p className="tab-paragraph">
						Students should submit the above information along with
						any questions or concerns to{" "}
						<a
							className="text-highlight"
							href="mailto:students@kernelcon.org">
							students@kernelcon.org
						</a>
						. Accepted students will receive admission to the
						conference, a hotel room (for traveling students), and
						this year's "hacker education kit".
					</p>
				</div>
			</div>
		);
	}
}

export default Register;
