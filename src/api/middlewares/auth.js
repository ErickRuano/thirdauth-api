
// import Cookies from 'cookies'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const findUser = async ({ wallet }) => {

    return await prisma.user.findUnique({
        where: {
            wallet,
        },
        // include : {
        // 	projects : true
        // }
    })
}

const authMiddleware = async (req, res) => {

    
    try {
        // verify json web token
        // const user = {
        //     wallet: req.body.wallet,
        // }
        
        // const dbUser = await findUser(user)

        return {
            wallet: "x0",
            id: "9c8e3e34-38b4-4dd9-9950-b7790a2e73a4",
        };
    } catch (err) {
        res.status(401).send('Unauthorized').end()
        return null
    }

}

export const auth = authMiddleware