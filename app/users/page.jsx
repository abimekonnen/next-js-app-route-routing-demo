import Image from "next/image";

export default async function User() {
    const internateUrl = 'https://jsonplaceholder.typicode.com/users'
    const localUrl = 'http://localhost:3000/api'
    const res = await fetch(internateUrl, { cache: 'no-cache' })
    const users =  await res.json()

  return (
    <div className="flex  min-h-screen flex-col items-center ">
        <h1 className="mt-20">Users</h1>
        <ul  className="mt-20">
            {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  );
}
