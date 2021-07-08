import React, { useEffect, useState } from 'react'
import CurrencyRow from './CurrencyRow.js'

const BASE_URL = 'https://free.currconv.com/api/v7/convert?q='
const key = "c400ea8f6d4c966086d7";

function CurrencyConverter() {

    // fetch(`https://free.currconv.com/api/v7/currencies?apiKey=c400ea8f6d4c966086d7`)
    //     .then(res => res.json())
    //     .then(data => console.log(data.results.AED["id"]))
    

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }


    useEffect(() => {
        fetch("https://free.currconv.com/api/v7/currencies?apiKey=c400ea8f6d4c966086d7")
        .then(res => res.json())
        .then(data => {
            const firstCurrency = Object.keys(data.results.EUR["id"])
            setCurrencyOptions([data.results[0], ...Object.keys(data.results)])
            setFromCurrency(data.results.GBP["id"])
            setToCurrency(firstCurrency)
            setExchangeRate(data.results[firstCurrency])
        })
    }, [])


    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            console.log(`${fromCurrency}`);
            fetch(`${BASE_URL}${fromCurrency[`${fromCurrency}`]}_${toCurrency[`${toCurrency}`]}&compact=ultra&apiKey=${key}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.results[toCurrency]))

        }
    }, [fromCurrency, toCurrency])


    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }


    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    
    return (
        <>
            <div className="converterPage">
                <div className="ConverterSection">
                    <h2>Convert</h2>
                    <CurrencyRow 
                        currencyOptions={currencyOptions}
                        selectCurrency={fromCurrency}
                        onChangeCurrency={e => setFromCurrency(e.target.value)}
                        onChangeAmount={handleFromAmountChange}
                        amount={fromAmount}
                    />
                    <div className="equals"><svg aria-hidden="true" data-id="icon-exchange" viewBox="0 0 50 47" height="64px" width="200px"><path fill="white" d="M49.897 35.977L26.597 25v7.874H7.144v6.207h19.455v7.874zM.103 11.642l23.3 10.977v-7.874h19.454V8.538H23.402V.664z"></path></svg></div>
                    <CurrencyRow
                        currencyOptions={currencyOptions}
                        selectedCurrency={toCurrency}
                        onChangeCurrency={e => setToCurrency(e.target.value)}
                        onChangeAmount={handleToAmountChange}
                        amount={toAmount}
                    />
                </div>
            </div>
        </>
    )
}

export default CurrencyConverter
