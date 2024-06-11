'use client'

import React from 'react'
import { LayoutGrid } from '@/components/aceternity-ui/layout-grid'
import { TextGenerateEffect } from '@/components/aceternity-ui/text-generate-effect'

const selfIntro = "大家好， 我是Lan(也可以叫水藍)， 一位全端工程師， 對軟體技術充滿無限熱情。 從前端到後端， 我都樂於挑戰新技術， 追求技術的精進與創新。 在閒暇時， 我熱愛玩劍玉， 這不僅是我休閒放鬆的方式， 也讓我學會了專注和耐心。 透過這個部落格， 我期待與大家分享我的專業知識、 學習心得， 以及生活中的小趣事。 希望您喜歡我的分享， 一起探索科技與生活的美好！"

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
        </div>
      </section>
      <section className="px-10">
        <TextGenerateEffect words={selfIntro} className="mt-10" />
      </section>
      <LayoutGridDemo />
    </div>
  )
}

export default Home

function LayoutGridDemo() {
  return (
    <div className="h-screen py-10 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">嚴島神社-海上鳥居</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        位於日本廣島縣宮島的著名嚴島神社的海上鳥居。鳥居是一座巨大的朱紅色的傳統日式門樓，坐落在水中，背景是落日的餘暉與遠處的山脈。這個地點是日本最著名的景點之一，吸引著無數的遊客和攝影愛好者，特別是在日落時分，其景色尤為迷人。鳥居的設計與自然景觀的完美融合，為訪客提供了一個難忘的視覺體驗。
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Kendama World Cup 2023</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        每年一度的劍玉世界盃是全球劍玉愛好者的盛事，吸引著來自世界各地的選手和觀眾。這個比賽是一個展示技巧、創意和競爭力的平台，也是一個交流和學習的機會。參賽者通過各種技巧和動作來展示他們的劍玉技能，並與其他選手進行比賽。比賽的氣氛緊張刺激，觀眾們也為選手們的表現加油打氣。劍玉世界盃不僅是一個比賽，更是一個聚會和慶祝劍玉文化的盛事。
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">台灣-東海岸夜景</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        滿月掛在夜空中，光線在波光粼粼的海面上反射，形成一道明亮的路徑。天空中散布著幾朵雲彩，為夜空增添了層次感。
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">台灣-東海岸</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        人生的旅程，無論面對多大的挑戰與未知，都需要學會面對自己，靜心聆聽內心的聲音，並勇敢地走向未來。在這片寧靜而廣闊的自然景觀中，每個人都能找到屬於自己的一片天地，學會在生活的波濤中保持平衡。
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/homeImages/Itsuku-shima.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/homeImages/kwc2023.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/homeImages/taiwan-east-coast-night.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/homeImages/taiwan-east-coast.jpg",
  },
];