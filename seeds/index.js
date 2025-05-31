const mongoose = require('mongoose')
const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on("error" , console.error.bind(console, "connection error:"))
db.once("open", () =>{
    console.log("Database connected")
})

const sample = (array) =>  array[Math.floor(Math.random()*array.length)];


const seedDB = async () => {
    await Campground.deleteMany({})
    for(let i = 0; i < 200; i++){
        const random1000 = Math.floor(Math.random()*1000);
        const price = Math.floor(Math.random()*20) +10;
        const camp = new Campground({
            author: '68385bfa2e61ba753dbbbe50',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, accusamus earum harum eius voluptatem ipsum facilis assumenda voluptatibus quidem, voluptate deserunt debitis maxime delectus nemo. Odio alias dolor optio rerum?',
            price,
            geometry: { 
                    type: 'Point',
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ] 
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dic2ipo0j/image/upload/v1748646365/YelpCamp/e55o5qggrkxmr1uh00vr.jpg',
                    filename: 'YelpCamp/e55o5qggrkxmr1uh00vr',
                },
                {
                    url: 'https://res.cloudinary.com/dic2ipo0j/image/upload/v1748646365/YelpCamp/gk9t7p7mzo4monrnob45.jpg',
                    filename: 'YelpCamp/gk9t7p7mzo4monrnob45',
                },
                {
                    url: 'https://res.cloudinary.com/dic2ipo0j/image/upload/v1748646364/YelpCamp/yxdqer89hsdsnoc21rsp.jpg',
                    filename: 'YelpCamp/yxdqer89hsdsnoc21rsp',
                }
            ]
        })
        await camp.save()
    }
}
 
seedDB().then(() => {
    mongoose.connection.close()
})
