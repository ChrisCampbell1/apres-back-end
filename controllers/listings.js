const { Listing, Profile } = require('../models')
const cloudinary = require('cloudinary').v2

async function index(req, res) {
  try {
    const listings = await Listing.findAll({
      include: [
        { model: Profile, as: "seller" },
        { model: Profile, as: "buyer" }
      ]
    })
    res.status(200).json(listings)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function indexCategory(req, res) {
  try {
    category = req.params.category
    category = category.replace(/-/g,' ')
    console.log(category)
    const listings = await Listing.findAll({
      where: {
        category: category
      },
      include: [
        { model: Profile, as: "seller" },
        { model: Profile, as: "buyer" }
      ]
    })
    res.status(200).json(listings)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function show(req, res) {
  try {
    const listing = await Listing.findByPk(req.params.id, {
      include: [
        { model: Profile, as: "seller" },
        { model: Profile, as: "buyer" }
      ]
    })
    res.status(200).json(listing)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function create(req, res) {
  try {
    req.body.sellerId = req.user.profile.id
    console.log(req.body, "BODY")
    const listing = await Listing.create(req.body)
    res.status(200).json(listing)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function update(req, res) {
  try {
    req.body.sellerId = req.user.profile.id
    const listing = await Listing.findByPk(req.params.id)
    listing.set(req.body)
    await listing.save()
    res.status(200).json(listing)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function purchase(req, res) {
  try {
    req.body.buyerId = req.user.profile.id
    req.body.status = "Sold"
    const listing = await Listing.findByPk(req.params.id)
    listing.set(req.body)
    await listing.save()
    res.status(200).json(listing)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function deleteListing(req, res) {
  try {
    const listing = await Listing.findByPk(req.params.id)
    await listing.destroy()
    res.status(200).json(listing)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err:error })
  }
}

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const profile = await Profile.findByPk(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url
    await profile.save()
    res.status(201).json(profile.photo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = {
  index,
  indexCategory,
  show,
  create,
  update,
  purchase,
  deleteListing,
  addPhoto
}
