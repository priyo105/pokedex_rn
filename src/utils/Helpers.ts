/* eslint-disable prettier/prettier */
export function capitalizeFirstLetter(word: string | undefined): string {
  if (!word) return ''; // Return empty string if word is undefined
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getColorByType(type: string) {
  switch (type.toLowerCase()) {
    case 'normal':
      return '#A8A77A'; // Normal - Normal
    case 'fire':
      return '#EE8130'; // Fire - Fire
    case 'water':
      return '#6390F0'; // Water - Water
    case 'electric':
      return '#F7D02C'; // Electric - Electric
    case 'grass':
      return '#7AC74C'; // Grass - Grass
    case 'ice':
      return '#96D9D6'; // Ice - Ice
    case 'fighting':
      return '#C22E28'; // Fighting - Fighting
    case 'poison':
      return '#A33EA1'; // Poison - Poison
    case 'ground':
      return '#E2BF65'; // Ground - Ground
    case 'flying':
      return '#A98FF3'; // Flying - Flying
    case 'psychic':
      return '#F95587'; // Psychic - Psychic
    case 'bug':
      return '#A6B91A'; // Bug - Bug
    case 'rock':
      return '#B6A136'; // Rock - Rock
    case 'ghost':
      return '#735797'; // Ghost - Ghost
    case 'dragon':
      return '#6F35FC'; // Dragon - Dragon
    case 'dark':
      return '#705746'; // Dark - Dark
    case 'steel':
      return '#B7B7CE'; // Steel - Steel
    case 'fairy':
      return '#D685AD'; // Fairy - Fairy
    default:
      return '#000000'; // Black as default
  }
}

export function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return color;
}

export function extractNumberFromUrl(url: string | undefined): string | null {
  if (!url) {
    return null;
  }

  const parts = url.split('/');
  return parts[parts.length - 2];
}
