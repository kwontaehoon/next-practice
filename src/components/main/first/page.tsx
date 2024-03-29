import React from 'react'
import tw from 'twin.macro'

const page = () => {
  return (
    <div css={tw`border bg-amber-300 h-screen w-screen`}>
      <img src='/images/readme.png' css={tw`w-full h-full`} />
    </div>
  )
}

export default page