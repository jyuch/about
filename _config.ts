import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import sass from "lume/plugins/sass.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume({
  location: new URL("https://about.jyuch.dev/"),
});

site
  .ignore("README.md")
  .copy("favicon.ico")
  .copy("robots.txt")
  .copy("CNAME")
  .use(postcss())
  .use(date())
  .use(codeHighlight())
  .use(basePath())
  .use(slugifyUrls({ alphanumeric: false, lowercase: false }))
  .use(resolveUrls())
  .use(sass())
  .use(nunjucks())
  .use(transformImages())
  .use(minifyHTML());

export default site;
