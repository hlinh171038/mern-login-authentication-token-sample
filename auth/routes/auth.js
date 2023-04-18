import express from 'express'


export const authRouter = express.Router()

authRouter.post('/registry',(req,res)=>{
 res.send('registry')
})

