const express = require('express');
const { validate, ValidationError, Joi } = require('express-validation')
const people=require('./data/people')
const facilities = require('./data/facilities')
const exposures = require('./data/exposures')
const ResponseDecorator = require('./util/ResponseDecorator')

const app = express();

const personValidation = {
    params: Joi.object({
        personId: Joi.number().required().min(1).max(10).message("personId is required and it should be between 1 to 1o")
    })
}
app.get('/person/:personId', validate(personValidation,{},{}), (req,res)=>{
    const personId = parseInt(req.params.personId,10);
    const person = people.find(p => p.id === personId);
    if(person) {
        res.json(ResponseDecorator("200",true,"successfully find the person",person))
    }
    else {
        res.json(ResponseDecorator("200",false,"person doesn't exist"))
    }
})


const facilityValidation = {
    params:Joi.object({
        facilityId: Joi.required()
    })
}
app.get('/facility/:facilityId',validate(facilityValidation,{},{}),(req,res)=>{
    const facilityId = parseInt(req.params.facilityId,10);
    const facility = facilities.find(f => f.id === facilityId);
    if(facility){
        res.json(ResponseDecorator("200",true,"successfully find the facilities",facility))
    }else {
        res.json(ResponseDecorator("200",false,"facility doesn't exist"))
    }
})

const exposureValidation = {
    params:Joi.object({
        exposureId: Joi.required()
    })
}
app.get('/exposure/:exposureId',validate(exposureValidation,{},{}),(req,res)=>{
    const exposureId = parseInt(req.params.exposureId,10);
    const exposure = exposures.find(e => e.id === exposureId);
    if(exposure){
        res.json(ResponseDecorator("200",true,"successfully find the facilities",exposure
        ))
    }else {
        res.json(ResponseDecorator("200",false,"exposure doesn't exist"))
    }

})

app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
  });


app.listen(8000,()=>{
    console.log(`Server listen on 8000`)
})