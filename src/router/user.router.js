const express = require('express');
const user_controller = require('../webservices/user.controller')
const route = express.Router();




// GET METHODS
route.get('/', user_controller.index);

// camera
route.get('/camera-delete/:id', user_controller.cameraDelete);
route.get('/camera-details', user_controller.camera_details);

// camera-network
route.get('/camera-network-delete/:id', user_controller.cameraNetworkDelete);
route.get('/camera-network-details', user_controller.cameraNetwork_details);



//POST METHODS 

// camera
route.post('/camera-post-model', user_controller.cameraPostModel);
route.post('/camera-update', user_controller.cameraUpdate);


// camera-network
route.post('/camera-network-post-model', user_controller.cameraNetworkPostModel);
route.post('/camera-network-update', user_controller.cameraNetworkUpdate);



// EXPORTS SECTION
module.exports = route;