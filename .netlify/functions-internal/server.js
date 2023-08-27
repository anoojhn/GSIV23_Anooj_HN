"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/aparna/Desktop/my-app/movie-directory-app/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/aparna/Desktop/my-app/movie-directory-app/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SYF7GJLA.css";

// app/root.jsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/movies.$id.jsx
var movies_id_exports = {};
__export(movies_id_exports, {
  default: () => movies_id_default,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/components/header/index.jsx
var import_react3 = require("@remix-run/react");

// app/assets/search.svg
var search_default = "/build/_assets/search-BORXLGN5.svg";

// app/assets/home-icon.svg
var home_icon_default = "/build/_assets/home-icon-U2H2BC6X.svg";

// app/assets/back.svg
var back_default = "/build/_assets/back-DZR4GWKQ.svg";

// app/components/header/index.jsx
var import_jsx_runtime3 = require("react/jsx-runtime"), Header = ({
  isSearchable = !1,
  searchText,
  setSearchText,
  header = "Movie Details",
  isBackButton = !0
}) => {
  let navigate = (0, import_react3.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "z-[1] flex w-screen justify-between h-16 shadow-[0_2px_4px_1px_rgba(155,155,155,1)] items-center px-4 fixed top-0 bg-white", children: [
    isSearchable ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "rounded-md bg-[#D8D8D8] flex gap-x-2 items-center px-2 py-1 h-[40px] min-w-[50%] max-w-[600px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: search_default, width: 20, height: 20 }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "input",
        {
          type: "text",
          className: "bg-transparent outline-none text-xl w-full",
          value: searchText,
          placeholder: "Search",
          "data-testid": "search-input",
          onChange: (e) => {
            var _a;
            return setSearchText((_a = e == null ? void 0 : e.target) == null ? void 0 : _a.value);
          }
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-x-4", children: [
      isBackButton && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_react3.Link,
        {
          to: "..",
          onClick: (e) => {
            e.preventDefault(), navigate(-1);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { "data-testid": "back", src: back_default })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-xl text-[#4A4A4A] font-medium", children: header })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { "data-testid": "home", className: "cursor-pointer", src: home_icon_default, width: 24, height: 24 }) })
  ] });
}, header_default = Header;

// app/assets/movie_placeholder.svg
var movie_placeholder_default = "/build/_assets/movie_placeholder-3YQ76TMR.svg";

// app/models/movie.server.js
var getMovies = async (page) => {
  var _a;
  let apiKey = process.env.MOVIE_DB_ACCESS_TOKEN;
  return (await fetch(
    `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${(_a = /* @__PURE__ */ new Date()) == null ? void 0 : _a.toISOString()}&sort_by=primary_release_date.desc&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }
  ).then((res2) => res2.json())).results;
}, getMovieDetails = async (id) => {
  let apiKey = process.env.MOVIE_DB_ACCESS_TOKEN;
  return await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then((res2) => res2.json());
}, getCreditDetails = async (id) => {
  let apiKey = process.env.MOVIE_DB_ACCESS_TOKEN;
  return await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then((res2) => res2.json());
};

// app/routes/movies.$id.jsx
var import_jsx_runtime4 = require("react/jsx-runtime"), loader = async ({ params }) => {
  let movieDetails = await getMovieDetails(params.id), creditDetails = await getCreditDetails(params.id);
  return (0, import_node2.json)({
    movieDetails,
    creditDetails
  });
}, MovieDetails = () => {
  var _a, _b;
  let { movieDetails, creditDetails } = (0, import_react4.useLoaderData)(), getDirector = () => {
    var _a2;
    let creditItem = (_a2 = creditDetails == null ? void 0 : creditDetails.crew) == null ? void 0 : _a2.find(
      (cred) => (cred == null ? void 0 : cred.job) === "Director"
    );
    return creditItem == null ? void 0 : creditItem.name;
  }, getCast = () => {
    var _a2, _b2, _c, _d;
    let cast = (_c = (_b2 = creditDetails == null ? void 0 : creditDetails.cast) == null ? void 0 : _b2.slice(0, Math.min(5, (_a2 = creditDetails == null ? void 0 : creditDetails.cast) == null ? void 0 : _a2.length))) == null ? void 0 : _c.map((cred) => cred == null ? void 0 : cred.name);
    return `Cast: ${cast == null ? void 0 : cast.join(",")} ${((_d = creditDetails == null ? void 0 : creditDetails.cast) == null ? void 0 : _d.length) > 5 ? "..." : ""}`;
  }, getMovieRunTime = () => {
    let minutes = (movieDetails == null ? void 0 : movieDetails.runtime) % 60, hours = ((movieDetails == null ? void 0 : movieDetails.runtime) - minutes) / 60;
    return `${`${hours < 9 ? "0" : ""}${hours}`}:${minutes}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(header_default, {}),
    movieDetails && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "px-4 py-4 relative top-[64px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "min-w-[180px] float-left mr-4", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "img",
        {
          "data-testid": "movie-poster",
          src: `https://image.tmdb.org/t/p/original${movieDetails == null ? void 0 : movieDetails.poster_path}`,
          className: "w-[180px] h-[240px] object-cover object-center",
          onError: ({ currentTarget }) => {
            currentTarget.onerror = null, currentTarget.src = movie_placeholder_default;
          }
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-[#4A4A4A]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-2xl font-medium mb-[8px]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: movieDetails == null ? void 0 : movieDetails.title }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-[#9B9B9B]", children: ` (${movieDetails == null ? void 0 : movieDetails.vote_average})` })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-xl mb-[4px]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: (_a = new Date(movieDetails == null ? void 0 : movieDetails.release_date)) == null ? void 0 : _a.getFullYear() }),
          movieDetails != null && movieDetails.runtime ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: " | " }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: getMovieRunTime() })
          ] }) : "",
          getDirector() ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: " | " }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: getDirector() })
          ] }) : ""
        ] }),
        ((_b = creditDetails == null ? void 0 : creditDetails.cast) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-xl mb-[8px]", children: getCast() }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-xl", children: movieDetails == null ? void 0 : movieDetails.overview })
      ] })
    ] })
  ] });
}, movies_id_default = MovieDetails;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/components/movie-card/index.jsx
var import_react5 = require("@remix-run/react");
var import_jsx_runtime5 = require("react/jsx-runtime"), MovieCard = ({ movie }) => {
  let { title, overview, vote_average, poster_path, id } = movie;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Link, { to: `movies/${id}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      "data-testid": "movie-card",
      className: "text-[#4A4A4A] w-[200px] h-[280px] text-xs shadow-[0_2px_4px_1px_rgba(155,155,155,1)] bg-[rgba(255,255,255, 1)] rounded-lg cursor-pointer",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "img",
          {
            src: `https://image.tmdb.org/t/p/original${poster_path}`,
            className: "w-[200px] h-[200px] object-cover object-center rounded-tl-lg rounded-tr-lg",
            alt: "movie",
            onError: ({ currentTarget }) => {
              currentTarget.onerror = null, currentTarget.src = movie_placeholder_default;
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "pt-1 pr-1 pb-1 pl-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex justify-between mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "font-medium truncate", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-[#9B9B9B]", children: `(${vote_average})` })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "line-clamp-2", children: overview })
        ] })
      ]
    }
  ) });
}, movie_card_default = MovieCard;

