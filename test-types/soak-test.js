import https from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '5m', target: 1000 },
        { duration: '24h', target: 1000 },
        { duration: '5m', target: 0 },
    ],
}

export default function () {
  https.get('https://test.k6.io');
  sleep(1);

}