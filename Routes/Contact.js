const express = require('express')

const { AddContact, GetAllContacts, GetOneContact, DeleteContact, UpdateContact } = require('../Controllers/Contact')

const  contactRouter = express.Router()

contactRouter.post('/addContact',AddContact)

contactRouter.get('/getAllContacts',GetAllContacts)

contactRouter.get('/getOneContact/:id',GetOneContact)

contactRouter.delete('/deleteContact/:id',DeleteContact)

contactRouter.put('/updateContact/:id',UpdateContact)

module.exports = contactRouter