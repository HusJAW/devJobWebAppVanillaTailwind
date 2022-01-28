const plugin = require('tailwindcss/plugin')

const labelChildOnChecked = plugin(function ({ addVariant, e }) {
  addVariant('labelChildOnChecked', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
    return `.${e(`labelChildOnChecked${separator}${className}`)}:checked + * *`;
    })
  });
});

// :focus, :focus-within, :hover, :checked

module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'custom': '400px'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'important', 'labelChildOnChecked'],
      borderColor: ['checked'],
      translate: ['labelChildOnChecked'],
      transform: ['labelChildOnChecked']
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    })
  , labelChildOnChecked
],
}
// module.exports = {
//   mode: 'jit',
//   purge: ['./index.html'],
//   darkMode: 'media', // or 'media' or 'class'
//   theme: {
//     extend: {
//       screens: {
//         'custom': '400px'
//       }
//     },
//   },
//   variants: {
//     extend: {
//       backgroundColor: ['checked', 'checkedSibling'],
//       borderColor: ['checked', 'checkedSibling'],
//     }
//   },
//   plugins: [
//     plugin(function ({addVariant, e}) {
//       addVariant("checkedSibling", ({ container }) => {
//         rule.selector = `:checked + .checkedSibling\\:${rule.selector.slice(1)}`
//       })
//     })
//   ],
// }


// plugin(function ({ addVariant, e }) {
//   addVariant("focused-sibling", ({ container }) => {
//     container.walkRules((rule) => {
//       rule.selector = `:focus + .focused-sibling\\:${rule.selector.slice(1)}`;
//     });
//   });
// });