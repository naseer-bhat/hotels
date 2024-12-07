import { Person } from "../models/Person.js"
export const addPerson= async(req,res)=>{
    try {
        const  data= req.body
const newPerson=  new Person(data)
  const response=await newPerson.save()
res.status(201).json({response})
    } catch (err) {
        if(err){
            console.log(`error while saving person`,err)
            res.status(500).json({msg: " internal server error"})
    
        }
    }
}
export const getAllPersons= async (req,res)=>{
try {
    const data= await Person.find()
    res.status(201).json({ data})
} catch (error) {
    if(err){
        console.log(`error while getting person`,err)
        res.status(500).json({msg: " internal server error"})

    }
}
}