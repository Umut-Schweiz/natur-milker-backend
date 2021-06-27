import express from 'express';
var router = express.Router();
import * as service from '../services/ProducerService.js'


/* GET all producer listing. */
router.get('/', async function(req, res, next) {
  const allProducer = await service.getAllProducer();
  res.send(allProducer);
});

/** GET a producer by id */
router.get('/:id', async function(req, res, next) {
  let producerId = req.params.id;
  const producer = await service.getProducerById(producerId)
  res.send(producer);
});


/** Add a new producer */
router.post('/', async function(req, res, next) {
  const newProducer = req.body; 
  const createdProducer = await service.createProducer(newProducer);
  res.status(201).send(createdProducer);
});


/** delete a producer by id */
router.delete('/:id', async function(req, res, next) {
  let producerId = req.params.id;
  await service.deleteProducer(producerId);
  res.status(200).send({});
});


/** update a producer by id */

router.put('/:id', async function(req, res, next) {
  let producerId = req.params.id;
  let producerToBeUpdated = req.body;
  let updatedProducer = await service.updateProducer(producerId, producerToBeUpdated);
  res.status(200).send(updatedProducer);
});

export default router;