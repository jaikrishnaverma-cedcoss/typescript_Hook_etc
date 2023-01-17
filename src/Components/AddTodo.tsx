import React, { useCallback, useState } from 'react'

const AddTodo = () => {
    const [state, setState] = useState<string[]>([])



    const setTodos = useCallback((e: any) => {
        e.preventDefault()
        let val: string = e.target.todo.value
        if (val) {
            state.push(val)
            setState([...state])
            e.target.reset()
        }
    }, [state]);


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th style={{ color: 'green' }}>Todo Lists</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map(x =>
                            <tr>
                                <td>{x}</td>
                            </tr>)
                    }
                </tbody>
            </table>
            <form onSubmit={setTodos}>
                <input type="text" name='todo' placeholder='Enter the todo' />
                <button type='submit'>Add todo to list</button>
            </form>
        </>
    )
}

export default AddTodo