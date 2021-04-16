import React, { Component } from 'react';
import Image from '../assets/myPic.jpeg'
class About extends Component {
  render() {

    if(this.props.data){
      var name = 'Nikhil Tiwari';
      var profilepic= Image;
      var bio = this.props.data.bio;
      var street = '366/3 New Jagutpura';
      var city = "Hoshiarpur";
      var state = "Punjab";
      var zip = "146001";
      var phone= "+91 8437904258, +91 7009426785";
      var email = "nikhiltiwari7123@gmail.com";
      var resumeDownload = 'https://drive.google.com/file/d/1LaaZKpL0zs1X5UGlmr-PoqsUojY02ThW/view?usp=drivesdk';
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     {/* <a href={"/about"} onClick={()=> window.open(resumeDownload)} className="button"> */}
                        <div onClick={()=> window.open(resumeDownload)} className="button">
                        <i className="fa fa-download"></i>Download Resume
                        </div>
                        {/* </a> */}
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
