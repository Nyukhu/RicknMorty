'use strict';

var FavResident = require('../model/appModel.js');

exports.list_all_favResidents = function(req, res) {
  FavResident.getAllFavResident(function(err, FavResident) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', FavResident);
    res.send(FavResident);
  });
};



exports.create_a_favResident = function(req, res) {
  var new_FavResident = new FavResident(req.body);
  console.log(req.body)
  //handles null error 
   if(!new_FavResident.user_iduser || !new_FavResident.resident_idresident){

            res.status(400).send({ error:true, message: 'Please provide user_id/resident_id' });

        }
else{
  
  FavResident.createFavResident(new_FavResident, function(err, FavResident) {
    
    if (err)
      res.send(err);
    res.json(FavResident);
  });
}
};


exports.read_a_favResident = function(req, res) {
  FavResident.getFavResidentById(FavResident, function(err, FavResident) {
    if (err)
      res.send(err);
    res.json(FavResident);
  });
};

exports.delete_a_favResident = function(req, res) {


  FavResident.remove( req.params.FavResidentId, function(err, FavResident) {
    if (err)
      res.send(err);
    res.json({ message: 'FavResident successfully deleted' });
  });
};