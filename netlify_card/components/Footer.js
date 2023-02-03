import React from "react"

export default function Footer() {
    
    return(
        <div className="footer"> 
            <div className="footer--facebook"> 
                <a href="https://www.facebook.com/jon.chan2">
                <img className="icon--facebook" src="../assets/facebook.png" />
                </a>
            </div>
            
            <div className="footer--twitter"> 
                <a href="https://twitter.com/artfornormies">
                <img className="icon--twitter" src="../assets/twitter.png" />
                </a>
            </div>
            
            <div className="footer--instagram"> 
                <a href="https://www.instagram.com/artfornormies/">
                <img className="icon--instagram" src="../assets/instagram.png" />
                </a>
            </div>
            <div className="footer--github"> 
                <a href="https://github.com/jon-tk-chan/artfornormies">
                <img className="icon--github" src="../assets/github.png" />
                </a>
            </div>
        </div>
    )
}