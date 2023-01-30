import { Container } from '@chakra-ui/react'
import {FC, ReactElement} from 'react'

import React from 'react'
interface Layoutprop{
    children:ReactElement;
}
const  AppConatiner:FC<Layoutprop>=({children}) =>{
  return (
<Container className='text-center font-2xl '>
    {children}
</Container>  )
}

export default AppConatiner