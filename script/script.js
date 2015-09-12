/*Navigation Background*/

/*Magic menu script*/
function yScroll(){
	var menu, yPos;
	menu = document.getElementById('nav');
	yPos = window.pageYOffset;
	if(yPos >30){
		menu.style.height = "80px";
		menu.style.paddingTop = "0px";
		menu.style.background="rgb(255,96,88)";/*alternate colore rgb(225,50,93)*/

	} else {
		menu.style.height = "100px";
		menu.style.paddingTop = "10px";
		menu.style.background="transparent";
	}
}
window.addEventListener("scroll", yScroll);


/*Tooltip*/
jQuery(document).ready(function(){
			// Position Tipso
			jQuery('.right').tipso({
				position: 'right',
				background: 'rgba(0,0,0,0.8)',
				useTitle: false,
			});
			jQuery('.left').tipso({
				position: 'left',
				background: 'tomato',
				useTitle: false,
			});
			jQuery('.bottom').tipso({
				position: 'bottom',
				background: '#2574A9',
				useTitle: false,
			});
			jQuery('.top, .destroy, .update, .update-tipso-content').tipso({
				position: 'top',
				background: '#F62459',
				useTitle: false,
			});
			// Use Title For Tipso Content
			jQuery('.title-tipso').tipso();
			// Tipso for Image
			jQuery('.img-tipso').tipso({
				useTitle: false,
				background: 'rgb(85,181,85)'
			});
			// Show - Hide Tipso on Click
			jQuery('.show-hide').tipso({
				background: 'tomato',
				useTitle: false
			});
			jQuery('.show-hide-tipso').on('click', function(e){
				if(jQuery(this).hasClass('clicked')){
					jQuery(this).removeClass('clicked');
					jQuery('.show-hide').tipso('hide');
				} else {
					jQuery(this).addClass('clicked');
					jQuery('.show-hide').tipso('show');
				}
				e.preventDefault();
			});
			// Before show
			jQuery('.beforeShow').tipso({
				background: 'tomato',
				useTitle: false,
				onBeforeShow : function(){
					console.log('This is onBeforeShow');
				}
			});
			jQuery('.beforeShow-tipso').on('click', function(e){
				if(jQuery(this).hasClass('clicked')){
					jQuery(this).removeClass('clicked');
					jQuery('.beforeShow').tipso('hide');
				} else {
					jQuery(this).addClass('clicked');
					jQuery('.beforeShow').tipso('show');
				}
				e.preventDefault();
			});
			//Ajax
			jQuery('.ajax').tipso({
				background: 'tomato',
				useTitle: false,
				ajaxContentUrl : 'ajax.html'
			});
			// Destroy Tipso
			jQuery('.destroy-tipso').on('click', function(e){
				jQuery('.destroy').tipso('destroy');
				e.preventDefault();
			});
			// Update Tipso Content
			jQuery('.update-tipso').on('click', function(e){
				jQuery('.update').tipso('update', 'content', 'this is updated tipso');
				e.preventDefault();
			});
			// Update Tipso Content from input field
			jQuery('.update-tipso-input').on('click', function(e){
				var content = jQuery('.tipso-content').val();
				jQuery('.update-tipso-content').tipso('update', 'content', content);
				e.preventDefault();
			});
			// Calback Tipso
			jQuery('.callback-tipso').tipso({
				onShow : function(){
			    	alert('Tipso Showed');
			  	},
				onHide: function(){
					alert('Tipso Hidden');
				}
			});
			jQuery('.page-load').tipso({
				position: 'right',
				background: 'rgb(85,181,85)',
				color: 'rgb(85,181,85)',
				useTitle: false

			});
			// Animate Tipso
			jQuery('.animate').tipso({
				animationIn: 'fadeIn',
				animationOut: 'fadeOut',
				useTitle: false
			});
			jQuery('.animationIn').on('change', function(e){
				var $this = jQuery(this);
				jQuery('.animate').tipso('update', 'animationIn', $this.val());				
			});
			jQuery('.animationOut').on('change', function(e){
				var $this = jQuery(this);
				jQuery('.animate').tipso('update', 'animationOut', $this.val());				
			});

		});
		jQuery(window).load(function(){
			// Show Tipso on Load
			jQuery('.page-load').tipso('show');
		});



/*Circular progress Bar*/

window.onload=function onload() {
  var circle = new ProgressBar.Circle('#ux', {
    color: 'rgb(255,96,88)',
    strokeWidth: 5,
    duration: 2000,
    easing: 'bounce',
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0)+'%'+"  "+'UX');
    }
});
circle.animate(.90);

var circle = new ProgressBar.Circle('#web', {
    color: 'rgb(255,96,88)',
    strokeWidth: 5,
    duration: 2000,
    easing: 'bounce',
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0)+'%'+"  "+'WEB');
    }
});
circle.animate(.85);
var circle = new ProgressBar.Circle('#app', {
    color: 'rgb(255,96,88)',
    strokeWidth: 5,
    duration: 2000,
    easing: 'bounce',
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0)+'%'+"  "+'APP');
    }
});
circle.animate(.80);
var circle = new ProgressBar.Circle('#mark', {
    color: 'rgb(255,96,88)',
    strokeWidth: 5,
    duration: 2000,
    easing: 'bounce',
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0)+'%'+"  "+'Marketting');
    }
});
circle.animate(.60);
var circle = new ProgressBar.Circle('#design', {
    color: 'rgb(255,96,88)',
    strokeWidth: 5,
    duration: 2000,
    easing: 'bounce',
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0)+'%'+"  "+'Design');
    }
});
circle.animate(.75);
var circle = new ProgressBar.Circle('#brand', {
    color: 'rgb(255,96,88)',
    strokeWidth: 5,
    duration: 2000,
    easing: 'bounce',
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0)+'%'+"  "+'Brand');
    },
});
circle.animate(.60);
  
/*Countdown Bar*/
var circle = new ProgressBar.Circle('#hour', {
    color: '#fff',
    strokeWidth: 0,
    duration: 4000,
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 10000).toFixed(0)+"  "+"  "+'Hours');
    },
});
circle.animate(.24500);

var circle = new ProgressBar.Circle('#coffee', {
    color: '#fff',
    strokeWidth: 0,
    duration: 4000,
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 10000).toFixed(0)+"  "+"  "+'Coffee');
    },
});
circle.animate(.4500);

var circle = new ProgressBar.Circle('#project', {
    color: '#fff',
    strokeWidth: 0,
    duration: 4000,
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 10000).toFixed(0)+"  "+"  "+'Project');
    },
});
circle.animate(.2250);

var circle = new ProgressBar.Circle('#client', {
    color: '#fff',
    strokeWidth: 0,
    duration: 4000,
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 10000).toFixed(0)+"  "+"  "+'Clients');
    },
});
circle.animate(.1450);

var circle = new ProgressBar.Circle('#award', {
    color: '#fff',
    strokeWidth: 0,
    duration: 4000,
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 1000).toFixed(0)+"  "+"  "+'Awards');
    },
});
circle.animate(.450);


var circle = new ProgressBar.Circle('#sell', {
    color: '#fff',
    strokeWidth: 0,
    duration: 4000,
    text: {
        value: '0',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 1000000).toFixed(0)+'$'+"  "+"  "+'Sell');
    },
});
circle.animate(.25450);
  
};

//Mixit up
$(function(){
    $('#portfolio').mixItUp();  
});