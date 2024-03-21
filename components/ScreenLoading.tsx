import React from 'react'

const ScreenLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-white dark:bg-gray-900">
      <div className="w-full h-full flex justify-center items-center">
        <span className="animate-spin inline-block size-12 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="Screenloading">
          <span className="sr-only">ScreenLoading...</span>
        </span>
      </div>
    </div>
  )
}

export default ScreenLoading