import ButtonComponent from "../components/ButtonComponent"

import './PickAddOns.css'

import { useEffect } from "react"

const PickAddOns = () => {

  console.log(sessionStorage.getItem("plan-name"))
  console.log(sessionStorage.getItem("plan-price"))

  const addOns = [
    {
      id: "os",
      name: "Online service",
      description: "Access to multplayer games",
      priceMonth: 1,
      priceYear: 10
    },
    {
      id: "ls",
      name: "Large storage",
      description: "Extra 1TB of cloud save",
      priceMonth: 2,
      priceYear: 20
    },
    {
      id: "cp",
      name: "Customizable profile",
      description: "Custom theme on your profile",
      priceMonth: 2,
      priceYear: 20
    },
  ]

  function handleSelecAddOns(e) {
    if (e.target.children[0].checked == false) {
      e.target.children[0].checked = true;

      sessionStorage.setItem(`add-on-${e.target.children[1].id}`, e.target.children[1].id);
      sessionStorage.setItem(`add-on-${e.target.children[1].id}-price`, e.target.children[2].innerText)

      e.target.style.backgroundColor = "var(--magnolia)";
      e.target.style.border = "1px solid var(--purplish-blue)";

      console.log()

    } else {
      e.target.children[0].checked = false

      sessionStorage.removeItem(`add-on-${e.target.children[1].id}`)
      sessionStorage.removeItem(`add-on-${e.target.children[1].id}-price`)

      e.target.style.backgroundColor = "transparent";
      e.target.style.border = "1px solid var(--light-gray)";
    }

  }

  function getSelectedAddOns() {
    addOns.forEach((addOn) => {

      if (sessionStorage.getItem(`add-on-${addOn.name}`) === addOn.name) {
        const selectedAddOn = document.querySelector(`#${addOn.id}`)

        selectedAddOn.style.backgroundColor = "var(--magnolia)";
        selectedAddOn.style.border = "1px solid var(--purplish-blue)";
        selectedAddOn.children[0].checked = true

        sessionStorage.setItem(`add-on-${addOn.name}-price`, selectedAddOn.children[2].innerText)
      }

    })

  }

  useEffect(() => {
    const numbersSteps = document.querySelectorAll(".step-number")

    numbersSteps.forEach((number) => {
      number.style.backgroundColor = "transparent"
      number.style.color = "var(--white)"

      if (number.id === "pickAddOns") {
        number.style.backgroundColor = "var(--light-blue)"
        number.style.color = "var(--marine-blue)"

      }
    })

    getSelectedAddOns()

  }, [])

  return (
    <div className="side-container">
      <section>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience</p>
        <div className="add-ons-container">
          {addOns.map((addOn) => {
            return (
              <div className="input-control" id={addOn.id} onClick={(e) => handleSelecAddOns(e)}>
                <input type="checkbox" />
                <label id={addOn.name}>{addOn.name}
                  <p>{addOn.description}</p>
                </label>
                {sessionStorage.getItem("plan-option") === "Monthly" ? <span>+${addOn.priceMonth}/mo</span> : <span>+${addOn.priceYear}/yr</span>}
              </div>
            )
          })}
        </div>
      </section>
      <ButtonComponent actualHref={"pickAddOns"} />
    </div>
  )
}

export default PickAddOns