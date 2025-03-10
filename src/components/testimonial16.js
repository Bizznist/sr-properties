import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial16.css'

const Testimonial16 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial16-max-width thq-section-max-width">
        <div className="testimonial16-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial16-text26">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial16-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial16-text35">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="testimonial16-container12 thq-card">
            <div className="testimonial16-container13">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial16-image1"
              />
              <div className="testimonial16-container14">
                <strong className="thq-body-large">
                  {props.author1Name ?? (
                    <Fragment>
                      <span className="testimonial16-text37">Author Name</span>
                    </Fragment>
                  )}
                </strong>
                <span className="thq-body-small">
                  {props.author1Position ?? (
                    <Fragment>
                      <span className="testimonial16-text25">
                        Position, Company name
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <span className="testimonial16-text14 thq-body-small">
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial16-text30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="testimonial16-container15 thq-card">
            <div className="testimonial16-container16">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial16-image2"
              />
              <div className="testimonial16-container17">
                <strong className="thq-body-large">
                  {props.author2Name ?? (
                    <Fragment>
                      <span className="testimonial16-text24">Author Name</span>
                    </Fragment>
                  )}
                </strong>
                <span className="thq-body-small">
                  {props.author2Position ?? (
                    <Fragment>
                      <span className="testimonial16-text29">
                        Position, Company name
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <span className="testimonial16-text17 thq-body-small">
              {props.review2 ?? (
                <Fragment>
                  <span className="testimonial16-text27">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="testimonial16-container18 thq-card">
            <div className="testimonial16-container19">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial16-image3"
              />
              <div className="testimonial16-container20">
                <strong className="thq-body-large">
                  {props.author3Name ?? (
                    <Fragment>
                      <span className="testimonial16-text32">Author Name</span>
                    </Fragment>
                  )}
                </strong>
                <span className="thq-body-small">
                  {props.author3Position ?? (
                    <Fragment>
                      <span className="testimonial16-text31">
                        Position, Company name
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <span className="testimonial16-text20 thq-body-small">
              {props.review3 ?? (
                <Fragment>
                  <span className="testimonial16-text33">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="testimonial16-container21 thq-card">
            <div className="testimonial16-container22">
              <img
                alt={props.author4Alt}
                src={props.author4Src}
                className="testimonial16-image4"
              />
              <div className="testimonial16-container23">
                <strong className="thq-body-large">
                  {props.author4Name ?? (
                    <Fragment>
                      <span className="testimonial16-text34">Author Name</span>
                    </Fragment>
                  )}
                </strong>
                <span className="thq-body-small">
                  {props.author4Position ?? (
                    <Fragment>
                      <span className="testimonial16-text36">
                        Position, Company name
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <span className="testimonial16-text23 thq-body-small">
              {props.review4 ?? (
                <Fragment>
                  <span className="testimonial16-text28">
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

Testimonial16.defaultProps = {
  author4Alt: 'image',
  author1Src:
    'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxhdmF0YXJ8ZW58MHx8fHwxNzE2NTM3MjQ5fDA&ixlib=rb-4.0.3&w=200',
  author2Name: undefined,
  author1Position: undefined,
  author2Alt: 'image',
  author3Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTY1MzcyNDl8MA&ixlib=rb-4.0.3&w=200',
  heading1: undefined,
  review2: undefined,
  review4: undefined,
  author3Alt: 'image',
  author1Alt: 'image',
  author2Src:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGF2YXRhcnxlbnwwfHx8fDE3MTY1MzcyNDl8MA&ixlib=rb-4.0.3&w=200',
  author2Position: undefined,
  review1: undefined,
  author3Position: undefined,
  author3Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxhdmF0YXJ8ZW58MHx8fHwxNzE2NTM3MjY0fDA&ixlib=rb-4.0.3&w=200',
  review3: undefined,
  author4Name: undefined,
  content1: undefined,
  author4Position: undefined,
  author1Name: undefined,
}

Testimonial16.propTypes = {
  author4Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author2Name: PropTypes.element,
  author1Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Src: PropTypes.string,
  heading1: PropTypes.element,
  review2: PropTypes.element,
  review4: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author2Position: PropTypes.element,
  review1: PropTypes.element,
  author3Position: PropTypes.element,
  author3Name: PropTypes.element,
  author4Src: PropTypes.string,
  review3: PropTypes.element,
  author4Name: PropTypes.element,
  content1: PropTypes.element,
  author4Position: PropTypes.element,
  author1Name: PropTypes.element,
}

export default Testimonial16
