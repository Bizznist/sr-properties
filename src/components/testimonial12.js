import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial12.css'

const Testimonial12 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="testimonial12-max-width thq-section-max-width">
        <div className="testimonial12-section-title">
          <h2 className="testimonial12-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial12-text26">Prop Content</span>
              </Fragment>
            )}
          </h2>
          <p className="testimonial12-subtitle thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial12-text20">Prop Content</span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="testimonial12-container thq-flex-row">
          <div className="testimonial12-content1 thq-flex-column">
            <div className="testimonial12-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="thq-body-large testimonial12-text10">
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial12-text21">Prop Content</span>
                </Fragment>
              )}
            </p>
            <div className="testimonial12-avatar1">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial12-avatar-image1 thq-img-round thq-img-ratio-1-1"
              />
              <div className="testimonial12-avatar-content1">
                <span className="testimonial12-text11 thq-body-small">
                  {props.author1Name ?? (
                    <Fragment>
                      <span className="testimonial12-text29">Prop Content</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author1Position ?? (
                    <Fragment>
                      <span className="testimonial12-text19">Prop Content</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company1LogoAlt}
                src={props.company1LogoSrc}
                className="testimonial12-logo1"
              />
            </div>
          </div>
          <div className="testimonial12-content2 thq-flex-column">
            <div className="testimonial12-stars2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="thq-body-large testimonial12-text13">
              {props.review2 ?? (
                <Fragment>
                  <span className="testimonial12-text24">Prop Content</span>
                </Fragment>
              )}
            </p>
            <div className="testimonial12-avatar2">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial12-avatar-image2 thq-img-round thq-img-ratio-1-1"
              />
              <div className="testimonial12-avatar-content2">
                <span className="testimonial12-text14 thq-body-small">
                  {props.author2Name ?? (
                    <Fragment>
                      <span className="testimonial12-text28">Prop Content</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author2Position ?? (
                    <Fragment>
                      <span className="testimonial12-text25">Prop Content</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company2LogoAlt}
                src={props.company2LogoSrc}
                className="testimonial12-logo2"
              />
            </div>
          </div>
          <div className="testimonial12-content3 thq-flex-column">
            <div className="testimonial12-stars3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="thq-body-large testimonial12-text16">
              {props.review3 ?? (
                <Fragment>
                  <span className="testimonial12-text27">Prop Content</span>
                </Fragment>
              )}
            </p>
            <div className="testimonial12-avatar3">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial12-avatar-image3 thq-img-round thq-img-ratio-1-1"
              />
              <div className="testimonial12-avatar-content3">
                <span className="testimonial12-text17 thq-body-small">
                  {props.author3Name ?? (
                    <Fragment>
                      <span className="testimonial12-text23">Prop Content</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author3Position ?? (
                    <Fragment>
                      <span className="testimonial12-text22">Prop Content</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company3LogoAlt}
                src={props.company3LogoSrc}
                className="testimonial12-logo3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial12.defaultProps = {
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Position: undefined,
  content1: undefined,
  company1LogoAlt: 'Company Logo',
  company3LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  review1: undefined,
  author3Position: undefined,
  author3Alt: 'image',
  author3Name: undefined,
  company3LogoAlt: 'Company Logo',
  review2: undefined,
  author2Position: undefined,
  rootClassName: '',
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  author1Alt: 'image',
  heading1: undefined,
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company2LogoAlt: 'Company Logo',
  review3: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author2Name: undefined,
  author1Name: undefined,
  author2Alt: 'image',
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
}

Testimonial12.propTypes = {
  company1LogoSrc: PropTypes.string,
  author1Position: PropTypes.element,
  content1: PropTypes.element,
  company1LogoAlt: PropTypes.string,
  company3LogoSrc: PropTypes.string,
  review1: PropTypes.element,
  author3Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author3Name: PropTypes.element,
  company3LogoAlt: PropTypes.string,
  review2: PropTypes.element,
  author2Position: PropTypes.element,
  rootClassName: PropTypes.string,
  author1Src: PropTypes.string,
  author1Alt: PropTypes.string,
  heading1: PropTypes.element,
  company2LogoSrc: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  review3: PropTypes.element,
  author3Src: PropTypes.string,
  author2Name: PropTypes.element,
  author1Name: PropTypes.element,
  author2Alt: PropTypes.string,
  author2Src: PropTypes.string,
}

export default Testimonial12
