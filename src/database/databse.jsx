// import mongoose from "mongoose";

// export const DbConnect=async()=>{
//     await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL)
//     let connection=mongoose.connection
//     connection.on('connected',()=>{
//         console.log('database connected successfully')
//     })
//     connection.on('error',(err)=>{
//         console.log('database connected' + err)
//         process.exit(1)
//     })
// }


import mongoose from 'mongoose';

const connection = {};

export const DbConnect=async()=> {
  if (connection.isConnected) {
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);

  connection.isConnected = db.connections[0].readyState;
}

 

