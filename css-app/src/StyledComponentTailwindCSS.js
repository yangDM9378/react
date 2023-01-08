import React from 'react'
import styled from 'styled-components';
import tw from "twin.macro"

export default function StyledComponentTailwindCSS() {
  return (
    <>
      <Test>하이</Test>
    </>
  )
}

const Test = styled.div `
  ${tw`
  text-center
  text-8xl
  bg-red-300
  text-white
  `}
`;