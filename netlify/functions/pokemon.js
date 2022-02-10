const fetch = require('node-fetch');

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min + 1;
};

exports.handler = async () => {
  const pokemonId = randomNumber(1, 151);

  let image;

  try {
    // Fetch information about a random pokemon via API
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const pokemon = await response.json();

    // Get path to the offical artwork image
    const imageUrl = pokemon.sprites.other['official-artwork']['front_default'];

    // Download the image
    const imageResponse = await fetch(imageUrl);

    image = await imageResponse.buffer();
  } catch (error) {
    // Return a 500 error code if something went wrong
    console.log('error', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Content-type': 'image/jpeg'
    },
    body: image.toString('base64'),
    isBase64Encoded: true
  };
};
