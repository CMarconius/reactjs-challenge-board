import React from 'react'
import './Projection.css'
import ProjectionRow from './ProjectionRow'

function ProjectionBlock(props) {
    const {
        currencyFinal,
        initBalance,
        interestRate,
        interestFrequency,
        calculationIterations,
        calculationFrequency,
        // compoundInterval,
        deposit,
        depositFrequency,
        active
    } = props
    
    var balance = parseFloat(initBalance)
    var rate = (parseFloat(interestRate)) / 100
    var interestFreq = parseFloat(interestFrequency)
    var calculationFreq = parseFloat(calculationFrequency)
    // var compoundInterval = parseFloat(compoundInterval)
    var regularDeposit = parseFloat(deposit)

    const checkDepositFrequency = () => {
        switch (depositFrequency) {
            case "Yearly":
                return 1;
            default:
                return 12;
        }
    }
    
    var depositFreq = checkDepositFrequency()

    var totalDeposits = balance, totalInterest = 0, yearInterest = 0

    let items = []
    
    ///////////////////////////
    // MAIN CALCULATION LOOP //
    ///////////////////////////
    const calculateNextIteration = () => {
        for (var i=0; i<depositFreq; i++) {
            console.log("THIS YOKE HAS LOOPED " + (i) + " Times!")
            balance += regularDeposit
            if (depositFreq > 1) {
                balance += (balance * (rate/12))
            } else {
                balance += (balance * rate)
            }
        }
        totalDeposits += (regularDeposit * depositFreq)

        yearInterest = balance - totalDeposits
        totalInterest += yearInterest
        
    }
    // - End - /////////////////////////

    if (active) {

        ///////////////////////////////////////////////
        // Create Iteration Rows and add to an array //
        ///////////////////////////////////////////////
        for (var i=1; (i <= calculationIterations) && (i <= 1000); i++) {
            
            calculateNextIteration()

            items.push(
                <ProjectionRow 
                    id={i}
                    iteration={i}
                    currencyFinal={currencyFinal}
                    yearInterest={yearInterest}
                    totalDeposits={totalDeposits}
                    totalInterest={totalInterest}
                    balance={balance}
                />
            )
        }
        // - End - /////////////////////////////////////////////



        return (
            <>
                <div className="proj-table">
                    <div className="proj-column col1">
                        <h2>Year</h2>
                    </div>

                    <div className="proj-column col2">
                        <h2>Year Interest</h2>
                    </div>

                    <div className="proj-column col3">
                        <h2>Total Deposits</h2>
                    </div>

                    <div className="proj-column col4">
                        <h2>Total Interest</h2>
                    </div>

                    <div className="proj-column col5">
                        <h2>Balance</h2>
                    </div>
                </div>

                <div>
                    {items.map(row => (
                        <div>{row}</div>
                    ))}
                </div>
                
                <div className="proj-table">
                    <div className="proj-column col1">
                        <h2>Year</h2>
                    </div>

                    <div className="proj-column col2">
                        <h2>Year Interest</h2>
                    </div>

                    <div className="proj-column col3">
                        <h2>Total Deposits</h2>
                    </div>

                    <div className="proj-column col4">
                        <h2>Total Interest</h2>
                    </div>

                    <div className="proj-column col5">
                        <h2>Balance</h2>
                    </div>
                </div>

            </>
        )
    } else {
        return (
            <p>Click Calculate to view your Projection...</p>
        )
    }
    
}

export default ProjectionBlock
