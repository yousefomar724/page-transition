import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='fixed w-full py-2 px-5 md:px-10 flex justify-between items-center'>
      {/* LOGO */}
      <Link to='/'>
        <h3 className='text-[1.5vw]'>A-LEF</h3>
      </Link>
      {/* NAV LINKS */}
      <div className='flex items-center gap-6'>
        <Link to='/' className='text-[1.5vw]'>
          HOME
        </Link>
        <Link to='/about' className='text-[1.5vw]'>
          ABOUT
        </Link>
        <Link to='/contact' className='text-[1.5vw]'>
          CONTACT
        </Link>
      </div>
      {/* LOGIN */}
      <button className=''>LOGIN</button>
    </header>
  )
}

export default Navbar
