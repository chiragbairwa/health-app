export default function Plans() {
  return (
    <div className="plans">
      <p className="heading" align="center">
        Plans
      </p>

      {/* Cards div */}
      <div>
        <div className="plan-card">
          <h2 align="top">Monthly</h2>
          <ul className="plan-perks">
            <li>Customised 4 Weeks Diet Plans.</li>
            <li>4 Checkout Calls.</li>
            <li>Indian Healthy Recipes.</li>
            <li>Whatsapp Support.</li>
            <li className="plan-perks-blank">Monthly Excercise Plan.</li>
            <li className="plan-perks-blank">Workout Guides & Many More.</li>
          </ul>
          <p>From $150/-</p>
        </div>

        <div className="plan-card">
          <h2 align="top">Quarterly</h2>
          <ul className="plan-perks">
            <li>Customised 3 Months Diet Plans.</li>
            <li>12 Checkout Calls.</li>
            <li>Indian Healthy Recipes.</li>
            <li>Whatsapp Support.</li>
            <li>Monthly Excercise Plan.</li>
            <li className="plan-perks-blank">Workout Guides & Many More.</li>
          </ul>
          <p>From $450/-</p>
        </div>

        <div className="plan-card">
          <h2 align="top">Half-Year</h2>
          <ul className="plan-perks">
            <li>Customised 6 Months Diet Plans.</li>
            <li>24 Checkout Calls.</li>
            <li>Indian Healthy Recipes.</li>
            <li>Unlimited Whatsapp Support.</li>
            <li>Monthly Excercise Plan.</li>
            <li>Workout Guides & Many More.</li>
          </ul>
          <p>From $850/-</p>
        </div>
      </div>

      <pre align="center">{`Need more information about your nutritional needs?
We offer above services`}</pre>
    </div>
  )
}
