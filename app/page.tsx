import React from 'react'
import { Metadata } from 'next'
import ContentCreating from '@/components/contentCreating'

export const metadata: Metadata = {
  title: "Home Page"
}

const Home = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <section className="w-full flex justify-center">
        <div className="lg:flex lg:items-center">
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden">
              <img className="w-[110%] h-[110%] hover:w-[130%] hover:h-[130%] object-cover duration-500" src="/homeImages/mugShot.jpg" alt="mug shot" />
            </div>
          </div>
          <div className="w-full mt-3 lg:mt-0 lg:ml-10 text-xl">
            大家好，我是Lan (也可以叫水藍)，一位全端工程師，對電腦科學充滿無限熱情。<br className="hidden lg:block" />
            從前端到後端，我都樂於挑戰新技術，追求技術的精進與創新。<br className="hidden lg:block" />
            在閒暇時，我熱愛玩劍玉，這不僅是我休閒放鬆的方式，也讓我學會了專注和耐心。<br className="hidden lg:block" />
            透過這個部落格，我期待與大家分享我的專業知識、學習心得，以及生活中的小趣事。<br className="hidden lg:block" />
            希望您喜歡我的分享，一起探索科技與生活的美好！
          </div>
        </div>
      </section>
      <ContentCreating />
    </div>
  )
}

export default Home