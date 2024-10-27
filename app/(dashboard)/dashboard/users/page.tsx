import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1>Dashboard of Users</h1>

        <ul className='mt-10'>
            <Link href="/dashboard/users/1">
                <li>User - 1</li>
            </Link>
            <Link href="/dashboard/users/2">
                <li>User - 2</li>
            </Link>
            <Link href="/dashboard/users/3">
                <li>User - 3</li>
            </Link>
            <Link href="/dashboard/users/4">
                <li>User - 4</li>
            </Link>
        </ul>

    </div>
  )
}

export default page