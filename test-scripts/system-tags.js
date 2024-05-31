import http from 'k6/http';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{status:200}': ['p(95)<1000'],
        'http_req_duration{status:201}': ['p(95)<1000']
    }
}

export default function () {
    http.get('https://run.mocky.io/v3/917b7c0f-c63e-4565-9023-e999c28a3c22');
    http.get('https://run.mocky.io/v3/ee3336e6-86b6-45e2-b1d0-bb64e29deb63?mocky-delay=2000ms');


}