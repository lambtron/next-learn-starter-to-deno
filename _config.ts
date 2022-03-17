import lume from "https:/deno.land/x/lume@v1.6.4/mod.ts";
import jsx from "https:/deno.land/x/lume@v1.6.4/plugins/jsx.ts";

// Need this, otherwise all markdown will be filtered through all templates.
const site = lume({
  includes: "pages",
});

site.ignore("components", "public", "styles");
site.use(jsx({
  extensions: [".jsx"],
}));

// Copy static files.
site.copy("public", ".");
site.copy("styles");

// Add all blog posts to the index page.
site.preprocess("*", (page) => {
  if (page.data.layout === "./pages/index.jsx") {
    const allPostsData = [...page.parent!.dirs.get("posts").pages.values()];
    page.data.allPostsData = allPostsData;
  }
});

export default site;
