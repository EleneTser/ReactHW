type GameCardProps = {
  image: string
  title: string
  publisher: string
  date: string
  size?: 'lg' | 'sm'
}
 
export default function GameCard({ image, title, publisher, date, size = 'lg' }: GameCardProps) {
  return (
    <figure
      className={
        size === 'lg'
          ? 'flex flex-col overflow-hidden rounded-[16px] bg-black w-full h-auto lg:w-[860px] lg:h-[520px]'
          : 'flex flex-col overflow-hidden rounded-[16px] bg-black w-full h-auto lg:w-[260px] lg:h-[240px]'
      }
    >
      <img src={image} alt={title} className={size === 'lg' ? 'w-full aspect-[860/400] object-cover lg:w-[860px] lg:h-[400px]' : 'w-full aspect-[260/224] object-cover lg:w-[260px] lg:h-[224px]'}/>
      <figcaption className={size === 'lg' ? 'p-4 sm:p-6 shrink-0' : 'p-3 sm:p-4 shrink-0'}>
        <h3 className={size === 'lg' ? 'text-lg sm:text-2xl font-bold text-white' : 'text-xs sm:text-sm font-semibold text-white'}>{title}</h3>
        <p className={size === 'lg' ? 'mt-2 text-xs sm:text-sm text-gray-400' : 'mt-1 text-[10px] sm:text-xs text-gray-400'}>
          {publisher} <span className="mx-1">·</span> {date}
        </p>
      </figcaption>
    </figure>
  )
}
 