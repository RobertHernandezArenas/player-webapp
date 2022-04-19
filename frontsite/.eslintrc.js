module.exports = {
	env: {
		browser: true,
		commonjs: true,
		node: true,
		es6: true,
	},
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	parser: "vue-eslint-parser",
	extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
	rules: {
		"no-unused-vars": [
			"error",
			{
				vars: "all",
				args: "after-used",
				ignoreRestSiblings: false,
				argsIgnorePattern: "next",
			},
		],
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		"vue/require-default-prop": "off",
	},
};
