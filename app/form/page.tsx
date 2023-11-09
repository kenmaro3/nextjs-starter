'use client'
import Image from 'next/image'
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Form() {
    const call = async () => {
        const res = await axios.get("/api")
        console.log(res)
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Button
                onClick={() => call()}
                variant="text">Call</Button>

        </main>
    )
}
