let skills = document.querySelector('.skills-content');

let skilllist = {
    'name':['Adobe Photoshop','Adobe Illustrator','Adobe Premier Pro','Adobe After Effect','Adobe XD','Autodesk 3DS Max','Cinema 4D','Photography'],
    'progress':[90,80,50,70,50,60,80,90]
}

for (i=0;i<skilllist.name.length;i++) {
    const classwidth = "S" + i
    let titreskill = '<p class="skills-title">'+skilllist.name[i]+'</p>'
    let progressskils = '<div class="skills-progress"><div class="skill-per">'+ skilllist.progress[i] + '%</div><div class="skill-bar '+classwidth+'"></div></div>'
    let skillcontainer = '<div class="skills">' + titreskill + progressskils + '</div>'
    skills.innerHTML += skillcontainer
    let widthcl = document.querySelector("."+classwidth)
    widthcl.style.width = skilllist.progress[i] + "%"
}



const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menu");

const toggleNav = () => {
  navbar.classList.toggle("hidemenu");
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
navbar.addEventListener("click", () => toggleNav());