'use client'

import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { useEffect } from 'react'
import Header from '../components/header'

// import { useAuth0 } from "@auth0/auth0-react";

export default function User() {
    const { user, error, isLoading } = useUser()
    // const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;
    useEffect(() => {
        console.log(`user1: ${user}`);
        console.log(`user2: ${user?.email}`);
        console.log(`user3: ${user?.name}`);
        console.log(`sub: ${user?.sub}`);

        (async () => {
            const res = await getToken()
            console.log(res)
        })()


    }, [user])

    const getToken = async () => {
        const response = await fetch('http://localhost:3000/api', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        console.log("res")
        return response.json()
    }


    return (
        user && (


            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Header />
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                </div>

                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>

                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                </div>
            </main>
        )
    )
}

