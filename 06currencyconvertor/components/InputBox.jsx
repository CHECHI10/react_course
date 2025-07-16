import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()
 
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex justify-between ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-col bg-green-400 justify-end">
                <div >Currency Type</div>
                <div className='flex justify-end'>
                  <select
                    className="w-12 px-1 py-1 bg-red-500 "
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    >
                    
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                    ))}
                  </select>
                </div>
            </div>
        </div>
    );
}

export default InputBox;