/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "maha keerthi",
  "role": "front-End-Ninja",
  "contact": {
   "mobile": ": +91-8088812635",
   "email": ": mahakeerthi3@gmail.com",
   "twitter": ": @mahakeerthi",
   "github": ": http://placehold.it/350x150",
   "blog": ": www.mahakeerthi.com",
   "location": "bangalore"
  },
  "pic": "images/maha.jpg",
  "welcomeMessage": "A self-taught computer programmer with one year experience in DATASOL INNOVATIVE LABS Good programming knowledge in JAVASCRIPT and PYTHON",
  "skills": ["html", "css", "BOOTSTRAP", "JAVASCRIPT"]
 }
 //bio function
function bioData() {

 // replace helper.js bio data

 var newHeaderName = HTMLheaderName.replace("%data%", bio.name);
 var newHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
 var newName = newHeaderName + " " + newHeaderRole;
 var newMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
 var newEmail = HTMLemail.replace("%data%", bio.contact.email);
 var newTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
 var newGithub = HTMLgithub.replace("%data%", bio.contact.github);
 var newBlog = HTMLblog.replace("%data%", bio.contact.blog);
 var newBioLocatio = HTMLlocation.replace("%data%", bio.contact.location);
 var newBioPic = HTMLbioPic.replace("%data%", bio.pic);
 var newWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

 // append bio data
 $("#header").prepend(newName);
 $("#topContacts").append(newMobile);
 $("#topContacts").append(newEmail);
 $("#topContacts").append(newTwitter);
 $("#footerContacts").append(newGithub);
 $("#footerContacts").append(newBlog);
 $("#header").append(newBioPic);
 $("#header").append(newWelcomeMessage);
 //checking bio skills 
 if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var bio1 in bio.skills) {
   var newSkills = HTMLskills.replace("%data%", bio.skills[bio1]);
   $("#header").append(newSkills)
  }

 }

}
// calling bio function

bioData();

/* json education object literal notation */

var education = {
 "schools": [{
  "school": "Sapthagiri Pu college",
  "city": "bangalore",
  "degree": "Pre-university college",
  "majors": "PCMC",
  "year": "2010"
 }, {
  "school": "cit gubbi",
  "city": "tumkur",
  "degree": "BACHERLOR OF ENGINEERING",
  "majors": "information science & engineering",
  "year": "2014"
 }, ],
 "online_course": [{
  "title": "front end nano degree",
  "school": "udacity",
  "date": "jan 2016",
  "year": "2016",
  "url": "www.udacity.com"
 }, {
  "title": "Sr.Web developer",
  "school": "udacity",
  "date": "April 2016",
  "year": "2016",
  "url": "www.udacity.com"
 }]
}

// starting education function
function educationDisplay() {
 if (education.schools.length > 0) {
  $("#header").append(HTMLschoolStart);
  for (var edu in education.schools) {
   var newSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].school);
   var newSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
   var newSchoolDate = HTMLschoolDates.replace("%data%", education.schools[edu].year);
   var newSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
   var newSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);

   $("#education:last").append(newSchoolName);
   $("#education:last").append(newSchoolDegree);
   $("#education:last").append(newSchoolDate);
   $("#education:last").append(newSchoolLocation);
   $("#education:last").append(newSchoolMajor);
  }
 }
}
function onlineCourseDisplay(){
 if (education.online_course.length > 0) {
  $("#education").append(HTMLonlineClasses);
  for (var onlineEdu in education.online_course) {
   var newOnlineTitle = HTMLonlineTitle.replace("%data%", education.online_course[onlineEdu].title);
   var newOnlineSchool = HTMLonlineSchool.replace("%data%", education.online_course[onlineEdu].school);
   var newOnlineDates = HTMLonlineDates.replace("%data%", education.online_course[onlineEdu].date);
   var newOnlineURL = HTMLonlineURL.replace("%data%", education.online_course[onlineEdu].url);

   $("#education:last").append(newOnlineTitle);
   $("#education:last").append(newOnlineSchool);
   $("#education:last").append(newOnlineDates);
   $("#education:last").append(newOnlineURL);
  }
 }
}
// calling educationDisplay() function
educationDisplay();
//calling online course() function
onlineCourseDisplay();

var work = {
  "jobs": [{
   "employer": "BEKANJOOS INTERNET COMPANY",
   "title": "front-End-Developer",
   "location": "Bangalore",
   "dates": "June-2014 to December 2014",
   "description": "Developed, from scratch, fully interactive Dynamic website.\
						Searching & adding Low cost products with embedded affiliate links.\
 						Deployment & maintenance of code in cloud servers.\
 						Integration of payment gateway systems."
  }, {
   "employer": "dilabs",
   "title": "Design, Testing & QC Engineer",
   "location": "Bangalore",
   "dates": "jan 2015-nov 2015",
   "description": "A job description is a list that a person might use for general tasks, or functions, and responsibilities of a position. It may often include to whom the position reports, specifications such as the qualifications or skills needed by the person in the job, and a salary range."
  }]
 }
 // work function
function displaywork() {
 for (var job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var newEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var newTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var newWorkExp = newEmployer + " " + newTitle;
  $(".work-entry:last").append(newWorkExp);
  var newWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(newWorkDates);
  var newWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(newWorkLocation);
  var newJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(newJobDescription);



 }
}
// calling work function
displaywork();

var projects = {
  "project": [{
   "title": "DEVELOPED OPEN SOURCE RETAIL BILLING APPLICATION",
   "dates": "Jan 2015",
   "description": "Printing product price, quantity, product name & total price in Kannada language.\
						Adding new products, changing product price & tracking daily sales.\
						Storing and searching of new products in local database.",
   "images": ["http://lorempixel.com/350/150", "http://placehold.it/350x150", "http://lorempixel.com/350/150"]
  }, {
   "title": "BUSINESS WEBSITE (swethaclayproducts.com):",
   "dates": "July 2015",
   "description": "Developed, from scratch, fully interactive Business website.",
   "images": ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
  }, {
   "title": "MYGOVJOBZ (mygovjobz.com)",
   "dates": "Dec 2015",
   "description": "Job search based on location also anyone can submit job details.\
						Job filter based on location, education & company.\
						Job aspirant can set their preferences to get instant email alerts.",
   "images": ["http://lorempixel.com/350/150", "http://placehold.it/350x150", "http://lorempixel.com/350/150"]
  }]
 }
 // project function
projects.display = function() {
  for (var project in projects.project) {
   if (projects.project.length > 0) {
    $("#projects").append(HTMLprojectStart)
    var newProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
    $(".project-entry:last").append(newProjectTitle);
    var newProjectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
    $(".project-entry:last").append(newProjectDates);
    var newProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
    $(".project-entry:last").append(newProjectDescription);
    for (var image in projects.project[project].images) {
     if (projects.project[project].images.length > 0) {
      var newProjectImages = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
      $(".project-entry:last").append(newProjectImages);
     }
    }

   }
  }
 }
 //calling project function
projects.display();


function logclicks() {};
$(document).click(function(loc) {
 // your code goes here
 var x = loc.pageX;
 var y = loc.pageY;
 logclicks(x, y);
});

$("#main").append(internationalizeButton);

function inName() {
 var name = bio.name.split(" ");
 //console.log(name);
 name[1] = name[1].toUpperCase();
 name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
 var internationalName = name.join(" ");
 return internationalName;
}
$("#mapDiv").append(googleMap);
