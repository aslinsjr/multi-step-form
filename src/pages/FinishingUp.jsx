import ButtonComponent from "../components/ButtonComponent"

import './FinishingUp.css'

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const FinishingUp = () => {

  const [total, setTotal] = useState(0)
  const [confirmation, setConfirmation] = useState(false)

  function getTotal() {
    const addOns = document.querySelectorAll(".add-on-box")

    let somaAddOns = 0

    addOns.forEach((addOn) => {
      addOn.children

      somaAddOns = +somaAddOns + (+addOn.children[1].innerHTML.replace(/[^0-9]/g, ""))

      return somaAddOns
    })

    setTotal(+somaAddOns + (+sessionStorage.getItem('plan-price')))

  }

  function handleConfirmation() {
    setConfirmation(true)
    sessionStorage.clear()
  }

  useEffect(() => {
    const numbersSteps = document.querySelectorAll(".step-number")

    numbersSteps.forEach((number) => {
      number.style.backgroundColor = "transparent"
      number.style.color = "var(--white)"

      if (number.id === "finishingUp") {
        number.style.backgroundColor = "var(--light-blue)"
        number.style.color = "var(--marine-blue)"

      }
    })

    getTotal()

  }, [])

  return (
    <div className="side-container">
      {confirmation ?
      <div className="thanks-container">
        <img src="./icon-thank-you.svg" alt="" />
        <h2>Thank you</h2>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div> : <>
      <section id='finishing-up'>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="check-out-container">
          <div className="plan-selected">
            <div className="plan-name-container">
              <p>{sessionStorage.getItem('plan-name')} ({sessionStorage.getItem('plan-option')})</p>
              <Link to='/selectPlan'>Change</Link>
            </div>
            <div className="plan-price-container">
              <span>${sessionStorage.getItem('plan-price')}/{sessionStorage.getItem('plan-option') === "Monthly" ? "mo" : "yr"}</span>
            </div>
          </div>
          {sessionStorage.getItem('add-on-Online service') || sessionStorage.getItem('add-on-Large storage') || sessionStorage.getItem('add-on-Customizable profile') ?
          <div className="add-ons-selected">
            <div className="add-on-box">
              <p>{sessionStorage.getItem('add-on-Online service')}</p>
              <span>{sessionStorage.getItem('add-on-Online service-price')}</span>
            </div>
            <div className="add-on-box">
              <p>{sessionStorage.getItem('add-on-Large storage')}</p>
              <span>{sessionStorage.getItem('add-on-Large storage-price')}</span>
            </div>
            <div className="add-on-box">
              <p>{sessionStorage.getItem('add-on-Customizable profile')}</p>
              <span>{sessionStorage.getItem('add-on-Customizable profile-price')}</span>
            </div>
          </div>
          : <></>}
          <div className="total-box">
            <p>Total (per {sessionStorage.getItem('plan-option') === "Monthly" ? "month" : "year"})</p>
            <span>+{total}/{sessionStorage.getItem('plan-option') === "Monthly" ? "mo" : "yr"}</span>
          </div>
        </div>
      </section>
      <ButtonComponent handleConfirmation={handleConfirmation} actualHref={"finishingUp"} />
      </>}
    </div>
  )
}

export default FinishingUp