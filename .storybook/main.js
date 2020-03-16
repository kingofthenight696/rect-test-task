// const path = require("path");

// module.exports = {
//   stories: [
//     "../src/**/*.stories.(ts|tsx|js|jsx|mdx)",
//     "../src/components/**/*.stories.(ts|tsx|js|jsx|mdx)",
//     "../src/components/**/**/*.stories.(ts|tsx|js|jsx|mdx)"
//   ],
//   addons: [
//     "@storybook/addon-actions",
//     "@storybook/addon-links",
//     {
//       name: "@storybook/addon-docs",
//       options: {
//         configureJSX: true
//       }
//     },
//     {
//       name: "@storybook/preset-create-react-app",
//       options: {
//         tsDocgenLoaderOptions: {
//           tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
//         }
//       }
//     }
//   ]
// };

const path = require("path");

module.exports = {
  stories: ["../src/**/**/*.stories.tsx", "../src/**/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "storybook-addon-jsx/register",
    "@storybook/addon-viewport/register",
    '@storybook/addon-knobs/register',
    'storybook-addon-react-docgen/register',
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    },
    {
      name: "@storybook/preset-create-react-app",
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
        }
      }
    }
  ]
};
