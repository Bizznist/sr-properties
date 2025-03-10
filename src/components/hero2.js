import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className="hero2-header5 thq-section-padding">
      <div className="hero2-container1">
        <div className="hero2-max-width thq-section-max-width">
          <div className="hero2-column">
            <div className="hero2-content">
              <h1 className="thq-heading-1 hero2-text1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero2-text5">
                      Discover the Power of Our Products
                    </span>
                  </Fragment>
                )}
              </h1>
              <p className="thq-body-large hero2-text2">
                {props.content1 ?? (
                  <Fragment>
                    <span className="hero2-text8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="hero2-actions">
                <div className="hero2-container2">
                  <button className="hero2-button1 thq-button-filled">
                    <span className="thq-body-small">
                      {props.action1 ?? (
                        <Fragment>
                          <span className="hero2-text7">Main action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="hero2-container3">
                  <button className="thq-button-outline hero2-button2">
                    <span className="thq-body-small">
                      {props.action2 ?? (
                        <Fragment>
                          <span className="hero2-text6">Secondary action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  heading1: undefined,
  action2: undefined,
  action1: undefined,
  content1: undefined,
}

Hero2.propTypes = {
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default Hero2
