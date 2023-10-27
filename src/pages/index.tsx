import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Typography } from '@mui/material';
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Miguel Guthridge</title>
        <meta name="description" content="Miguel Guthridge's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography variant='h1'>Hello world!</Typography>
        <Typography variant='h2'>I&apos;m Miguel</Typography>
        <Typography>
          This is my portfolio, I showcase my best projects.
        </Typography>
        <Typography>
          It&apos;s pretty bare-bones for now, but I&apos;ll be fleshing it out
          over time!
        </Typography>
        <ul>
          <li><Link href='/projects'>View my projects</Link></li>
          <li><a
            href="https://miguelguthridge.com"
            target='_blank'
          >My main website</a></li>
        </ul>
      </main>
    </>
  );
}
