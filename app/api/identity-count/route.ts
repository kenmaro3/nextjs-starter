/* Core */
import { getAccessToken } from '@auth0/nextjs-auth0'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
    const body = await req.json()
    const { amount = 1 } = body

    // simulate IO latency
    await new Promise((r) => setTimeout(r, 500))

    return NextResponse.json({ data: amount })
}

export async function GET(context) {
    const { req, res } = context
    const body = await req.json()
    const accessToken = await getAccessToken(req, res)

    return NextResponse.json({ data: amount })
}