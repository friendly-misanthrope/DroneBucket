const Drone = require('../models/drone.model')
const jwt = require('jsonwebtoken')

module.exports = {
    // Get All
    findAllPhotos: (req, res) => {
        Drone.find()
            .then((allPhotos) => {
                res.status(200).json(allPhotos)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    // Logged in User Only
    allPhotosByLoggedInUser: async (req, res) => {
        try{
            const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });
            // console.log('DECODED JWT id', decodedJwt.payload._id);
            const user_id = decodedJwt.payload._id
            const photos = await Drone.find({user_id:user_id})
            res.status(200).json(photos)
        }
        catch(err){
            res.status(400).json(err)
        }
    },

    // Post ONE
    createPhoto: async (req, res) => {
        try {
            const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });
            console.log('DECODED JWT id', decodedJwt.payload._id);
            const photoWithUserId = { ...req.body, user_id: decodedJwt.payload._id };
            console.log('FINALIZED PHOTO', photoWithUserId);
            const newPhoto = await Drone.create(photoWithUserId);
            console.log('REQ BODY', req.body);
            res.status(201).json(newPhoto);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    // Get ONE 
    findonePhoto: (req, res) => {
        Drone.findOne({ _id: req.params.id })
            .then((onePhoto) => {
                res.status(200).json(onePhoto)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    // Put ONE
    updatePhoto: (req, res) => {
        Drone.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((updatedPhoto) => {
                res.status(200).json(updatedPhoto)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    // delete ONE
    deletePhoto: (req, res) => {
        Drone.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    }

}