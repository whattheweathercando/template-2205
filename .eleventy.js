
const markdownIt = require("markdown-it");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes, loading, aspectClass) {
    let metadata = await Image(src, {
        outputDir: "./dist/img/",
        urlPath: "/img/",
        widths: [600, 1800],
        formats: ["webp", "jpeg"],
        cacheOptions: {
            // if a remote image URL, this is the amount of time before it fetches a fresh copy
            duration: "3d",
            // project-relative path to the cache directory
            directory: ".cache",
            removeUrlQueryParams: false,
        },
    });
    
    let imageAttributes = {
      alt,
      sizes,
      loading,
      class: aspectClass,
      decoding: "async",
    };
    
    return Image.generateHTML(metadata, imageAttributes);
}


module.exports = function (eleventyConfig) {

    // https://www.11ty.dev/docs/data-deep-merge/
    eleventyConfig.setDataDeepMerge(true);

    // Passthrough copy folders
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/assets");

    // Layout alias
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    
    
    // markdown filter
    // options: https://github.com/markdown-it/markdown-it#init-with-presets-and-options
    const md = new markdownIt({
        html: true,
        breaks: false,
    });
    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });

    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "dist",
        },
        templateFormats: [
            "njk",
            "liquid",
            "md",
            "html"
        ],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true
    };
};