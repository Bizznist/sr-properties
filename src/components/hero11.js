import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero11.css'

const Hero11 = (props) => {
  return (
    <div className={`hero11-header77 ${props.rootClassName} `}>
      <div className="hero11-max-width thq-section-max-width">
        <div className="hero11-column thq-section-padding">
          <div className="hero11-content1">
            <h1 className="thq-heading-1 hero11-text1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero11-text4">Prop Content</span>
                </Fragment>
              )}
            </h1>
            <p className="thq-body-large hero11-text2">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero11-text3">Prop Content</span>
                </Fragment>
              )}
            </p>
            <div className="hero11-actions"></div>
          </div>
        </div>
        <div className="hero11-content2">
          <div className="hero11-row1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero11-placeholder-image1 thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero11-placeholder-image2 thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero11-placeholder-image3 thq-img-ratio-1-1"
            />
          </div>
          <div className="hero11-row2">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero11-placeholder-image4 thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero11-placeholder-image5 thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero11-placeholder-image6 thq-img-ratio-1-1"
            />
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero11-placeholder-image7 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero11.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image1Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image4Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  content1: undefined,
  image6Src:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image3Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  heading1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image5Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image6Alt: 'Hero Image',
  rootClassName: '',
}

Hero11.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Src: PropTypes.string,
  content1: PropTypes.element,
  image6Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image5Src: PropTypes.string,
  heading1: PropTypes.element,
  image3Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image6Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero11