// app/routes/_index.jsx
var import_react7 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime"), getPage = (params) => Number(params.get("page") || "1"), loader2 = async ({ request }) => {
  let page = getPage(new URL(request.url).searchParams);
  return (0, import_node3.json)({
    data: await getMovies(page)
  });
}, MovieList = () => {
  var _a;
  let { data } = (0, import_react6.useLoaderData)(), [movies, setMovies] = (0, import_react7.useState)(data), [searchText, setSearchText] = (0, import_react7.useState)(""), [searchResults, setSearchResults] = (0, import_react7.useState)(data), fetcher = (0, import_react6.useFetcher)(), [scrollPos, setScrollPos] = (0, import_react7.useState)(0), [clientHeight, setClientHeight] = (0, import_react7.useState)(0), [height, setHeight] = (0, import_react7.useState)(null), [shouldFetch, setShouldFetch] = (0, import_react7.useState)(!0), [page, setPage] = (0, import_react7.useState)(2), containerHeight = (0, import_react7.useCallback)(
    (element) => {
      element !== null && setHeight(element.getBoundingClientRect().height);
    },
    [movies == null ? void 0 : movies.length]
  );
  return (0, import_react7.useEffect)(() => {
    if (searchText) {
      let tempMovies = movies == null ? void 0 : movies.filter(
        (item) => {
          var _a2, _b;
          return (_b = (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.toLowerCase()) == null ? void 0 : _b.includes(searchText == null ? void 0 : searchText.toLowerCase());
        }
      );
      setSearchResults(tempMovies);
    } else
      setSearchResults(movies);
  }, [searchText, movies]), (0, import_react7.useEffect)(() => {
    let scrollListener = () => {
      setClientHeight(window.innerHeight), setScrollPos(window.scrollY);
    };
    return typeof window < "u" && window.addEventListener("scroll", scrollListener), () => {
      typeof window < "u" && window.removeEventListener("scroll", scrollListener);
    };
  }, []), (0, import_react7.useEffect)(() => {
    !shouldFetch || !height || clientHeight + scrollPos + 100 < height || (fetcher.load(`?index&page=${page}`), setShouldFetch(!1));
  }, [clientHeight, scrollPos, fetcher]), (0, import_react7.useEffect)(() => {
    var _a2, _b, _c, _d;
    if ((_a2 = fetcher == null ? void 0 : fetcher.data) != null && _a2.data && ((_b = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _b.data.length) === 0) {
      setShouldFetch(!1);
      return;
    }
    (_c = fetcher == null ? void 0 : fetcher.data) != null && _c.data && ((_d = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _d.data.length) > 0 && (setMovies((prevMovies) => {
      var _a3;
      return [...prevMovies, ...(_a3 = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a3.data];
    }), setPage((page2) => page2 + 1), setShouldFetch(!0));
  }, [(_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.data]), /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { ref: containerHeight, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      header_default,
      {
        isSearchable: !0,
        searchText,
        setSearchText
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex gap-x-[13px] gap-y-4 flex-wrap px-4 py-4 relative top-[64px]", children: searchResults == null ? void 0 : searchResults.map((movie) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(movie_card_default, { movie }) }, movie.id)) })
  ] });
}, index_default = MovieList;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZWRBHCK2.js", imports: ["/build/_shared/chunk-65C3F77X.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-T6WG55FD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-PSBY2MAQ.js", imports: ["/build/_shared/chunk-XARD5ZNY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/movies.$id": { id: "routes/movies.$id", parentId: "root", path: "movies/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/movies.$id-2HWQD46U.js", imports: ["/build/_shared/chunk-XARD5ZNY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "59f80751", hmr: void 0, url: "/build/manifest-59F80751.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/movies.$id": {
    id: "routes/movies.$id",
    parentId: "root",
    path: "movies/:id",
    index: void 0,
    caseSensitive: void 0,
    module: movies_id_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};

// server.js
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  mode: "production"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
