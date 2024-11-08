import './ButtomComponent.css'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const ButtonComponent = ({ actualHref, handleConfirmation }) => {

  const [nextHref, setNextHref] = useState("")
  const [previousHref, setPreviousHref] = useState("")

  function routerSteps(actualHref) {

    if (actualHref === "personalInfo") {
      setNextHref("/selectPlan")
    }

    if (actualHref === "selectPlan") {
      setNextHref("/pickAddOns")
      setPreviousHref("/")
    }

    if (actualHref === "pickAddOns") {
      setNextHref("/finishingUp")
      setPreviousHref("/selectPlan")
    }

    if (actualHref === "finishingUp") {
      setNextHref("")
      setPreviousHref("/pickAddOns")
    }

  }

  useEffect(() => {
    routerSteps(actualHref)
    
  }, [])

  return (
    <div className="button-control">
      {actualHref === "finishingUp" ? <button id='confirm-btn' onClick={() => handleConfirmation()}>Confirm</button> : <Link to={nextHref}>Next Step</Link>}
      {actualHref === "personalInfo" ? <></> : <Link to={previousHref} id='back-btn'>Go Back</Link>}
    </div>
  )
}

export default ButtonComponent