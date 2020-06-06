import { helper } from '@ember/component/helper';

export function getIdFromUrl(params/*, hash*/) {
  const [url] = params;
  let pokemonId = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
  return pokemonId;
}

export default helper(getIdFromUrl);
