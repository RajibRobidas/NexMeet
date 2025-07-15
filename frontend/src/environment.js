let IS_PROD = true;

const server = IS_PROD 
    ? "https://nexmeet-a0oy.onrender.com" 
    : "http://localhost:8000"

export default server;