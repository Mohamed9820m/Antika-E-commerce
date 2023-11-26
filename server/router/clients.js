const express = require('express');
const router = express.Router();
const ClientController= require ("../controllers/clients")

function checkClientRole(req, res, next) {
    if (req.user && req.user.role === 'Client') {
      next();
    } else {
      return res.status(400).json({ error: 'Client role required' });
    }
  }

router.get('/',  /*  middleware ,controller */ClientController.getAll);
router.get('/:id',  /*  middleware ,controller */ClientController.getOne);
router.post('/creation',  /*  middleware ,controller */ClientController.createClient);
router.put('/:id',  /*  middleware ,controller */ClientController.updateClient);
router.delete('/:id',  /*  middleware ,controller */ClientController.deleteClient);




module.exports = router;
