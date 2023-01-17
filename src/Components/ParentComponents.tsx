
import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
import Marks from './Marks'

const ParentComponents = () => {
  const signUp = [
    { id: 0, email: 'jai@gmail.com' },
    { id: 1, email: 'deva@gmail.com' },
    { id: 2, email: 'ravi@gmail.com' },
    { id: 3, email: 'anuj@gmail.com' },
    { id: 4, email: 'ankit@gmail.com' }
  ]


  const [email, setEmail] = useState(-1)


  return (
    <>
      <ChildComponent name="jai" age={20} qualified={false} gender="male" />
      <Marks
        marks={[10, 2, 20, 10, 80]}
        books={[
          { id: 1, name: 'Physics' },
          { id: 2, name: 'Maths' },
          { id: 3, name: 'Chemistry' },
          { id: 4, name: 'Hindi' },
          { id: 5, name: 'English' }
        ]}
        setEmail={setEmail}
      />

      <p>Email : {(email >= 0 && email <= 4) ? signUp[email].email : 'Not available'}</p>


    </>
  )
}

export default ParentComponents

