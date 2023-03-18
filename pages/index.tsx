import Head from 'next/head'
import { Button } from "@mui/material"
import Layout from "./../src/layout/index"
export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <Button>
            click
          </Button>
      </Layout>
    </>
  )
}
