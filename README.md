# kriegslustig:cssnext - 0.0.2
Use cssnext inside meteor without the @import madness http://cssnext.io

This package builds '.next.css' files as [cssnext](http://cssnext.io). It differs from the `kit:cssnext` package in the way it handles `.import.next.css`. It takes these files and prepends it's contents to all `.next.css` files. `._next.css` is an alias for `.import.next.css`.

This buildPlugin (like they all do) follows the meteor include [order-rules](http://docs.meteor.com/#/full/fileloadorder). That means that when you have a file in `client/stylesheets/myStyles.next.css` and now want to add color variables, you can simply place all colors in `client/stylesheets/lib/colors.import.next.css`.

I structure my styles with this package like this:

```
client/stylesheets/main.next.css // All styles are aggregated here
client/stylesheets/lib/variables.import.next.css
client/stylesheets/components/someComponent.import.next.css
```

## TODO
* Add some comments to the code
* Add hooks for nextcss
* Fix sourcemaps
