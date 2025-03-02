// Navigation
class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each (function() {
	    let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
	      newCurrentId = id;
        newCurrentTab = $(this);
			}
		});
      if(this.currentId != newCurrentId || this.currentId === null) {
			  this.currentId = newCurrentId;
			  this.currentTab = newCurrentTab;
			  this.setSliderCss();
		  }
  }
	
  setSliderCss() {
    let width = 0;
    let left = 0;
    if(this.currentTab) {
      width = this.currentTab.css('width');
      left = this.currentTab.offset().left;
    }
		$('.et-hero-tab-slider').css('width', width);
    $('.et-hero-tab-slider').css('left', left);
  }
}

new StickyNavigation();
// Navigation End

// Auto Type
var typed = new Typed('.auto-type', {
  strings: ['Designer', 'Developer', 'Freelancer'],
  typeSpeed: 130,
  backSpeed: 130,
  loop: true,
});
// Auto Type End

// Top Button
let mybutton = document.getElementById("topbtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset > 100) {
    mybutton.style.display = "block";
  }
  else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  $('html, body').animate({ scrollTop: 0 }, 'smooth');
}
// Top Button End

// Social Media Button
const circlebg = document.querySelector(".circlebg");

window.addEventListener('scroll', () => {
    circlebg.style.display = window.pageYOffset > 100 ? 'block' : 'none';
});

$(document).ready(function() {
  let open = false;
  $('.circlebg').on('click', function() {
    if (!open) {
      $('.outericons').animate({ opacity: 1 }, 300);
      $('.icon').fadeOut();
      $(this).html("<i class='icon bi bi-x-lg' style='display: none'></i>");
      $('.icon').fadeIn();
      open = true;
    }
    else {
      $('.outericons').animate({ opacity: 0 }, 300);
      $('.icon').fadeOut();
      $(this).html("<i class='icon bi bi-list' style='display: none'></i>");
      $('.icon').fadeIn();
      open = false;
    }
  });
});
// Social Media Button End