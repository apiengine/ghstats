# Github Average Ticket Time

Hey guys, wrote a small little script to see how long on average it takes for issues to be closed on a Github repository.

It grabs the last 100 issues(by default), then averages their lifespan by using the creation and close dates.

## Setup

1. `clone the repo`
2. `npm install`
3. `node stats.js`

Edit `stats.js` to point at a different repository

Examples

## [h5bp/html5-boilerplate](http://github.com/h5bp/html5-boilerplate)

```
Average hours: 63.92
Average days: 2.66
```

## [cdnjs/cdnjs](cdnjs/cdnjs)

```
Average hours: 93.68
Average days: 3.9
```

## [twitter/bootstrap](http://github.com/twitter/bootstrap)

```
Average hours: 20.97
Average days: 0.87
```