/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import itercugmean = require( '@stdlib/stats-iter-cugmean' );
import itercuhmean = require( '@stdlib/stats-iter-cuhmean' );
import itercumax = require( '@stdlib/stats-iter-cumax' );
import itercumaxabs = require( '@stdlib/stats-iter-cumaxabs' );
import itercumean = require( '@stdlib/stats-iter-cumean' );
import itercumeanabs = require( '@stdlib/stats-iter-cumeanabs' );
import itercumeanabs2 = require( '@stdlib/stats-iter-cumeanabs2' );
import itercumidrange = require( '@stdlib/stats-iter-cumidrange' );
import itercumin = require( '@stdlib/stats-iter-cumin' );
import itercuminabs = require( '@stdlib/stats-iter-cuminabs' );
import itercuprod = require( '@stdlib/stats-iter-cuprod' );
import itercurange = require( '@stdlib/stats-iter-curange' );
import itercusum = require( '@stdlib/stats-iter-cusum' );
import itercusumabs = require( '@stdlib/stats-iter-cusumabs' );
import itercusumabs2 = require( '@stdlib/stats-iter-cusumabs2' );
import itermax = require( '@stdlib/stats-iter-max' );
import itermaxabs = require( '@stdlib/stats-iter-maxabs' );
import itermean = require( '@stdlib/stats-iter-mean' );
import itermeanabs = require( '@stdlib/stats-iter-meanabs' );
import itermeanabs2 = require( '@stdlib/stats-iter-meanabs2' );
import itermidrange = require( '@stdlib/stats-iter-midrange' );
import itermin = require( '@stdlib/stats-iter-min' );
import iterminabs = require( '@stdlib/stats-iter-minabs' );
import itermmax = require( '@stdlib/stats-iter-mmax' );
import itermmaxabs = require( '@stdlib/stats-iter-mmaxabs' );
import itermmean = require( '@stdlib/stats-iter-mmean' );
import itermmeanabs = require( '@stdlib/stats-iter-mmeanabs' );
import itermmeanabs2 = require( '@stdlib/stats-iter-mmeanabs2' );
import itermmidrange = require( '@stdlib/stats-iter-mmidrange' );
import itermmin = require( '@stdlib/stats-iter-mmin' );
import itermminabs = require( '@stdlib/stats-iter-mminabs' );
import itermprod = require( '@stdlib/stats-iter-mprod' );
import itermrange = require( '@stdlib/stats-iter-mrange' );
import itermsum = require( '@stdlib/stats-iter-msum' );
import itermsumabs = require( '@stdlib/stats-iter-msumabs' );
import itermsumabs2 = require( '@stdlib/stats-iter-msumabs2' );
import iterprod = require( '@stdlib/stats-iter-prod' );
import iterrange = require( '@stdlib/stats-iter-range' );
import iterstdev = require( '@stdlib/stats-iter-stdev' );
import itersum = require( '@stdlib/stats-iter-sum' );
import itersumabs = require( '@stdlib/stats-iter-sumabs' );
import itersumabs2 = require( '@stdlib/stats-iter-sumabs2' );
import itervariance = require( '@stdlib/stats-iter-variance' );

