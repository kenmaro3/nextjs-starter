import { handleAuth, handleLogin, handleProfile, handleCallback, getAccessToken } from '@auth0/nextjs-auth0';

export const GET = handleAuth({

    // callback: handleCallback({
    //     afterCallback: async (req, res, session, state) => {
    //         console.log("here!!!")
    //         console.log(session)
    //         if (session.user) {
    //             // In production this part is done by the Auth0 post-registration action
    //             // if (session.user.email === session.user.name) {
    //             //     state.returnTo = process.env.AUTH0_BASE_URL + '/profile'
    //             // }
    //         }

    //         // console.log("here2")
    //         // console.log(`req: ${req.body}`)
    //         // console.log(`session: ${session.accessToken}`)
    //         // console.log(`session: ${session.idToken}`)
    //         // console.log(`state accessToken: ${state?.accessToken}`)
    //         // console.log(`state idToken: ${state?.idToken}`)
    //         // try {
    //         //     const res_return = await fetch(`${process.env.API_ENDPOINT}/create_user`, {
    //         //         method: 'POST',
    //         //         headers: {
    //         //             Authorization: `Bearer ${session.accessToken}`,
    //         //             'Content-Type': 'application/json'
    //         //         },
    //         //         // body: JSON.stringify({
    //         //         //     idpId: session.user.sub,
    //         //         //     email: session.user.email
    //         //         // })
    //         //     })
    //         //     console.log(`here3: ${res_return}`)
    //         // } catch (e) {
    //         //     console.error(`Unexpected error registering user: ${e}`)
    //         // }


    //         session.returnTo = process.env.AUTH0_BASE_URL + '/user'
    //         return session;
    //     }
    // }),
    // login: handleLogin({
    //     authorizationParams: {
    //         scope: 'openid email profile offline_access'
    //     }
    // })
});