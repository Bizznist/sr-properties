import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats1-max-width thq-section-max-width">
        <div className="stats1-container2 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats1-text31">Customer Feedback</span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats1-text21">
                  Customer results presented in a fashion way
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats1-text28">
                  Business improvements emphasized with numbers to increase
                  creadibility
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats1-container3">
            <div className="stats1-container4">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats1-text27">80%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats1-text23">
                      consectetur adipiscing elit,
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container5">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats1-text25">90%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats1-text30">
                      consectetur adipiscing.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats1-container6">
            <div className="stats1-container7">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats1-text26">95%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats1-text24">
                      consectetur adipiscing elit,
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container8">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats1-text29">100%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats1-text22">
                      consectetur adipiscing.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="stats1-container9">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats1-image"
          />
        </div>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  heading1: undefined,
  stat4Description: undefined,
  stat1Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXRpc3RpY3N8ZW58MHx8fHwxNzE2NTM2NzE1fDA&ixlib=rb-4.0.3&w=1400',
  stat3Description: undefined,
  stat2: undefined,
  image1Alt: 'image',
  stat3: undefined,
  stat1: undefined,
  content2: undefined,
  stat4: undefined,
  stat2Description: undefined,
  content1: undefined,
}

Stats1.propTypes = {
  heading1: PropTypes.element,
  stat4Description: PropTypes.element,
  stat1Description: PropTypes.element,
  image1Src: PropTypes.string,
  stat3Description: PropTypes.element,
  stat2: PropTypes.element,
  image1Alt: PropTypes.string,
  stat3: PropTypes.element,
  stat1: PropTypes.element,
  content2: PropTypes.element,
  stat4: PropTypes.element,
  stat2Description: PropTypes.element,
  content1: PropTypes.element,
}

export default Stats1
