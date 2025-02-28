# Changelog

### [3.4.2](https://www.github.com/netlify/netlify-plugin-nextjs/compare/v3.4.1...v3.4.2) (2021-06-04)


### Bug Fixes

* revert fix force serverless target ([#388](https://www.github.com/netlify/netlify-plugin-nextjs/issues/388)) ([ee376a8](https://www.github.com/netlify/netlify-plugin-nextjs/commit/ee376a8764c178c2bc6d7ec1e7fa5d3cd905f94d))

### [3.4.1](https://www.github.com/netlify/netlify-plugin-nextjs/compare/v3.4.0...v3.4.1) (2021-06-04)


### Bug Fixes

* basePath is undefined when a site has no config file ([#385](https://www.github.com/netlify/netlify-plugin-nextjs/issues/385)) ([7d01aba](https://www.github.com/netlify/netlify-plugin-nextjs/commit/7d01abaaefe86983319438b9a6bec22b90763ce6))

## [3.4.0](https://www.github.com/netlify/netlify-plugin-nextjs/compare/v3.3.1...v3.4.0) (2021-06-03)


### Features

* add etag ([262e1ef](https://www.github.com/netlify/netlify-plugin-nextjs/commit/262e1ef9d10b3bd2f9dfb2649028eba76f700fdf))
* add etag to image function ([262e1ef](https://www.github.com/netlify/netlify-plugin-nextjs/commit/262e1ef9d10b3bd2f9dfb2649028eba76f700fdf))
* support for basePath ([#374](https://www.github.com/netlify/netlify-plugin-nextjs/issues/374)) ([8a07038](https://www.github.com/netlify/netlify-plugin-nextjs/commit/8a0703861bf610183a11ad8c341d8bc82e5cfee7))


### Bug Fixes

* changes from review ([09642bd](https://www.github.com/netlify/netlify-plugin-nextjs/commit/09642bdf9806588ddb58a7871eab1184818860cf))
* **deps:** update dependency execa to v5.0.1 ([28df64f](https://www.github.com/netlify/netlify-plugin-nextjs/commit/28df64f0f951ea6433f268afb8a3a438ba47cbf7))
* **deps:** update dependency sharp to v0.28.3 ([a3d4b20](https://www.github.com/netlify/netlify-plugin-nextjs/commit/a3d4b20ceaf988eb341045674b4a7489b64a6c26))
* extract target checks ([a1ab7bf](https://www.github.com/netlify/netlify-plugin-nextjs/commit/a1ab7bf2c6ba172bdcae6ae3052abb2ba1528193))
* fix tests ([630cb1a](https://www.github.com/netlify/netlify-plugin-nextjs/commit/630cb1a52982c1bb40de3e92e5b09b4af9097d36))
* **watch:** add missing bin property ([#355](https://www.github.com/netlify/netlify-plugin-nextjs/issues/355)) ([5a70c61](https://www.github.com/netlify/netlify-plugin-nextjs/commit/5a70c6151382cde1c80c15d528326c86a719f6f9))

### [3.3.1](https://www.github.com/netlify/netlify-plugin-nextjs/compare/v3.3.0...v3.3.1) (2021-05-25)


### Bug Fixes

* add sharp optimisations ([75de7f2](https://www.github.com/netlify/netlify-plugin-nextjs/commit/75de7f2f181bb39a0897f14fe86d9742626d394d))
* catch oversize image response ([7ab5aa0](https://www.github.com/netlify/netlify-plugin-nextjs/commit/7ab5aa052233607e201faf883a9edc9e3544924b))
* changes from review ([b27f30d](https://www.github.com/netlify/netlify-plugin-nextjs/commit/b27f30d3749e9bf36f99fb330c6fa488b58f7a69))
* **deps:** update dependency @netlify/functions to ^0.7.2 ([10dc8d2](https://www.github.com/netlify/netlify-plugin-nextjs/commit/10dc8d247dbcba63437308a54a8aa9a418b69bdb))
* handle image rotation ([e6938da](https://www.github.com/netlify/netlify-plugin-nextjs/commit/e6938da03dd2921d82f509877cd5968cf426ae66))
* refactor image function ([6b2e413](https://www.github.com/netlify/netlify-plugin-nextjs/commit/6b2e41329145f4515cab5a58deeff1f87e098adb))
* use allowlist for remote images ([20b1288](https://www.github.com/netlify/netlify-plugin-nextjs/commit/20b12882fdd46623a0cbe34156680692899a3377))


### Performance Improvements

* parallelize page processing ([7184379](https://www.github.com/netlify/netlify-plugin-nextjs/commit/7184379e8bcf7703fde743f73d77a41c8dcf5b68))

## [3.3.0](https://www.github.com/netlify/netlify-plugin-nextjs/compare/v3.2.2...v3.3.0) (2021-05-14)


### Features

* next/image improvements (sharp + on demand builders) ([#295](https://www.github.com/netlify/netlify-plugin-nextjs/issues/295)) ([088f267](https://www.github.com/netlify/netlify-plugin-nextjs/commit/088f267120ec1caa04da23491d7b3c3612878a04))


### Bug Fixes

* **deps:** move execa to prod ([#283](https://www.github.com/netlify/netlify-plugin-nextjs/issues/283)) ([7e02782](https://www.github.com/netlify/netlify-plugin-nextjs/commit/7e02782bf3bd6d0a38267a1dde73737ddbc7c346))
* dynamic imports with webpack 5 ([ce4308a](https://www.github.com/netlify/netlify-plugin-nextjs/commit/ce4308a54bd911e7c90e86ea7f297c08fe5f5ae1))
* dynamic imports with webpack 5 ([#294](https://www.github.com/netlify/netlify-plugin-nextjs/issues/294)) ([ec62ee3](https://www.github.com/netlify/netlify-plugin-nextjs/commit/ec62ee392be436798b1fd3da68b52f7887be111c))
* preserve function directory structure ([4847929](https://www.github.com/netlify/netlify-plugin-nextjs/commit/48479295dcafdc5d1dad0f22faeb01ea8b919dc8))

### [3.2.2](https://www.github.com/netlify/netlify-plugin-nextjs/compare/v3.2.1...v3.2.2) (2021-05-03)


### Bug Fixes

* support isDynamicRoute in sls-next >=1.8.0 ([#266](https://www.github.com/netlify/netlify-plugin-nextjs/issues/266)) ([3901302](https://www.github.com/netlify/netlify-plugin-nextjs/commit/39013024d3f21f52c2d743a18c7258c3c7e8815a))

### [3.2.1](https://www.github.com/netlify/netlify-plugin-nextjs/compare/v3.2.0...v3.2.1) (2021-05-03)


### Bug Fixes

* **deps:** update dependency moize to v6.0.3 ([bef04fd](https://www.github.com/netlify/netlify-plugin-nextjs/commit/bef04fd47d34385eb3d771ba020821a010a89ab3))
* nextConfig was memoized too early ([#264](https://www.github.com/netlify/netlify-plugin-nextjs/issues/264)) ([c5d88a4](https://www.github.com/netlify/netlify-plugin-nextjs/commit/c5d88a46aced7be580d3aa8b86dd9fdbbb384373))

## [3.2.0](https://www.github.com/netlify/netlify-plugin-nextjs/compare/v3.1.0...v3.2.0) (2021-04-29)


### Features

* add eslint ([#249](https://www.github.com/netlify/netlify-plugin-nextjs/issues/249)) ([70ee184](https://www.github.com/netlify/netlify-plugin-nextjs/commit/70ee18449286b7fb07d9f07753103a88a18a4ece))
* cache .next/cache between builds ([#185](https://www.github.com/netlify/netlify-plugin-nextjs/issues/185)) ([1c686e2](https://www.github.com/netlify/netlify-plugin-nextjs/commit/1c686e2b0183bec758e6fb149010dbd80c6780f3))


### Bug Fixes

* **deps:** update dependency chalk to v4.1.1 ([eda3d1f](https://www.github.com/netlify/netlify-plugin-nextjs/commit/eda3d1f3f07ab17d2b6be7b0b19eec0e48da0ac5))
* **deps:** update dependency moize to v6.0.2 ([24702ab](https://www.github.com/netlify/netlify-plugin-nextjs/commit/24702abc586ca2b013e10243dff80c2e1b2febf0))

## [3.1.0](https://www.github.com/netlify/netlify-plugin-nextjs/compare/v3.0.3...v3.1.0) (2021-04-11)


### Features

* unstableNetlifyFunctionsSupport.includeDirs configuration ([#182](https://www.github.com/netlify/netlify-plugin-nextjs/issues/182)) ([2953faa](https://www.github.com/netlify/netlify-plugin-nextjs/commit/2953faa67ce10832b5135fb4cbeb46f181222d9d))


### Bug Fixes

* **deps:** update dependency find-up to v5 ([#138](https://www.github.com/netlify/netlify-plugin-nextjs/issues/138)) ([757ba52](https://www.github.com/netlify/netlify-plugin-nextjs/commit/757ba52b041f0cc31fe7749a200dbcfa9e1f8551))
* **deps:** update dependency semver to v7.3.5 ([5a92dd2](https://www.github.com/netlify/netlify-plugin-nextjs/commit/5a92dd22a45bc3037f3b966cc0cf4eeee52936d6))
* fix minimum Next.js version ([54c2b1e](https://www.github.com/netlify/netlify-plugin-nextjs/commit/54c2b1e0f5da908106abdad3716abb15b6da168d))

## 3.0.3 (2021-03-12)

### Bug fixes

- Fix memoization when retrieving `next.config.js` ([#128](https://github.com/netlify/netlify-plugin-nextjs/pull/128))

## 3.0.2 (2021-03-11)

### Bug fixes

- Fix missing `find-cache-dir` ([#127](https://github.com/netlify/netlify-plugin-nextjs/pull/127))

## 3.0.1 (2021-03-11)

### Bug fixes

- Fix errors while loading `next.config.js` ([#124](https://github.com/netlify/netlify-plugin-nextjs/pull/124))
- Fix errors when `next` is not installed ([#123](https://github.com/netlify/netlify-plugin-nextjs/pull/123))
- Fix missing `await` keyword ([#122](https://github.com/netlify/netlify-plugin-nextjs/pull/122))

### Chore

- Reduce the npm package size ([#109](https://github.com/netlify/netlify-plugin-nextjs/pull/109))

## 3.0.0 (2021-03-08)

- feat: merge `next-on-netlify` into `@netlify/plugin-nextjs`

  This improves our ability to maintain the plugin, reduces confusion about how to configure Next.js support for Netlify builds, and prepares the plugin for something we're pretty dang excited about: automatic installation for new Next.js projects!

> **NOTE: There are no breaking changes for existing plugin users.** This is a major release because we're bringing an external package into the plugin _and_ turning on automatic installation for new Next.js projects on Netlify. This doesn't break anything, but it's a big enough change that we wanted to treat it as a major release.

- fix: next 10.0.8 changes loadConfig to be async ([#105](https://github.com/netlify/netlify-plugin-nextjs/pull/105))

### Migrating from v2 to v3

If you've installed this plugin via Netlify's UI, no action is necessary. The upgrade is automatic.

If you've installed this plugin manually in your `netlify.toml`, you can upgrade two ways:

1. Manually update to the latest version using `npm i @netlify/plugin-nextjs@latest`.
2. If you prefer to automatically get updates, remove this plugin from your project and `netlify.toml`, then [install the plugin using the Netlify UI](http://app.netlify.com/plugins/@netlify/plugin-nextjs/install).

### Migrating from the original `next-on-netlify` package

As part of the 3.0.0 release, `next-on-netlify` has been deprecated and merged into the Essential Next.js Build Plugin. If your site is using the `next-on-netlify` package, you'll need to switch over to the plugin to get future updates.

For instructions on migrating from `next-on-netlify` to the Essential Next.js Build Plugin, please see the [migration guide on the `next-on-netlify` repo](https://github.com/netlify/next-on-netlify/blob/main/MIGRATING.md).

## 2.0.1 (2021-02-17)

- fail build if plugin cant load next.config.js ([#99](https://github.com/netlify/netlify-plugin-nextjs/pull/99))
- chore: decrease package size ([#101](https://github.com/netlify/netlify-plugin-nextjs/pull/101))
- remove Next as a peer dependency ([#96](https://github.com/netlify/netlify-plugin-nextjs/pull/96))
- update failure points in plugin to do nothing instead ([#94](https://github.com/netlify/netlify-plugin-nextjs/pull/94))

## 2.0.0 (2021-02-04)

- feature: use new default functions directory ([#87](https://github.com/netlify/netlify-plugin-nextjs/pull/87))

## 1.1.2 (2021-03-16)

- backport `update failure points in plugin to do nothing instead` to v1 ([#146](https://github.com/netlify/netlify-plugin-nextjs/pull/146))

## 1.1.1 (2021-02-02)

- upgrade NoN to [2.8.7](https://github.com/netlify/next-on-netlify/releases/tag/v2.8.7)

## 1.1.0 (2021-01-27)

- upgrade NoN to [2.8.6](https://github.com/netlify/next-on-netlify/releases/tag/v2.8.6)

## 1.0.9 (2021-01-26)

- upgrade NoN to [2.8.5](https://github.com/netlify/next-on-netlify/releases/tag/v2.8.5)

## 1.0.8 (2021-01-18)

- upgrade NoN to 2.8.4 (fixes file tracking for nonexistent dirs) ([#86](https://github.com/netlify/netlify-plugin-nextjs/pull/86))

## 1.0.7 (2021-01-18)

- upgrade NoN to 2.8.3 (reverts next/image support)

## 1.0.6 (2021-01-16)

- upgrade NoN to 2.8.2; explain CLI usage workflow in README; add jimp ([#83](https://github.com/netlify/netlify-plugin-nextjs/pull/83))
- update next.config.js target error message to be more clear ([78a0986](https://github.com/netlify/netlify-plugin-nextjs/commit/78a0986548af877678834f20302b2b2ee88063e4))

## 1.0.5 (2021-01-07)

- upgrade next-on-netlify version to 2.7.2 ([#77](https://github.com/netlify/netlify-plugin-nextjs/pull/77))

## 1.0.4 (2021-01-06)

- upgrade next-on-netlify version to 2.7.1 ([#76](https://github.com/netlify/netlify-plugin-nextjs/pull/76))

## 1.0.3 (2020-12-21)

- Fix: use site's Next.js version ([#73](https://github.com/netlify/netlify-plugin-nextjs/pull/73))
- Fix: next export unused script mistakenly failed builds ([#72](https://github.com/netlify/netlify-plugin-nextjs/pull/72))
- Miscellaneous testing
- Miscellaneous README changes

## 1.0.2 (2020-11-10)

- Fix React peer dependency ([#60](https://github.com/netlify/netlify-plugin-nextjs/pull/60))

## 1.0.1 (2020-11-19)

- Fix: require('next') until plugin pre-installs are fixed internally ([#57](https://github.com/netlify/netlify-plugin-nextjs/pull/57))

## 1.0.0 (2020-11-18)

- Beta release of zero-config and UI-one-click plugin install
