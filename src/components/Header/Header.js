import { Stack, Typography } from '@mui/material'
import axios from 'axios'

import React, { useEffect, useState } from 'react'


const Header = ({ USD, EUR }) => {




  return (
    <Stack position='fixed' top='0' alignItems='center' justifyContent='center' sx={{
      backgroundColor: 'black',
      color: 'white',
      height: '40px',
      width: '100%',
      zIndex: '1000'
    }}>
      <Stack width='80vw' direction="row" alignItems="center" justifyContent='space-between' maxWidth='1200px'>
        <Typography>CurrencyExchange</Typography>
        <Stack> 🇺🇸{USD} 🇪🇺{EUR} to 🇺🇦</Stack>
      </Stack>
    </Stack>
  )
}

export default Header