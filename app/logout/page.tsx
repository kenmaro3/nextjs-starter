import Image from 'next/image'

export default function Logout() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            </div>



            <a href="/api/auth/logout">
                Logout
                {/* <h2 className={`mb-3 text-2xl font-semibold`}>
                        Login
                    </h2> */}
            </a>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            </div>
        </main>
    )
}
