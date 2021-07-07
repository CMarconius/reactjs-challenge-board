import React, { useEffect, useState } from 'react'
import CurrencyRow from './CurrencyRow.js'

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=5651c1a2f85f71a12e6e0061a4fe1318'

function CurrencyConverter() {

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
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            const firstCurrency = Object.keys(data.rates)[0]
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base)
            setToCurrency(firstCurrency)
            setExchangeRate(data.rates[firstCurrency])
        })
    }, [])


    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            console.log(`This is the link, yo!!!!!!!!!!!!! =================================================================================================== ${BASE_URL}&base=${fromCurrency}&symbols=${toCurrency}`);
            fetch(`${BASE_URL}&base=${fromCurrency}&symbols=${toCurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[toCurrency]))
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
