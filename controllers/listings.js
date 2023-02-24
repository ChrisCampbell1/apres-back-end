const { Listing } = require('../models')
const cloudinary = require('cloudinary').v2

async function index(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function show(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function create(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function update(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function purchase(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function deleteListing(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function addPhoto(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  purchase,
  deleteListing,
  addPhoto
}
