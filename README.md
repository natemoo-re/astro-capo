# Capo.js for Astro

Get your `<head>` in order—automatically!

`astro-capo` is a component that automatically optimizes the order of elements in your `<head>`, adapted from [Rick Viscomi](https://twitter.com/rick_viscomi)'s wonderful `capo.js` library.

Unlike `capo.js`, which makes it easy to debug the optimal order of your `<head>` in the browser, `astro-capo` automatically optimizes your `<head>` on the server while rendering your page.

## Usage

Replace your regular `<head>` element with our custom `<Head>` component. That's it!

```astro
---
import { Head } from 'astro-capo'
---

<html lang="en">
	<Head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<title>Astro</title>
	</Head>
	<body>
		<h1>Astro</h1>
	</body>
</html>
```

