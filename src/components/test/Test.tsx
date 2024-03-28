import React from 'react'
import tw from 'twin.macro'

const Test = () => {
  return (
    <div>
        <img src="/images/readme.png" />
        <div css={tw`text-amber-500`}>
            React에서는 최초 실행될 때 모든 html, css, js 파일을 읽는다.
        </div>
        <div css={tw`text-amber-600`}>
            하지만 Next에서는 최초 실행될 떄 위의 정적파일들을 읽지 않는다.(이미지 포함)
        </div>
        <div>
            SWR(Next 권장) vs React-query(기능 많음)
        </div>
    </div>
  )
}

export default Test