import React, { useState, useEffect, useRef } from 'react'
import { Stack } from '@mui/material'


import { Autocomplete } from '@mui/material'
import { TextField, Typography } from '@mui/material'
import axios from 'axios'



const Convartation = ({ curency, isLoading }) => {
  const [leftInput, setLeftInput] = useState('UAH')
  const [rightInput, setRightInput] = useState('USD')
  const [leftInputAmount, setLeftInputAmount] = useState('')
  const [rightInputAmount, setRightInputAmount] = useState('')
  const leftInputRef = useRef(null)
  const rightInputRef = useRef(null)
  const leftInputAmountRef = useRef(null)
  const rightInputAmountRef = useRef(null)
  useEffect(() => {
    if (document.activeElement === rightInputAmountRef.current) {
      const options = {
        method: 'GET',
        url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
        params: { from: rightInput, to: leftInput, amount: rightInputAmount },
        headers: {
          'X-RapidAPI-Key': 'c4a934760cmsh3516acaf1496274p140622jsn21371e0ce3b1',
          'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        setLeftInputAmount(response.data.result);
      }).catch(function (error) {
        console.error(error);
      });
      if (rightInputAmount == '') {
        setLeftInputAmount('')
      }
    }
    if (document.activeElement === leftInputAmountRef.current) {
      const options = {
        method: 'GET',
        url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
        params: { from: leftInput, to: rightInput, amount: leftInputAmount },
        headers: {
          'X-RapidAPI-Key': 'c4a934760cmsh3516acaf1496274p140622jsn21371e0ce3b1',
          'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        setRightInputAmount(response.data.result);
        console.log(response.data.result)
      }).catch(function (error) {
        console.error(error);
      });
      if (leftInputAmount == '') {
        setRightInputAmount('')
      }
    }

  }, [rightInputAmount, leftInputAmount, rightInput, leftInput])



  return (
    <Stack maxWidth='1200px' width='80%' height='80%' backgroundColor='white' borderRadius='25px'
      alignItems='center' direction='column'>
      <Typography variant='h2' mt='20px'>Currency exchange</Typography>
      <Stack width='90%' height='40%' alignItems='center' justifyContent='space-around' direction='row'>
        <Stack direction='row'>
          <TextField
            inputRef={leftInputAmountRef}
            value={leftInputAmount}
            onChange={(e) => setLeftInputAmount(e.target.value)}
            label="From/To"
            variant="outlined"
            backgroundColor='white'
          />
          <Autocomplete
            ref={leftInputRef}
            sx={{ width: '100px' }}
            freeSolo
            defaultValue={leftInput}
            onChange={(e, value) => setLeftInput(value)}
            options={curency?.map((option) => option)}
            renderInput={(params) => <TextField {...params} variant='outlined' borderRadius='10px'
              label="Currency"
            />}
          />
        </Stack>
        <Stack direction='row'>
          <TextField
            inputRef={rightInputAmountRef}
            value={rightInputAmount}
            onChange={(e) => setRightInputAmount(e.target.value)}
            label="To/From"
            variant="outlined"
            backgroundColor='white'

          />
          <Autocomplete
            ref={rightInputRef}
            sx={{ width: '100px' }}
            freeSolo
            defaultValue={rightInput}
            onChange={(e, value) => setRightInput(value)}
            options={curency?.map((option) => option)}
            renderInput={(params) => <TextField {...params} variant='outlined' borderRadius='10px'
              label="Currency"

            />}
          />
        </Stack>
      </Stack>

    </Stack>
  )

}

export default Convartation