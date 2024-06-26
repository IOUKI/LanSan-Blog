'use client'

import React from 'react'

const Layout: any = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <section className="w-full mb-4">
      <div className="w-full flex justify-start">
        <button
          className="inline-flex items-center gap-x-1 py-4 text-xl text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
          onClick={() => window.history.back()}
        >
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          返回上一頁
        </button>
      </div>
      {children}
    </section>
  )
}

export default Layout