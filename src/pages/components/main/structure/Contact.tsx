import { Container ,Heading,FormControl,FormLabel,Input} from '@chakra-ui/react'
import {useState} from 'react'
import AppConatiner from './AppConatiner'

function Contact() {
 // const [value, setValue] = useState<type>(initialState);
 /* const handleInputChange=({target})=>{
    setState((prev)=>({})

  }*/
  return (
    <>
    <Container className='max-w-[450px]'>
<Heading className='text-center'>Contact</Heading>
<FormControl isRequired>
  <FormLabel>Name</FormLabel>
  <Input />
</FormControl>
<FormControl isRequired >
  <FormLabel>Email</FormLabel>
  <Input/>
</FormControl>
<FormControl isRequired>
  <FormLabel>Email</FormLabel>
  <Input/>
</FormControl>
    </Container>
    </>
  )
}

export default Contact