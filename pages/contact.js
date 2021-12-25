import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-card">
          <div className="contact-img"></div>

          <div className="contact-detail">
            <h2>Contact Us</h2>
            <p>{'Mobile:    9876543210'}</p>
            <p>{'Email :    abc@gmail.com'}</p>

            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div className="contact-bg">
        <p>©️ 2021 ABC Company, All Rights Reserved</p>
      </div>
    </>
  )
}
