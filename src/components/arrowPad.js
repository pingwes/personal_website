
const ArrowPad = ({down, up}) => {

  
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-0 w-24 ">
      <div className="w-8 h-8"></div>
      <button className="w-8 h-8 bg-neutral-900 border-neutral-900"></button>
      <div className="w-8 h-8"></div>
      <button className="w-8 h-8 bg-neutral-900 border-neutral-900"
        onClick={up}></button>
      <div className="w-8 h-8 bg-neutral-900 border-neutral-900"></div>
      <button className="w-8 h-8 bg-neutral-900 border-neutral-900"
        onClick={down}></button>
      <div className="w-8 h-8"></div>
      <button className="w-8 h-8 bg-neutral-900 border-neutral-900"></button>
      <div className="w-8 h-8"></div>
    </div>
  )
}

export default ArrowPad