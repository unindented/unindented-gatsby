import Img from 'gatsby-image'
import styled from 'styled-components'

const RoundedBlock = styled.img`
  border-radius: 50%;
  display: block !important;
`

export { Img as Image }

export const RoundedImage = RoundedBlock.withComponent(Img)
