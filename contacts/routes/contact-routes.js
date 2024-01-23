const express = require("express");
const router = express.Router();
const {
    getContact,
    createContact,
    updateContact,
    getParticularContact,
    deleteCOntact
}=require("../controller/contactController")

router.route('/').get(getContact).post(createContact);
router.route('/:id').put(updateContact).get(getParticularContact).delete(deleteCOntact);




module.exports = router;