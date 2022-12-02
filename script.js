const profileObject = "myProfile";
const profileName = "name";
const profileVideo = "videoURL";
const profileDescription = "description";
const profileLocation = "location";
const about = "about";
const skillsArray = "skills";
const skillsTitle = "title";
const skillsImg = "address";
const skillsDetails = "details";
const educationArray = "education";
const educationInstitute = "institute";
const educationDegree = "degree";
const educationYear = "year";
const projectsArray = "myProjects";

async function loadJson() {
  const response = await fetch("db.json");
  const jsonObj = await response.json();
  const userProfile = jsonObj[profileObject];

  // Profile Name
  const profileElement = document.querySelector('[data-name="profile-name"]');
  profileElement.innerHTML = jsonObj[profileObject][profileName];

  // Description
  const descElement = document.querySelector('[data-id="profile-description"]');
  descElement.innerHTML = jsonObj[profileObject][profileDescription];

  // Video
  const videoElement = document.querySelector('[data-id="profile-video"]');
  videoElement.innerHTML = `<video class="w-64 rounded" src="${jsonObj[profileObject][profileVideo]}" controls muted autoplay></video>`;

  // Location
  const profile_Location = document.querySelector(
    '[data-id="profile-location"]'
  );
  profile_Location.innerHTML =
    `<i class="fa fa-location-arrow"></i> &nbsp` +
    jsonObj[profileObject][profileLocation];

  // About
  const aboutElement = document.querySelector('[data-id="profile-about"]');
  aboutElement.innerHTML = jsonObj[profileObject][about];

  // Appending Buttons
  for (let i = 0; i < userProfile[skillsArray].length; i++) {
    const skills_object = jsonObj[profileObject][skillsArray][i];
    const title = skills_object[skillsTitle];
    const address = skills_object[skillsImg];
    const details = skills_object[skillsDetails];

    createButton(title, details, address);
  }

  // Appending Education
  for (let i = 0; i < userProfile[educationArray].length; i++) {
    const eduObject = jsonObj[profileObject][educationArray][i];
    const institute = eduObject[educationInstitute];
    const year = eduObject[educationYear];
    const degree = eduObject[educationDegree];

    document.getElementById("institute").innerHTML = institute;
    document.getElementById("degree").innerHTML = degree;
    document.getElementById("year").innerHTML = year;
  }
  // Appending Projects
  const projects = jsonObj[profileObject][projectsArray];
  expandProject(projects);
}
