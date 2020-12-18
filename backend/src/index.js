const express=require('express')
const cors=require('cors')
const app=express()
const PORT=process.env.PORT || 5000
const {db}=require('./db/db')

app.use(cors())
app.use(express.json())

app.get('/',(request,response)=>{
    response.send("Backend is working.")
})

app.post('/login',(request,response)=>{
    const email=request.body.email
    const password=request.body.password
    if(!email || !password){
        return response.status(400).send({error:'Invalid Fields'})
    }
    db((collection,error)=>{
        if(error){
            return response.status(500).send({error:'Server Error'})
        }
        collection.findOne({email,password},(error,result)=>{
            if(error){
                return response.status(400).send({error:'Invalid Credentials'})
            }
            if(result){
                return response.status(200).send({message:"log in successful"})
            }
            response.status(400).send({error:'Invalid Credentials'})
        })
    })


    // database.findOne({email,password},(error,result)=>{
    //     if(!error){
    //         console.log(result);
    //     }
    //     return
    // })
})


app.listen(PORT,()=>{
    console.log("Bakend started on port "+PORT);
})