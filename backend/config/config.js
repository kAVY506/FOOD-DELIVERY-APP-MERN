require('dotenv').config();

module.exports = {
    MONGODB_URI:"mongodb+srv://kavyareddyamanaganti:kavyareddyamanaganti@cluster0.fgrgh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 " ,

JWT_SECRET:"hello",
    PORT: process.env.PORT || 3001,
};
