import { useEffect } from "react"
import { useState, useRef } from "react"

function App() {
  const [name, setName] = useState("")
  const alexRef = useRef("Alex")
  console.log(alexRef.current)

  useEffect(() => {
    console.log("Re-render")
  })

  return (
    <>
      <label>
        Name:
        <input value={name} onChange={e => setName(e.target.value)}/>
      </label>
    <button onClick={() => (alexRef.current = Math.random())}>Change Ref</button>
    <button onClick={() => console.log(alexRef.current)}>Print Ref</button>
    </>
  )
}

export default App