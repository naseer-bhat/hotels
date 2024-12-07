import { MenuItem } from "../models/menu.js";
export const  addMenu= async(req,res)=>{
try {
    const data= req.body
    const newMenuItem= new MenuItem(data)
    const response = await newMenuItem.save()
    res.status(201).json({msg: 'menu created',response})
} catch (error) {
    if(error){
        console.log(`error while creating menu`,error)
        res.status(500).json({msg: " internal server error"})

    }
}
}
export const  getMenu= async(req,res)=>{

}
