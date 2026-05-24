import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SecondaryButton } from '../../../../atoms/button'
import blogData from '../../../../constants/blogData'
import BlogCard from '../../../../organisms/blogCard'

const LatestInsightSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative h-full w-full grid grid-cols-1 md:grid-cols-3 overflow-hidden font-switzer font-medium text-primaryDisabled p-16 gap-4 max-w-7xl">
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="font-instrument text-6xl text-defaultWhite">
          Latest insights & AI trends
        </span>
        <SecondaryButton
          onClick={() => navigate('/blog')}
          className="py-4 px-8 w-fit"
        >
          Browse all blogs
        </SecondaryButton>
      </motion.div>
      {blogData.slice(0, 2).map((blog) => (
        <BlogCard
          key={blog.title}
          title={blog.title}
          category={blog.category}
          img={blog.img}
        />
      ))}
      {/* </div> */}
    </section>
  )
}

export default LatestInsightSection
