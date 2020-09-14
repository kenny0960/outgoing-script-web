import Web from '@/settings/interfaces/web';

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

export const DOUBLE_DRAGON_WEB: Web = {
    name: 'DOUBLE_DRAGON',
    uri: 'https://api.goldenflow.net',
    token: 'robot:Jyh2zgQMmRWqWkKRTrp5u3S6BfhjUnZcmqKhRRcAP9aRdvzJsRFZ98XKYhzRvnnR',
};

export const CG_PAY_WEB: Web = {
    name: 'CG_PAY',
    uri: 'https://api.fast168pay.com',
    token: 'robot:ZhhawrFNCRHmAWRHDyJ3nnst7cfVDxGvEAfZBLr5dX2rwHXY7hS5vU8tHddbmxgR',
};
