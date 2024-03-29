/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var dt = require( '@stdlib/array-dtypes' );


// MAIN //

/**
* Returns a list of complex typed array data types.
*
* @returns {StringArray} list of complex typed array data types
*
* @example
* var list = dtypes();
* // e.g., returns [ 'complex64', ... ]
*/
function dtypes() {
	return dt( 'complex_floating_point' );
}


// EXPORTS //

module.exports = dtypes;
