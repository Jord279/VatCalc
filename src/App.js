import { useState } from 'react';
import './App.css';
import DisplayBlock from './Components/DisplayBlock';
import PriceEntryField from './Components/PriceEntryField';
import VATRateField from './Components/VATRateField';

function App() {

  const [netPrice, setNetPrice] = useState(0.0);
  const [grossPrice, setGrossPrice] = useState(0.0);
  const [vatToPay, setVatToPay] = useState(0.0);
  const [vatRate, setVatRate] = useState(0.0);

  const handleNetPriceChange = (price) => {
    const gross_Price = price * ((vatRate / 100) + 1);
    setNetPrice(price);
    setGrossPrice(gross_Price);
    // calc vat to pay and set state
    setVatToPay(gross_Price - price);
  }

  const handleGrossPriceChange = (price) => {
    const net_Price = price / ((vatRate / 100) + 1);
    setNetPrice(net_Price);
    setGrossPrice(price);
    // calc vat to pay and set state
    setVatToPay(price - net_Price);
  }

  const handleVatRateChanged = (rate) => {
    setVatRate(rate);
    updatePrices();
  }

  const updatePrices = () => {
    handleNetPriceChange(netPrice);
  }

  return (
    <div className="header field">   
      VAT Calculator
      <div className="pale-green-border field">
        <VATRateField customstyle="field" vatRateChanged={handleVatRateChanged} value={vatRate} updatePrices={updatePrices} />
        <PriceEntryField customstyle="field" label="Price Excl. VAT " priceChanged={handleNetPriceChange} price={netPrice === 0.0 ? "" : netPrice} />
        <DisplayBlock customstyle="field" label="VAT to pay: " value={vatToPay}/>
        <PriceEntryField customstyle="field" label="Price Incl. VAT " priceChanged={handleGrossPriceChange} price={grossPrice === 0.0 ? "" : grossPrice}/>
      </div>
    </div>
  );
}

export default App;
