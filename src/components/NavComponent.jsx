import './NavComponent.css'

const NavComponent = () => {

  const steps = [
    {
      number: 1,
      description: "Your Info",
      href: "personalInfo"
    },
    {
      number: 2,
      description: "Select Plan",
      href: "selectPlan"
    },
    {
      number: 3,
      description: "Add-ons",
      href: "pickAddOns"
    },
    {
      number: 4,
      description: "Summary",
      href: "finishingUp"
    }
  ]

  return (
    <nav className='nav-container'>
      <div className="nav-view">
        {steps.map((step) => {

          return (
            <div className="showing-box" key={step.href}>
              <span className='step-number' id={step.href}>{step.number}</span>
              <div className="step-description">
                <span className='step-indication'>Step {step.number}</span>
                <span>{step.description}</span>
              </div>
            </div>
          )
        })}

      </div>
      <img src="./bg-sidebar-desktop.svg" alt="Side Bar Image" />
    </nav>
  )
}

export default NavComponent