import { getSession } from 'next-auth/react';
const handler = async (req, res) => {
    const session = await getSession({req})
    console.log(session);
    if(!session){
        res.status(401).json({
            error: 'Unauthenticated session'
        })
    }else{
        res.status(200).json({
            message: 'success',
            session
        })
    }
}

export default handler