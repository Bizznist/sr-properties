import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero11 from '../components/hero11'
import Hero6 from '../components/hero6'
import Gallery7 from '../components/gallery7'
import Features24 from '../components/features24'
import Features23 from '../components/features23'
import Features13 from '../components/features13'
import Contact3 from '../components/contact3'
import Testimonial12 from '../components/testimonial12'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Cooked Luminous Scorpion</title>
        <meta property="og:title" content="Cooked Luminous Scorpion" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Contact Us</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text104">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text105">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text106">Page Four</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text107">Subscribe on YouTube</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text110">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text111">Page Four Description</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="home-text112">
              <span>Privacy Policy</span>
              <br></br>
            </span>
          </Fragment>
        }
        link311={
          <Fragment>
            <span className="home-text115">
              <span>Terms of Service</span>
              <br></br>
            </span>
          </Fragment>
        }
        link3111={
          <Fragment>
            <span className="home-text118">
              <span>Cookies Settings</span>
              <br></br>
            </span>
          </Fragment>
        }
        logoSrc="/sr%20properties-1500h.png"
      ></Navbar8>
      <Hero11
        content1={
          <Fragment>
            <span className="home-text121">
              Looking for the perfect Land, villa, farmhouse, or flat in NCR? At
              SR Properties, we bring you the best real estate deals with
              trusted guidance, transparent transactions, and unbeatable prices.
              Whether you&apos;re buying, selling, or renting, we make the
              process seamless and hassle-free.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text122">
              Find Your Dream Property with SR Properties!
            </span>
          </Fragment>
        }
        image1Src="/whatsapp%20image%202025-03-06%20at%207.09.48%20pm-1500w.jpeg"
        image2Src="https://images.unsplash.com/photo-1623955163421-d6345f073503?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4MHx8ZmFybWhvdXNlfGVufDB8fHx8MTc0MTQyOTY3OXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image3Src="/whatsapp%20image%202025-03-04%20at%203.38.49%20pm%20(1)-1400w.jpeg"
        image5Src="/whatsapp%20image%202025-03-04%20at%203.38.44%20pm-1500w.jpeg"
        image6Src="https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHx2aWxsYXxlbnwwfHx8fDE3NDE0MzA3NDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        rootClassName="hero11root-class-name"
      ></Hero11>
      <Hero6
        heading1={
          <Fragment>
            <span className="home-text123">
              <span>
                Buy, Sell, or Rent Hassle-Free with Verified Listings &amp; Best
                Deals.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHZpbGxhfGVufDB8fHx8MTc0MTQzMDc0N3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
        rootClassName="hero6root-class-name"
      ></Hero6>
      <Gallery7
        heading1={
          <Fragment>
            <span className="home-text126">Featured Properties</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFwYXJ0bWVudHN8ZW58MHx8fHwxNzQxMzc3Mzc1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="/whatsapp%20image%202025-03-04%20at%203.38.44%20pm-1500w.jpeg"
        image3Src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHZpbGxhfGVufDB8fHx8MTc0MTQzMDc0N3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image4Src="/whatsapp%20image%202025-03-06%20at%207.09.48%20pm-1500w.jpeg"
        image5Src="/whatsapp%20image%202025-03-04%20at%203.38.51%20pm-1500w.jpeg"
        image6Src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx2aWxsYXxlbnwwfHx8fDE3NDE0MzA3NDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image7Src="/whatsapp%20image%202025-03-04%20at%203.38.41%20pm-1500w.jpeg"
        rootClassName="gallery7root-class-name"
      ></Gallery7>
      <Features24
        heading={
          <Fragment>
            <span className="home-text127">⭐ Why Choose Us?</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text128">✔ Verified Listings</span>
          </Fragment>
        }
        rootClassName="features24root-class-name"
        feature1ImgSrc="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxkZWFsc3xlbnwwfHx8fDE3NDE0Mjk5MDF8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature1Title1={
          <Fragment>
            <span className="home-text129">
              <span>🤝 Hassle-Free Process</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Title2={
          <Fragment>
            <span className="home-text132">
              <span>💰 Best Price Guarantee</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Title3={
          <Fragment>
            <span className="home-text135">
              <span>✅ Customer-first approach</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Title4={
          <Fragment>
            <span className="home-text138">
              <span>🔍 No Hidden Charges</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text141">
              We ensure all properties are legally verified and accurately
              listed, giving you complete peace of mind.
            </span>
          </Fragment>
        }
        feature1Description1={
          <Fragment>
            <span className="home-text142">
              <span>
                From property selection to final paperwork, our experts guide
                you every step of the way for a seamless experience.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Description2={
          <Fragment>
            <span className="home-text145">
              <span>
                Get the best deals on properties with transparent pricing and no
                hidden markups.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Description3={
          <Fragment>
            <span className="home-text148">
              <span>
                Your needs are our priority. We offer personalized solutions,
                dedicated support, and expert guidance to ensure your real
                estate journey is smooth and successful.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Description4={
          <Fragment>
            <span className="home-text151">
              <span>
                We believe in complete transparency—no last-minute surprises or
                extra fees.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Features24>
      <Features23
        heading1={
          <Fragment>
            <span className="home-text154">
              <span>Our Services</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text157">
              <span>🔹Property Sales</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text160">
              <span>🔹Rental Services</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text163">
              <span>🔹Legal Assistance</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="features23root-class-name"
        feature1Description={
          <Fragment>
            <span className="home-text166">
              <span>
                Looking to buy or sell a property? We help you find the perfect
                home, commercial space, or investment property with expert
                guidance and market insights.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text169">
              <span>
                Find the best rental properties that match your needs. Whether
                you&apos;re a tenant looking for a home or a landlord seeking
                reliable tenants, we ensure smooth and hassle-free rental
                transactions.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text172">
              <span>
                Buying or selling a property involves legal formalities. Our
                team provides assistance with documentation, title verification,
                and legal compliance to ensure a smooth transaction.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Features23>
      <h1 className="home-text175">
        <span>Our Offerings</span>
        <br></br>
      </h1>
      <Features13
        feature1Title={
          <Fragment>
            <span className="home-text178">
              <span>Plots/ Land</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text181">Villas</span>
          </Fragment>
        }
        rootClassName="features13root-class-name"
        feature1Title1={
          <Fragment>
            <span className="home-text182">Farmhouse</span>
          </Fragment>
        }
        feature2Title1={
          <Fragment>
            <span className="home-text183">
              <span>Flats/ Apartments</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1ImageSrc="https://images.unsplash.com/photo-1561831710-3a8abd9657cf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg2fHxmYXJtaG91c2V8ZW58MHx8fHwxNzQxMzc2Nzk4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature2ImageSrc="/whatsapp%20image%202025-03-06%20at%207.09.48%20pm-1500w.jpeg"
        feature1ImageSrc1="/whatsapp%20image%202025-03-04%20at%203.38.44%20pm-1500w.jpeg"
        feature2ImageSrc1="https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFwYXJ0bWVudHN8ZW58MHx8fHwxNzQxMzc3Mzc1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text186">
              <span>
                Discover prime residential and investment plots in fast-growing
                real estate market. Whether you&apos;re looking to build your
                dream home or make a smart investment, we have the right options
                for you.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text189">
              <span>
                Discover prime residential and investment villas in fast-growing
                real estate market. Whether you&apos;re looking to build your
                dream home or make a smart investment, we have the right options
                for you.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Description1={
          <Fragment>
            <span className="home-text192">
              <span>
                Escape the city’s hustle with serene and spacious farmhouses in
                Greater Noida. Ideal for weekend getaways, nature lovers, and
                long-term investment, our farmhouses offer a blend of luxury and
                tranquility.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Description1={
          <Fragment>
            <span className="home-text195">
              <span>
                Looking for a home or a great real estate deal in NCR? We assist
                in buying, selling, and renting flats/ apartments with a
                hassle-free process, ensuring you get the best market price.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Features13>
      <Contact3
        phone1={
          <Fragment>
            <span className="home-text198">+91 9210481163</span>
          </Fragment>
        }
        phone11={
          <Fragment>
            <span className="home-text199">+91 9717003787</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="home-text200">
              <span>Indirapuram, Ghaziabad, Uttar Pradesh</span>
              <br></br>
              <span>India, 201014</span>
              <br></br>
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="home-text205">
              <span>srpropertiesofficial@bizznist.com</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">
              <span>Contact Us for More Info</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="contact3root-class-name"
      ></Contact3>
      <Testimonial12
        review1={
          <Fragment>
            <span className="home-text211">Prop Content</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text212">Prop Content</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text213">Prop Content</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text214">Prop Content</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text215">Prop Content</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text216">Prop Content</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text217">Prop Content</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text218">Prop Content</span>
          </Fragment>
        }
        rootClassName="testimonial12root-class-name"
        author1Position={
          <Fragment>
            <span className="home-text219">Prop Content</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text220">Prop Content</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text221">Prop Content</span>
          </Fragment>
        }
      ></Testimonial12>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text222">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text223">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text224">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text225">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text226">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name1"
      ></Footer4>
    </div>
  )
}

export default Home
