import TourLeft from './TourLeft'
import TourRight from './TourRight'

const TourPlan = () => {
  return (
    <div className='flex justify-between gap-4 w-full px-8 mt-20 mx-auto'>
      <TourLeft />
      <TourRight /> 
    </div>
  )
}

export default TourPlan
