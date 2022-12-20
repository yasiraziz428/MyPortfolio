let flag = true;
function toggle() {
  if (flag) {
    flag = false;
  } else {
    flag = true;
  }
}

async function handleClick(more) {
  const response = await fetch("../templates/skillExpand.html");
  const template = await response.text();

  if (more.length > 0) {
    if (flag) {
      document.querySelector('[data-id="skill-expand"]').innerHTML = "";

      const newArray = more.split(",");
      newArray.forEach((element) => {
        const newHTML = template.replace("${element}", element);
        document.getElementById("skill-expand").innerHTML += newHTML;
      });
      toggle();
    } else {
      document.getElementById("skill-expand").innerHTML = "";
      toggle();
    }
  }
}
