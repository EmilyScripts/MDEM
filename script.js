var about = document.getElementById('about');
var team = document.getElementById('team');
var contact = document.getElementById('contact');

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('about_link').classList.add('active');
})
                          


window.addEventListener('scroll', function(){

  var halfway = window.innerHeight / 2;  
  var aboutTop = about.getBoundingClientRect().top;
  var teamTop = team.getBoundingClientRect().top;
  var contactTop = contact.getBoundingClientRect().top;
  
  if (aboutTop <= 0 && aboutTop > -50 || teamTop > halfway && teamTop < halfway + 50) {
    document.getElementById('about_link').classList.add('active');
    document.getElementById('team_link').classList.remove('active');
    document.getElementById('contact_link').classList.remove('active');
  }
  
  if (teamTop <= 0 && teamTop > -50 || contactTop > halfway && contactTop < halfway + 50) {
    document.getElementById('team_link').classList.add('active');
    document.getElementById('about_link').classList.remove('active');
    document.getElementById('contact_link').classList.remove('active');
    
  }
  
  if (contactTop <= 0 && contactTop > -50) {
    document.getElementById('contact_link').classList.add('active');
    document.getElementById('about_link').classList.remove('active');
    document.getElementById('team_link').classList.remove('active');
  }
  
})