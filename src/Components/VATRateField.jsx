import React from "react";

const VATRateField = () => {
    return (
        <div>
            VAT Rate:
            <select>
                <option value="20">20%</option>
                <option value="15">15%</option>
                <option value="12.5">12.5%</option>
                <option value="0">Exempt</option>
            </select>
        </div>
    )
}

export default VATRateField