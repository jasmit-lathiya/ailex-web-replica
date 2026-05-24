import founderImg from '../../assets/images/founderImg.jpeg'

const FounderMessage = () => {
  return (
    <div className="flex-flex-col items-center justify-center text-center max-w-xl gap-8">
      <div className="text-center text-xl p-4 text-defaulWhite">
        “AI unlocks efficiency—let automation do the work while you focus on
        what matters.”
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <img src={founderImg} alt="Founder" className="w-8 h-8 rounded-full " />
        <span className="text-md block text-primaryDisabled">
          Carlos Jonson, Founder & CEO
        </span>
      </div>
    </div>
  )
}

export default FounderMessage
