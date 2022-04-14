import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    // 서버도메인을 변경하면 이것도 수정해야함.
    return axios.create({
      //baseURL:
      //  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      baseURL: 'http://www.hannimbi.site',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};
