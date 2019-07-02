const catBreeds = {'Balinese:': "The Balinese is a long-haired breed of domestic cat with Siamese-style point coloration and sapphire-blue eyes. The Balinese is also known as the purebred long-haired Siamese.", 'Bombay': "The Bombay cat is a type of short-haired cat developed by breeding sable Burmese and black American Shorthair cats, to produce a cat of mostly Burmese type, but with a sleek, panther-like black coat."};

const breedDetails = function(breed) {
    return catBreeds[breed];
}

module.exports = breedDetails;