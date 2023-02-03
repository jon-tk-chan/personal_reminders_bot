import React from "react"

export default function Info() {
    return ( 
        <div className="info">
        <img className="info--img" src="../assets/film_photography-1.jpg"/>
            <h1 className="info--name">Art for Normies</h1>
            <h3 className="info--jobtitle">Writing project by Jonathan Chan</h3>
                <a className="info--website" href="https://github.com/jon-tk-chan">
                    <p>Personal Website </p>
                </a>
            <div className="info--buttons">
                    <a href="mailto:artfornormies@gmail.com">
                        <button className="icon--email_button" type="button">
                                <img className="email-logo" src="../assets/mail.png" />
                                <p className="email-text">Email</p>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-tk-chan/">
                        <button className="info--linkedin_button" type="button">
                            <img className="linkedin-logo" src="../assets/linkedin.png" />
                            <p>LinkedIn</p>
                        </button>
                    </a>
             </div>
        </div>
        
    )
}