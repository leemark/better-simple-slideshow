# A Better Simple Slideshow
This is a fairly basic slideshow, written in javascript. This is a dual-purpose project, it's meant to be something you can drop right into your page and use if you so choose, but it's also meant as an example/tutorial script showing how to build a simple DIY slideshow from scratch on your own. [Here is a tutorial/walkthrough](http://themarklee.com/2014/10/05/better-simple-slideshow/).

## Features
* fully responsive
* option for auto-advancing slides, or manually advancing by user
* multiple slideshows per-page
* supports arrow-key navigation
* full-screen toggle using HTML5 fullscreen api
* swipe events supported on touch devices (requires [hammer.js](https://github.com/hammerjs/hammer.js))
* written in vanilla JS--this means no jQuery dependency (much :sparkling_heart: for [jQuery](https://github.com/jquery/jquery) though!)

## Getting Started


1. HTML markup for the slideshow should look basically like this, with a container element wrapping the whole thing (doesn't have to be a &lt;div&gt;) and each slide is a &lt;figure&gt;.        
    ```html
        <div class="bss-slides">
            <figure>
                <img src="path/to/img" width="100%" />
                <figcaption>Caption goes here</figcaption> 
            </figure>

            <!-- more figures here as needed -->

        </div>    
    ```    
2. Include the script: js/better-simple-slideshow.min.js or js/better-simple-slideshow.js
3. Include the stylesheet css/simple-slideshow-styles.css
4. Initialize the slideshow:

    ```html
    <script>
        makeBSS('.bss-slides');
    </script>
    ```    

## Options
To customize functionality, create an options object, then pass it into `makeBSS()` as the second argument, as seen below:  
```javascript

var opts = {
            //auto-advancing slides? accepts boolean (true/false) or object
            auto : { 
                // speed to advance slides at. accepts number of milliseconds
                speed : 2500, 
                // pause advancing on mouseover? accepts boolean
                pauseOnHover : true 
            },
            // show fullscreen toggle? accepts boolean
            fullScreen : true, 
            // support swiping on touch devices? accepts boolean, requires hammer.js
            swipe : true 
        };
        
makeBSS('.bss-slides', opts);
```


## Demo/Examples
See [demo slideshows here](http://leemark.github.io/better-simple-slideshow/).

## Better Than What?
The name "Better Simple Slideshow" isn't meant to disparage your favorite javascript slideshow, or to imply that this is the best slideshow script out there (far from it, actually). It's just meant to be better than [the earlier version that it evolved out of](http://themarklee.com/2013/12/26/simple-diy-responsive-slideshow-made-html5-css3-javascript/) :)
