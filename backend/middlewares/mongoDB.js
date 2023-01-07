const mongoose = require('mongoose') //db
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://aparnasj:aparnasj15@cluster0.fpnhbfk.mongodb.net/Internship?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})