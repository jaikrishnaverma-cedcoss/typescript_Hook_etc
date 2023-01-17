import React, { useRef } from 'react'
import { Mybook, Mybooks } from './MainType'
const Marks = ({ marks, books, setEmail }: Mybooks) => {
  const inpu = useRef<HTMLInputElement>(null!)


  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan={3} style={{ color: 'green', fontWeight: '700' }}>Marks Component</th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((x: Mybook, i: number) => <tr>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{marks[i]}</td>
            </tr>)
          }
        </tbody>
      </table>
      <div>
        <p style={{ fontSize: '13px', margin: '0' }}>id is from 0 to 4 </p>
        <input ref={inpu} onKeyUp={(e: any) => setEmail(parseInt(e.target.value))} type="number" placeholder='enter Id of student to get email' />

      </div>
    </>
  )
}

export default Marks