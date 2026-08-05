//hooks purely ek js return krte hai, isliye .js
//custon hook is basically a function only.

//custom hook mei bhi hum built in hooks ko use krr sakte hai.
//hooks ke piche ek standard convention hai to put a name use in front.

//currency convert hum hard coded values se bhi krr sakte hai but in this project e are using the api to convert and fetch rates.

import {useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;