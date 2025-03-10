import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div
      className={`features23-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container1">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="features23-text17">Discover</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container3 thq-card">
            <h2 className="features23-text11 thq-heading-2">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features23-text24">Feature 1</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text12 thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features23-text22">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <h2 className="features23-text13 thq-heading-2">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features23-text23">Feature 2</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text14 thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features23-text18">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <h2 className="features23-text15 thq-heading-2">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features23-text19">
                    <span>🔹Legal Assistance</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text16 thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features23-text25">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  feature2Description: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  feature2Title: undefined,
  feature1Title: undefined,
  feature3Description: undefined,
}

Features23.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
}

export default Features23
