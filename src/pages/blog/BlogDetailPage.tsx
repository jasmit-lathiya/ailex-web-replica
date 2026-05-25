import { useParams } from 'react-router-dom'

// Components
import AnimatedText from '../../molecules/animatedText'
import Page404 from '../page404'

// Images
import pageBg from '../../assets/images/galaxyBg.jpeg'

// Constants
import blogData from '../../constants/blogData'

const BlogDetailPage = () => {
  const { id } = useParams()
  const currentBlogData = blogData.find(
    (item) =>
      id ===
      item.title
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .split(' ')
        .join('-')
        .toLocaleLowerCase(),
  )
  console.log(currentBlogData)

  if (!currentBlogData) {
    return <Page404 />
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16 p-8">
      <div className="flex flex-col items-center justify-center gap-8 max-w-7xl">
        <div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-30"
            style={{
              backgroundImage: `url(${pageBg})`,
            }}
          />
          <AnimatedText
            sentence={currentBlogData.title}
            className="font-instrument text-4xl md:text-6xl md:mt-48 max-w-2xl text-center"
          />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-defaultBlack to-transparent z-[-1]" />
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <div className="w-fit flex items-center bg-gradient-to-b from-defaultBlue to-darkerBlue border-transparent rounded-lg px-4 py-2 font-medium text-sm">
            Business Automation
          </div>
          <div className="text-primaryDisabled">Mar 1, 2025</div>
        </div>

        <img
          src={currentBlogData.img}
          alt={currentBlogData.title}
          className="rounded-2xl"
        />

        <div className="text-primaryDisabled text-2xl py-8">
          Blog details can be seen here in future
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl gap-8">
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
      )} */}
      </div>
    </div>
  )
}

export default BlogDetailPage
