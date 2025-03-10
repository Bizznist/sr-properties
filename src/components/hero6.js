import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero6.css'

const Hero6 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="hero6-max-width thq-section-max-width thq-flex-row">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero6-hero-image thq-img-ratio-4-3"
        />
        <div className="hero6-column">
          <div className="hero6-content">
            <h1 className="thq-heading-1 hero6-text1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero6-text2">
                    Catchy and engaging hero headline here
                  </span>
                </Fragment>
              )}
            </h1>
            <div className="hero6-actions"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero6.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5MjgyNjV8MA&ixlib=rb-4.0.3&w=1400',
  image1Alt: 'Hero Image',
  rootClassName: '',
  heading1: undefined,
}

Hero6.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero6
