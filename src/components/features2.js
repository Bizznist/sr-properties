import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  return (
    <div
      className={`features2-layout302 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features2-max-width thq-section-max-width">
        <div className="features2-section-title thq-flex-column">
          <h2 className="features2-text10 thq-heading-2">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features2-text15">
                  Discover the Key Features
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features2-text17">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Suspendisse varius enim in
                  eros elementum tristique. Duis cursus, mi quis viverra ornare,
                  eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="features2-content1">
          <div className="thq-grid-5">
            <div className="features2-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features2-image1 thq-team-image-round"
              />
              <div className="features2-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features2-text16">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features2-text12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features2-image2 thq-team-image-round"
              />
              <div className="features2-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features2-text19">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features2-text14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features2-image3 thq-team-image-round"
              />
              <div className="features2-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features2-text22">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features2-text13">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature4 thq-flex-column">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="thq-team-image-round"
              />
              <div className="features2-content5 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features2-text23">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features2-text18">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature5 thq-flex-column">
              <img
                alt={props.feature5ImageAlt}
                src={props.feature5ImageSrc}
                className="thq-team-image-round"
              />
              <div className="features2-content6 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature5Title ?? (
                    <Fragment>
                      <span className="features2-text20">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature5Description ?? (
                    <Fragment>
                      <span className="features2-text21">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features2-actions"></div>
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature3ImageAlt: 'image',
  feature1ImageAlt: 'image',
  feature1Description: undefined,
  feature3Description: undefined,
  feature3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Description: undefined,
  sectionTitle: undefined,
  feature2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature5ImageAlt: 'image',
  feature4ImageAlt: 'image',
  feature1Title: undefined,
  feature4ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  sectionDescription: undefined,
  rootClassName: '',
  feature4Description: undefined,
  feature2Title: undefined,
  feature5Title: undefined,
  feature5ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature5Description: undefined,
  feature3Title: undefined,
  feature2ImageAlt: 'image',
  feature4Title: undefined,
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Features2.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  rootClassName: PropTypes.string,
  feature4Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature5Title: PropTypes.element,
  feature5ImageSrc: PropTypes.string,
  feature5Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature4Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
}

export default Features2
