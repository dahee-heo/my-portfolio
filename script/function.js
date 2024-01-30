
export function removePx(styleValue) {
  const remove = styleValue.replace('px', '');
  return Number(remove);
}