import jwt from 'jsonwebtoken'

const secret = 'donotthing'
export const generatetoken = ({
    user
})=>{
    return jwt.sign({user},secret,{expiresIn:'30d'})
}