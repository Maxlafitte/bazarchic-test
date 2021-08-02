import styled from "styled-components"
import { device } from './devices'

// global styles than can be applied in multiple components
export const Container = styled.div`
  display: block;
  margin: 5% 20%;
  box-shadow: 5px 6px 18px 0px rgba(0,0,0,0.22);
  @media ${device.laptop}  { 
    margin: 0;
  }
`
export const Paragraph = styled.div`
	margin: 3px 0px;
  text-transform: capitalize
`
export const Loading = styled.div`
  text-align: center;
`

export const Separation = styled.hr`
    width: 100%;
`