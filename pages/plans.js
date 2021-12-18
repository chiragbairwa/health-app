export default function Plans() {
  return (
    <div className="plans">
      <p className="heading">Dietitian Plans</p>

      {/* Cards div */}
      <div>
        <div className="card plan-card">
          <h2>Basic</h2>
          <span>1500kcal</span>

          <p align="right">From $29/Month</p>
        </div>
        <div className="card plan-card">
          <h2>Intermediate</h2>
          <span>1500kcal</span>

          <p align="right">From $29/Month</p>
        </div>
        <div className="plan-card card ">
          <h2>Advanced</h2>
          <span>3500kcal</span>

          <p align="right">From $29/Month</p>
        </div>
      </div>
      <p align="center">Need more information about your nutritional needs?</p>
      <p align="center">We offer above services</p>
    </div>
  )
}
