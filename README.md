# ghstats

Command line tool to find interesting stats about a given Github repository

## Installation

    $ npm install -g ghstats

## Usage 

    Usage: ghstats [options] [command]

    Commands:

      issues <repo>      Grabs useful information about the repos issues

    Options:

      -h, --help               output usage information
      -V, --version            output the version number
      -m, --maxissues [total]  Specify the max number of issues you want to analyse starting from the most recent. Maxium of 100. [total]



## Examples

    ghstats issues h5bp/html5-boilerplate
    h5bp/html5-boilerplate
    Average time taken to close issue: 2.41 days


    ghstats issues cdnjs/cdnjs           
    cdnjs/cdnjs
    Average time taken to close issue: 1.28 days

    ghstats issues twitter/bootstrap
    twitter/bootstrap
    Average time taken to close issue: 21.82 hours

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>