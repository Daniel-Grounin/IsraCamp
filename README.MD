# IsraCamp

IsraCamp is a full-stack web application where users can discover, create, and review campgrounds across Israel. It includes features such as user authentication, map integration, and CRUD functionality for camps and reviews. Inspired by the _YelpCamp_ project from Colt Steele's Web Developer Bootcamp, with added customizations.

## Features

- View all campgrounds and reviews (public access)
- Create, edit, and delete your own campgrounds
- Add reviews to any campground
- Integrated interactive maps using **Mapbox**
- Secure user authentication with **Passport.js**
- Persistent data storage with **MongoDB Atlas**
- Responsive design using **Bootstrap 5**

## Technologies Used

| Layer        | Tech Stack                                    |
| ------------ | --------------------------------------------- |
| Frontend     | HTML5, CSS3, Bootstrap, jQuery                |
| Backend      | Node.js, Express.js                           |
| Database     | MongoDB Atlas, Mongoose ODM                   |
| Auth & AuthZ | Passport.js (Local Strategy), Express-Session |
| Maps         | Mapbox GL JS                                  |
| Deployment   | Deployed to Heroku / Render                   |

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/isracamp.git
cd isracamp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add:

````env
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_connection_string
````

### 4. Run the App

```bash
npm start
```

## Screenshots

_(Add screenshots here of homepage, campground page, review form, and map integration.)_

## License

This project is open source and available under the [MIT License](LICENSE).
