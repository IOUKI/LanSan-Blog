'use client'

import React from 'react'
import { Metadata } from 'next'
import ContentCreating from '@/components/contentCreating'
import { LayoutGrid } from '@/components/aceternity-ui/layout-grid'
import { TextGenerateEffect } from '@/components/aceternity-ui/text-generate-effect'

const selfIntro = "大家好， 我是Lan(也可以叫水藍)， 一位全端工程師， 對電腦科學充滿無限熱情。 從前端到後端， 我都樂於挑戰新技術， 追求技術的精進與創新。 在閒暇時， 我熱愛玩劍玉， 這不僅是我休閒放鬆的方式， 也讓我學會了專注和耐心。 透過這個部落格， 我期待與大家分享我的專業知識、 學習心得， 以及生活中的小趣事。 希望您喜歡我的分享， 一起探索科技與生活的美好！"

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
      <ContentCreating />
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
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/homeImages/Itsuku-shima.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/homeImages/kwc2023.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/homeImages/jp-taxi.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/homeImages/drunk_water.jpg",
  },
];