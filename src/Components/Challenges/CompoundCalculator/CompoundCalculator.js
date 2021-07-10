import React, { useState, useEffect } from 'react'
import './CompoundCalculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faEuroSign, faPoundSign, faYenSign, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import ProjectionBlock from './ProjectionBlock.js'



function CompoundCalculator() {
    const [currency, setCurrency] = useState("Dollar")
    const [initBalance, setInitBalance] = useState()
    const [interestRate, setIinterestRate] = useState()
    const [interestFrequency, setInterestFrequency] = useState("Yearly")
    const [calculationIterations, setCalculationIterations] = useState()
    const [calculationFrequency, setCalculationFrequency] = useState("Yearly")
    // const [compoundInterval, setCompoundInterval] = useState("Yearly")
    const [deposit, setDeposit] = useState()
    const [depositFrequency, setDepositFrequency] = useState("Monthly")
    const [active, setActive] = useState(false)
    const [firstCalculationDone, setFirstCalculationDone] = useState(false)
    const [calcButtonText, setCalcButtonText] = useState("Calculate")
    
    let currencyComponent;

    //////////////
    // ON CLICK //
    //////////////
    const onClickCurrency = (e) => {
        setCurrency(e.currentTarget.value)
    }

    const onClickCalculate = (e) => {
        setActive(true)
        setFirstCalculationDone(true)
        if(!firstCalculationDone)
        setCalcButtonText("Re-Calculate")
    }

    ///////////////
    // ON CHANGE //
    ///////////////
    const onChangeInitBalance = (e) => {
        setInitBalance(e.currentTarget.value)
        setActive(false)
    }

    const onChangeInterestPercent = (e) => {
        setIinterestRate(e.currentTarget.value)
        setActive(false)
    }

    const onChangeInterestFrequency = (e) => {
        setInterestFrequency(e.currentTarget.value)
        setActive(false)
    }

    const onChangeCalculationIterations = (e) => {
        setCalculationIterations(e.currentTarget.value)
        setActive(false)
    }

    const onChangeCalculationFrequency = (e) => {
        setCalculationFrequency(e.currentTarget.value)
        setActive(false)
    }

    // const onChangeCompoundInterval = (e) => {
    //     setCompoundInterval(e.currentTarget.value)
    //     setActive(false)
    // }

    const onChangeDeposit = (e) => {
        setDeposit(e.currentTarget.value)
        setActive(false)
    }

    const onChangeDepostFrequency = (e) => {
        setDepositFrequency(e.currentTarget.value)
        setActive(false)
    }


    ////////////////
    // USE EFFECT //
    ////////////////
    useEffect(() => {
    }, [currency]);

    useEffect(() => {
    }, [initBalance]);

    useEffect(() => {
    }, [interestRate]);

    useEffect(() => {
    }, [interestFrequency]);

    useEffect(() => {
    }, [calculationIterations]);

    useEffect(() => {
    }, [calculationFrequency]);

    // useEffect(() => {
    // }, [compoundInterval]);

    useEffect(() => {
    }, [deposit]);

    useEffect(() => {
    }, [depositFrequency]);


    
    const checkCurrency = () => {
        switch(currency) {
            case "Dollar": 
                return <FontAwesomeIcon icon={faDollarSign} size="2x"/>
            case "Euro":
                return <FontAwesomeIcon icon={faEuroSign} size="2x"/>
            case "Pound":
                return <FontAwesomeIcon icon={faPoundSign} size="2x"/>
            case "Yen":
                return <FontAwesomeIcon icon={faYenSign} size="2x"/>
            default:
                return <FontAwesomeIcon icon={faRupeeSign} size="2x"/>
        }
    }
    

    currencyComponent = checkCurrency()

    return (
        <>
        <div className="main-container">
            {/* <h1>Compound Interest Calculator</h1> */}
            <div className="inner-container">

                <h2>Currency</h2>

                <div className="currencies-container">
                    <button onClick={onClickCurrency} type="input" horizontal="true" value="Dollar" className={ currency==='Dollar' ? 'currency-button active' : 'currency-button' }>
                        <FontAwesomeIcon icon={faDollarSign} size="2x"/>
                    </button>
                    <button onClick={onClickCurrency} type="input" horizontal="true" value="Euro" className={ currency==='Euro' ? 'currency-button active' : 'currency-button' }>
                        <FontAwesomeIcon icon={faEuroSign} size="2x"/>
                    </button>
                    <button onClick={onClickCurrency} type="input" horizontal="true" value="Pound" className={ currency==='Pound' ? 'currency-button active' : 'currency-button' }>
                        <FontAwesomeIcon icon={faPoundSign} size="2x"/>
                    </button>
                    <button onClick={onClickCurrency} type="input" horizontal="true" value="Yen" className={ currency==='Yen' ? 'currency-button active' : 'currency-button' }>
                        <FontAwesomeIcon icon={faYenSign} size="2x"/>
                    </button>
                    <button onClick={onClickCurrency} type="input" horizontal="true" value="Rupee" className={ currency==='Rupee' ? 'currency-button active' : 'currency-button' }>
                        <FontAwesomeIcon icon={faRupeeSign} size="2x"/>
                    </button>
                </div> 

                
                <h3 labelfor="initBalance" className="input-label">Initial Balance:</h3>
                <div className="input-row">
                    <span className="currency-indicator">
                        {currencyComponent}
                    </span>
                    <input placeholder="0" onChange={onChangeInitBalance} name="initBalance" type="number" horizontal="true" className="interest-input" min="0" value={initBalance}/>               
                </div>


                <h3 labelfor="interestRate" className="input-label">Interest Rate (%):</h3>
                <div className="input-row">
                    <input placeholder="0" onChange={onChangeInterestPercent} name="interestRate" type="number" horizontal="true" className="period-input" min="0" value={interestRate}/> 
                    <select onChange={onChangeInterestFrequency} className="period-dropdown">
                        <option>Yearly</option>
                    </select>
                </div> 


                <h3 labelfor="calculationPeriod" className="input-label">Calculation Period:</h3>
                <div className="input-row">
                    <input placeholder="0" placeholder="0" onChange={onChangeCalculationIterations} name="calculationPeriod" type="number" horizontal="true" className="period-input" min="0" value={calculationIterations}/> 
                    <select onChange={onChangeCalculationFrequency} className="period-dropdown">
                        <option>Years</option>
                    </select>
                </div>      


                {/* <h3 labelfor="calculationPeriod" className="input-label">Compound Interval:</h3>
                <div className="input-row">
                    <select onChange={onChangeCompoundInterval} className="interval-dropdown">
                        <option>Yearly</option>
                        <option>Monthly</option>
                        <option>Weekly</option>
                        <option>Daily</option>
                    </select>
                </div>              */}

                <div className="deposit-container">
                    <h3 labelfor="initBalance" className="input-label">Regular Deposit</h3>
                    <div className="input-row">
                        <span className="currency-indicator">
                            {currencyComponent}
                        </span>
                        <input placeholder="0" onChange={onChangeDeposit} value={deposit} name="initBalance" type="number" horizontal="true" className="deposit-input" min="0"/>               
                    
                        <select onChange={onChangeDepostFrequency} className="deposit-frequency">
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                </div>

                

                <span className="calculate-button-container">
                    <button className="calculate-button" onClick={onClickCalculate}>{calcButtonText}</button>
                </span>
                
            </div>

            <div className="projection-container">
                    <ProjectionBlock 
                        currencyFinal={currency} 
                        initBalance={initBalance} 
                        interestRate={interestRate}
                        interestFrequency = {interestFrequency}
                        calculationIterations = {calculationIterations}
                        calculationFrequency = {calculationFrequency}
                        deposit = {deposit}
                        depositFrequency = {depositFrequency}

                        active={active} 
                    />
                
            </div>
        </div>
        </>
    )
}

export default CompoundCalculator
