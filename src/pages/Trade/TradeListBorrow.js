import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TradeOptionBorrow from "./TradeOptionBorrow.js";
import "./TradeList.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../features/pageSlice";

import TSLA from "../../ressources/TSLA.png";
import ABNB from "../../ressources/ABNB.png";
import AAPL from "../../ressources/AAPL.png";
import MSFT from "../../ressources/MSFT.png";
import GOOG from "../../ressources/GOOG.png";

function TradeListBorrow() {
  const prices = useSelector(state => state.prices);
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();
  return (
    <div>
        <div className="tradeList__search">
            <SearchIcon />
            <input type="text" />
            <ArrowDropDownIcon className=""/>
         </div>

        <div className="tradeList__tradeOptions">
            <TradeOptionBorrow 
              logo={TSLA} 
              tickerSymbol="TSLA" 
              name="Tesla, Inc." 
              poolPrice={prices.tsla_pool + " USDC"} 
              oraclePrice={prices.tsla_oracle + " USDC"} 
            />
            <TradeOptionBorrow 
              logo={AAPL} 
              tickerSymbol="AAPL" 
              name="Apple Inc." 
              poolPrice={prices.msft_pool + " USDC"} 
              oraclePrice={prices.aapl_oracle + " USDC"}
            />
            <TradeOptionBorrow 
              logo={MSFT} 
              tickerSymbol="MSFT" 
              name="Microsoft Inc." 
              poolPrice={prices.aapl_pool + " USDC"} 
              oraclePrice={prices.msft_oracle + " USDC"}
              
            />
            <TradeOptionBorrow 
              logo={GOOG} 
              tickerSymbol="GOOG" 
              name="Alphabet Inc." 
              poolPrice={prices.goog_pool + " USDC"} 
              oraclePrice={prices.goog_oracle + " USDC"}
              
            />
            <TradeOptionBorrow 
              logo={ABNB} 
              tickerSymbol="ABNB" 
              name="Airbnb Inc." 
              poolPrice={prices.abnb_pool + " USDC"} 
              oraclePrice={prices.abnb_oracle + " USDC"}
              
            />
         </div>
    </div>
  )
}

export default TradeListBorrow