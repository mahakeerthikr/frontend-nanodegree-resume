/*
This is empty on purpose! Your code to build the resume will go here.
 */
var newHeaderName=HTMLheaderName.replace("%data%","Mahakeerthi");
var newHeaderRole=HTMLheaderRole.replace("%data%","front-End-Ninja");
$("#header").append(newHeaderRole);
$("#header").prepend(newHeaderName);

var bio ={
	"name" : "mahakeerthi",
	"role" : "front-End-Ninja",
	"contact" : {"mobile" : "+91-8088812635", "email" : "mahakeerthi3@gmail.com", "twitter": "@mahakeerthi", "github" : "url","blog" :"url", "location" : "bangalore"},
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

var newBioPic=HTMLbioPic.replace("%data%",url);
$("#topContacts").append(newBioPic);

var newWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#topContacts").append(newWelcomeMessage);

var newSkills=HTMLskills.replace("%data%",skills[0]);
$("#topContacts").append(newSkills);


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
		"dates" : "jan 2015-nov 2015"
	}]
}

var projects = {
	"project" : [
	{
		"title" : "resume portfolio",
		"dates" : "jan 2015",
		"description" : "Online protfolio build using html,css,BOOTSTRAP and java modals takes 2 months to learn and build this project",
		"images" :["url1","url2","url3"]
	}]
}




















































































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




