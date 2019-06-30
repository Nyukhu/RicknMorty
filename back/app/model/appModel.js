'user strict';
var sql = require('./db.js');

//FavResident object constructor
var FavResident = function(FavResident){
    this.user_iduser = FavResident.user_iduser;
    this.resident_idresident = FavResident.resident_idresident;
    
};
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
FavResident.getFavResidentById = function (FavResident, result) {
        sql.query("Select favorite_resident from favorite_resident where user_iduser = ? AND resident_idresident = ? ", [FavResident.user_iduser,FavResident.resident_idresident], function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
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

FavResident.remove = function(FavResident, result){
     sql.query("DELETE FROM FavResidents WHERE user_iduser = ? AND resident_idresident = ?", [FavResident.user_iduser,FavResident.resident_idresident], function (err, res) {

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