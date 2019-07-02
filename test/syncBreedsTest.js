const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
    it("Return breed details", () => {
        const expectedDesc = "The Bombay cat is a type of short-haired cat developed by breeding sable Burmese and black American Shorthair cats, to produce a cat of mostly Burmese type, but with a sleek, panther-like black coat.";

        const bombay = breedDetails('Bombay');
        
        console.log(expectedDesc, bombay);
    });
});