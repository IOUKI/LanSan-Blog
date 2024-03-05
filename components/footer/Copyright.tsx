'use client'

import React from 'react'

const Copyright = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return <p className="text-sm text-gray-400">© {currentYear} LanSan</p>
}

export default Copyright