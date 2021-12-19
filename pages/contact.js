import img from '../public/bg.jpg'

export default function Contact() {
  return (
    <div className="contact">
      <div className="demo-div"></div>

      <div className="contact-details">
        <p className="heading">Contact details</p>
        {/*         
        <p>Mobile Number</p>
        <p>Mail Address</p> */}
        <table>
          <tr key="Email">Email</tr>
          <td>ABC@gmail.com</td>

          <tr key="Mob">Mobile</tr>
          <td>814232323</td>

          <tr key="Mail">Mail</tr>
          <td>dqmwd coanojdeno</td>
        </table>
      </div>
    </div>
  )
}
