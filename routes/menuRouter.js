import { Router } from "express";
import { getMenu,addMenu } from "../controller/menuController.js";
// import { get } from "lodash";
const menuRouter= Router()
menuRouter.get('/getall',getMenu)
export default menuRouter