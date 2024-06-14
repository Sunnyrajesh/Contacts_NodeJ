const express = require("express");

const router = express.Router();
const {getContact,CreateContact, updateContact,deleteContact} =require("../controller/contactController")


//create a contact
router.route("/").post(CreateContact);

//update contact
router.route("/:id").put(updateContact);

//delete
router.route("/:id").delete(deleteContact);

//get contact
router.route("/:id").get(getContact);
    
        

module.exports = router;
