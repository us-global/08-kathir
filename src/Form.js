import { useState } from "react"


function Form() {


    const [data, setData] = useState({ name: '', age: '', email: '' })

    const handleAdd=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData((data) => ({ ...data, [name]: value }))
        console.log(data)
    }
    return (
        <div>
            <input type="text" placeholder="USERNAME" name='name'></input><br></br>
            <input type="number" placeholder="AGE" name='age'></input><br></br>
            <input type="email" placeholder="EMAIL" name='email'></input><br></br>
            <button onClick={handleAdd}>SUBMIT</button> 

            <p>{data.name}</p>
        </div>

    )
}

export default Form