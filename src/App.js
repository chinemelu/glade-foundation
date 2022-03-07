import './App.css';

import Navbar from './components/navbar/navbar'
import FeatureNews from './components/featureNews/featureNews'
import YoutubeEmbed from './components/YoutubeEmbed/YoutubeEmbed'
import SummaryCard from './components/summaryCard/SummaryCard'
import Input from './components/input/Input'
import TextArea from './components/textarea/Textarea'
import AppButton from './components/button/button'

import { useEffect, useState } from 'react'

function App() {
  const [ isNavbarFixed, setIsNavbarFixed ] = useState(false);
  const scrollNavbar = () => {
    if (document.documentElement.scrollTop > 100) {
      setIsNavbarFixed(true)
    } else {
      setIsNavbarFixed(false)
    }
  }

  const handleDonation = (donationAmount) => {
    window.initPayment({
      MID:"GP0000001",
      email: "hello@example.com",
      firstname:"John",
      lastname:"Doe",
      description: "",
      title: "",
      amount: donationAmount,
      country: "NG",
      currency: "NGN",
      onclose: function() {
  
      },
      callback: function(response) {
  
      }
  });
}

  useEffect(() => {
    document.addEventListener('scroll', scrollNavbar);
    const cleanup = () =>  {
      document.removeEventListener('scroll', scrollNavbar);
    }
    return cleanup
  }, [])

  const summaryCardArray = [
    {
      figure: '20K+',
      description: 'Donors'
    },
    {
      figure: '$1M+',
      description: 'Donations'
    },
    {
      figure: '50K+',
      description: 'Recipients'
    },
  ]

  const embeddedUrlsAndTitles = [
    {
      title: 'How taxi operators can apply for COVID-19 relief fund',
      embedId: 'nIQXolbAW3g'
    },
    {
      title: 'COVID-19 relief grant applications open on Friday',
      embedId: 'Rug-J337RQY',
    },
    {
      title: 'The HU - Covid-19 Relief Effort Fundraising Concert',
      embedId: 'ik5qhnqIZy8',
    },
    {
      title: 'COVID-19 Relief Fund: A Message from President Courtney B. Vance',
      embedId: 'r8VFN_Hne-Y',
    },
    {
      title: 'VF COVID-19 Relief Efforts',
      embedId: 'h9v2fhtjPEM',
    },
  ]
  const youtubeVideoEmbedList =  embeddedUrlsAndTitles.map((urlAndTitleObject, index) => {
    return (
      <YoutubeEmbed 
        embedId={urlAndTitleObject.embedId}
        key={index}
        className="gus-gallery__all-videos__single-view"
        width="100%"
        videoTitle={urlAndTitleObject.title}
        height="250"
      />
    )
  })

  return (
    <div className="app">
      <Navbar className={isNavbarFixed ? 'fixed-navbar' : ''} getAmountDonated={handleDonation}/>
      <section className="app-landing-image-container">
        <img src="/busy-high-streets.jpg" alt="busy high street with people wearing masks" className="app-landing-image"/>

        <div className="app-landing-image-headings">
          <h1 className="app-landing-image-primary-heading">Glade Foundation</h1>
          <h3 className="app-landing-image-secondary-heading">Offering relief to those affected by the COVID-19 pandemic</h3>
        </div>

        <SummaryCard summaryCardArray={summaryCardArray}/>
      </section>

      <section className="app-about-us-section">
        <h1 className="app-heading">About Us</h1>
        <div className="app-about-us-text-section">
          <p className="app-about-us-text">
            The Lagos-based Glade Foundation (GF) is a global nonprofit organization providing cutting-edge medicine and advocacy to over 1,600,000 people in 45 countries. We are currently one of the largest providers of COVID relief in the world.
          </p>
          <p className="app-about-us-text">
            GF funds its mission to ease the suffering of COVID patients through donations and strategic partnerships with conglomerates and NGOs. Some of our partners include Exxon Mobil, Dangote, Guiness, Nigerian Breweries etc.
          </p>
          <p className="app-about-us-text">
            Since 2020, GF has cared for thousands of people suffering from the effects of the COVID-19 pandemic. As we create and intensify our fund raising efforts in Nigeria and across Africa, we will help rebuild the lives of people destroyed by the COVID pandemic.
          </p>
        </div>
      </section>

      <section className="app-feature-news-section">
        <h1 className="app-heading">Feature News</h1>
        <div className="app-feature-news-container">
          <FeatureNews 
            imageSrc="./covid-19-virus.jpg"
            imageAlt="Learn more about the Coronavirus"
            primaryHeading="What is COVID-19?"
            className="app-landing-page-news-feature"
            bodyText="Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention."
          />

          <FeatureNews 
            imageSrc="./smiling-and-cancer.jpg"
            imageAlt="Recipients of Glade Foundation Donations"
            primaryHeading="Meet the people it's all about"
            className="app-landing-page-news-feature"
            bodyText="Ayra Stark was 20 years old when she was struck by cancer and coronavirus. Find out how Glade Foundations's donations saved her life."
          />
        </div>
      </section>

      <section className="app-relief-fund-container">
        <img src="/covid-relief-fund.jpg" alt="COVID-19 Relief Fund Event" className="app-landing-image"/>

        <div className="app-relief-distribution-headings">
          <h1 className="app-relief-distribution-primary-heading">Distribution of Relief Items at Agege, Lagos, January 20, 2021</h1>
        </div>
        <div className="app-call-for-relief">
          <p className="app-call-for-relief-text">If you want to request for COVID-19 support, please click on the arrow below</p>
          <a href="#app-assistance-form-section"><img src="./arrow-down-s-line.png" alt="arrow pointing downwards" className="app-relief-form-arrow" /></a>
        </div>
      </section>

      {/* The Gallery Section */}

      <section className="app-gallery-section">
        <h1 className="app-heading">Gallery</h1>
        <div className="app-gallery-grid">
          <a href="https://reactjs.org" className="app-gallery-section-view-more-text">View more</a>
          <img src="./charity-event-1.jpg" alt="charity event 1" className="app-gallery-pic app-gallery-pic-1" />
          <img src="./charity-event-2.jpg" alt="charity event 2" className="app-gallery-pic app-gallery-pic-2" />
          <img src="./charity-event-3.jpg" alt="charity event 3" className="app-gallery-pic app-gallery-pic-3" />
          <img src="./charity-event-4.jpg" alt="charity event 4" className="app-gallery-pic app-gallery-pic-4" />
          <img src="./charity-event-5.jpg" alt="charity event 5" className="app-gallery-pic app-gallery-pic-5" />
          <img src="./charity-event-6.jpg" alt="charity event 6" className="app-gallery-pic app-gallery-pic-6" />
        </div>
      </section>

      {/* The videos section */}

      <section className="app-video-section">
        <h1 className="app-heading">Videos</h1>
        <div className="app-gallery-grid">
          <a href="https://reactjs.org" className="app-gallery-section-view-more-text">View more</a>
          <div className="app-video-section-all-videos">
          { youtubeVideoEmbedList }
          </div>
        </div>
      </section>

      {/* The section for seeking assistance */}

      <section className="app-assistance-form-section" id="app-assistance-form-section">
        <h1 className="app-heading">Assistance Form</h1>
        <form className="app-assistance-form">
          <div className="app-assistance-form-section-inputs-container">
            <Input 
              inputContainerClass="app-assistance-form-dual-input-container-class" 
              inputlabel="Full Name" name="fullname" 
              className="app-assistance-form-input app-assistance-form-input--full-name" 
              type="text"
            />
            <Input 
              inputlabel="Phone Number" 
              name="number" 
              className="app-assistance-form-input app-assistance-form-input--number" 
              type="number"
              inputContainerClass="app-assistance-form-dual-input-container-class"
            />
          </div>
          <div>
            <TextArea 
              className="app-assistance-form-text-area"
              inputContainerClass="app-assistance-form-text-area-container"
              inputlabel="Cover Letter" 
              name="number" 
            />
          </div>
          <AppButton className="app-assistance-form-btn" type="submit">
            <p>Submit</p>
          </AppButton>
        </form>
      </section>

      <footer className="app-footer">
        <div className="app-footer-inner-container">
          <div className="app-footer-copyright-container">
            <p className="app-footer-copyright-text">Glade Foundation &copy; 2020-2022. All Rights Reserved.</p>
          </div>

          <div className="app-footer__nav-container">
            <p className="app-footer__nav-heading">Links</p>
            <ul className="app-footer__nav">
              <li className="app-footer__nav-link"><a className="app-footer__nav-anchor" href="https://reactjs.org">GF Careers</a></li>
              <li className="app-footer__nav-link"><a className="app-footer__nav-anchor" href="https://reactjs.org">Contact Us</a></li>
              <li className="app-footer__nav-link"><a className="app-footer__nav-anchor" href="https://reactjs.org">Our Partners</a></li>
            </ul>
          </div>

          <div className="app-footer__contact-us-container">
            <div className="app-footer__contact-us-inner-container">
              <p className="app-footer__nav-heading">Contact Us</p>
              <p className="app-footer__nav">25 Rashidi Street, Off Adetola Street, Ademola Adetokunbo Street, Victoria Island, Lagos</p>

              <ul className="app-footer__nav-icons">
                <li className="app-footer__nav-icon"><img src="./instagram-line.png" alt="Instagram icon"/></li>
                <li className="app-footer__nav-icon"><img src="./facebook-fill.png" alt="Facebook icon"/></li>
                <li className="app-footer__nav-icon"><img src="./twitter-fill.png" alt="Twitter icon"/></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
