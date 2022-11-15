import Header from './components/Header/Header'
import BodyContainer from './components/BodyContainer/BodyContainer '
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [USD, setUSD] = useState(null)
  const [EUR, setEUR] = useState(null)
  const [curency, setCurency] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    const options = {
      method: 'GET',
      url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
      params: { from: 'USD', to: 'UAH', amount: '1' },
      headers: {
        'X-RapidAPI-Key': 'c4a934760cmsh3516acaf1496274p140622jsn21371e0ce3b1',
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      }
    };

    axios.request(options).then((response) => {
      setUSD(response.data.result);
      console.log(response)
    }).catch(function (error) {
      console.error(error);
    });
    const optionsEUR = {
      method: 'GET',
      url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
      params: { from: 'EUR', to: 'UAH', amount: '1' },
      headers: {
        'X-RapidAPI-Key': 'c4a934760cmsh3516acaf1496274p140622jsn21371e0ce3b1',
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      }
    };

    axios.request(optionsEUR).then((response) => {
      setEUR(response.data.result);
      console.log(response)
    }).catch(function (error) {
      console.error(error);
    });

    const curencyOptions = {
      method: 'GET',
      url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
      params: { from: 'USD', to: 'EUR,GBP' },
      headers: {
        'X-RapidAPI-Key': 'c4a934760cmsh3516acaf1496274p140622jsn21371e0ce3b1',
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      }
    };

    axios.request(curencyOptions).then(function (response) {
      setCurency(Object.keys(response.data.rates))
      setIsLoading(false)
    }).catch(function (error) {
      console.error(error);
    });

  }, [])
  console.log(curency)
  return (
    <div className="App">
      <Header USD={USD} EUR={EUR} />
      <BodyContainer curency={curency} />
    </div>
  );
}

export default App;
