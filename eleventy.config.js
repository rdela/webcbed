import pluginWebc from "@11ty/eleventy-plugin-webc";
import emojiShortName from "emoji-short-name";

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	eleventyConfig.ignores.add("./README.md");
	eleventyConfig.addWatchTarget("_components/**/*.css");
	eleventyConfig.addPlugin(pluginWebc, {
		components: ["_components/**/*.webc"],
	});

	eleventyConfig.addJavaScriptFunction("emojiShortName", (emoji) => {
		return emojiShortName[emoji];
	});

	return {
		markdownTemplateEngine: "webc",
		htmlTemplateEngine: "webc",
	};
}
