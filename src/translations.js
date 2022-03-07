const translations = {
  'header.hello': 'Weclome, {{name}}. you are {{years}} old.',
};

function _replacer(translation, searchValue, replaceValue) {
  return translation.replace(`{{${searchValue}}}`, replaceValue);
}

function getTranslation(translationKey, replacer = null) {
  if (translations[translationKey]) {
    let translationString = translations[translationKey];
    if (replacer) {
      for (const [key, value] of Object.entries(replacer)) {
        translationString = _replacer(translationString, key, value);
      }
    }
    return translationString;
  } else {
    return null;
  }
}

const trans = getTranslation('header.hello', { name: 'Devvrat', years: 5 });
console.log(trans);
