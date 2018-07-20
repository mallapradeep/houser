const ecpress = require('express');

module.exports={
    getAll: (req, res) => {
        const dbInstance  =req.app.get('db');
        dbInstance.get_houses()
        .then ( (houses) => res.status(200).send(houses) )
        .catch( err => res.status(500).send({ errorMessage: 'OOPS, error encountered on get'}));
        
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, address, city, state, zip} = req.body;

        dbInstance.create_houses([name, address, city, state, zip])
        .then ( () => res.status(200).send('all good') )
        .catch( err => res.status(500).send({ errorMessage: 'OOPS, error encountered on post'}));
    },

    delete: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_houses([ params.id ])
          .then( () => res.Status(200).send('all good') )
         .catch( err => res.status(500).send({errorMessage: "Oops, error encountered "}));
            console.log(err)
           
      }

}