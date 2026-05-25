import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
interface blogCardProps {
  title: string
  img: string
  category: string
}

const BlogCard = ({ title, img, category }: blogCardProps) => {
  const navigate = useNavigate()
  const blogLink =
    '/blog/' +
    title
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .split(' ')
      .join('-')
      .toLocaleLowerCase()
  return (
    <motion.div
      className="flex flex-col gap-4 text-defaultWhite cursor-pointer font-switzer"
      whileHover="hover"
      initial="initial"
      onClick={() => navigate(blogLink)}
    >
      <motion.div className="w-full overflow-hidden rounded-2xl">
        <motion.img
          src={img}
          alt={`${title} Img`}
          className="w-full h-full object-cover"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <motion.span className="text-primaryDisabled text-sm">
        {category}
      </motion.span>

      <motion.span
        className="text-wrap text-2xl"
        variants={{
          hover: { color: '#1362F8' },
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.span>
    </motion.div>
  )
}

export default BlogCard
