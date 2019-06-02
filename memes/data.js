const axios = require("axios");

const images = [{
    path: "/images/2yo72h.jpg"
  },
  {
    path: "/images/2yjcz1.jpg"
  },
  {
    path: "/images/2yj82o.jpg"
  },
  {
    path: "/images/janet.gif"
  }
];

images.forEach(async image => {
  try {
    let response = await axios.post("http://localhost:3000/api/memes", {
      path: image.path
    });
  } catch (error) {
    console.log(error);
  }
});
