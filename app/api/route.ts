import { GetServerSideProps } from 'next'
import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken } from '@auth0/nextjs-auth0';

// export async function GET() {
//     return NextResponse.json({ message: 'Hello, World!' })
// }

export async function GET(req: NextApiRequest) {
    console.log(req.body)
    const res = await getAccessToken({
    });
    console.log("=====================+!!!!!!")
    console.log(res)
    return NextResponse.json({ message: res })
}


// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         // Handle the POST request logic here
//         res.status(200).json({ message: 'POST request handled successfully' });
//     } else {
//         return NextResponse.json({ message: 'Hello, World!' })
//     }
// }