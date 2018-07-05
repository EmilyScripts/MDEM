var about = document.getElementById('about');
var team = document.getElementById('team');
var contact = document.getElementById('contact');

// when DOM is loaded and when page is scrolled, check which page link should be active

document.addEventListener('DOMContentLoaded', function(){
  // document.getElementById('about_link').classList.add('active');
  navTracker();
})

window.addEventListener('scroll', function(){

  navTracker();

})

window.addEventListener('keydown', function(){

  navTracker();

});


//checks positions of elements and gives correct link the 'active' class

const navTracker = function() {
  var halfway = window.innerHeight / 2;  
  var aboutTop = about.getBoundingClientRect().top;
  var teamTop = team.getBoundingClientRect().top;
  var contactTop = contact.getBoundingClientRect().top;
  
  if (aboutTop <= 20 && aboutTop > -30 || teamTop > halfway && teamTop < halfway + 50) {
    document.getElementById('about_link').classList.add('active');
    document.getElementById('team_link').classList.remove('active');
    document.getElementById('contact_link').classList.remove('active');
  }
  
  if (teamTop <= 20 && teamTop > -30 || contactTop > halfway && contactTop < halfway + 50) {
    document.getElementById('team_link').classList.add('active');
    document.getElementById('about_link').classList.remove('active');
    document.getElementById('contact_link').classList.remove('active');
  }
  
  if (contactTop <= 20 && contactTop > -30) {
    document.getElementById('contact_link').classList.add('active');
    document.getElementById('about_link').classList.remove('active');
    document.getElementById('team_link').classList.remove('active');
  }
}