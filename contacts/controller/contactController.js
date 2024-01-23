const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
//Mongo gives promise so async is used and so habe to use try catch but expressasync handler is better way


const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Get contacts" });
})
const createContact = asyncHandler(async(req, res) => {
    console.log("body", req.body);
    if (!req.body.name) {
        res.status(400);
        throw new Error('Error');
    }
    res.status(200).json({ message: "Create contact" });
})
const updateContact = asyncHandler(async(req, res) => {
    res.status(201).json({ message: `Updates ${req.params.id}` });
})
const getParticularContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Get contacts ${req.params.id}` });
})
const deleteCOntact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete contacts ${req.params.id}` });
})
module.exports = { getContact, createContact, updateContact, getParticularContact, deleteCOntact };