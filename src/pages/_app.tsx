import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app'
import Link from 'next/link';
import Image from 'next/image'
import { Button } from 'reactstrap';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <div style={{textAlign: 'center'}}>
      <Link href="/">
        <Image
          style={{margin: '2rem'}}
          width="600" 
          height="200" 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" 
          alt="Rick and Morty Title" priority
          />
      </Link>
      <div>
      <Link href="/favorites">
        <Button color="warning" outline>Favoritos</Button>
      </Link>
      </div>
    </div>
    <Component {...pageProps} />
    </>
  )
}