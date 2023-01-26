import Head from 'next/head'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Inter } from '@next/font/google'

import SearchForm from "@/pages/_searchform";
import Form from "@/pages/_form";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
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
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme/>
            <main>

                <h1 id="header">Web XR Directory</h1>

                <Form>

                </Form>
                <div>
                    <SearchForm></SearchForm>
                </div>


            </main>
        </ThemeProvider>

    </>
  )
}
