import React from "react";

export default function Register(){

    const [ formData, setFormData ] = React.useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            ismember: true,
            employement:"",
            gender:""
        }
    )

    function handleChange(event){
        const { name, value, type, checked } = event.target
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked :value
            }
        })

    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit}>

          <input
                type = "text"
                placeholder = "First Name"
                onChange = {handleChange}
                name = "firstName"
                value={formData.firstName}
          />

         <input
                type = "text"
                placeholder = "Last Name"
                onChange = {handleChange}
                name = "lastName"
                value={formData.lastName}
          />

          <input
                type = "email"
                placeholder = "Email"
                onChange = {handleChange}
                name = "email"
                value={formData.email}
          />
          <input
                type = "checkbox"
                id = "ismember"
                checked={formData.ismember}
                onChange = {handleChange}
                name = "ismember"
          />

          <label htmlFor="ismember" >Do you want to accept matrketing</label>
          <br/>

          <fieldset>
            <legend>
                current employement status
            </legend>
            <br/>
            <input
                type = "radio"
                checked={formData.employement === "unemployed"}
                onChange = {handleChange}
                name = "employement"
                value="unemployed"
                id="unemployed"
             />
            <label htmlFor="unemployed" >Unemployed</label>
            <br/>
            <input
                type = "radio"
                checked={formData.employement === "part-time"}
                onChange = {handleChange}
                name = "employement"
                value="part-time"
                id="part-time"
             />
            <label htmlFor="part-time" >Part Time</label>
            <br/>
            <input
                type = "radio"
                checked={formData.employement === "full-time"}
                onChange = {handleChange}
                name = "employement"
                value="full-time"
                id="full-time"
             />
            <label htmlFor="full-time" >Full Time</label>
            <br/>
          </fieldset>

          <select id="gender"
            value={formData.gender}
            onChange={handleChange}
            name="gender"
           >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="not-mentioned">Not Mentioned</option>
           </select>
           <br />
           <br />
           <button type="submit">Submit</button>
        </form>
    )
}