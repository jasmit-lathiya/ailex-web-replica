interface FeatureCardProps {
  title: string
  description: string
  imgSrc: string
}

const FeatureCard = ({ title, description, imgSrc }: FeatureCardProps) => {
  return (
    <div
      className={
        'flex flex-col gap-6 space-evenly bg-primaryBg p-8 rounded-lg border border-defaultGrey justify-center items-center'
      }
    >
      <div className=" w-[320px] h-[320px] flex justify-center items-center">
        <img
          src={imgSrc}
          alt={`${title} illustration`}
          className="w-[300px] h-[320px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center flex-1 max-w-md">
        <span className="text-3xl font-switzer font-medium">{title}</span>
        <p className="font-switzer font-medium text-lg text-primaryDisabled">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
