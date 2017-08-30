import Application from '../Application';

/**
 * Get key of object by path.
 * This function understand paths with "." and "[]" accessor.
 *
 * @param {object} containerObject
 * @param {string} path
 * @param {*} defaultValue
 * @returns {*}
 */
function _get(containerObject, path, defaultValue = '') {
  let fullPath = path
    .replace(/\[/g, '.')
    .replace(/]/g, '')
    .split('.')
    .filter(Boolean);

  return fullPath.every(goStep) ? containerObject : defaultValue;

  /**
   * Every function to follow the path step wise.
   *
   * @param {string} step Key in object.
   * @returns {boolean}
   */
  function goStep(step) {
    return !(step && (containerObject = containerObject[step]) === undefined);
  }
}


/**
 * Translation core.
 * @param key
 * @return {string}
 */
export default function Translator(key) {
  return _get(Application.Locale.de, key);
};