/**
* Interface describing the `iter` namespace.
*/
interface Namespace {
	/**
	* Returns an iterator which iteratively computes a cumulative arithmetic geometric mean.
	*
	* ## Notes
	*
	* -   If provided a negative value, the iterated value is `NaN` for all future invocations.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( 0.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercugmean( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercugmean: typeof itercugmean;

	/**
	* Returns an iterator which iteratively computes a cumulative arithmetic geometric mean.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( 0.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercuhmean( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercuhmean: typeof itercuhmean;

	/**
	* Returns an iterator which iteratively computes a cumulative maximum value.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercumax( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercumax: typeof itercumax;

	/**
	* Returns an iterator which iteratively computes a cumulative maximum absolute value.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercumaxabs( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercumaxabs: typeof itercumaxabs;

	/**
	* Returns an iterator which iteratively computes a cumulative arithmetic mean.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercumean( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercumean: typeof itercumean;

	/**
	* Returns an iterator which iteratively computes a cumulative arithmetic mean of absolute values.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercumeanabs( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercumeanabs: typeof itercumeanabs;

	/**
	* Returns an iterator which iteratively computes a cumulative arithmetic mean of squared absolute values.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercumeanabs2( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercumeanabs2: typeof itercumeanabs2;

	/**
	* Returns an iterator which iteratively computes a cumulative mid-range.
	*
	* ## Notes
	*
	* -   The mid-range is the arithmetic mean of maximum and minimum values. Accordingly, the mid-range is the midpoint of the range and a measure of central tendency.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercumidrange( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercumidrange: typeof itercumidrange;

	/**
	* Returns an iterator which iteratively computes a cumulative minimum value.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercumin( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercumin: typeof itercumin;

	/**
	* Returns an iterator which iteratively computes a cumulative minimum absolute value.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercuminabs( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercuminabs: typeof itercuminabs;

	/**
	* Returns an iterator which iteratively computes a cumulative product.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercuprod( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercuprod: typeof itercuprod;

	/**
	* Returns an iterator which iteratively computes a cumulative range.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercurange( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercurange: typeof itercurange;

	/**
	* Returns an iterator which iteratively computes a cumulative sum.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercusum( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercusum: typeof itercusum;

	/**
	* Returns an iterator which iteratively computes a cumulative sum of absolute values.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercusumabs( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercusumabs: typeof itercusumabs;

	/**
	* Returns an iterator which iteratively computes a cumulative sum of squared absolute values.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itercusumabs2( rand );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itercusumabs2: typeof itercusumabs2;

	/**
	* Computes the maximum value of all iterated values.
	*
	* @param iterator - input iterator
	* @returns maximum value
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var m = ns.itermax( rand );
	* // returns <number>
	*/
	itermax: typeof itermax;

	/**
	* Computes the maximum absolute value of all iterated values.
	*
	* @param iterator - input iterator
	* @returns maximum absolute value
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var m = ns.itermaxabs( rand );
	* // returns <number>
	*/
	itermaxabs: typeof itermaxabs;

	/**
	* Computes the arithmetic mean over all iterated values.
	*
	* @param iterator - input iterator
	* @returns arithmetic mean
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var m = ns.itermean( rand );
	* // returns <number>
	*/
	itermean: typeof itermean;

	/**
	* Computes the arithmetic mean of absolute values for all iterated values.
	*
	* @param iterator - input iterator
	* @returns arithmetic mean of absolute values
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var m = ns.itermeanabs( rand );
	* // returns <number>
	*/
	itermeanabs: typeof itermeanabs;

	/**
	* Computes the arithmetic mean of squared absolute values for all iterated values.
	*
	* @param iterator - input iterator
	* @returns arithmetic mean of squared absolute values
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var m = ns.itermeanabs2( rand );
	* // returns <number>
	*/
	itermeanabs2: typeof itermeanabs2;

	/**
	* Computes the mid-range of all iterated values.
	*
	* ## Notes
	*
	* -   The mid-range is the arithmetic mean of maximum and minimum values. Accordingly, the mid-range is the midpoint of the range and a measure of central tendency.
	*
	* @param iterator - input iterator
	* @returns mid-range
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var m = ns.itermidrange( rand );
	* // returns <number>
	*/
	itermidrange: typeof itermidrange;

	/**
	* Computes the minimum value of all iterated values.
	*
	* @param iterator - input iterator
	* @returns minimum value
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var m = ns.itermin( rand );
	* // returns <number>
	*/
	itermin: typeof itermin;

	/**
	* Computes the minimum absolute value of all iterated values.
	*
	* @param iterator - input iterator
	* @returns minimum absolute value
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var m = ns.iterminabs( rand );
	* // returns <number>
	*/
	iterminabs: typeof iterminabs;

