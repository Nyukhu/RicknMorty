'user strict';
var sql = require('./db.js');

//FavLocation constructeur
var FavLocation = function (FavLocation) {
    this.user_iduser = FavLocation.user_iduser;
    this.location_idlocation = FavLocation.location_idlocation;

};
//function createFavLocation : permet d'inserer une location dans la table favorite_location
FavLocation.createFavLocation = function (newFavLocation, result) {
    sql.query("INSERT INTO favorite_location set ?", newFavLocation, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
//function getAllFavLocation : técupere les locations favories
FavLocation.getAllFavLocation = function (result) {
    sql.query("Select * from favorite_location", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('FavLocations : ', res);

            result(null, res);
        }
    });
};

//function deleteFavLocation : supprime une location des favoris
FavLocation.deleteFavLocation = function (FavLocation, result) {
    sql.query("DELETE FROM favorite_location WHERE user_iduser = ? AND location_idlocation = ? ", [FavLocation.user_iduser, FavLocation.location_idlocation], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = FavLocation;