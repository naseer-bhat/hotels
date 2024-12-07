import { Router } from "express";
import { addPerson,getAllPersons } from "../controller/personController.js";
const personRouter= Router()
personRouter.get('/getall',getAllPersons)
personRouter.post('/adduser',addPerson)
export default personRouter