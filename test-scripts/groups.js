import http from 'k6/http';
import { sleep, group, check } from 'k6';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<250'],
        'http_req_duration{expected_response:true}': ['p(95)<250'],
        'group_duration{group:::Main page}': ['avg<8000'],
        'group_duration{group:::News page}': ['avg<6000'],
        'group_duration{group:::Main page::Assets}': ['avg<3000'],
    }
}

export default function () {

    group('Main page', function(){  
        let res = http.get('https://run.mocky.io/v3/ee3336e6-86b6-45e2-b1d0-bb64e29deb63?mocky-delay=5000ms');
        check(res, { 'status is 200': (r) => r.status === 200 });

        group('Assets', function(){
            http.get('https://run.mocky.io/v3/ee3336e6-86b6-45e2-b1d0-bb64e29deb63?mocky-delay=900ms');
            http.get('https://run.mocky.io/v3/ee3336e6-86b6-45e2-b1d0-bb64e29deb63?mocky-delay=900ms');
        })
    });

    group('News page', function(){
        http.get('https://run.mocky.io/v3/c19d6e2e-79dc-4b8d-981a-0fc3f0591d1c');
    });

    sleep(1);
}
