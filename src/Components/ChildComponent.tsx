import React from 'react'
import { MyChildProps } from './MainType'
const ChildComponent = ({ name, age, qualified, gender }: MyChildProps) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th colSpan={2} style={{ color: 'green', fontWeight: '700' }}>
              Child Component
            </th>
          </tr>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>Qualified</td>
            <td>{qualified.toString()}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default ChildComponent