import Image from 'next/image'

export default function Clients() {
  return (
    <div className="clients">
      <p className="heading">Success Stories</p>
      <div className="clients-row">
        <div className="clients-card">
          <img src={'/diet-counselling.jpg'} alt="Clients" />
          <h3>Elixa Hunter</h3>
          <span>Lawyer</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque fringilla justo diam.
          </p>
        </div>

        <div className="clients-card">
          <img src={'/diet-counselling.jpg'} alt="Clients" />
          <h3>Carlo Souza</h3>
          <span>Personal Trainer</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque fringilla justo diam.
          </p>
        </div>

        <div className="clients-card">
          <img src={'/diet-counselling.jpg'} alt="Clients" />
          <h3>Mariah Turner</h3>
          <span>Pro Athlete</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque fringilla justo diam.
          </p>
        </div>
      </div>
    </div>
  )
}
