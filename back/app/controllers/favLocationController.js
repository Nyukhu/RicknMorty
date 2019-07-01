'use strict';

var FavLocation = require('../model/favLocationModel.js');

exports.list_all_FavLocations = function (req, res) {
    FavLocation.getAllFavLocation(function (err, FavLocation) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', FavLocation);
        res.send(FavLocation);
    });
};

exports.create_a_FavLocation = function (req, res) {
    var new_FavLocation = new FavLocation(req.body);
    console.log(req.body)
    //handles null error 
    if (!new_FavLocation.user_iduser || !new_FavLocation.location_idlocation) {

        res.status(400).send({ error: true, message: 'Please provide user_id/location_idlocation' });

    }
    else {

        FavLocation.createFavLocation(new_FavLocation, function (err, FavLocation) {

            if (err)
                res.send(err);
            res.json(FavLocation);
        });
    }
};

exports.delete_a_FavLocation = function (req, res) {

    var new_FavLocation = new FavLocation(req.body);
    console.log(req.body)
    //handles null error 
    if (!new_FavLocation.user_iduser || !new_FavLocation.location_idlocation) {

        res.status(400).send({ error: true, message: 'Please provide user_id/location_idlocation' });

    }
    else {
        FavLocation.deleteFavLocation(new_FavLocation, function (err, new_FavLocation) {
            if (err)
                res.send(err);
            res.json({ message: 'FavLocation successfully deleted' });
        });
    }
};