import { DEVELOP_WEB, LOCAL_WEB } from '@/settings/consts/webs';
import { createServer } from 'miragejs';

const scripts = [
    {
        revision: 78,
        entry_url: 'https://perbank.abchina.com/EbankSite/startup.do',
        script_content: 'QWdyaWN1bHR1cmFsQmFuaw==',
        stabled: false,
        note: 'DEVELOP-V20200731',
    },
    {
        revision: 77,
        entry_url: 'https://perbank.abchina.com/EbankSite/startup.do',
        script_content: 'SW5kdXN0cmlhbENvbW1lcmNpYWxCYW5r',
        stabled: true,
        note: 'DEVELOP-V20200722',
    },
    {
        revision: 76,
        entry_url: 'https://perbank.abchina.com/EbankSite/startup.do',
        script_content: 'Q29uc3RydWN0aW9uQmFuaw==',
        stabled: false,
        note: 'DEVELOP-V20200721',
    },
    {
        revision: 75,
        entry_url: 'https://perbank.abchina.com/EbankSite/startup.do',
        script_content: 'TWluc2hlbmdCYW5r',
        stabled: false,
        note: 'DEVELOP-V20200718',
    },
];

const stableScript = {
    revision: 77,
    entry_url: 'https://perbank.abchina.com/EbankSite/startup.do',
    script_content: 'SW5kdXN0cmlhbENvbW1lcmNpYWxCYW5r',
    stabled: true,
    note: 'DEVELOP-V20200722',
};

export const makeServer = () => {
    createServer({
        routes() {
            this.get(`${LOCAL_WEB.uri}/api/v1/banks/*/scripts`, () => {
                return scripts;
            });

            this.get(`${LOCAL_WEB.uri}/api/v1/banks/*/scripts/stable`, () => {
                return stableScript;
            });

            this.get(`${DEVELOP_WEB.uri}/api/v1/banks/*/scripts`, () => {
                return scripts;
            });

            this.get(`${DEVELOP_WEB.uri}/api/v1/banks/*/scripts/stable`, () => {
                return stableScript;
            });
        },
    });
};
