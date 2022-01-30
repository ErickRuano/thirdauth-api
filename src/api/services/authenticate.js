import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const findOrCreateUser = async ({ wallet }) => {

    const found = await prisma.user.findUnique({
        where: {
            wallet,
        },
        // include : {
        // 	projects : true
        // }
    })

    if (!found) {
        const newUser = {
            wallet,
        }
        return await prisma.user.create({ data: newUser })
    } else {
        return found
    }
}

const auth = async (wallet, signature, message) => {
    try {
        // verify signature here, else return 401
        console.log('signature was verified successfully');
    } catch (err) {
        res.status(401).send('Unauthorized').end()
        return null
    }

    const user = {
        wallet,
    }

    const dbUser = await findOrCreateUser(user)
    return { ...dbUser }
}

export default auth;
