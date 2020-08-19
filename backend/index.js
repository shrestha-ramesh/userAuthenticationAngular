const express=require('express')
const cors=require('cors')
const app=express()
const PORT=process.env.PORT || 5000


app.use(cors())
app.use(express.json())

app.get('/',(request,response)=>{
    response.send("Backend is working.")
})

app.listen(PORT,()=>{
    console.log("Bakend started on port "+PORT);
})