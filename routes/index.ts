/*
|--------------------------------------------------------------------------
| Your default routes for your application
|--------------------------------------------------------------------------
|
*/

import Docs from "@views/Docs.vue";
import ErrorViews from "@views/errors";
import DocumentationArea from "@views/DocumentationArea.vue";

export default function($router) {
  let docsHomePage = "/docs/latest/what-is-varie";
  $router.redirect("/", docsHomePage);
  $router.redirect("/docs", docsHomePage);
  $router.redirect("/docs/latest", docsHomePage);
  $router
    .prefix("/docs")
    .area(DocumentationArea)
    .group(() => {
      $router.route(":version?/:page?", Docs).setName("docs");
    });

  $router.route("*", ErrorViews.Error404);
}
