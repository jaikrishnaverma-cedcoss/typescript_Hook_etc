
export type MyChildProps = {
    name: string
    age: number
    qualified: boolean
    gender: 'male' | 'female'
}
export type Mybooks = {
    books:
    {
        id: number
        name: string
    }[]
    marks: number[]
    setEmail: (e: number) => void
}

export type Mybook =
    {
        id: number
        name: string
    }

