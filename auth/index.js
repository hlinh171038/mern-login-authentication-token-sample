import express from 'express'

const app = express()

app.post('/api/user/registry',(req,res)=>{
    res.send('registry');
})


app.listen(5000,()=>{
    console.log('this app is running in port 50000')
})