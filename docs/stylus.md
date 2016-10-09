# Stylus toolbelt

Bourgeon comes by default with [stylus-loader]() and a few tools that plays nice together.

## Media Queries

You can use all the mixins provided by [rupture](https://github.com/jescalan/rupture). See the docs for more information on how to use it.

```stylus
#main
  width 960px
  +below(1000px)
    width 600px
```

## Grid System

You can also use the helpers provided by the amazing grid system called [jeet](http://jeet.gs/).

```stylus
div
  column(1/2)
  +below(1000px) // rupture
    stack()
```

## Basic styles

Coming soon...
