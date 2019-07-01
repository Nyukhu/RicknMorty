'use strict';
module.exports = function (app) {
    //ajout de cors pour le cross-origin
    var cors = require('cors');
    app.use(cors());
    var favoriteResidents = require('../controllers/favResidentController');
    var favoriteLocation = require('../controllers/favLocationController');

    //Routes
    app.route('/residents')
        .get(favoriteResidents.list_all_favResidents)
        .post(favoriteResidents.create_a_favResident)
        .delete(favoriteResidents.delete_a_favResident);

    app.route('/location')
        .get(favoriteLocation.list_all_FavLocations)
        .post(favoriteLocation.create_a_FavLocation)
        .delete(favoriteLocation.delete_a_FavLocation);
};