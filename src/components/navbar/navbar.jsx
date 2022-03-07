import React, { useState, useMemo, useEffect } from 'react'

import './navbar.css'

import AppButton from '../../components/button/button'
import Input from '../../components/input/Input';

import { formatNumber } from '../../helper/utility';


const Navbar = ({ className, getAmountDonated }) => {
  const [ donationAmount, setDonationAmount ] = useState(5000)

  const handleChange = e => {
    // if the money is formated, remove the formatting
    let formattedString = e.target.value
    formattedString = formattedString.replaceAll(',', '');
    setDonationAmount(formattedString)
  }

  const donatedAmountInNumber = useMemo(() => {
    return Number(donationAmount)
  }, [donationAmount])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    getAmountDonated(donatedAmountInNumber)
  }

  return (
    <form className={`${className} navbar`} onSubmit={handleOnSubmit}>
      <div className="navbar-content">
        <p className="navbar-nav">Home</p>
        <span className="navbar-glade-fdn-text">Glade Foundation</span>
        <div className="navbar-input-button-section">
          <div className="navbar-input-symbol-input-section">
            <span className="navbar-input-naira-symbol">₦</span>
            <Input inputlabel="Enter Amount" name="amount" className="navbar-input" type="text" handleChange={handleChange}  value={formatNumber(donationAmount)}/>
          </div>
          <AppButton className="navbar-btn" type="submit">
            <div className="donate-btn-content">
              <img src="/heart-fill.png" alt="heart icon" className="donate-btn-icon"/>
              <p className="donate-btn-text">Donate</p>
            </div>
          </AppButton>
        </div>
      </div>
    </form>
  )
}

export default Navbar