import Head from 'next/head'
import Footer from '../components/Footer'
import Login from '../components/Login'


export default function Home() {
  return (
    <div>
       <Head>
          <title>Instagram | Login Page</title>
      </Head>

      <main>
        <Login />
        <Footer />
      </main>
    </div>
      )
}
