'user strict';
var sql = require('./db.js');

//FavResident object constructor
var FavResident = function(FavResident){
    this.user_iduser = FavResident.user_iduser;
    this.resident_idresident = FavResident.resident_idresident;
    
};
//function createFavResident : permet d'inserer un résident dans la table favorite_resident
FavResident.createFavResident = function (newFavResident, result) {    
        sql.query("INSERT INTO favorite_resident set ?", newFavResident, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
//function getAllFavResident : récupere les résidents favoris
FavResident.getAllFavResident = function (result) {
        sql.query("Select * from favorite_resident", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('FavResidents : ', res);  

                 result(null, res);
                }
            });   
};
//function deleteFavResident : supprime un résident des favoris
FavResident.deleteFavResident = function(FavResident, result){
     sql.query("DELETE FROM favorite_resident WHERE user_iduser = ? AND resident_idresident = ? ", [FavResident.user_iduser,FavResident.resident_idresident], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= FavResident;