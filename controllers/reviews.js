const Campground = require('../models/campground');
const Review = require('../models/review')

module.exports.createReview =  async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review)
    review.author = req.user._id
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    req.flash('success', 'Created new review successfully')
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteReview = async (req,res) => {
    const {id, reviewId} = req.params
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}) //pull just pulling out that id of reviews
    await Review.findById(req.params.reviewId)
    req.flash('success', 'Deleted a review successfully')
    res.redirect(`/campgrounds/${id}`)
}

