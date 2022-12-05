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

  const profileElement = document.querySelectorAll("[data-id]");

  profileElement.forEach((element) => {
    switch (element.dataset.id) {
      case "profile-name":
        element.innerHTML = jsonObj[profileObject][profileName];
        break;

      case "profile-description":
        element.innerHTML = jsonObj[profileObject][profileDescription];
        break;

      case "profile-about":
        element.innerHTML = jsonObj[profileObject][about];
        break;

      case "profile-video":
        element.innerHTML = `<video class="w-64 rounded" src="${jsonObj[profileObject][profileVideo]}" controls muted autoplay></video>`;
        break;
      case "profile-location":
        element.innerHTML =
          `<i class="fa fa-location-arrow"></i> &nbsp` +
          jsonObj[profileObject][profileLocation];

      default:
        break;
    }
  });

  // Appending Skill Buttons
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
