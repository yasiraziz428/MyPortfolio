async function createButton(element, skills_object) {
  const title = skills_object[skillsTitle];
  const address = skills_object[skillsImg];
  const details = skills_object[skillsDetails];

  console.log(element);
  //load html template
  const response = await fetch("templates/skill.html");
  const templateBtn = await response.text();

  //replace dynamic values

  //replace image

  let newHTML = templateBtn
    .replace("##name##", title)
    .replace("##more##", details)
    .replace("##image##", address);

  element.innerHTML += newHTML;
}
