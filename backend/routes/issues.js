//Import the modules 
const express = require('express'); 
const issueController = require('../controllers/issues');
//Create the router 
const router = express.Router(); 
//Map each endpoint to the controller 
router.get('/', issueController.listIssues); 
router.post('/', issueController.createIssue); 
router.patch('/:id/status', issueController.updateIssueStatus); 
//Export the routes
module.exports = router;