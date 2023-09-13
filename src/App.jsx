import { useState, useEffect } from "react"

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  function printName() {
    console.log(`Name: ${name}`)
  }

useEffect(() => {
  console.log("In Effect")
  printName()
}, [printName])

return (
  <>
    <label>
      Name:
      <input value={name} onChange={e => setName(e.target.value)} />
    </label>
    <br />
    <label>
      Age:
      <input
        type="number"
        value={age}
        onChange={e => setAge(e.target.valueAsNumber)}
      />
    </label>
  </>
)
}

export default App