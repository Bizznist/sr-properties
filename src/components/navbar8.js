import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar8.css'

const Navbar8 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <Link to="/" className="navbar8-navlink">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar8-image1"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <Link to="/" className="navbar8-link11 thq-link thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar8-text22">Home</span>
                </Fragment>
              )}
            </Link>
            <a href={props.link2Url} className="thq-link thq-body-small">
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar8-text21">About Us</span>
                </Fragment>
              )}
            </a>
            <a
              href={props.link3Url}
              target="_blank"
              rel="noreferrer noopener"
              className="navbar8-link31 thq-link thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar8-text15">Contact Us</span>
                </Fragment>
              )}
            </a>
          </nav>
          <div className="navbar8-buttons1">
            <button className="navbar8-action21 thq-button-animated thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="navbar8-text12">Subscribe on YouTube</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <a
                href={props.link1Url}
                className="navbar8-link12 thq-link thq-body-small"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar8-text22">Home</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text21">About Us</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url}
                className="navbar8-link32 thq-link thq-body-small"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar8-text15">Contact Us</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url1}
                className="navbar8-link33 thq-link thq-body-small"
              >
                {props.link31 ?? (
                  <Fragment>
                    <span className="navbar8-text24">
                      <span>Privacy Policy</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url11}
                className="navbar8-link34 thq-link thq-body-small"
              >
                {props.link311 ?? (
                  <Fragment>
                    <span className="navbar8-text27">
                      <span>Terms of Service</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url111}
                className="navbar8-link35 thq-link thq-body-small"
              >
                {props.link3111 ?? (
                  <Fragment>
                    <span className="navbar8-text30">
                      <span>Cookies Settings</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </a>
              <div className="navbar8-link4-accordion">
                {link5AccordionOpen && (
                  <div className="navbar8-container2">
                    <a href={props.linkUrlPage1}>
                      <div className="navbar8-menu-item1">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="navbar8-page1-image1"
                        />
                        <div className="navbar8-content1">
                          <span className="navbar8-page11 thq-body-large">
                            {props.page1 ?? (
                              <Fragment>
                                <span className="navbar8-text18">Page One</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page1Description ?? (
                              <Fragment>
                                <span className="navbar8-text17">
                                  Page One Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage2}>
                      <div className="navbar8-menu-item2">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="navbar8-page2-image1"
                        />
                        <div className="navbar8-content2">
                          <span className="navbar8-page21 thq-body-large">
                            {props.page2 ?? (
                              <Fragment>
                                <span className="navbar8-text13">Page Two</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page2Description ?? (
                              <Fragment>
                                <span className="navbar8-text20">
                                  Page Two Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage3}>
                      <div className="navbar8-menu-item3">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="navbar8-page3-image1"
                        />
                        <div className="navbar8-content3">
                          <span className="navbar8-page31 thq-body-large">
                            {props.page3 ?? (
                              <Fragment>
                                <span className="navbar8-text16">
                                  Page Three
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page3Description ?? (
                              <Fragment>
                                <span className="navbar8-text14">
                                  Page Three Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage4}>
                      <div className="navbar8-menu-item4">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="navbar8-page4-image1"
                        />
                        <div className="navbar8-content4">
                          <span className="navbar8-page41 thq-body-large">
                            {props.page4 ?? (
                              <Fragment>
                                <span className="navbar8-text23">
                                  Page Four
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page4Description ?? (
                              <Fragment>
                                <span className="navbar8-text19">
                                  Page Four Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </nav>
            <div className="navbar8-buttons2">
              <button className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="navbar8-text12">
                        Subscribe on YouTube
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        {link5DropdownVisible && (
          <div className="navbar8-container3 thq-box-shadow">
            <div className="navbar8-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="navbar8-menu-item5">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="navbar8-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content5">
                    <span className="navbar8-page12 thq-body-large">
                      {props.page1 ?? (
                        <Fragment>
                          <span className="navbar8-text18">Page One</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page1Description ?? (
                        <Fragment>
                          <span className="navbar8-text17">
                            Page One Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="navbar8-menu-item6">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="navbar8-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content6">
                    <span className="navbar8-page22 thq-body-large">
                      {props.page2 ?? (
                        <Fragment>
                          <span className="navbar8-text13">Page Two</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page2Description ?? (
                        <Fragment>
                          <span className="navbar8-text20">
                            Page Two Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="navbar8-menu-item7">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="navbar8-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content7">
                    <span className="navbar8-page32 thq-body-large">
                      {props.page3 ?? (
                        <Fragment>
                          <span className="navbar8-text16">Page Three</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page3Description ?? (
                        <Fragment>
                          <span className="navbar8-text14">
                            Page Three Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage4}>
                <div className="navbar8-menu-item8">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="navbar8-page4-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content8">
                    <span className="navbar8-page42 thq-body-large">
                      {props.page4 ?? (
                        <Fragment>
                          <span className="navbar8-text23">Page Four</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page4Description ?? (
                        <Fragment>
                          <span className="navbar8-text19">
                            Page Four Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar8-container4"
        ></div>
      )}
    </header>
  )
}

Navbar8.defaultProps = {
  page3ImageAlt: 'image',
  linkUrlPage4: 'https://www.teleporthq.io',
  link3Url: 'https://www.teleporthq.io',
  action2: undefined,
  link2Url: 'https://www.teleporthq.io',
  linkUrlPage2: 'https://www.teleporthq.io',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1605745141160-8892dc674e94?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  logoSrc: '/sr%20properties-1500h.png',
  page4ImageAlt: 'image',
  page2: undefined,
  page3Description: undefined,
  link1Url: 'https://www.teleporthq.io',
  linkUrlPage1: 'https://www.teleporthq.io',
  link3: undefined,
  page3: undefined,
  page1ImageAlt: 'image',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  page1Description: undefined,
  page1: undefined,
  page4Description: undefined,
  linkUrlPage3: 'https://www.teleporthq.io',
  page2Description: undefined,
  logoAlt: 'logo',
  link2: undefined,
  link1: undefined,
  page3ImageSrc:
    'https://images.unsplash.com/photo-1524448789231-1bb0771e7d45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  page4: undefined,
  page1ImageSrc:
    'https://images.unsplash.com/photo-1514285490982-4130e9aefedb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  page2ImageAlt: 'image',
  link3Url1: 'https://www.teleporthq.io',
  link31: undefined,
  link3Url11: 'https://www.teleporthq.io',
  link311: undefined,
  link3Url111: 'https://www.teleporthq.io',
  link3111: undefined,
}

Navbar8.propTypes = {
  page3ImageAlt: PropTypes.string,
  linkUrlPage4: PropTypes.string,
  link3Url: PropTypes.string,
  action2: PropTypes.element,
  link2Url: PropTypes.string,
  linkUrlPage2: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  logoSrc: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  page2: PropTypes.element,
  page3Description: PropTypes.element,
  link1Url: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  link3: PropTypes.element,
  page3: PropTypes.element,
  page1ImageAlt: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page1Description: PropTypes.element,
  page1: PropTypes.element,
  page4Description: PropTypes.element,
  linkUrlPage3: PropTypes.string,
  page2Description: PropTypes.element,
  logoAlt: PropTypes.string,
  link2: PropTypes.element,
  link1: PropTypes.element,
  page3ImageSrc: PropTypes.string,
  page4: PropTypes.element,
  page1ImageSrc: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  link3Url1: PropTypes.string,
  link31: PropTypes.element,
  link3Url11: PropTypes.string,
  link311: PropTypes.element,
  link3Url111: PropTypes.string,
  link3111: PropTypes.element,
}

export default Navbar8
