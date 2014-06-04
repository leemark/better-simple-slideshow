var makeBSS = function(el, options){
    var $slideshows = document.querySelectorAll(el), // a collection of all of the slideshow
    $slideshow = {},
    Slideshow = {
        init: function(el, options){
            this.counter = 0, // to keep track of current slide
            this.el = el, // current slideshow container    
            this.$items = el.querySelectorAll('figure'), // a collection of all of the slides, caching for performance
            this.numItems = this.$items.length; // total number of slides
            this.addEventListeners(el);
        },
        showCurrent: function(){
            var itemToShow = Math.abs(this.counter%this.numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
  
            // remove .show from whichever element currently has it 
            // http://stackoverflow.com/a/16053538/2006057
            [].forEach.call( this.$items, function(el){
                el.classList.remove('bss-show');
            });
  
            // add .show to the one item that's supposed to have it
            this.$items[itemToShow].classList.add('bss-show');    
        },
        addEventListeners: function(el){
            var that = this;
            el.querySelector('.bss-next').addEventListener('click', function() {
                that.counter++;
                that.showCurrent();
            }, false);
            
            el.querySelector('.bss-prev').addEventListener('click', function() {
                that.counter--;
                that.showCurrent();
            }, false);   
        }
    }; // end Slideshow object 
    
    // make instances of Slideshow as needed
    [].forEach.call( $slideshows, function(el, optioms){
            $slideshow = Object.create( Slideshow ); 
            $slideshow.init(el, options);
    }); 
};