import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState(0);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h4>Users: {users.length}</h4>
        </div>
    )
}