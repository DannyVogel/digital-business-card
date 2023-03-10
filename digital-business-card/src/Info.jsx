import React from "react";

export default function Info() {
  return (
    <div>
        <div className="myPhotoContainer">
            <img src="./me.jpg" alt="" className="myPhoto" />
        </div>
        <div className="myDetails">
            <h1 className="myName">Danny Vogel</h1>
            <p className="myJob">Frontend Developer</p>
            <p className="myWebsite">dannyvogel.website</p>
        </div>
        <div className="buttonContainer">
            <button className="emailBtn"><i class="fa-solid fa-envelope"></i>Email</button>
            <button className="linkedInBtn"><i class="fa-brands fa-linkedin"></i>Linkedin</button>
        </div>
    </div>
  )
}
