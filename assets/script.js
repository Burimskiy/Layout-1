var accordionBtn = document.querySelectorAll('.accordion-item-btn');

accordionBtn.forEach(function(elem) {
	elem.addEventListener('click', function() {
		if ( elem.parentElement.classList.contains('accordion-open') ) {
			accordionClosed(elem.parentElement);			
			elem.nextElementSibling.style.height = 0;
				
		} else {
			accordionOpen(elem.parentElement);
			elem.nextElementSibling.style.height = elem.nextElementSibling.scrollHeight+'px';
		}
	});
});

function accordionOpen(elem){
	console.log('open');
	elem.classList.add('accordion-open');
	
}

function accordionClosed(elem){
	console.log('closed');
	elem.classList.remove('accordion-open');	
}



new Swiper('.reviews-slider-container', {		
		effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        
        loop: true,
		centeredSlides: true,
		slidesPerView: 2,
		spaceBetween : 5,
		autoHeight: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 85,
            depth: 35,
            modifier: 3.7,
            slideShadows: false,
        },
		slideNextClass: 'reviews-next-slide',
		slidePrevClass: 'reviews-prev-slide',
		pagination: {
			el: '.reviews-slider-pagination',
			clickable: true,
		},
		slideActiveClass: 'reviews-active-slide',
		/*autoplay: {
		   delay: 5000,
		},*/
		
});
new Swiper('.oss-slider-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,  
  pagination: {
	el: '.oss-slider-pagination',
	clickable: true,
  },
  
  //slideActiveClass: 'oss-active-slide',

  // And if we need scrollbar
 /* scrollbar: {
    el: '.swiper-scrollbar',
  },*/
  slidesPerView: 3,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
		1: {
		  slidesPerView: 1,
		  spaceBetween: 10
		},
		// when window width is >= 480px
		577: {
		  slidesPerView: 2,
		  spaceBetween: 10
		},
		// when window width is >= 640px
		769: {
		  slidesPerView: 3,
		  spaceBetween: 40
		} 
	},
	/*autoplay: {
		delay: 5000,
	},*/
  //centeredSlides: true,
  //centeredSlidesBounds: true,
});

new Swiper('.ois-slider-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  /*pagination: {
    el: '.swiper-pagination',
  },*/

  // Navigation arrows
  navigation: {
    nextEl: '.btn-slider-prev',
    prevEl: '.btn-slider-next',
  },
  
  pagination: {
	el: '.ois-slider-pagination',
	clickable: true,
  },
  
  slideActiveClass: 'ois-active-slide',

  // And if we need scrollbar
 /* scrollbar: {
    el: '.swiper-scrollbar',
  },*/
  slidesPerView: 3,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
		10: {
		  slidesPerView: 1,
		  spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 2,
		  spaceBetween: 30
		},
		// when window width is >= 640px
		1000: {
		  slidesPerView: 3,
		  spaceBetween: 40
		} 
	},
	/*autoplay: {
	   delay: 5000,
	},*/
  //centeredSlides: true,
  //centeredSlidesBounds: true,
});


let threeSlider = new Swiper('.slider-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  slideActiveClass: 'slider-active-slide',

  // And if we need scrollbar
 /* scrollbar: {
    el: '.swiper-scrollbar',
  },*/
  //slidesPerView: 3,
  //spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
		10: {
		  slidesPerView: 1,
		  spaceBetween: 0
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 2,
		  spaceBetween: 10
		},
		// when window width is >= 640px
		1100: {
		  slidesPerView: 3,
		  spaceBetween: 100
		} 
	},
	navigation: {
		nextEl: '.btn-slider-next',
		prevEl: '.btn-slider-prev',
	},
  
	pagination: {
		el: '.slider-pagination',
		clickable: true,
	},
	/*autoplay: {
		delay: 5000,
	},*/			
  //centeredSlides: true,
  //centeredSlidesBounds: true,
});

