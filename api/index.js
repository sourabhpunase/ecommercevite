import express from 'express';

const app=express();
app.use(express.json());


app.listen(3000,()=>{
    console.log('server running on 3000')
});


app.use((err,req,res,next)=>{
    const status=err.statusCode||500;
    const message=err.message||"internal server error"
    return res.status(status).json({
        success:false,
        status,
        message,
    })
})