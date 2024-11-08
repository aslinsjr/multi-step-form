import ButtonComponent from '../components/ButtonComponent'

import { useEffect } from 'react'

import './PersonalInfo.css'

const PersonalInfo = () => {

  console.log(sessionStorage.getItem("name"))

  function handleChanges(e) {

    if (e.target.id === "name-input") {
      
      e.target.value = document.querySelector("#name-input").value.replace(/[^ A-z À-ú ]/g, "").toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())

      sessionStorage.setItem("name", document.querySelector("#name-input").value.replace(/[^A-z ]/g, "").toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase()))
    }

    if (e.target.id === "email-input") {
      if(e.target.value.includes("@") && e.target.value.includes(".")){
        document.querySelector("#email-error").innerHTML = ""

        sessionStorage.setItem("email", e.target.value)

      } else {
        document.querySelector("#email-error").innerHTML = "fill with a valid email adress"
      }
    }

    if (e.target.id === "phone-input") {

      e.target.value = document.querySelector("#phone-input").value.replace(/[^0-9]/g, "").replace(/(\d{2})?(\d{1})?(\d{4})?(\d{4})/, "($1) $2 $3-$4")
      
      sessionStorage.setItem("phone", document.querySelector("#phone-input").value.replace(/[^0-9]/g, "").replace(/(\d{2})?(\d{1})?(\d{4})?(\d{4})/, "($1) $2 $3-$4"))
    }

  }

  function getInfos() {
    if(sessionStorage.getItem("name")) {
      const nameInput = document.querySelector("#name-input")

      nameInput.value = sessionStorage.getItem("name")
    }

    if(sessionStorage.getItem("email")) {
      const emailInput = document.querySelector("#email-input")

      emailInput.value = sessionStorage.getItem("email")
    }

    if(sessionStorage.getItem("phone")) {
      const phoneInput = document.querySelector("#phone-input")

      phoneInput.value = sessionStorage.getItem("phone")
    }

  }

  useEffect(() => {
    const numbersSteps = document.querySelectorAll(".step-number")

    numbersSteps.forEach((number) => {
      number.style.backgroundColor = "transparent"
      number.style.color = "var(--white)"

      if (number.id === "personalInfo") {
        number.style.backgroundColor = "var(--light-blue)"
        number.style.color = "var(--marine-blue)"
        
      }
    })

    getInfos()
    
  }, [])

  return (
    <div className="side-container">
      <section id='personal-info'>
        <h2>Personal info</h2>
        <p>Please provide your name, email adress and phone number.</p>
        <form>
          <label>Name
            <input id='name-input' type="text" placeholder='e.g. Stephen King' onChange={(e) => handleChanges(e)} />
          </label>
          <label>Email Adress
            <input id='email-input' type="text" placeholder='e.g. stephenking@lorem.com' onChange={(e) => handleChanges(e)} />
            <span id='email-error'></span>
          </label>
          <label>Phone Number
            <input id='phone-input' type="text" placeholder='e.g. +1 234 567 890' onChange={(e) => handleChanges(e)} />
          </label>
        </form>
      </section>
      <ButtonComponent actualHref={"personalInfo"} />
    </div>

  )
}

export default PersonalInfo