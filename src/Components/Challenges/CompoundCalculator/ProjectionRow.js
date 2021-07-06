import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faEuroSign, faPoundSign, faYenSign, faRupeeSign } from '@fortawesome/free-solid-svg-icons'

function ProjectionRow(props) {
    const {
        iteration,
        yearInterest,
        totalDeposits,
        totalInterest,
        balance,
        currencyFinal
    } = props

    var yearInterestOutput = parseFloat(yearInterest).toFixed(2)
    var totalDepositsOutput = parseFloat(totalDeposits).toFixed(2)
    var totalInterestOutput = parseFloat(totalInterest).toFixed(2)
    var balanceOutput = parseFloat(balance).toFixed(2)
    var currencyFinalOutput = parseFloat(currencyFinal).toFixed(2)
    
    var rowColorClass1 = "proj-row col1 proj-grey-row"
    var rowColorClass = "proj-row col2 proj-grey-row"

    if ((props.iteration % 2) === 0) {
        rowColorClass1 = "proj-row col1 proj-white-row"
        rowColorClass = "proj-row col2 proj-white-row"
    }

    const checkCurrency = () => {
        switch(currencyFinal) {
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
    
    var currencyComponent = checkCurrency()

    return (
        <div className="proj-table">
            <div className={rowColorClass1}>
                <h3>{iteration}</h3>
            </div>

            <div className={rowColorClass}>
                <h3>{currencyComponent}{yearInterestOutput}</h3>
            </div>

            <div className={rowColorClass}>
                <h3>{currencyComponent}{totalDepositsOutput}</h3>
            </div>

            <div className={rowColorClass}>
                <h3>{currencyComponent}{totalInterestOutput}</h3>
            </div>

            <div className={rowColorClass}>
                <h3>{currencyComponent}{balanceOutput}</h3>
            </div>
        </div>
    )
}

export default ProjectionRow
