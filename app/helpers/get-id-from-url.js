import { helper } from '@ember/component/helper';

export default helper(function getIdFromUrl(params) {
  const [url] = params;
  let pokemonId = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
  console.log( 'helper pokemonId', pokemonId);
  return pokemonId;
});
