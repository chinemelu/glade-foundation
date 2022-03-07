import React from 'react'

import './featureNews.css'

const FeatureNews = ({ imageSrc, imageAlt, primaryHeading, bodyText, className }) => {
  return (
    <div className={`feature-news ${ className }`}>
      <div>
       <img src={imageSrc} alt={imageAlt} className="feature-news-img"/>
      </div>
      <p className="feature-news-primary-heading">{primaryHeading}</p>
      <p className="feature-news-body-text">{bodyText}</p>
      <a href="https://reactjs.org" className="feature-news-learn-more-text">Learn more</a>
    </div>
  )
}

export default FeatureNews;