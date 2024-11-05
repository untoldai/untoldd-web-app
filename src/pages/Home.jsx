import React, { useEffect } from 'react'
import CardSection from '../setion/CardSection'

import Header from '../setion/Header'
import { OuterLayout } from '../style/layout'
import ChartSection from '../setion/ChartSection'
import MessagingSection from '../setion/MessagingSection'
import FAQSection from '../setion/FAQSection'
import aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../comoponent/layout/Base/Footer'

const Home = () => {
  useEffect(()=>{
    aos.init({duration: 3000})
  },[])
  return (
    <div>
      <Header />
      <OuterLayout>
        <main>
        <CardSection />
        <ChartSection />
        <MessagingSection />
        <FAQSection />
        </main>
      </OuterLayout>
      <Footer />
    </div>
  )
}

export default Home