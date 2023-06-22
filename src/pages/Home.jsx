import transition from '../transition'

const Home = () => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <h1 className='text-center text-[10vw] uppercase'>Home</h1>
    </div>
  )
}

export default transition(Home)
