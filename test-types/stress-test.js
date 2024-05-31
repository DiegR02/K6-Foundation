import https from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '30s', target: 10 },
        { duration: '10s', target: 10 },
    ],
}

export default function () {
  https.get('https://test.k6.io');
  sleep(1);
  https.get('https://test.k6.io/contacts.php'); 
  sleep(2);
  https.get('https://test.k6.io/news.php'); 
  sleep(2);
}