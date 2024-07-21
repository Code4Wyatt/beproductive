import React, { FormEvent, useEffect, useState, useTransition } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import CollaborativeEditor from './CollaborativeEditor'
import useOwner from '@/lib/useOwner'
import DeleteDocument from './DeleteDocument'
import InviteUser from './InviteUser'
import ManageUsers from './ManageUsers'
import Avatars from './Avatars'

function Plan({ id }: { id: string }) {
    const [data, loading, error] = useDocumentData(doc(db, "documents", id))
    const [input, setInput] = useState("")
    const [isUpdating, startTransition] = useTransition()
    const isOwner = useOwner()

    useEffect(() => {
        if (data) {
            setInput(data.title)
        }
    }, [data])

    useEffect(() => {
        if (error) {
            console.error("Error fetching document:", error)
        }
    }, [error])

    const updateTitle = (e: FormEvent) => {
        e.preventDefault();

        if (input.trim()) {
            startTransition(async () => {
                await updateDoc(doc(db, "documents", id), {
                    title: input,
                })
            })
        }
    }

    return (
        <div className='flex-1 h-full bg-white p-5'>
            <div className='block md:flex max-w-6xl mx-auto justify-between pb-5'>
                <form className="flex flex-1 space-x-2" onSubmit={updateTitle}>
                    <Input value={input} onChange={(e) => setInput(e.target.value)} />

                    <Button disabled={isUpdating} type="submit">
                        {isUpdating ? "Updating..." : "Update"}
                    </Button>

                    <div className='hidden md:flex'>
                        {isOwner && (
                            <>
                                <div className='pr-1'>
                                    <InviteUser />
                                </div>
                                <div>
                                    <DeleteDocument />
                                </div>
                            </>
                        )}
                    </div>
                </form>
                <div className='flex space-x-3 md:hidden justify-end pt-1 md w-50'>
                    {isOwner && (
                        <>
                            <InviteUser />
                            <DeleteDocument />
                        </>
                    )}
                </div>
            </div>

            <div className='flex max-w-6xl mx-auto justify-between items-center mb-5'>
                <ManageUsers />

                <Avatars />
            </div>

            <hr className="pb-10" />
            <CollaborativeEditor />

        </div>)
}

export default Plan