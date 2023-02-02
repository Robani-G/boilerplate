import Link from 'next/link';
import React, { FC, useState } from 'react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/solid'

type navprop={
    title:string;
    Path:string;
    

}
const navlink:((navprop)&{id:number}) []=[
    {id:1, title:"Home",Path:"./#"},
    {id:2, title:"Docs",Path:"./#"},
    {id:3, title:"Service",Path:"./#"},
    {id:4, title:"About Us",Path:"./components/main/structure/Contact"},

   
]
const Navlinks:FC<navprop>=({title,Path})=>{
    return(
        <Link className='text-gray-700 font-sans  border-b-2 git remote add origin https://github.com/Robani-G/ContactBoilerplate.git
 hover:text-black' href={`${Path}`}>{title}</Link>
    )

}

function Header() {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='flex  justify-between items-center py-4 px-2 '>
        <h1 className='font-bold'>[Logo]</h1>
        <ul className='hidden sm:flex space-x-4  font-semibold'>
            {navlink.map((nav)=>(
                <Navlinks
                key={nav.id}
                title={nav.title}
                Path={nav.Path}
                />
            ))}
            <Link href="./Contact" className='border-2 border-primary  px-4 py-1 rounded-lg'>Contact</Link>
        </ul>
        <div className='sm:hidden  '>
           {toggle?<button onClick={()=>setToggle((prev)=>!prev)} className="border borrder-2"><XMarkIcon className="h-7 w-7" /> </button>:<button onClick={()=>setToggle((prev)=>!prev)}><Bars3Icon className='w-7 h-7'/></button>}
           <div className={`${toggle?'flex':'hidden'}
     p-6 bg-white
      absolute top-20 right-0 mx-4 my-2  min-w-[140px] border border-1 rounded-xl  `}
>
<ul className={`list-none flex flex-col font-sans  justify-end items-center p-3 font-semibold `}>
{navlink.map((nav)=>(
           <Navlinks
        key={nav.id}
           Path={nav.Path}
           title={nav.title}
           />
        ))}
        <Link href="./components/main/structure/Contact" className=' px-4 py-2  border-2 border-primary rounded-lg mt-2'>Contact</Link>

</ul>
    </div>
    
        </div>

    </div>
  )
}

export default Header