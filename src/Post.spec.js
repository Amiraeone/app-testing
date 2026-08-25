import { act } from "react"
import { createRoot } from "react-dom/client"
import Post from "./Post"

let container, root
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)

    root = createRoot(container)
})

afterEach(async () => {
    await act(() => {
        root.unmount()
    })

    container.remove()
    container = null
})

describe('post test', () => {
    test('fetch test', async () => {
        const fackeData = {
            id: 1,
            title: 'post title',
            body: 'post body'
        }

        jest.spyOn(global, 'fetch').mockImplementation(() => {
            return Promise.resolve({
                json: () => {
                    return Promise.resolve(fackeData)
                }
            })
        })

        await act(() => {
            root.render(<Post />)
        })

        expect(container.querySelector('h2').textContent).toBe('Post Items')
        expect(container.querySelector('h3').textContent).toBe(fackeData.title)
        expect(container.querySelector('p').textContent).toBe(fackeData.body)

        global.fetch.mockRestore() 
    })
})