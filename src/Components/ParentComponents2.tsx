import React from 'react'
import AddTodo from './AddTodo'
import Counter from './Counter'

const ParentComponents2 = () => {
  return (
    <>
      <div className="row">
        <div className="col b taskone">
          <h2>Todo Component</h2>
          <AddTodo />
        </div>
        <div className="col b tasktwo">
          <h2>Counter Component</h2>
          <Counter />
        </div>
      </div>
    </>
  )
}

export default ParentComponents2