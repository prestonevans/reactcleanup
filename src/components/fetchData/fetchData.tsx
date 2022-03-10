import { ReactNode, useEffect, useState } from 'react'
import { json } from 'stream/consumers';
import './fetchData.css'

const url = 'http://api.github.com/users';

export default function FetchData() {
    const [users, setUsers] = useState<any[] | undefined>()

    async function getData() {
        const results = await fetch(url)
        const data = await results.json()
        setUsers(data)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <h2>Github Users</h2>
            <ul className='users'>
                {users?.map((user) => {
                    const {id,login,avatar_url,html_url} = user
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h3>{login}</h3>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}