import React from 'react'

import './SummaryCard.scss'

const SummaryCard = ({ summaryCardArray }) => {
  const displayCardArray = summaryCardArray.map((summary, index) => {
    return (
      <div className="summary-card__stats" key={index}>
        <p className="summary-card__figure">{summary.figure}</p>
        <p className="summary-card__description">{summary.description}</p>
      </div>
    )
  })
  return (
    <div className="summary-card">
      { displayCardArray }
    </div>
  )
}

export default SummaryCard;