	/**
	* Returns an iterator which iteratively computes a moving maximum value.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving maximum value.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermmax( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermmax: typeof itermmax;

	/**
	* Returns an iterator which iteratively computes a moving maximum absolute value.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving maximum absolute value.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermmaxabs( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermmaxabs: typeof itermmaxabs;

	/**
	* Returns an iterator which iteratively computes a moving arithmetic mean.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving mean.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermmean( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermmean: typeof itermmean;

	/**
	* Returns an iterator which iteratively computes a moving arithmetic mean of absolute values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving mean of absolute values.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermmeanabs( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermmeanabs: typeof itermmeanabs;

	/**
	* Returns an iterator which iteratively computes a moving arithmetic mean of squared absolute values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving mean of squared absolute values.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermmeanabs2( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermmeanabs2: typeof itermmeanabs2;

	/**
	* Returns an iterator which iteratively computes a moving mid-range.
	*
	* ## Notes
	*
	* -   The mid-range is the arithmetic mean of maximum and minimum values. Accordingly, the mid-range is the midpoint of the range and a measure of central tendency.
	* -   The `W` parameter defines the number of iterated values over which to compute the moving mid-range.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermmidrange( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermmidrange: typeof itermmidrange;

	/**
	* Returns an iterator which iteratively computes a moving minimum value.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving minimum value.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermmin( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermmin: typeof itermmin;

	/**
	* Returns an iterator which iteratively computes a moving minimum absolute value.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving minimum absolute value.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermminabs( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermminabs: typeof itermminabs;

	/**
	* Returns an iterator which iteratively computes a moving product.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving product.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermprod( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermprod: typeof itermprod;

	/**
	* Returns an iterator which iteratively computes a moving range.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving range.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermrange( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermrange: typeof itermrange;

	/**
	* Returns an iterator which iteratively computes a moving sum.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving sum.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports Symbol.iterator and the provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermsum( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermsum: typeof itermsum;

	/**
	* Returns an iterator which iteratively computes a moving sum of absolute values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving sum.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermsumabs( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermsumabs: typeof itermsumabs;

	/**
	* Returns an iterator which iteratively computes a moving sum of squared absolute values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of iterated values over which to compute the moving sum.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param W - window size
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var it = ns.itermsumabs2( rand, 3 );
	*
	* var v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* v = it.next().value;
	* // returns <number>
	*
	* // ...
	*/
	itermsumabs2: typeof itermsumabs2;

	/**
	* Computes the product of all iterated values.
	*
	* ## Notes
	*
	* -   For iterators which can generate many values or which may output large numbers, care should be taken to prevent overflow.
	*
	* @param iterator - input iterator
	* @returns product
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var p = ns.iterprod( rand );
	* // returns <number>
	*/
	iterprod: typeof iterprod;

	/**
	* Computes the range of all iterated values.
	*
	* @param iterator - input iterator
	* @returns range
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var v = ns.iterrange( rand );
	* // returns <number>
	*/
	iterrange: typeof iterrange;

	/**
	* Computes the corrected sample standard deviation over all iterated values.
	*
	* @param iterator - input iterator
	* @param mean - known mean
	* @returns corrected sample standard deviation
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var s = ns.iterstdev( rand );
	* // returns <number>
	*/
	iterstdev: typeof iterstdev;

	/**
	* Computes the sum of all iterated values.
	*
	* ## Notes
	*
	* -   For iterators which can generate many values or which may output large numbers, care should be taken to prevent overflow.
	*
	* @param iterator - input iterator
	* @returns sum
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var v = ns.itersum( rand );
	* // returns <number>
	*/
	itersum: typeof itersum;

	/**
	* Computes the sum of absolute values for all iterated values.
	*
	* ## Notes
	*
	* -   For iterators which can generate many values or which may output large numbers, care should be taken to prevent overflow.
	*
	* @param iterator - input iterator
	* @returns sum of absolute values
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var v = ns.itersumabs( rand );
	* // returns <number>
	*/
	itersumabs: typeof itersumabs;

	/**
	* Computes the sum of squared absolute values for all iterated values.
	*
	* ## Notes
	*
	* -   For iterators which can generate many values or which may output large numbers, care should be taken to prevent overflow.
	*
	* @param iterator - input iterator
	* @returns sum of squared absolute values
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var v = ns.itersumabs2( rand );
	* // returns <number>
	*/
	itersumabs2: typeof itersumabs2;

	/**
	* Computes the unbiased sample variance over all iterated values.
	*
	* @param iterator - input iterator
	* @param mean - known mean
	* @returns unbiased sample variance
	*
	* @example
	* var runif = require( '@stdlib/random-iter-uniform' );
	*
	* var rand = runif( -10.0, 10.0, {
	*     'iter': 100
	* });
	*
	* var s2 = ns.itervariance( rand );
	* // returns <number>
	*/
	itervariance: typeof itervariance;
}

/**
* Statistical function iterators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
