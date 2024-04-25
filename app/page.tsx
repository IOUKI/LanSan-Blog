import React from 'react'
import { Metadata } from 'next'
import ScreenLoading from '@/components/ScreenLoading'

export const metadata: Metadata = {
  title: "Home Page"
}

const Home = () => {
  return (
    <>
      <div>Home page</div>
    </>
  )
}

export default Home