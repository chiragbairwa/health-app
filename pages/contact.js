export default function Contact() {
  const submithandler = async (event) => {
    event.preventDefault()
    alert(`So your name is ${event.target.name.value}?`)
  }
  return (
    <>
      <div className="contact">
        <div className="contact-card">
          <div className="contact-detail">
            <h2>Get Appointment</h2>
            <form onSubmit={submithandler}>
              <label>
                Name :
                <br />
                <input type="text" id="name" />
                <br />
              </label>

              <label>
                Email :
                <br />
                <input type="email" />
                <br />
              </label>

              <label>
                Mobile No. (Whatsapp):
                <br />
                <input type="number"></input>
                <br />
              </label>

              <label>
                Message (Optional) :
                <br />
                <input type="text"></input>
                <br />
              </label>

              <button type="submit" style={{ marginTop: 30 }}>
                Get Appointment
              </button>
            </form>
          </div>
          <div className="about-us">sknaln</div>
        </div>
      </div>

      <div className="contact-bg">
        <p>©️ 2021 ArtiDiets , All Rights Reserved.</p>
      </div>
    </>
  )
}
