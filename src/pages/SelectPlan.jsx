import { useEffect, useState } from 'react'

import './SelectPlan.css'

import ButtonComponent from '../components/ButtonComponent'

const SelectPlan = () => {

  const [planOption, setPlanOption] = useState()

  const plans = [
    {
      src: "./icon-arcade.svg",
      name: "Arcade",
      priceMonth: 9,
      priceYear: 90
    },
    {
      src: "./icon-advanced.svg",
      name: "Advanced",
      priceMonth: 12,
      priceYear: 120
    },
    {
      src: "./icon-pro.svg",
      name: "Pro",
      priceMonth: 15,
      priceYear: 150
    },
  ]

  function handleClick() {

    const toggleBtn = document.querySelector(".toggle")

    if (planOption === "Monthly") {
      setPlanOption("Yearly")
      toggleBtn.classList.add("change")
    } else {
      setPlanOption("Monthly")
      toggleBtn.classList.remove("change")
    }
  }

  function handleSelectPlan(e) {

    const planBtn = document.querySelectorAll(".plan-btn")

    planBtn.forEach((btn) => {
      btn.style.border = "1px solid var(--light-gray)"
      btn.style.backgroundColor = "transparent"
    })

    sessionStorage.setItem("plan-name", e.target.id)
    sessionStorage.setItem("plan-price", e.target.children[1].children[1].innerText.replace(/[^0-9]/g, ""))

    if (e.target.className === "plan-btn") {
      e.target.style.border = "1px solid var(--purplish-blue)"
      e.target.style.backgroundColor = "var(--magnolia)"
    }

  }

  function getSelectPlan() {

    const toggleBtn = document.querySelector(".toggle")

    if (sessionStorage.getItem("plan-option") === "Monthly") {
      toggleBtn.classList.remove("change")
      setPlanOption("Monthly")
    }

    if (sessionStorage.getItem("plan-option") === "Yearly") {
      toggleBtn.classList.add("change")
      setPlanOption("Yearly")
    }

    if (sessionStorage.getItem("plan-name")) {
      const selectedPlan = document.querySelector(`#${sessionStorage.getItem("plan-name")}`)

      selectedPlan.style.border = "1px solid var(--purplish-blue)"
      selectedPlan.style.backgroundColor = "var(--magnolia)"
    }

  }

  useEffect(() => {
    const numbersSteps = document.querySelectorAll(".step-number")

    numbersSteps.forEach((number) => {
      number.style.backgroundColor = "transparent"
      number.style.color = "var(--white)"

      if (number.id === "selectPlan") {
        number.style.backgroundColor = "var(--light-blue)"
        number.style.color = "var(--purplish-blue)"

      }
    })

    if (sessionStorage.getItem("plan-option")) {
      getSelectPlan()
    } else {
      setPlanOption("Monthly")
    }


  }, [])

  useEffect(() => {
    sessionStorage.setItem("plan-option", planOption)

    plans.forEach((plan) => {
      if(sessionStorage.getItem("plan-name") === plan.name) {

        if(planOption === "Monthly") {
          sessionStorage.setItem("plan-price", plan.priceMonth)
        } else {
          sessionStorage.setItem("plan-price", plan.priceYear)
        }
        
      }
    })

  }, [planOption])

  return (
    <div className="side-container">
      <section id='select-plan'>
        <h2>Select your plan</h2>
        <p>You have the option of monthtly or yearly billing.</p>
        <div className="plans-container">
          {plans.map((plan) => {
            return (
              <button className='plan-btn' key={plan.name} id={plan.name} onClick={(e) => handleSelectPlan(e)}>
                <img src={plan.src} alt="Plan Icon" />
                <div className="plan-infos">
                  <span className='plan-name'>{plan.name}</span>
                  {planOption === "Monthly" ? <span>${plan.priceMonth}/mo</span> :
                    <>
                      <span>${plan.priceYear}/yr</span>
                      <span>2 month free</span>
                    </>
                  }
                </div>
              </button>
            )
          })}
        </div>
        <div className="plan-option-box">
          <span>Monthly</span>
          <div className="toggle">
            <button onClick={() => handleClick()}></button>
          </div>
          <span>Yearly</span>
        </div>
      </section>
      <ButtonComponent actualHref={"selectPlan"} />
    </div>
  )
}

export default SelectPlan