import http from 'k6/http';

console.log(__ENV.BASE_URL);

export default function () {    
    http.get(`${__ENV.BASE_URL}/public/crocodiles/`);

}