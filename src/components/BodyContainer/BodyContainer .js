import React from 'react'
import { Box, Stack } from '@mui/material'
import Convertation from '../Convertation/Convartation'
import Background from '../../assets/698603.jpg'


const BodyContainer = ({ curency }) => {
  return (
    <Stack height="100vh" overflow='hidden' justifyContent='center' alignItems='center'>
      <img src={Background} alt="" style={{
        filter: 'grayscale(50%) blur(5px) brightness(50%)',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '-1'
      }} />
      <Convertation curency={curency} />
    </Stack>
  )
}

export default BodyContainer 