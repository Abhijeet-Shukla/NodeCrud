const express = require('express')
const testEntity = require('../models/testEntity')
const router = express.Router()
const entity = require('../models/testEntity')

router.get('/', async(req, res) => {
    try{
        const testEntity = await entity.find()
        res.json(testEntity)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.get('/:name', async(req, res) => {
    try{
        const testEntity = await entity.find({name: req.params.name})
        res.json(testEntity)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.post('/', async(req, res) => {
    const u1 = new testEntity({
        name: req.body.name,
        tech: req.body.tech,
        working: req.body.working
    })

    try{
        const resp = await u1.save()

        res.json(resp)
    }catch(err){
        res.send('Error: ' + err)
    }

})

router.patch('/:name/:tech', async(req, res) => {
    try{
        const u1 = await entity.findOne({name: req.params.name, tech: req.params.tech})
        u1.working = req.body.working
        const resp = await u1.save()

        res.json(resp)
    }catch(err){
        res.send('Error: ' + err)
    }
})

module.exports = router
