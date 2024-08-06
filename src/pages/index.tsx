import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { useState } from 'react';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], // Required weights
  subsets: ['latin', 'latin-ext'], // Subsets
  style: ['normal', 'italic'], // Optional, specify if you want normal or italic styles
  display: 'swap', // Optional, specify how the font should be displayed
});
export default function Home() {
  return <h1 className='text-red-600'>home</h1>;
}
