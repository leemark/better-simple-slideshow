# A Better Simple Slideshow
This is a fairly basic slideshow, written in javascript. This is a dual-purpose project, it's meant to be something you can drop right into your page and use if you so choose, but it's also meant as an example/tutorial script showing how to build a simple DIY slideshow from scratch on your own. A [tutorial/walkthrough blog post will be published here](http://themarklee.com) fairly soon.   

## Features
* fully responsive
* option for auto-advancing slides, or manually advancing by user
* multiple slideshows per-page
* supports arrow-key navigation
* full-screen toggle using HTML5 fullscreen api
* swipe events supported on touch devices (requires [hammer.js](https://github.com/hammerjs/hammer.js))
* written in vanilla JS--no jQuery dependency (much :sparkling_heart: for [jQuery](https://github.com/jquery/jquery) though!)

## Getting Started
1. HTML markup for the slideshow should look basically like this, with a container element wrapping the whole thing (doesn't have to be a &lt;div&gt;) and each slide is a &lt;figure&gt;.
        
```html
    <div class="slideshow-class-goes-here">
        <figure>
            <img src="path/to/img" width="100%" />
            <figcaption>Caption goes here</figcaption> 
        </figure>
        
        <-- more figures here as needed -->
        
    </div>    
```    

2. include the script: js/better-simple-slideshow.min.js or js/better-simple-slideshow.js
3. include the stylesheet css/simple-slideshow-styles.css
4. initalize the slideshow:
```html
<script>
    makeBSS('.slideshow-class-goes-here');
</script>
```    
## Options
...

## Demo/Examples
See [demo slideshows here](http://leemark.github.io/better-simple-slideshow/).