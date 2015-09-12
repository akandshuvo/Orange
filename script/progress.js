
window.onload=function onload() {
  var circle = new ProgressBar.Circle('#progress', {
    color: 'rgb(255,96,88)',
    strokeWidth: 0,
    duration: 2000,
    easing: 'bounce',
    text: {
        value: '%',

    },
    step: function(state, bar) {
        bar.setText((bar.value() * 10000).toFixed(0)+'%');
    }
});
circle.animate(.85);
  
};