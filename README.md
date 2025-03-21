<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Iterator Statistics

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Statistical function iterators.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-iter
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/stats-iter' );
```

#### ns

Namespace containing functions for computing statistics over iterators.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`itercugmean( iterator )`][@stdlib/stats/iter/cugmean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative geometric mean.</span>
-   <span class="signature">[`itercuhmean( iterator )`][@stdlib/stats/iter/cuhmean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative harmonic mean.</span>
-   <span class="signature">[`itercumax( iterator )`][@stdlib/stats/iter/cumax]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative maximum value.</span>
-   <span class="signature">[`itercumaxabs( iterator )`][@stdlib/stats/iter/cumaxabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative maximum absolute value.</span>
-   <span class="signature">[`itercumean( iterator )`][@stdlib/stats/iter/cumean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative arithmetic mean.</span>
-   <span class="signature">[`itercumeanabs( iterator )`][@stdlib/stats/iter/cumeanabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative arithmetic mean of absolute values.</span>
-   <span class="signature">[`itercumeanabs2( iterator )`][@stdlib/stats/iter/cumeanabs2]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative arithmetic mean of squared absolute values.</span>
-   <span class="signature">[`itercumidrange( iterator )`][@stdlib/stats/iter/cumidrange]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative mid-range.</span>
-   <span class="signature">[`itercumin( iterator )`][@stdlib/stats/iter/cumin]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative minimum value.</span>
-   <span class="signature">[`itercuminabs( iterator )`][@stdlib/stats/iter/cuminabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative minimum absolute value.</span>
-   <span class="signature">[`itercuprod( iterator )`][@stdlib/stats/iter/cuprod]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative product.</span>
-   <span class="signature">[`itercurange( iterator )`][@stdlib/stats/iter/curange]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative range.</span>
-   <span class="signature">[`itercusum( iterator )`][@stdlib/stats/iter/cusum]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative sum.</span>
-   <span class="signature">[`itercusumabs( iterator )`][@stdlib/stats/iter/cusumabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative sum of absolute values.</span>
-   <span class="signature">[`itercusumabs2( iterator )`][@stdlib/stats/iter/cusumabs2]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative sum of squared absolute values.</span>
-   <span class="signature">[`itermax( iterator )`][@stdlib/stats/iter/max]</span><span class="delimiter">: </span><span class="description">compute the maximum value of all iterated values.</span>
-   <span class="signature">[`itermaxabs( iterator )`][@stdlib/stats/iter/maxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of all iterated values.</span>
-   <span class="signature">[`itermean( iterator )`][@stdlib/stats/iter/mean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean over all iterated values.</span>
-   <span class="signature">[`itermeanabs( iterator )`][@stdlib/stats/iter/meanabs]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of absolute values for all iterated values.</span>
-   <span class="signature">[`itermeanabs2( iterator )`][@stdlib/stats/iter/meanabs2]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of squared absolute values for all iterated values.</span>
-   <span class="signature">[`itermidrange( iterator )`][@stdlib/stats/iter/midrange]</span><span class="delimiter">: </span><span class="description">compute the mid-range of all iterated values.</span>
-   <span class="signature">[`itermin( iterator )`][@stdlib/stats/iter/min]</span><span class="delimiter">: </span><span class="description">compute the minimum value of all iterated values.</span>
-   <span class="signature">[`iterminabs( iterator )`][@stdlib/stats/iter/minabs]</span><span class="delimiter">: </span><span class="description">compute the minimum absolute value of all iterated values.</span>
-   <span class="signature">[`itermmax( iterator, W )`][@stdlib/stats/iter/mmax]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving maximum value.</span>
-   <span class="signature">[`itermmaxabs( iterator, W )`][@stdlib/stats/iter/mmaxabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving maximum absolute value.</span>
-   <span class="signature">[`itermmean( iterator, W )`][@stdlib/stats/iter/mmean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving arithmetic mean.</span>
-   <span class="signature">[`itermmeanabs( iterator, W )`][@stdlib/stats/iter/mmeanabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving arithmetic mean of absolute values.</span>
-   <span class="signature">[`itermmeanabs2( iterator, W )`][@stdlib/stats/iter/mmeanabs2]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving arithmetic mean of squared absolute values.</span>
-   <span class="signature">[`itermmidrange( iterator, W )`][@stdlib/stats/iter/mmidrange]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving mid-range.</span>
-   <span class="signature">[`itermmin( iterator, W )`][@stdlib/stats/iter/mmin]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving minimum value.</span>
-   <span class="signature">[`itermminabs( iterator, W )`][@stdlib/stats/iter/mminabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving minimum absolute value.</span>
-   <span class="signature">[`itermprod( iterator, W )`][@stdlib/stats/iter/mprod]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving product.</span>
-   <span class="signature">[`itermrange( iterator, W )`][@stdlib/stats/iter/mrange]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving range.</span>
-   <span class="signature">[`itermsum( iterator, W )`][@stdlib/stats/iter/msum]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving sum.</span>
-   <span class="signature">[`itermsumabs( iterator, W )`][@stdlib/stats/iter/msumabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving sum of absolute values.</span>
-   <span class="signature">[`itermsumabs2( iterator, W )`][@stdlib/stats/iter/msumabs2]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving sum of squared absolute values.</span>
-   <span class="signature">[`iterprod( iterator )`][@stdlib/stats/iter/prod]</span><span class="delimiter">: </span><span class="description">compute the product of all iterated values.</span>
-   <span class="signature">[`iterrange( iterator )`][@stdlib/stats/iter/range]</span><span class="delimiter">: </span><span class="description">compute the range of all iterated values.</span>
-   <span class="signature">[`iterstdev( iterator[, mean] )`][@stdlib/stats/iter/stdev]</span><span class="delimiter">: </span><span class="description">compute the corrected sample standard deviation over all iterated values.</span>
-   <span class="signature">[`itersum( iterator )`][@stdlib/stats/iter/sum]</span><span class="delimiter">: </span><span class="description">compute the sum of all iterated values.</span>
-   <span class="signature">[`itersumabs( iterator )`][@stdlib/stats/iter/sumabs]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values for all iterated values.</span>
-   <span class="signature">[`itersumabs2( iterator )`][@stdlib/stats/iter/sumabs2]</span><span class="delimiter">: </span><span class="description">compute the sum of squared absolute values for all iterated values.</span>
-   <span class="signature">[`itervariance( iterator[, mean] )`][@stdlib/stats/iter/variance]</span><span class="delimiter">: </span><span class="description">compute the unbiased sample variance over all iterated values.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var getKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/stats-iter' );

console.log( getKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter

[test-image]: https://github.com/stdlib-js/stats-iter/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-iter/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-iter/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-iter/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-iter/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-iter/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-iter/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-iter/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter/main/LICENSE

<!-- <toc-links> -->

[@stdlib/stats/iter/cugmean]: https://github.com/stdlib-js/stats-iter-cugmean

[@stdlib/stats/iter/cuhmean]: https://github.com/stdlib-js/stats-iter-cuhmean

[@stdlib/stats/iter/cumax]: https://github.com/stdlib-js/stats-iter-cumax

[@stdlib/stats/iter/cumaxabs]: https://github.com/stdlib-js/stats-iter-cumaxabs

[@stdlib/stats/iter/cumean]: https://github.com/stdlib-js/stats-iter-cumean

[@stdlib/stats/iter/cumeanabs]: https://github.com/stdlib-js/stats-iter-cumeanabs

[@stdlib/stats/iter/cumeanabs2]: https://github.com/stdlib-js/stats-iter-cumeanabs2

[@stdlib/stats/iter/cumidrange]: https://github.com/stdlib-js/stats-iter-cumidrange

[@stdlib/stats/iter/cumin]: https://github.com/stdlib-js/stats-iter-cumin

[@stdlib/stats/iter/cuminabs]: https://github.com/stdlib-js/stats-iter-cuminabs

[@stdlib/stats/iter/cuprod]: https://github.com/stdlib-js/stats-iter-cuprod

[@stdlib/stats/iter/curange]: https://github.com/stdlib-js/stats-iter-curange

[@stdlib/stats/iter/cusum]: https://github.com/stdlib-js/stats-iter-cusum

[@stdlib/stats/iter/cusumabs]: https://github.com/stdlib-js/stats-iter-cusumabs

[@stdlib/stats/iter/cusumabs2]: https://github.com/stdlib-js/stats-iter-cusumabs2

[@stdlib/stats/iter/max]: https://github.com/stdlib-js/stats-iter-max

[@stdlib/stats/iter/maxabs]: https://github.com/stdlib-js/stats-iter-maxabs

[@stdlib/stats/iter/mean]: https://github.com/stdlib-js/stats-iter-mean

[@stdlib/stats/iter/meanabs]: https://github.com/stdlib-js/stats-iter-meanabs

[@stdlib/stats/iter/meanabs2]: https://github.com/stdlib-js/stats-iter-meanabs2

[@stdlib/stats/iter/midrange]: https://github.com/stdlib-js/stats-iter-midrange

[@stdlib/stats/iter/min]: https://github.com/stdlib-js/stats-iter-min

[@stdlib/stats/iter/minabs]: https://github.com/stdlib-js/stats-iter-minabs

[@stdlib/stats/iter/mmax]: https://github.com/stdlib-js/stats-iter-mmax

[@stdlib/stats/iter/mmaxabs]: https://github.com/stdlib-js/stats-iter-mmaxabs

[@stdlib/stats/iter/mmean]: https://github.com/stdlib-js/stats-iter-mmean

[@stdlib/stats/iter/mmeanabs]: https://github.com/stdlib-js/stats-iter-mmeanabs

[@stdlib/stats/iter/mmeanabs2]: https://github.com/stdlib-js/stats-iter-mmeanabs2

[@stdlib/stats/iter/mmidrange]: https://github.com/stdlib-js/stats-iter-mmidrange

[@stdlib/stats/iter/mmin]: https://github.com/stdlib-js/stats-iter-mmin

[@stdlib/stats/iter/mminabs]: https://github.com/stdlib-js/stats-iter-mminabs

[@stdlib/stats/iter/mprod]: https://github.com/stdlib-js/stats-iter-mprod

[@stdlib/stats/iter/mrange]: https://github.com/stdlib-js/stats-iter-mrange

[@stdlib/stats/iter/msum]: https://github.com/stdlib-js/stats-iter-msum

[@stdlib/stats/iter/msumabs]: https://github.com/stdlib-js/stats-iter-msumabs

[@stdlib/stats/iter/msumabs2]: https://github.com/stdlib-js/stats-iter-msumabs2

[@stdlib/stats/iter/prod]: https://github.com/stdlib-js/stats-iter-prod

[@stdlib/stats/iter/range]: https://github.com/stdlib-js/stats-iter-range

[@stdlib/stats/iter/stdev]: https://github.com/stdlib-js/stats-iter-stdev

[@stdlib/stats/iter/sum]: https://github.com/stdlib-js/stats-iter-sum

[@stdlib/stats/iter/sumabs]: https://github.com/stdlib-js/stats-iter-sumabs

[@stdlib/stats/iter/sumabs2]: https://github.com/stdlib-js/stats-iter-sumabs2

[@stdlib/stats/iter/variance]: https://github.com/stdlib-js/stats-iter-variance

<!-- </toc-links> -->

</section>

<!-- /.links -->
