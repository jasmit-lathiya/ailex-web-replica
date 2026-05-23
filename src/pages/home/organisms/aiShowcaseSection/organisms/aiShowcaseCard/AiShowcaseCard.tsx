interface AiShowCaseCardProps {
  index: number
  title: string
  description: string
  imgSrc: string
}

const AiShowcaseCard = ({
  index,
  title,
  description,
  imgSrc,
}: AiShowCaseCardProps) => {
  return (
    <div
      className={
        'flex gap-6 space-evenly bg-primaryBg p-8 rounded-lg border border-defaultGrey justify-center items-center ' +
        (index % 2 === 0
          ? 'flex-col md:flex-row'
          : 'flex-col-reverse md:flex-row-reverse')
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

export default AiShowcaseCard
