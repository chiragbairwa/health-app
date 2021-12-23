export default function Plans() {
  return (
    <div className="plans">
      <p className="heading" align="center">
        Plans
      </p>

      {/* Cards div */}
      <div>
        <div className="plan-card">
          <h2>Monthly</h2>
          <span>1500kcal</span>
          <p align="right">From $29/Month</p>
        </div>

        <div className="plan-card">
          <h2>Quarterly</h2>
          <span>1500kcal</span>
          <p align="right">From $29/Month</p>
        </div>

        <div className="plan-card">
          <h2>Half-Year</h2>
          <span>3500kcal</span>
          <p align="right">From $29/Month</p>
        </div>
      </div>

      <pre align="center">{`Need more information about your nutritional needs?
We offer above services`}</pre>
    </div>
  )
}
