import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

const Blog = () => {
  const blogDir = 'developBlogs'
  const files = fs.readdirSync(path.join(blogDir))
  const blogs = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
    const { data: frontMatter } = matter(fileContent)
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }
  })

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-7 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">開發筆記</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">此處專門分享個人在開發上遇到的問題或新奇事物</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {blogs.map(blog => (
          <Link href={'/developBlog/' + blog.slug} passHref key={blog.slug} className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">

            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={"/blogImages/" + blog.meta.image} alt="Image Description" />
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-gray-500 dark:text-gray-200 duration-150">
                {blog.meta.title}
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                {blog.meta.description}
              </p>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                {blog.meta.date}
              </p>

              <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 duration-150">
                Learn more
                <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </p>
            </div>
          </Link>
        ))}

        {/* <a className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
              Onsite
            </h3>
            <p className="mt-3 text-gray-800 dark:text-gray-200">
              Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </p>
          </div>
        </a> */}
      </div>
    </div>
  )
}

export default Blog