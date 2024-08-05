import pluginWebc from "@11ty/eleventy-plugin-webc";

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	eleventyConfig.ignores.add("./README.md");
	eleventyConfig.addWatchTarget("./_components/**/*.css");
	eleventyConfig.addPlugin(pluginWebc, {
		components: ["./_components/**/*.webc"],
	});

	return {
		markdownTemplateEngine: "webc",
		htmlTemplateEngine: "webc",
	};
}
