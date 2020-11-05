import React from 'react'
import styled from 'styled-components'

import images from 'assets/images'

const Img = styled.img`
width: 100px;
height: 100px;
`

const Image = ({ name, ...props }) =>
    <Img src={images[name]} alt="Lampada" {...props} />

export default Image