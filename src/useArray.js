import { useState } from "react"

export function useArrray(initialValue) {
    const [array, setArray] = useState(initialValue)

    function push(element) {
        setArray(a => [...a, element])
    }

    function replace(index, newElement) {
        setArray(a => {
            return [...a.slice(0,index), newElement,...a.slice(index+1)]
        })
    }

    return { array, set: setArray }
}