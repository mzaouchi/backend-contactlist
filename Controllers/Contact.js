const Contact = require("../Models/Contact")

exports.AddContact=async(req,res)=>{
    try {

        const found = await Contact.findOne({email : req.body.email})

        if (found) {
             return res.status(400).send('Email already exists')
        }

        // if(req.body.age < 18){
        //      return res.status(400).send('Saif o5roj')
        // }

        const newContactToAdd = new Contact(req.body)

        await newContactToAdd.save()

        res.status(200).send({msg : 'Contact added', newContactToAdd})
    } catch (error) {
        res.status(500).send('Could not add Contact')
    }
}

exports.GetAllContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({msg : 'Contact list', contacts})
    } catch (error) {
        res.status(500).send('Could not get contacts')
    }
}

exports.GetOneContact=async(req,res)=>{
    try {
        const {id} = req.params

        const oneContact = await Contact.findById(id)

        res.status(200).send({msg : 'Contact Details', oneContact})
    } catch (error) {
        res.status(500).send('Could not get Contact')
    }
}

exports.DeleteContact=async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndDelete(id)

        res.status(200).send('Contact deleted')
    } catch (error) {
        res.status(500).send('Could not delete contact')
    }
}

exports.UpdateContact=async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('Contact updated')
    } catch (error) {
        res.status(500).send('Could not update Contact')
    }
}