// @des get all contacts
// @routes GET /api/contacts
// @access is public
const asyncHandler = require("express-async-handler");
const Contact = require("../Models/contactModel")

const CreateContact = asyncHandler(async(req, res) => {
    console.log("req body is ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields required");
    }
    const contacts = await Contact.create({
        name,email,phone
    });
    res.status(201).json(contacts);
});


const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContacts = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContacts);
});


const deleteContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(400);
        throw new Error("contact not found");
    }
    
  const deletedContact = await Contact.deleteOne({ _id: req.params.id });
   res.status(200).json(deletedContact);
});

const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(400);
    }
    res.status(200).json(contacts);
});

module.exports = { getContact, CreateContact, updateContact, deleteContact };
