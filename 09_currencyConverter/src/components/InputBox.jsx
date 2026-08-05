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
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
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
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
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
    );
}

export default InputBox; //iss export mei koi dikkat nhi hai, but ek better way bhi hai.

//useId is a hook jo label ko aur thoda sa optimize krr dega.
//&& using and is a simple checker to check if wo exist krta hai ki nhi.
//string return hota hai js mei, toh hum number mei convert krr diye.
 //react mei loop use krni hai toh ek key pass krr do elements ko loop krne ka performance degrade nho hoga, waise react nhi rokega use nhi kroge toh, fir bhi performance degrade ho jaati hai bahut. 
//remember the key in loops in react.

//yaha penumber mei convert nhi kiye kyoki string hi hai saari values idhr.

//hum kaafi extent tak apne projects ko modular bnane ka try krenge ensuring the component reusability.

