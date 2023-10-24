const bcrypt=require('bcrypt');

const SALT=10;
const comparePasswordHash=(password,passwordHash)=>{

   return bcrypt.compare(password,passwordHash);
}

const generatePasswordHash=(password)=>{

    return bcrypt.hash(password,SALT);
}

module.exports={
    comparePasswordHash,
    generatePasswordHash,
}