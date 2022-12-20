const projDiv = document.querySelector('[data-id="projects-section"]');
function expandProject(projs) {
  projs.forEach((element, index) => {
    projDiv.innerHTML += `<button
      onclick="MoreDetails('${"div" + index}')"
      class="project-btn bg-white text-black py-1 px-4 border border-blue-500 hover:border-rounded mr-2 mt-2 rounded-2xl w-full"
      
    >
      <div class="flex w-full">
        <p class="text-[16px] text-left w-9/12">
          <b class="w-fit">${element.title}</b>
        </p>
        <div class="relative w-3/12">
         <p class="absolute right-0 text-[14px] w-auto">
           ${element.date}
         </p>
        </div>
      </div>
      <div id="${"div" + index}" style="display: none;">
         <p class="text-[16px] text-left">
            ${element.description}
          </p>
      </div>
    </button>`;
  });
}
function MoreDetails(div) {
  if (x) {
    document.getElementById(div).style.display = "block";
    toggle1();
  } else {
    document.getElementById(div).style.display = "none";
    toggle1();
  }
}

let x = true;
function toggle1() {
  if (x) {
    x = false;
  } else {
    x = true;
  }
}
