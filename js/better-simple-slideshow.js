var makeBSS = function (el, options) {
    var $slideshows = document.querySelectorAll(el), // a collection of all of the slideshow
        $slideshow = {},
        Slideshow = {
            init: function (el, options) {
                this.counter = 0; // to keep track of current slide
                this.el = el; // current slideshow container    
                this.$items = el.querySelectorAll('figure'); // a collection of all of the slides, caching for performance
                this.numItems = this.$items.length; // total number of slides

                this.opts = {
                    auto: (typeof options.auto === "undefined") ? false : options.auto,
                    speed: (typeof options.speed === "undefined") ? 1500 : options.speed,
                    fullScreen: (typeof options.fullScreen === "undefined") ? false : options.fullScreen
                };
                
                this.$items[0].classList.add('bss-show'); // add show class to first figure 
                this.injectControls(el);
                this.addEventListeners(el);
                if (this.opts.auto) {
                    this.autoCycle(this.opts.speed);
                }
            },
            showCurrent: function () {
                var itemToShow = this.counter;// uses remainder (aka modulo) operator to get the actual index of the element to show  
  
                // remove .show from whichever element currently has it 
                // http://stackoverflow.com/a/16053538/2006057
                [].forEach.call(this.$items, function (el) {
                    el.classList.remove('bss-show');
                });
  
                // add .show to the one item that's supposed to have it
                this.$items[itemToShow].classList.add('bss-show');
            },
            injectControls: function (el) {
            // build and inject prev/next controls
                // first create all the new elements
                var spanPrev = document.createElement("span"),
                    spanNext = document.createElement("span"),
                    docFrag = document.createDocumentFragment();
        
                // add classes
                spanPrev.classList.add('bss-prev');
                spanNext.classList.add('bss-next');
        
                // add contents
                spanPrev.innerHTML = '&laquo;';
                spanNext.innerHTML = '&raquo;';
                
                // append elements to fragment, then append fragment to DOM
                docFrag.appendChild(spanPrev);
                docFrag.appendChild(spanNext);
                el.appendChild(docFrag);
            },
            addEventListeners: function (el) {
                var that = this;
                el.querySelector('.bss-next').addEventListener('click', function () {
                    that.counter = (that.counter + 1 === that.numItems)?0:that.counter+1;
                    that.showCurrent();
                }, false);
            
                el.querySelector('.bss-prev').addEventListener('click', function () {
                    that.counter = (that.counter - 1 < 0)?that.numItems-1:that.counter-1;
                    that.showCurrent();
                }, false);
                
                el.onkeydown = function (e) {
                    e = e || window.event;
                    if (e.keyCode === 37) {
                        that.counter--;
                        that.showCurrent();
                    } else if (e.keyCode === 39) {
                        that.counter++;
                        that.showCurrent();
                    }
                };
            },
            autoCycle: function (speed) {
                var that = this;
                window.setInterval(function () {
                    that.counter++;
                    that.showCurrent();
                }, speed);
            }
        }; // end Slideshow object 
        
    // make instances of Slideshow as needed
    [].forEach.call($slideshows, function (el) {
        $slideshow = Object.create(Slideshow);
        $slideshow.init(el, options);
    });
};
