import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import blogPath from '@/module/blogPath'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

export async function generateStaticParams() {

  const files = fs.readdirSync(path.join(blogPath.develop))

  const paths = files.map(filename => ({
    slug: filename.replace('.mdx', '')
  }))

  return paths
}

function getPost({ slug }: { slug: string }) {

  const markdownFile = fs.readFileSync(path.join(blogPath.develop, slug + '.mdx'), 'utf-8')

  const { data: fontMatter, content } = matter(markdownFile)

  return {
    fontMatter,
    slug,
    content
  }

}

export default function Page({ params }: any) {
  const props = getPost(params)

  return (
    <div className="min-h-screen">
      <div className="flex justify-center mb-4">
        <h1 className="text-4xl font-bold">{props.fontMatter.title}</h1>
      </div>
      <div className="rounded-xl overflow-hidden mb-4">
        <Image className="w-full h-[30rem] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={"/blogImages/" + props.fontMatter.image} alt="Image Description" />
      </div>
      <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert prose-headings:text-black prose-p:text-black prose-a:text-black prose-blockquote:text-black prose-ul:text-black prose-li:text-black prose-pre:bg-gray-950 dark:prose-headings:text-white dark:prose-p:text-white dark:prose-a:text-white dark:prose-blockquote:text-white dark:prose-ul:text-white dark:prose-li:text-white'>
        <MDXRemote source={props.content} ></MDXRemote>
      </article>
    </div>
  )
}