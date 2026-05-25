import { motion } from 'framer-motion'
import blogData from '../../constants/blogData'
import AnimatedText from '../../molecules/animatedText'
import BlogCard from '../../organisms/blogCard'
import heroSectionBg from '../../assets/images/heroSectionBg.jpeg'
import { SecondaryButton } from '../../atoms/button'
import { useMemo, useState } from 'react'

const BlogPage = () => {
  const [showBlogCount, setShowBlogCount] = useState(6)

  const visibleBlogData = useMemo(() => {
    return blogData.slice(0, showBlogCount)
  }, [showBlogCount])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16 p-8">
      <div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-30"
          style={{
            backgroundImage: `url(${heroSectionBg})`,
          }}
        />
        <AnimatedText
          sentence="Blog"
          className="font-instrument text-4xl md:text-6xl md:mt-48"
        />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-defaultBlack to-transparent z-[-1]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl gap-8">
        {visibleBlogData.map((blog, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index > 5 ? (index - 5) * 0.3 : index * 0.3,
            }}
          >
            <BlogCard
              title={blog.title}
              img={blog.img}
              category={blog.category}
            />
          </motion.div>
        ))}
      </div>

      {blogData.length > showBlogCount && (
        <SecondaryButton
          className="py-3 px-6"
          onClick={() => setShowBlogCount(blogData.length)}
        >
          Load more
        </SecondaryButton>
      )}
    </div>
  )
}

export default BlogPage
