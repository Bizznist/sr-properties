import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <h1 className="features24-text10">
        {props.heading ?? (
          <Fragment>
            <span className="features24-text16">⭐ Why Choose Us?</span>
          </Fragment>
        )}
      </h1>
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text14">Feature #1</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 0 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title4 ?? (
                  <Fragment>
                    <span className="features24-text21">Feature #1</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description4 ?? (
                  <Fragment>
                    <span className="features24-text20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 0 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {props.feature1Title3 ?? (
                  <Fragment>
                    <span className="features24-text19">Feature #1</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description3 ?? (
                  <Fragment>
                    <span className="features24-text15">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal4"
          >
            <div className="features24-divider-container4">
              {activeTab === 0 && <div className="features24-container6"></div>}
            </div>
            <div className="features24-content4">
              <h2 className="thq-heading-2">
                {props.feature1Title2 ?? (
                  <Fragment>
                    <span className="features24-text11">Feature #1</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description2 ?? (
                  <Fragment>
                    <span className="features24-text17">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal5"
          >
            <div className="features24-divider-container5">
              {activeTab === 0 && <div className="features24-container7"></div>}
            </div>
            <div className="features24-content5">
              <h2 className="thq-heading-2">
                {props.feature1Title1 ?? (
                  <Fragment>
                    <span className="features24-text12">Feature #1</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description1 ?? (
                  <Fragment>
                    <span className="features24-text13">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="features24-content6"></div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal6"
          >
            <div className="features24-divider-container6">
              {activeTab === 1 && <div className="features24-container8"></div>}
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal7"
          >
            <div className="features24-divider-container7">
              {activeTab === 2 && <div className="features24-container9"></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature1ImgAlt: 'feature 1',
  feature1Title2: undefined,
  feature1Title1: undefined,
  feature1Description1: undefined,
  feature1Title: undefined,
  rootClassName: '',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1400',
  feature1Description3: undefined,
  heading: undefined,
  feature1Description2: undefined,
  feature3ImgAlt: 'image',
  feature1Description: undefined,
  feature1Title3: undefined,
  feature2ImgAlt: 'image',
  feature1Description4: undefined,
  feature1Title4: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1552250575-e508473b090f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1Mnx8YWJzdHJhY3R8ZW58MHx8fHwxNzE2MjAxNjAyfDA&ixlib=rb-4.0.3&w=1400',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1400',
}

Features24.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature1Title2: PropTypes.element,
  feature1Title1: PropTypes.element,
  feature1Description1: PropTypes.element,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Description3: PropTypes.element,
  heading: PropTypes.element,
  feature1Description2: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title3: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1Description4: PropTypes.element,
  feature1Title4: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features24
