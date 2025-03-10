import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Contact2 from '../components/contact2'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Cooked Luminous Scorpion</title>
        <meta
          property="og:title"
          content="Contact - Cooked Luminous Scorpion"
        />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">Contact Us</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text13">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text14">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text15">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text16">Page Four</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text17">Subscribe on YouTube</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="contact-text18">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text19">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text20">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text21">Page Four Description</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="contact-text22">
              <span>Privacy Policy</span>
              <br></br>
            </span>
          </Fragment>
        }
        link311={
          <Fragment>
            <span className="contact-text25">
              <span>Terms of Service</span>
              <br></br>
            </span>
          </Fragment>
        }
        link3111={
          <Fragment>
            <span className="contact-text28">
              <span>Cookies Settings</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Contact2
        phone1={
          <Fragment>
            <span className="contact-text31">
              <span>+91 9210481163</span>
              <br></br>
            </span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="contact-text34">
              <span>srpropertiesofficial@bizznist.com</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text37">
              <span>Contact Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text40">Get in touch with us today!</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text41">
              <span>Indirapuram Ghaziabad, Uttar Pradesh, 201014 India</span>
              <br></br>
            </span>
          </Fragment>
        }
        phone11={
          <Fragment>
            <span className="contact-text44">
              <span>+91 9717003787</span>
              <br></br>
            </span>
          </Fragment>
        }
        imageSrc="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQzfHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzQxNjA1OTY3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        rootClassName="contact2root-class-name"
      ></Contact2>
      <Footer4
        link1={
          <Fragment>
            <span className="contact-text47">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text48">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text49">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text50">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text51">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name2"
      ></Footer4>
    </div>
  )
}

export default Contact
