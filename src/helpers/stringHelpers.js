export function removeUnderscores(arr) {
  return arr.map(obj => {
    let category = obj.category;
    if (typeof category === 'string') {
      category = category.split('_').join(' ');
    }
    return { ...obj, category };
  });
}
