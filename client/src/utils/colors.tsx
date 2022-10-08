// Color array from lightest to darkest shades
const CATEGORY_COLORS = new Map([
  [
    'meat',
    [
      'EAA8A8',
      'BB0000',
      'CD0000',
      'DE1616',
      'EF2B2B',
      'EC4040',
      'E95555',
      'E56B6B',
      'E28080',
      'AA0000'
    ]
  ],
  [
    'vegetable',
    [
      'DAF2DA',
      'B8E6B8',
      '98D998',
      '7ACC7A',
      '60BF60',
      '47B347',
      '32A632',
      '1F991F',
      '118C11',
      '008000'
    ]
  ],
  [
    'seafood',
    [
      'E3F2FD',
      'BBDEFB',
      '90CAF9',
      '64B5F6',
      '42A5F5',
      '2196F3',
      '1E88E5',
      '1976D2',
      '1565C0',
      '0D47A1'
    ]
  ],
  [
    'miscellaneous',
    [
      'FEC5BB',
      'FCD5CE',
      'FAE1DD',
      'F8EDEB',
      'E8E8E4',
      'D8E2DC',
      'ECE4DB',
      'FFE5D9',
      'FFD7BA',
      'FEC89A'
    ]
  ]
]);

const randomInt = (max: number) => {
  return Math.floor(Math.random() * (max + 1));
};

const randomRgbColor = () => {
  const r = randomInt(255);
  const g = randomInt(255);
  const b = randomInt(255);

  return [r, g, b];
};

const getUnknownCategoryColor = () => {
  const [r, g, b] = randomRgbColor();

  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  return `#${hexR}${hexG}${hexB}`;
};

// Returns a color hex based on category or random color if category is not found.
const getRGBPerCategory = (category: string) => {
  const colors = CATEGORY_COLORS.get(category.toLowerCase());

  if (!colors || colors.length === 0) {
    return getUnknownCategoryColor();
  }

  const randIndex = randomInt(colors.length - 1);
  return `#${colors[randIndex]}`;
};

export default getRGBPerCategory;
