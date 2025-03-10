import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features3.css'

const Features3 = (props) => {
  return (
    <div className="features3-layout253 thq-section-padding">
      <div className="features3-max-width thq-section-max-width thq-flex-row">
        <div className="features3-section-title thq-flex-column">
          <div className="features3-content1 thq-flex-column">
            <h2 className="thq-heading-2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features3-text12">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features3-text20">
                    <span>📢 Your Dream Property, Our Commitment!</span>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="thq-flex-row features3-actions"></div>
        </div>
        <div className="features3-content2 thq-flex-column">
          <div className="thq-flex-row features3-list1">
            <div className="features3-list-item1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features3-content3 thq-flex-column">
                <h3 className="features3-title11 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features3-text13">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features3-description11 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features3-text14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features3-content4 thq-flex-column">
                <h3 className="features3-title12 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features3-text24">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features3-description12 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features3-text19">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features3-list2 thq-flex-row">
            <div className="thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features3-content5 thq-flex-column">
                <h3 className="features3-title13 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features3-text17">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features3-description13 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features3-text16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-column">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="thq-img-round thq-img-ratio-1-1"
              />
              <div className="features3-content6 thq-flex-column">
                <h3 className="features3-title14 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features3-text15">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features3-description14 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features3-text18">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features3.defaultProps = {
  feature1ImageAlt: 'image',
  sectionTitle: undefined,
  feature1Title: undefined,
  feature2ImageAlt: 'image',
  feature4ImageAlt: 'image',
  feature1Description: undefined,
  feature4Title: undefined,
  feature3ImageAlt: 'image',
  feature3Description: undefined,
  feature3Title: undefined,
  feature4Description: undefined,
  feature2Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1599134842279-fe807d23316e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  sectionDescription: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature2Title: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1518930107639-f4538ad82a00?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
}

Features3.propTypes = {
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature4Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature4Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
}

export default Features3
