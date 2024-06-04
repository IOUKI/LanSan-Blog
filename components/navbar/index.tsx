'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import links from '@/module/links'

const Navbar = () => {
  const path = usePathname()

  const [oldScrollTop, setOldScrollTop] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollDown, setScrollDown] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [onTop, setOnTop] = useState(true)

  // 滾動監聽
  const handleScroll = () => {
    const scrollTop = window.scrollY
    setScrollTop(scrollTop)
    setOnTop(scrollTop <= 0)
  }

  // 視窗寬度變化監聽
  const windowResizeHandle = () => {
    const windowWidth = window.innerWidth
    setWindowWidth(windowWidth)
  }

  // 滑鼠移動監聽
  const mousemoveTopHandle = (event: any) => {
    // 取得滑鼠相對於視窗頂部的垂直位置
    const mouseY = event.clientY;
    
    // 如果滑鼠位置靠近視窗頂部（例如小於100px），則觸發相應的函數
    if (mouseY < 100) {
      setScrollDown(false); // 顯示隱藏的navbar
    }
  }

  useEffect(() => {
    // 滾動監聽
    window.addEventListener('scroll', handleScroll)

    // 初始化視窗寬度
    setTimeout(() => {
      windowResizeHandle()
    }, 100);

    // 視窗寬度變化監聽
    window.addEventListener('resize', windowResizeHandle)

    // 監聽滑鼠移動事件
    window.addEventListener('mousemove', mousemoveTopHandle)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', windowResizeHandle)
    }

  }, [])

  useEffect(() => {
    setScrollDown(scrollTop > oldScrollTop)
    setOldScrollTop(scrollTop)
  }, [scrollTop])

  useEffect(() => {
    setOnTop(true)
  }, [path])

  // 手機版面點選連結關閉navbar
  const closeNavbar = () => {
    const windowWidth = window.innerWidth
    if (windowWidth < 768) {
      const navbarToggle = document.getElementById('navbar_toggle')
      navbarToggle?.click()
    }
  }

  return (
    <header className={`${scrollDown && windowWidth > 768 ? 'top-[0px]' : 'top-0'} ${onTop ? 'bg-none' : 'bg-white dark:bg-gray-800'} fixed flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0 duration-300 shadow`}>
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Lan">LanSan</a>
            <div className="md:hidden">
              <button 
                type="button" 
                id="navbar_toggle" 
                className="hs-collapse-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
                data-hs-collapse="#navbar-collapse-with-animation" 
                aria-controls="navbar-collapse-with-animation" 
                aria-label="Toggle navigation"
                onClick={() => setOnTop(false)} // 手機版面打開navbar時，改變背景色
              >
                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>

          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
            <div className="overflow-hidden overflow-y-auto h-screen md:h-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">

                {links.map((item, index) => (
                  <div key={index} className="py-3 md:py-4">
                    <Link
                      href={item.path}
                      className="relative font-semibold text-lg text-black dark:text-white hover:text-blue-600 after:absolute after:bg-blue-600 dark:after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                      scroll={false}
                      onClick={closeNavbar}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}

                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar