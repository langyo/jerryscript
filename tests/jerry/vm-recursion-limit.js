// Copyright JS Foundation and other contributors, http://js.foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* Note: if the tests suite vm-recursion-limit changes, this variable must be changed as well */
var limit = 100;
var counter = 0;

function f () {
  counter++;
  return f ();
}

try {
  f ();
  assert (false);
} catch (e) {
  assert (e instanceof RangeError);
  assert (counter === limit);
}