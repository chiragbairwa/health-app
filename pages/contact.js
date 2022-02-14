import Image from 'next/image'

export default function Contact() {
  const submitContact = async (event) => {
    event.preventDefault()
    alert(`So your name is ${event.target.name.value}?`)
  }
  return (
    <>
      <div className="contact">
        <div className="contact-card">
          <img src="/contact-us.webp" className="contact-img"></img>

          <div className="contact-detail">
            <form className="contact-form" onSubmit={submitContact}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required
              />
              <button type="submit">Submit</button>
            </form>

            <h2>Contact Us</h2>
            <p>Mobile:&nbsp;&nbsp;&nbsp;+91-9517969885</p>
            <p>Email&nbsp; :&nbsp; &nbsp; &nbsp;artidiets@gmail.com</p>

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
