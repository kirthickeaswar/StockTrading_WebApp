import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import {BiSearch} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'

const Home = () => { 

  const [trendingStocks, setTrendingStocks] = useState([]);
  const [allStocks, setAllStocks] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  useEffect(()=>{
    fetchTrending();
    fetchAllStocks();
  }, [])


  // Trending (top 25) stocks
  const fetchTrending = async () =>{
    
    const optionsTrending = {
        method: 'GET',
        url: 'https://mboum-finance.p.rapidapi.com/v1/markets/options/most-active',
        params: {type: 'STOCKS'},
        headers: {
          'X-RapidAPI-Key': '9604ff284bmsh827f0b7588f623ep1d7c4cjsnb18f8e2728a9',
          'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
        }
      };
  try {
    const response = await axios.request(optionsTrending);
    console.log(response.data.body);
    setTrendingStocks(response.data.body);
  } catch (error) {
    console.error(error);
  }
}

// All the available stocks
const fetchAllStocks = async () =>{  
  const optionsAll = {
    method: 'GET',
    url: 'https://twelve-data1.p.rapidapi.com/stocks',
    params: {
      exchange: 'NASDAQ',
      format: 'json'
    },
    headers: {
      'X-RapidAPI-Key': '9604ff284bmsh827f0b7588f623ep1d7c4cjsnb18f8e2728a9',
      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(optionsAll);
    setAllStocks(response.data.data);
  } catch (error) {
    console.error(error);
  }
}



return (
    <>
    <div className="homePage">

      <div className="trending-stocks-container">
          <h2>Top Stocks</h2>

          <div className="trending-stocks">

          {trendingStocks.length === 0 && <div className="loading-spinner"> </div>}


          {trendingStocks.map((stock)=>{
            return(

                <div className="trending-stock" key={stock.symbol} onClick={()=> navigate(`/stock/${stock.symbol}`)}>
                  <span>
                    <h5>Name</h5>
                    <p>{stock.symbolName}</p>
                  </span>
                  <span>
                    <h5>NASDAQ</h5>
                    <p>{stock.symbol}</p>
                  </span>
                  <span>
                    <h5>ChangeInPrice</h5>
                    <p style={parseFloat(stock.percentChange) > 0 ? {color: "green"} : {color: "red"}} >$ ({stock.percentChange})</p>
                  </span>
                  <span>
                    <h5>Price</h5>
                    <p style={stock.priceChange > 0 ? {color: "green"} : {color: "red"}} >$ ({stock.lastPrice})</p>
                  </span>

                </div>

            )
          })}

          </div>
      </div>

      <div className="all-stocks-container">

          <div className="all-stocks-container-head">
            <h2>All Stocks</h2>
            <div className="all-stocks-container-search">
              <input type="text" placeholder='Enter Stock Symbol....' onChange={(e)=> setSearch(e.target.value)} />
              <BiSearch id='searchIcon' />
            </div>
          </div>

          <div className="all-stocks">

          {allStocks.length === 0 && <div className="loading-spinner"> </div>}
          

          {search === '' ?
          
          <>
            {allStocks.map((stock)=>{
            return(

              <div className="all-stocks-stock" key={stock.symbol}>
                <span>
                  <h5>Stock name</h5>
                  <p>{stock.name}</p>
                </span>
                <span>
                  <h5>Symbol</h5>
                  <p>{stock.symbol}</p>
                </span>
                <span>
                  <h5>Stock Type</h5>
                  <p>{stock.type}</p>
                </span>
                <button className='btn btn-primary chart-button' onClick={()=> navigate(`/stock/${stock.symbol}`)}>View Chart</button>
              </div>
            )
          })}
          </>
          
          :
          
          <>
            {allStocks.filter(stock=> stock.symbol.includes(search) || stock.name.includes(search)).map((stock)=>{
            return(

              <div className="all-stocks-stock" key={stock.symbol}>
                <span>
                  <h5>Stock name</h5>
                  <p>{stock.name}</p>
                </span>
                <span>
                  <h5>Symbol</h5>
                  <p>{stock.symbol}</p>
                </span>
                <span>
                  <h5>Stock Type</h5>
                  <p>{stock.type}</p>
                </span>
                <button className='btn btn-primary chart-button' onClick={()=> navigate(`/stock/${stock.symbol}`)}>View Chart</button>
              </div>
            )
          })}
          </>}


          

          </div>
      </div>

    </div>
    </>
  )
}

export default Home