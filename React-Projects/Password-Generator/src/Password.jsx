import React, { useEffect, useState } from 'react'

const Password = () => {
    const [password, setpassword] = useState("")
    const [length, setlength] = useState("")
    const [number, setnumber] = useState(false)
    const [spchar, setspchar] = useState(false)

    useEffect(() => {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let password = ""
        if (number) letters += "0123456789"
        if (spchar) letters += "!@$%)_=?-({}"

        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * letters.length)
            password += letters[index]
        }
        setpassword(password)
    }, [length, number, spchar])
    

  return (
    <div>
        <input type="text" readOnly value={password}/>
        <div>
            <label htmlFor="">Length</label>
            <input type="number" value={length} onChange={(e) => setlength(e.target.value)} min={8}max={12}/>
        </div>
        <div>
            <label htmlFor="">Number</label>
            <input type="checkbox" checked={number} onChange={(e) => setnumber(!number)}/>
        </div>
        <div>
            <label htmlFor="">Special Characters</label>
            <input type="checkbox" checked={spchar} onChange={(e) => setspchar(!spchar)}/>
        </div>
    </div>
  )
}

export default Password