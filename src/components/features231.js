import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features231.css'

const Features231 = (props) => {
  return (
    <div
      className={`features231-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features231-max-width thq-section-max-width">
        <div className="features231-container1">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="features231-text17">
                  <span>Our Services</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="thq-grid-3">
          <div className="features231-container3 thq-card">
            <h2 className="features231-text11 thq-heading-2">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features231-text29">
                    <span>🔹Property Sales</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features231-text12 thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features231-text35">
                    <span>
                      Looking to buy or sell a property? We help you find the
                      perfect home, commercial space, or investment property
                      with expert guidance and market insights.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features231-container4 thq-card">
            <h2 className="features231-text13 thq-heading-2">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features231-text23">
                    <span>🔹Rental Services</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features231-text14 thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features231-text32">
                    <span>
                      Find the best rental properties that match your needs.
                      Whether you&apos;re a tenant looking for a home or a
                      landlord seeking reliable tenants, we ensure smooth and
                      hassle-free rental transactions.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features231-container5 thq-card">
            <h2 className="features231-text15 thq-heading-2">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features231-text20">
                    <span>🔹Legal Assistance</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features231-text16 thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features231-text26">
                    <span>
                      Buying or selling a property involves legal formalities.
                      Our team provides assistance with documentation, title
                      verification, and legal compliance to ensure a smooth
                      transaction.
                    </span>
                    <br></br>
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

Features231.defaultProps = {
  heading1: undefined,
  feature3Title: undefined,
  feature2Title: undefined,
  feature3Description: undefined,
  feature1Title: undefined,
  rootClassName: '',
  feature2Description: undefined,
  feature1Description: undefined,
}

Features231.propTypes = {
  heading1: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
}

export default Features231
