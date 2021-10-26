const path = require("path");

module.exports = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app"],
	webpackFinal: async (config) => {
		config.resolve.alias["styled-components"] = path.resolve(__dirname, "../node_modules/styled-components");
		return config;
	},
	typescript: {
    reactDocgen: 'none',
  }
};
