const camera_model = require('../model/camera.model');
const cameraNetwork_model = require('../model/cameraNetwork.model');

class userController {
    // api check
    async index(req, res) {
        res.send("hello world")
    }

    // -----CAMERA SESSION CRUD START----//

    // camera post model api
    async cameraPostModel(req, res) {
        try {
            const { name, description, url } = req.body;
            if (!name) {
                return res.status(201).send({ message: "name is required", status: 201 })
            }
            if (!description) {
                return res.status(201).send({ message: "description is required", status: 201 })
            }
            if (!url) {
                return res.status(201).send({ message: "url is required", status: 201 })
            }
            const cameraDataAdd = await camera_model.create(req.body);
            if (cameraDataAdd && cameraDataAdd._id) {
                console.log(cameraDataAdd._id);
                return res.status(200).send({ status: 200, data: cameraDataAdd, message: "Camera data is add successfully" })
            } else {
                return res.status(400).send({ status: 400, data: {}, message: "Camera data is add failed" })
            }
        } catch (error) {
            console.log('cameraPostModel error :', error);
            return res.status(400).send({ status: 400, message: "cameraPostModel error", data: error.message })
        }
    }

    // cameraUpdate
    async cameraUpdate(req, res) {
        try {
            const { id } = req.body;
            const cameraUpdated = await camera_model.findByIdAndUpdate(id, {
                name: req?.body?.name,
                description: req?.body?.description,
                url: req?.body?.url,

            }, { new: true })
            if (cameraUpdated && cameraUpdated._id) {
                return res.status(200).send({ status: 200, data: cameraUpdated, message: "Camera  data is update successfully" })

            } else {
                return res.status(400).send({ status: 400, data: {}, message: "Camera  data is update failed" })

            }
        } catch (error) {
            console.log('cameraUpdate error :', error);
            return res.status(400).send({ status: 400, message: "cameraUpdate error", data: error.message });
        }
    }

    // cameraDelete
    async cameraDelete(req, res) {
        try {
            const camerasID = req.params.id;

            const deleteQuery = { cameras: camerasID };
            // const result = await movies.deleteMany(query);
            const cameraDelete = await cameraNetwork_model.deleteMany(deleteQuery);
            console.log(cameraDelete, "cameras");

            if (cameraDelete) {
                return res.status(200).send({ status: 200, data: await camera_model.findByIdAndDelete({_id:camerasID}), message: "Camera  data is delete successfully" })
            } else {
                return res.status(400).send({ status: 400, data: {}, message: "Camera  data is delete failed" })
            }
        } catch (error) {
            console.log('cameraDelete error :', error);
            return res.status(400).send({ status: 400, message: "cameraDelete error", data: error.message });
        }
    }

    // camera_details
    async camera_details(req, res) {
        try {
            const camera_details = await camera_model.find({});

            if (camera_details) {
                return res.status(200).send({ status: 200, data: camera_details, message: "Camera  data are get successfully" })
            } else {
                return res.status(400).send({ status: 400, data: {}, message: "Camera  data are get failed" })
            }
        } catch (error) {
            console.log('camera_details error :', error);
            return res.status(400).send({ status: 400, message: "camera_details error", data: error.message });
        }
    }

    // -----CAMERA SESSION CRUD END----//



    // -----CAMERA NETWORK SESSION CRUD START----//

    //camera Network Post Model
    async cameraNetworkPostModel(req, res) {
        try {
            const { name, descriptions, cameras } = req.body;
            if (!name) {
                return res.status(201).send({ message: "name is required", status: 201 })
            }
            if (!descriptions) {
                return res.status(201).send({ message: "descriptions is required", status: 201 })
            }
            if (!cameras) {
                return res.status(201).send({ message: "cameras is required", status: 201 })
            }
            const cameraDataAdd = await cameraNetwork_model.create(req.body);
            if (cameraDataAdd && cameraDataAdd._id) {
                console.log(cameraDataAdd._id);
                return res.status(200).send({ status: 200, data: cameraDataAdd, message: "Camera Network data is add successfully" })
            } else {
                return res.status(400).send({ status: 400, data: {}, message: "Camera Network data is add failed" })
            }
        } catch (error) {
            console.log('cameraNetworkPostModel error :', error);
            return res.status(400).send({ status: 400, message: "cameraNetworkPostModel error", data: error.message })
        }
    }

    // cameraNetworkUpdate
    async cameraNetworkUpdate(req, res) {
        try {
            const { id } = req.body;
            const cameraNetworkUpdated = await cameraNetwork_model.findByIdAndUpdate(id, {
                name: req?.body?.name,
                descriptions: req?.body?.descriptions,
                cameras: req?.body?.cameras,

            }, { new: true })
            if (cameraNetworkUpdated && cameraNetworkUpdated._id) {
                return res.status(200).send({ status: 200, data: cameraNetworkUpdated, message: "Camera Network data is update successfully" })

            } else {
                return res.status(400).send({ status: 400, data: {}, message: "Camera Network data is update failed" })

            }
        } catch (error) {
            console.log('cameraNetworkUpdate error :', error);
            return res.status(400).send({ status: 400, message: "cameraNetworkUpdate error", data: error.message });
        }
    }

    // cameraNetworkDelete
    async cameraNetworkDelete(req, res) {
        try {
            const ID = req.params.id
            const cameraNetworkDeleted = await cameraNetwork_model.findByIdAndDelete({ _id: ID });

            if (cameraNetworkDeleted && cameraNetworkDeleted._id) {
                return res.status(200).send({ status: 200, data: cameraNetworkDeleted, message: "Camera Network data is deleted successfully" })
            } else {
                return res.status(400).send({ status: 400, data: {}, message: "Camera Network data is deleted failed" })
            }
        } catch (error) {
            console.log('cameraNetworkDelete error :', error);
            return res.status(400).send({ status: 400, message: "cameraNetworkDelete error", data: error.message });
        }
    }

    // cameraNetwork_details
    async cameraNetwork_details(req, res) {
        try {
            const cameraNetwork_details = await cameraNetwork_model.find({});

            if (cameraNetwork_details) {
                return res.status(200).send({ status: 200, data: cameraNetwork_details, message: "Camera Network data are get successfully" })
            } else {
                return res.status(400).send({ status: 400, data: {}, message: "Camera Network data are get failed" })
            }
        } catch (error) {
            console.log('cameraNetwork_details error :', error);
            return res.status(400).send({ status: 400, message: "cameraNetwork_details error", data: error.message });
        }
    }

    // -----CAMERA NETWORK SESSION CRUD END----//

}

// EXPORTS CONTROLLER SESSION
module.exports = new userController