import React, { useState } from 'react'

/*In a React functional component,
 you must return JSX elements or React components 
 from the component's render function. 
 If you don't return anything or explicitly return null, the component will render nothing.*/



const Form = () =>{
    
  /*  const[firstName, setFirstName] = useState('');
    const[email, setEmail] = useState('');
    const[age, setAge] = useState('');  */   
    const[person, setPerson] = useState({firstName:'', email:'', age:''})
    const[people, setPeople] = useState([])

    const handleChange = (e) =>{
         const name = e.target.name;
         const value = e.target.value;

         setPerson({...person, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(person.firstName && person.email && person.age){
          //Here setPeople or setState in general is for setting the state of the variable associated to the fxn.
          setPeople((people)=>{
            const newPerson = {id: new Date().getTime().toString(), firstName: person.firstName, email: person.email, age:person.age}
            return [...people, newPerson]
          })
          setPerson({firstName:'', email:'', age:''})

          
        }
        else{
            console.log('Form is Empty')
        }
    }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <div>
            <label htmlFor='firstName'>Name:</label>
            <input type='text' id='firstName' name='firstName' value= {person.firstName} 
            onChange={handleChange}/>
        </div>

        <div>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' name='email' value= {person.email}
            onChange={handleChange}/>
        </div>

        <div>
            <label htmlFor='age'>Age:</label>
            <input type='text' id='age' name='age' value= {person.age}
            onChange={handleChange}/>
        </div>

        <button type='submit'>Submit</button>
      </form>
        
       { people.map((person) =>{
                 const {id, firstName, email, age}
                 = person;
/* In React, it's a good practice to provide a unique key prop when rendering a list of elements using the map function. 
The key prop helps React efficiently update and re-render the list when items are added, removed, or reordered.
 While it's not required, using a key can prevent potential issues with component re-renders and is considered a best practice.
If you don't use a key with the div elements, React may still work without any immediate errors, 
but you might encounter performance issues or unexpected behavior if the list changes. React uses the key prop to identify and track individual elements in the list.

*/
                 return (
                    <div key = {id}>
                    <h4>
                    {firstName}
                    </h4>
                    <p>{email}</p>
                    <p>{age}</p>
                    </div>
                 )

        })
    }

    </div>
  )
}


export default Form
