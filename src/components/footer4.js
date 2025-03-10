import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer4-image"
            />
          </div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link1 thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text19">About Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link2 thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text16">Contact Us</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="footer4-divider thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="footer4-text10 thq-body-small">
                <span>© 2025 BizzNist, All Rights Reserved</span>
                <br></br>
              </span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text13 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text17">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="footer4-text14 thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text18">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <span className="footer4-text15 thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text20">Cookies Settings</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link2: undefined,
  privacyLink: undefined,
  termsLink: undefined,
  link1: undefined,
  rootClassName: '',
  cookiesLink: undefined,
  imageSrc: '/sr%20properties-1500h.png',
  imageAlt: 'image',
}

Footer4.propTypes = {
  link2: PropTypes.element,
  privacyLink: PropTypes.element,
  termsLink: PropTypes.element,
  link1: PropTypes.element,
  rootClassName: PropTypes.string,
  cookiesLink: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Footer4
