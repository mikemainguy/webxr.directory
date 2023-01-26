import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SearchForm from "@/pages/_searchform";
import Form from "@/pages/_form";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WebXR Directory</title>
        <meta name="description" content="webxr directory" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Web XR Directory</h1>
        <div>
          <SearchForm></SearchForm>
        </div>
          <Form>

          </Form>

      </main>
    </>
  )
}
