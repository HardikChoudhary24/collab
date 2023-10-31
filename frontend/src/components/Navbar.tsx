import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='w-screen h-24 bg-none absolute flex justify-between px-8 py-5'>
      <h1 className='text-[1.4rem] font-medium'>Collab</h1>
      <Button size='sm'>Logout</Button>
    </div>
  )
}

export default Navbar
