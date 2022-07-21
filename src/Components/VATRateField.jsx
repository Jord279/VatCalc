import React, { useEffect } from "react";

const VATRateField = (props) => {
    const { updatePrices } = props;

    useEffect(()=> {       
        updatePrices();        
    }, [props.value, updatePrices]);
                
    return (
        <div>
            VAT Rate:
            <select onChange={(event) => { props.vatRateChanged(event.target.value) }}>
                <option value="20">20%</option>
                <option value="15">15%</option>
                <option value="12.5">12.5%</option>
                <option value="0">Exempt</option>
            </select>
        </div>
    )
}

export default VATRateField