import axios from 'axios';
import fs from 'fs';

// Define the URL and the payload to send.
const url = "http://127.0.0.1:7860";

const payload = {
    prompt: "cactus, hyper realism",
    steps: 5,
};

// Send said payload to said URL through the API.
axios.post(`${url}/sdapi/v1/txt2img`, payload)
   .then(response => {
        // Decode and save the image.
        const imageData = Buffer.from(response.data.images[0], 'base64');
        fs.writeFileSync('output.png', imageData);
    })
   .catch(error => {
        console.error(`Error: ${error}`);
    });
