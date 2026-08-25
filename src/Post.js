import { useEffect, useState } from "react"

export default function Post() {
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    
    return (
        <div>
            <h2>Post Items</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}
