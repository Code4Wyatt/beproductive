'use client'

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"
import Breadcrumbs from "./Breadcrumbs"

function Header() {
    const { user } = useUser()

    return <div className="flex items-center text-white justify-between p-5 bg-gray-950 sm:w-full">
                {user && (
                    <h1 className="text-md md:text-2xl">BeProductive</h1>
                )}
                
                <div className="hidden md:flex">
                    <Breadcrumbs />
                </div>

                <div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>   
}

export default Header