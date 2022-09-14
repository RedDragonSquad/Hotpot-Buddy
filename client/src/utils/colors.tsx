// TODO: map to color schemes
const randomInt = (max: number) => {
  return Math.floor(Math.random() * (max + 1));
};

const randomRgbColor = () => {
  const r = randomInt(255);
  const g = randomInt(255);
  const b = randomInt(255);

  return [r, g, b];
};

const getRGBPerCategory = () => {
  const [r, g, b] = randomRgbColor();

  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  return `#${hexR}${hexG}${hexB}`;
};

export default getRGBPerCategory;
