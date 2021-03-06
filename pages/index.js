import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// pages
import Welcome from './welcome'
import Services from './services'
import Plans from './plans'
import Clients from './clients'
import Contact from './contact'

export default function Main() {
  return (
    <>
      <Head>
        <title>Dietitian Arti | Finest Diets</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Welcome></Welcome>
      <Services></Services>

      <Plans></Plans>

      <Clients></Clients>

      <div className="fullpage ">
        <Contact></Contact>
      </div>
    </>
  )
}
