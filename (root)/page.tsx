import Image from 'next/image';
import Heroes from './_components/heroes';
import Navbar from "@/app/(root)/_components/navbar";

export default function Home() {


  return (
    <main>
        <Navbar/>
      <Heroes />
    </main>
  )
}
