import React from 'react'

const Layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-900 duration-300">
      <div className="max-w-[85rem] w-full mx-auto mt-[5rem] px-4 md:px-6 lg:px-8" aria-label="Global">
        <div className="relative md:flex md:items-center md:justify-between">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Layout