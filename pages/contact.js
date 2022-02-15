export default function Contact() {
  const submitContact = async (event) => {
    event.preventDefault()
    alert(`So your name is ${event.target.name.value}?`)
  }
  return (
    <>
      <div className="contact">
        <div className="contact-card">
          <div className="contact-detail">
            <h2>Contact Us</h2>

            <p>Mobile: +91-9517969885</p>
            <p>Email : artidiets@gmail.com</p>

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
