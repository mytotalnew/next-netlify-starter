import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi Mymediadreams" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
    <img src="https://www.mymediadreams.com/wp-content/uploads/2020/07/Slider_img.png" style="width:500px;height:600px;>
    
        </p>
      </main>

      <Footer />
    </div>
  )
}
