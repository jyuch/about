import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import sass from "lume/plugins/sass.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

const site = lume({
  location: new URL("https://www.jyuch.dev/"),
});

site
  .ignore("README.md")
  .copy("img")
  .copy("favicon.ico")
  .copy("CNAME")
  .use(postcss())
  .use(date())
  .use(codeHighlight())
  .use(basePath())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())
  .use(sass());

if (!site.options.dev) {
  site.use(minifyHTML());
}

export default site;
