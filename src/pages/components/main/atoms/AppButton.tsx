import React from 'react'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>&{
    title:String;
}

const AppButton = (props: Props) => {
  return (
<button className=' bg-primary h-9 text-white rounded-lg font-semibold px-2 '>{props.title}</button>  )
}
export default AppButton; 