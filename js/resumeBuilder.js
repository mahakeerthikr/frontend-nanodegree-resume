/*
This is empty on purpose! Your code to build the resume will go here.
 */
var newHeaderName=HTMLheaderName.replace("%data%","Maha keerthi");
var newHeaderRole=HTMLheaderRole.replace("%data%","front-End-Ninja");
$("#header").append(newHeaderRole);
$("#header").prepend(newHeaderName);

var bio ={
	"name" : "mahakeerthi",
	"role" : "front-End-Ninja",
	"contact" : {"mobile" : "+91-8088812635", "email" : "mahakeerthi3@gmail.com", "twitter": "@mahakeerthi", "github" : "http://placehold.it/350x150","blog" :"http://placehold.it/350x150", "location" : "bangalore"},
	"url" : "https://placehold.it/150x100",
	"welcomeMessage" : "hi this mahakeerthi how are you",
	"skills" : ["html","css","BOOTSTRAP","JAVASCRIPT"]
}

var newMobile=HTMLmobile.replace("%data%",bio.contact.mobile);
$("#topContacts").append(newMobile);

var newEmail=HTMLemail.replace("%data%",bio.contact.email);
$("#topContacts").append(newEmail);
var newTwitter=HTMLtwitter.replace("%data%",bio.contact.twitter);
$("#topContacts").append(newTwitter);

var newGithub=HTMLgithub.replace("%data%",bio.contact.github);
$("#topContacts").append(newGithub);

var newBlog=HTMLblog.replace("%data%",bio.contact.blog);
$("#topContacts").append(newBlog);

var newBioPic=HTMLbioPic.replace("%data%",bio.url);
$(".biopic").append(newBioPic);

var newWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#topContacts").append(newWelcomeMessage);

//var newSkills=HTMLskills.replace("%data%",bio.skills[0]);
//$("#topContacts").append(newSkills);


/* json education object literal notation */

var education={
	"schools" :[
	{
		"school" : "cit gubbi",
		"city" : "tumkur",
		"majors" : "information science & engineering",
		"year" : 2014
	}],
"online_course" :	[{
		"title" : "front end nano degree",
		"school" : "udacity",
		"date"	: "jan 2016",
 		"year": 2015,
 		"url" : "www.udacity.com"
	}]
}

var work ={
	"jobs" : [
	{
		"employer" : "dilabs",
		"title" : "design engineer",
		"location" : "bangalore",
		"dates" : "jan 2015-nov 2015",
		"description" : "A job description is a list that a person might use for general tasks, or functions, and responsibilities of a position. It may often include to whom the position reports, specifications such as the qualifications or skills needed by the person in the job, and a salary range."
	}]
}

var projects = {
	"project" : [
	{
		"title" : "resume portfolio",
		"dates" : "jan 2015",
		"description" : "Online protfolio build using html,css,BOOTSTRAP and java modals takes 2 months to learn and build this project",
		"images" :["http://placehold.it/350x150","http://placehold.it/350x150","http://placehold.it/350x150"]
	}]
}

projects.display=function(){
	for(var project in projects.project){
		if(projects.project.length>0){
			$("#projects").append(HTMLprojectStart)
			var newProjectTitle=HTMLprojectTitle.replace("%data%",projects.project[project].title);
			$(".project-entry:last").append(newProjectTitle);
			var newProjectDates=HTMLprojectDates.replace("%data%",projects.project[project].dates);
			$(".project-entry:last").append(newProjectDates);
			var newProjectDescription=HTMLprojectDescription.replace("%data%",projects.project[project].description);
			$(".project-entry:last").append(newProjectDescription);
			for(var image in projects.project[project].images){
				if(projects.project[project].images.length>0){
				var newProjectImages=HTMLprojectImage.replace("%data%",projects.project[project].images[image]);
				$(".project-entry:last").append(newProjectImages);
				}
			}

		}
	}
}
projects.display();
if(bio.skills.length>0)
{
	$("header").append(HTMLskillsStart);
	var formattedskills=HTMLskills.replace("%data%",bio.skills[0]);
	$("white-text").append(formattedskills);
	formattedskills=HTMLskills.replace("%data%",bio.skills[1]);
	$("HTMLskills").append(formattedskills);
	formattedskills=HTMLskills.replace("%data%",bio.skills[2]);
	$("HTMLskills").append(formattedskills);
	formattedskills=HTMLskills.replace("%data%",bio.skills[3]);
	$("HTMLskills").append(formattedskills);
}
function displaywork(){
for(var job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	var newEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var newTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var newWorkExp=newEmployer+" "+newTitle;
	$(".work-entry:last").append(newWorkExp);
	var newWorkDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(newWorkDates);
	var newWorkLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(newWorkLocation);
	var newJobDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(newJobDescription);



}
}
displaywork();
function logclicks(){};
$(document).click(function(loc) {
  // your code goes here
  var x= loc.pageX;
  var y= loc.pageY;
  logclicks(x,y);
});

function inName(name){
name=name.trim.split(" ");
console.log(name);
name[1]=name[1].toUpperCase();
name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
return name.join(" ");
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


















































































/*
var newHeaderName=HTMLheaderName.replace("%data%","Mahakeerthi");
var newHeaderRole=HTMLheaderRole.replace("%data%","front-End-Ninja");
$("#header").append(newHeaderName+" "+newHeaderRole);

var work={
	"jobs": [{
		"employer": "dilabs",
		"title": "design Engineer",
		"location": "bangalore",
		"year": 2015,
		"description": "don't know"
	}]
}
var projects={
	"project": [{
		"title": "online portfolio",
		"dates": 2015,
		"description": "update later",
		"image": "www.placeholder.com/350/150"
	}, {
		"title": "online portfolio using json",
		"dates": 2015,
		"description": "update later",
		"image": "www.placeholder.com/350/150"
	}]
}
var bio={
	"bio": [{
		"name": "mahakeerthi",
		"role": "front-End-Ninja",
		"welcome message": "update later",
		"skills":["HTML","CSS","BOOTSTRAP","JAVASCRIPT"],
		"contacts": [{
			"mobile": "+91-8088812635"
		}, {
			"email": "mahakeerthi3@gmail.com"
		}, {
			"github": "github.com/mahakeerthikr"
		}, {
			"twitter": "@mahakeerthi"
		}, {
			"location": "bangalore"
		}]
	}]

}
var education={
	"schools": [{
		"name": "cit gubbi",
		"location": "tumkur",
		"degree": "bachelor engineering",
		"majors": "information science",
		"year": 2014,
		"url": "www.cittumkur.com"
	}],
	"online course": [{
		"title": "front end engineer",
		"school": "udacity",
		"date": 2016,
		"url": "www.udacity.com"
	}]
}

if(bio.skills.length > 0)
{
$("#header").append(HTMLskillsStart);

var formattedskills = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedskills);
formattedskills = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedskills);
formattedskills = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedskills);
formattedskills = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedskills);
}


*/




