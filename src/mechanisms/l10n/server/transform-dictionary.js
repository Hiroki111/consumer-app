// Transforms localization dictionary's 'messages' object.
//
// From:
//     messages: {
//         namespace1: {
//             namespace2: {
//                 key: 'bla-bla'
//             }
//         }
//     }
//
// To:
//     messages: {
//         'namespace1.namespace2.key': 'bla-bla'
//     }

function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

const transform = dictionary => {
  dictionary.messages = flattenMessages(dictionary.messages);
  return dictionary;
};

module.exports.transform = transform;
