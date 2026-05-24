interface AiShowcaseNameCardProps {
  name: string
  featureIcon: string
  isActive?: boolean
  onClick?: () => void
}

const AiShowcaseNameCard = ({
  name,
  featureIcon,
  isActive,
  onClick = () => {},
}: AiShowcaseNameCardProps) => {
  return (
    <div
      className={
        'w-fit lg:w-auto flex flex-row gap-4 items-center p-4 pr-8 cursor-pointer rounded-lg border ' +
        (isActive
          ? ' border-defaultGrey text-defaultWhite bg-primaryBg'
          : ' border-transparent text-primaryDisabled')
      }
      onClick={onClick}
    >
      <img
        src={featureIcon}
        alt={`${name} icon`}
        loading="lazy"
        className="w-6 h-6 flex-shrink-0 object-contain"
      />

      <span className="font-bold text-base md:text-xl font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default AiShowcaseNameCard
