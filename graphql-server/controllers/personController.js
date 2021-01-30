const fetch = require('node-fetch');
const {personEndpoint} = require('../endpoints')
const getPerson = async(personId) => {
    try{
        const res = await fetch(`${personEndpoint}/${personId}`);
        const {success, data, message} = await res.json();
        if(success){
            return data;
        }else {
            throw `Something bad happen`;
        }
    }
    catch(err){
        throw  err
    }   
}

module.exports = {
    getPerson
}