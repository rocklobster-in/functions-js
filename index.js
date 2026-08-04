/**
 * Converts a multi-layered object to a flat array.
 */
export const flatten = (tree) => {
  const array = [];

  if (Object === tree.constructor) {
    for (const value of Object.values(tree)) {
      array.push(...flatten(value));
    }
  } else if (tree instanceof Map) {
    for (const [key, value] of tree) {
      array.push(...flatten(value));
    }
  } else if (Array.isArray(tree)) {
    for (const value of tree) {
      array.push(...flatten(value));
    }
  } else {
    array.push(tree);
  }

  return array;
};
