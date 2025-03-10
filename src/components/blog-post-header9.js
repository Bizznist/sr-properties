import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header9.css'

const BlogPostHeader9 = (props) => {
  return (
    <div
      className={`blog-post-header9-blog-post-header3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="blog-post-header9-max-width thq-section-max-width">
        <div className="thq-flex-column thq-card blog-post-header9-content">
          <h1 className="thq-heading-1 blog-post-header9-text10">
            {props.blogPostTitle ?? (
              <Fragment>
                <span className="blog-post-header9-text20">About Us</span>
              </Fragment>
            )}
          </h1>
          <div className="thq-divider-horizontal"></div>
          <span className="blog-post-header9-text11 thq-body-small">
            {props.articleBody ?? (
              <Fragment>
                <span className="blog-post-header9-text21">
                  <span>
                    Welcome to SR Properties, your trusted real estate partner.
                    Whether you&apos;re looking to buy, sell, or rent a
                    property, we provide seamless solutions tailored to your
                    needs. Our expert team ensures a hassle-free experience,
                    guiding you every step of the way.
                  </span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="blog-post-header9-image"
          />
          <h2 className="thq-heading-1 blog-post-header9-text12">
            {props.blogPostTitle1 ?? (
              <Fragment>
                <span className="blog-post-header9-text17">
                  <span>Experience &amp; Expertise You Can Rely On</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </h2>
          <span className="blog-post-header9-text13 thq-body-small">
            {props.articleBody2 ?? (
              <Fragment>
                <span className="blog-post-header9-text45">
                  <span>
                    With years of experience in the real estate industry, SR
                    Properties has built a reputation for transparency,
                    professionalism, and customer satisfaction. Our team of
                    experts ensures that every transaction is seamless, offering
                    you the best deals in buying, selling, and renting
                    properties across prime locations.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-1 blog-post-header9-text14">
            {props.blogPostTitle11 ?? (
              <Fragment>
                <span className="blog-post-header9-text24">
                  <span>Our Focus Areas</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </h2>
          <span className="blog-post-header9-text15 thq-body-small">
            {props.articleBody21 ?? (
              <Fragment>
                <span className="blog-post-header9-text27">
                  <span>
                    We specialize in premium real estate offerings across:
                  </span>
                  <br></br>
                  <span>
                    ✅ Haryana – Exclusive plots and villas in prime locations
                  </span>
                  <br></br>
                  <span>
                    ✅ Greater Noida – Beautiful farmhouses for investment or
                    weekend getaways
                  </span>
                  <br></br>
                  <span>
                    ✅ NCR (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad) – Flats
                    for buy, sell, or rent
                  </span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <span className="blog-post-header9-text16 thq-body-small">
            {props.articleBody211 ?? (
              <Fragment>
                <span className="blog-post-header9-text36">
                  <span>
                    We specialize in premium real estate offerings across:
                  </span>
                  <br></br>
                  <span>
                    ✅ Haryana – Exclusive plots and villas in prime locations
                  </span>
                  <br></br>
                  <span>
                    ✅ Greater Noida – Beautiful farmhouses for investment or
                    weekend getaways
                  </span>
                  <br></br>
                  <span>
                    ✅ NCR (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad) – Flats
                    for buy, sell, or rent
                  </span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

BlogPostHeader9.defaultProps = {
  rootClassName: '',
  imageSrc3: '/whatsapp%20image%202025-03-06%20at%207.09.48%20pm-1400w.jpeg',
  blogPostTitle1: undefined,
  blogPostTitle: undefined,
  articleBody: undefined,
  blogPostTitle11: undefined,
  articleBody21: undefined,
  imageAlt3: 'image',
  articleBody211: undefined,
  articleBody2: undefined,
}

BlogPostHeader9.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc3: PropTypes.string,
  blogPostTitle1: PropTypes.element,
  blogPostTitle: PropTypes.element,
  articleBody: PropTypes.element,
  blogPostTitle11: PropTypes.element,
  articleBody21: PropTypes.element,
  imageAlt3: PropTypes.string,
  articleBody211: PropTypes.element,
  articleBody2: PropTypes.element,
}

export default BlogPostHeader9
