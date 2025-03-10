import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact2.css'

const Contact2 = (props) => {
  return (
    <div
      className={`contact2-contact20 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact2-max-width thq-section-max-width">
        <div className="contact2-section-title">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact2-text18">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact2-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact2-text17">Contact us</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="thq-img-ratio-16-9"
        />
        <div className="contact2-row">
          <div className="contact2-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact2-contact-info1">
              <div className="contact2-content3">
                <h3 className="contact2-text12 thq-heading-3">Email</h3>
              </div>
              <span className="contact2-email thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact2-text16">hello@teleporthq.io</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact2-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact2-contact-info2">
              <div className="contact2-content5">
                <h3 className="contact2-text13 thq-heading-3">Phone</h3>
              </div>
              <span className="contact2-phone1 thq-body-small">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact2-text15">+1 (555) 000-0000</span>
                  </Fragment>
                )}
              </span>
              <span className="contact2-phone2 thq-body-small">
                {props.phone11 ?? (
                  <Fragment>
                    <span className="contact2-text20">+1 (555) 000-0000</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact2-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact2-contact-info3">
              <div className="contact2-content7">
                <h3 className="contact2-text14 thq-heading-3">Office</h3>
              </div>
              <span className="contact2-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact2-text19">
                      456 Test Ave, Bucharest
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact2.defaultProps = {
  phone1: undefined,
  email1: undefined,
  heading1: undefined,
  content2: undefined,
  address1: undefined,
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1721116858340-d955652c2fc8?ixid=M3w5MTMyMXwwfDF8YWxsfDIzfHx8fHx8Mnx8MTcyMTE0NDMwMHw&ixlib=rb-4.0.3&w=1400',
  phone11: undefined,
  rootClassName: '',
}

Contact2.propTypes = {
  phone1: PropTypes.element,
  email1: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  address1: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  phone11: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Contact2
