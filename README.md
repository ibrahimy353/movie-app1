
#   TREK MOVIE APP

Trek Movie App, is a web-based application that is used for checking out details (about movie and rating) of any movie or series that is both from the past and the current ones. The web app is connected to TMDB (TheMovieDb) API for to show case trending movies on homepage section.

Link to the demo site: https://trekmovie.onrender.com/

## Tech Stack

* React JS.
* HTML
* CSS
* React Bootsrap


## Installing and Deploying the project.

To deploy this project run
* Clone the project.
---bash
 * git clone https://github.com/ibrahimy353/trekmovie.git
---
* Open the coding environment.
* Open the terminal.
* Inside the terminal run "npm install" - this will copy dependancies from package.json file.
* Then run..
```bash
  npm start
```
* Deployed on render.com.


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/85551204/214812682-d48e98a8-c243-40f7-bc1a-d3d89803d5ac.JPG)


## API Reference

#### Get all items

```http
"https://api.themoviedb.org/3/movie/popular?api_key=d00edc8e486cd903348d22749de24834"
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | d00edc8e486cd903348d22749de24834 |

#### Movie Search API

```http
  "https://api.themoviedb.org/3/search/movie?api_key=d00edc8e486cd903348d22749de24834&query"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | d00edc8e486cd903348d22749de24834&query |




## Features


- Live previews
- Fullscreen mode
- Search button



## Known Issues

-Not responsive to mobile devices.
