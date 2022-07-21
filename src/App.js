import { useState } from 'react';
import './App.css';
import DisplayBlock from './Components/DisplayBlock';
import PriceEntryField from './Components/PriceEntryField';
import VATRateField from './Components/VATRateField';

function App() {

  const [netPrice, setNetPrice] = useState(0.0)
  const [grossPrice, setGrossPrice] = useState(0.0)

  return (
    <div className="header field">   
      VAT Calculator     
      <div className="pale-green-border">
        <VATRateField customstyle="field"/>
        <PriceEntryField customstyle="field" label="Price Excl. VAT " price={netPrice === 0.0 ? "" : netPrice} />
        <DisplayBlock customstyle="field" label="VAT to pay: " value="4"/>
        <PriceEntryField customstyle="field" label="Price Incl. VAT " price={grossPrice === 0.0 ? "" : grossPrice}/>
      </div>
    </div>
  );
}

export default App;
