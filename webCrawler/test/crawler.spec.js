const assert = require('assert');
const Crawler = require('../crawler');

describe('Web Crawler Test', () => {
    it('should return a unique site list', () =>{

        const url = 'https://wiprodigital.com'

        const crawler = new Crawler(url);
        crawler.nestedLimit = 1;

        crawler.start((resources) => {
            const array = [...resources];

            const unique = array.filter((v, i, a) => array.indexOf(v) === i)

            assert.equal(array.length, unique.length);
        });

    });

    it('should return level 2 web crawler site list', () => {

        const url = 'https://wiprodigital.com'

        const crawler = new Crawler(url);
        crawler.nestedLimit = 2;

        crawler.start((resources) => {
            const array = [...resources];

            const unique = array.filter((v, i, a) => array.indexOf(v) === i)

            assert.equal(array.length, unique.length);
        });

    });
});