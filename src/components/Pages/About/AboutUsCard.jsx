
import React from 'react'
import "./about.css";
// import {FaLinkedin} from 'react-icons/fa';
import { FaLinkedin,FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function AboutUsCard(props) {
  return (
    <>
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={props.img} alt="Zoro"/>
                </div>
                <div class="contentBx">
                  <h3>{props.name}</h3>
                  <h2>{props.post}</h2>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href={props.Linkedin}><FaLinkedin/></a>
                </li>
                <li>
                  <a href={props.instagram}><FaInstagram/></a>
                </li>
                {/* <li>
                  <a href=""><button>Icon</button></a>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default AboutUsCard