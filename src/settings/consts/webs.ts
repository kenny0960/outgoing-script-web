import Web from '@/settings/interfaces/web';

export const DEFAULT_WEB: Web = {
    name: '',
    uri: '',
    token: '',
};

export const LOCAL_WEB: Web = {
    name: 'LOCAL',
    uri: 'http://172.16.155.158:8080',
    token: 'robot:token',
};

export const DEVELOP_WEB: Web = {
    name: 'DEVELOP',
    uri: 'https://outgoing-api-develop.rd2dev.io',
    token: 'robot:8VeYjZkD42hYmB56ubGuAvNvQA4ZuUwaeCsUJrtFBdFwzL5btGq2r69rDwN3msqx',
};

export const ESB_WEB: Web = {
    name: 'ESB',
    uri: 'https://api.assist2pay.com',
    token: 'robot:LQVFTS9jp2CyBHwje6qbmEthLdRTkTURSFzjTfmxbxARg3Bh8MghZu5xx7Ys76Rb',
};
