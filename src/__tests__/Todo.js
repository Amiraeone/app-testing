import { fireEvent, render, screen } from "@testing-library/react"
import Todo from "../Todo"
import userEvent from '@testing-library/user-event'
import { act } from "react"

describe('todos test', () => {
    // test('add todo', () => {
    //     render(<Todo />)

    //     const fistData = 'firt Data'

    //     const input = screen.getByPlaceholderText('task')
    //     const button = screen.getByText(/add todo/i)

    //     fireEvent.change(input, { target: { value: fistData } })
    //     fireEvent.click(button)

    //     screen.getByText(fistData)
    // })

    test('add todo with user event', async () => {
        render(<Todo />)

        const input = screen.getByPlaceholderText('task')
        const button = screen.getByText(/add todo/i)
        const list = screen.getByTestId('todos-list')

        const fistData = 'firt Data'

        await act(() => {
            userEvent.type(input, fistData)
            userEvent.click(button)
        })

        screen.getByText(fistData)  
        expect(list.childElementCount).toBe(1)
    })
})