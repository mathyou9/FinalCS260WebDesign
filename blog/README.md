# Blog of Tranquility

This problem focuses on Vue and using a REST API.

## Overview of the Application

The Blog of Tranquility app is a simple application for displaying a blog. To
run this code, you will need to install Node packages:

```
npm install
```

Then run the Node server:

```
node server.js
```

You can visit the app in your browser at `localhost:3000`.

This application has a back end with a REST API in `server.js`. It also has a
front end in `public/index.html` and `public/admin.html`, with styles in
`public/styles.css`. The `public/script.js` file contains a blank Vue
application for the home page and `public/admin.js` contains a blank Vue
application for the admin page. When you start up the application, it should
look like this;

![blog](images/blog.png)

## Database Schema and Model

The database has one model, Blog, whose schema consists of:

- author: a string, the author of the blog article
- title: a string, the title of the blog article
- entry: a string, the body of the blog article
- created: a date, the date the article was created

The date is automatically set to the current date when the article is created.

## REST API

The REST API implemented by the server consists of the following:

- GET /api/entries

  - gets all blog entries, sorted by reverse order of when they were created

- POST /api/entries

  - creates a new blog entry
  - the body must contain an author, title, and entry

## Test Data

You can run the script `data.js` to populate your database with some data:

```
node data.js
```

This would be helpful for checking that the first task works before proceeding
to the second task.

## Tasks

Build the front end for the home page and the admin page.

- The home page should display the current blog entries, including author,
  title, body of the blog post, and date created. Use the `moment.js` library to
  format the date, like we have done with labs. The `index.html` already has a
  script tag with this library.

- The admin page should display a form that can be used to create new blog
  entries. The form should include all necessary information (except the date it
  was created, which is filled in automatically by the server). The form should
  be cleared when a new blog entry is successfully created and a short message
  displayed indicating it was successful. You can leave the form on the page at
  all times.

- Both pages should have reasonably good styling, following the web design
  guidelines discussed in class.

## Grading

This problem is worth 80 points. Grading will be based on this rubric:

| Item       | Points                                                   |
| ---------- | -------------------------------------------------------- |
| Home Page  | 40 points                                                |
| Admin Page | 35 points                                                |
| Design     | 5 points (full points for average, zero points for poor) |

Partial Credit for each part: 50% if solid effort but not close to working, 80%
if solid effort and close to working.
