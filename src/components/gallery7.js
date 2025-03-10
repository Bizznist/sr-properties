import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery7.css'

const Gallery7 = (props) => {
  return (
    <div
      className={`gallery7-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery7-max-width">
        <div className="gallery7-section-title">
          <h2 className="gallery7-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery7-text2">Photo Gallery</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="gallery7-container1">
          <div className="gallery7-content">
            <div className="gallery7-container2">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery7-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery7-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery7-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery7-image3 thq-img-ratio-4-3"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery7-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery7-image5 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery7-container4">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery7-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery7-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery7.defaultProps = {
  image1Alt: 'PlaceholderImage1302',
  image2Alt: 'image6',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  rootClassName: '',
  image5Alt: 'image5',
  heading1: undefined,
  image6Alt: 'image',
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image2Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1500',
  image6Src:
    'https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1500',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image7Src:
    'https://images.unsplash.com/photo-1564089957880-517edea1afc5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1500',
  image3Alt: 'image',
  image7Alt: 'image',
  image5Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1500',
  image4Alt: 'image',
}

Gallery7.propTypes = {
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image5Alt: PropTypes.string,
  heading1: PropTypes.element,
  image6Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image6Src: PropTypes.string,
  image4Src: PropTypes.string,
  image7Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image4Alt: PropTypes.string,
}

export default Gallery7