threeSlider.on('slideChange', function(){

	let oneSliderContainer = document.querySelector('.one-slider-container');
	oneSliderContainer.innerHTML ='';
	//let firstSlide = document.querySelector('.slider-track .slider-active-slide');	
	let activeSlide = '';
	
	activeSlide = this.slides[this.activeIndex-1];
	//activeSlide.querySelector('.slider-item-heading').classList.add('one-slider-item-heading')
	//activeSlide.querySelector('.slider-item-heading').classList.remove('slider-item-heading');
	//let sliderItemHeading = activeSlide.querySelector('.one-slider-item-heading').innerHTML;
	//let blackArrows = '<div class="arrow-wrapper-black"><div class="arrow-wrapper-black-big"><img src="assets/images/arrow-black.svg" class="animation-icons-opacity-6"><img src="assets/images/arrow-black.svg" class="animation-icons-opacity-5"><img src="assets/images/arrow-black.svg" class="animation-icons-opacity-4"><img src="assets/images/arrow-black.svg" class="animation-icons-opacity-3"><img src="assets/images/arrow-black.svg" class="animation-icons-opacity-2"><img src="assets/images/arrow-black.svg" class="animation-icons-opacity-1"></div></div>';
	
	//activeSlide.querySelector('.one-slider-item-heading').innerHTML = sliderItemHeading + blackArrows;
	//let newActiveSlide = activeSlide;
	//console.log(newActiveSlide);
	
	oneSliderContainer.innerHTML = activeSlide.innerHTML;//newActiveSlide.innerHTML;//this.slides[this.activeIndex-1].innerHTML;

});


/* animation */

function getRightBlock(data){	
	return data.classList.contains('.circle-wrapper-right');
}

window.addEventListener('scroll', function() {
	
	let circleWrapper = document.querySelectorAll('.circle-wrapper'); //;
	let windowHeight = window.innerHeight;
	let circleItem;
	let circleDescription;
	//let mobileText = document.querySelector('.mobile-text');
	//let circleWrapper = document.querySelector('.circles-wrapper');
	//let circleWrapper = document.querySelector('.circle-wrapper');		
    let pageScroll = window.pageYOffset;
    //let circleText = document.querySelector('.circle-text');
	
	


    if ( window.innerWidth > 767) {

		for (let j = 0; j < circleWrapper.length; j++ ){

			circleDescription = circleWrapper[j].querySelector('.circle-text');
			if ( pageScroll + windowHeight >= circleDescription.getBoundingClientRect().top ) {
			console.log(circleDescription[j]);
				//circleText.classList.add('animation-show');
				//circleText.classList.remove('animation-no-show');
				circleItem = circleWrapper[j].querySelectorAll('.circle-item');
				for (let i = 0; i < circleItem.length; i++ ){
					let k = i+1;
					circleItem[i].classList.add('add-animation');
				}

				if ( circleItem.clientHeight) {

				}

			} else {

				//circleText.classList.remove('animation-show');
				//circleText.classList.add('animation-no-show');


			}
			
		}

    }
    /*else {

        if ( pageScroll > 425 ){

            mobileText.classList.remove('mobile-text-before');
            mobileText.classList.add('mobile-text-after');
            circleWrapper.classList.remove('circles-wrapper-before');
            circleWrapper.classList.add('circles-wrapper-after');
            //document.querySelector('.mobile-animation-1').classList.add('mobile-animation-1-after');


            //for (var i = 0; i < circleItem.length; i++ ){
            //    var k = i+1;
            //    circleItem[i].classList.add('mobile-animation-'+k);
            //}

        }


        else {

            mobileText.classList.add('mobile-text-before');
            mobileText.classList.remove('mobile-text-after');
            document.querySelector('.mobile-animation-1').classList.remove('mobile-animation-1-before');

            circleWrapper.classList.add('circles-wrapper-before');
            circleWrapper.classList.remove('circles-wrapper-after');

        }

    }*/


    //console.log(pageScroll);

});


/* hover for oss slider */

/*let ossSliderItems = document.querySelectorAll('.oss-slider-item-container');

for (let i = 0; i < ossSliderItems.length; i++) {
	ossSliderItems[i].addEventListener('mouseover', function() {
		ossSliderItems[i].style.transform = 'translateY(207px);';
		console.log(ossSliderItems[i]);
		console.log(123);
	});
	
	
}*/

