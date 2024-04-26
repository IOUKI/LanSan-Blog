import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home Page"
}

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="w-full bg-slate-500">
        <p>hello</p>
      </section>
      <section className="h-[2000px] w-full bg-red-400">
        <p>test</p>
      </section>
    </div>
  )
}

export default Home