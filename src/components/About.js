import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="/images/ava.jpeg" alt="pic" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span><a href = "mailto: Mmeminger1@gmail.com">Mmeminger1@gmail.com</a>
</span>
                  <br />
                  <i class="fas fa-phone"></i>
                  <span><a href="tel:8572079047">(857)207-9047</a>
</span>


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
