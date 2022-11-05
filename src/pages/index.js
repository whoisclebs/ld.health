
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import About from './about'
import Contact from './contact'

export default function Home() {
  return (

    <section className="min-h-screen  bg-white dark:bg-gray-900">
      <Navbar />


      <img class="max-w-full h-auto" src="/assets/imgXray.jpg" />
      <About/>
      <Contact/>

      <Footer />
    </section>

  )
}
