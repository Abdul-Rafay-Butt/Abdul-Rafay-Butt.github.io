var loading_container = document.querySelector( "div#loading-container" );

function select ( elements, callback ) {
  if ( typeof elements === "string" ) {
    for ( let e of document.querySelectorAll( elements ) ) {
      callback( e );
    }
  } else if ( Array.isArray( elements ) ) {
    for ( var element of elements ) {
      for ( let e of document.querySelectorAll( element ) ) {
        callback( e );
      }
    }
  }
}


if ( matchMedia( "(max-width: 500px)" ).matches ) {

  var menu_button = document.querySelector( "nav > button" );
  var close_button = document.querySelector( "nav div#links button" );
  var side_bar = document.querySelector( "nav div#links" );

  function closeSidenav ( side_bar, e ) {
    side_bar.style.right = "-45%";

    select( [ "section", "div:not(div#links)" ], ( e ) => {
      e.style.opacity = "1";
    } );
  }

  function openSidenav ( e ) {
    side_bar.style.right = "0";

    select( [ "section", "div:not(div#links)" ], ( e ) => {
      e.style.opacity = "0.3";
    } );
  }

  menu_button.onclick = e => {
    // if ( side_bar.style.right != "0" ) {
    openSidenav( e );
    // }
  };
  close_button.onclick = e => {
    closeSidenav( side_bar );
  };

  document.onclick = e => {
    if ( e.target != side_bar && e.target != menu_button && !( side_bar.contains( e.target ) ) ) {

      e.preventDefault();
      closeSidenav( side_bar, e );
    }
  };

};


let interval;


var imageContainer = document.querySelector( "section#designs div#container" );

// document.querySelectorAll( "img#profile" ).forEach( element => {
//   element.onmouseover = ( e ) => {
//     let firstImage = document.querySelector( "img.profile-img-1" );
//     let secondImage = document.querySelector( "img.profile-img-2" );
//     let thirdImage = document.querySelector( "img.profile-img-3" );
//     interval = setInterval( () => {
//       firstImage.style.opacity = +firstImage.style.opacity == 0 && +secondImage.style.opacity == 0 && +thirdImage.style.opacity == 0 ? 1 : 0;
//       secondImage.style.opacity = +secondImage.style.opacity == 0 && +firstImage.style.opacity == 0 ? 1 : 0;
//       thirdImage.style.opacity = +secondImage.style.opacity == 0 && +secondImage.style.opacity == 0 ? 1 : 0;
//     }, 1700 );
//   };

//   element.onmouseout = () => {
//     clearInterval( interval );
//   };
// } );

document.querySelectorAll( "img[class|=profile-img]" ).forEach( element => {

  element.onmouseover = () => {
    let firstImage = document.querySelector( "img.profile-img-1" );
    let secondImage = document.querySelector( "img.profile-img-2" );
    let thirdImage = document.querySelector( "img.profile-img-3" );
    let forthImage = document.querySelector( "img.profile-img-4" );
    let fifthImage = document.querySelector( "img.profile-img-5" );
    let opacityValues = [ 0, 0, 0, 0, 1 ];
    let index = 4;

    interval = setInterval( () => {
      firstImage.style.opacity = opacityValues[ 0 ];
      secondImage.style.opacity = opacityValues[ 1 ];
      thirdImage.style.opacity = opacityValues[ 2 ];
      forthImage.style.opacity = opacityValues[ 3 ];
      fifthImage.style.opacity = opacityValues[ 4 ];

      // Update opacity values for next iteration
      index = ( index + 1 ) % 5;
      opacityValues = opacityValues.map( ( _, i ) => i === index ? 1 : 0 );
    }, 1500 );
  };

  element.onmouseout = () => {
    clearInterval( interval );
  };
} );


const images = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];

for ( const img of images ) {
  let img_ = new Image();
  img_.src = `./designs/${ img }.png`;
  imageContainer.appendChild( img_ );
}

document.addEventListener( "readystatechange", () => {
  if ( document.readyState != "loading" ) {

    loading_container.style.opacity = "0";
    loading_container.remove();
    document.body.style.visibility = "visible";

  };
} );

document.onscroll = e => {
  if ( scrollY > 50 && window.innerWidth > 768 ) {
    document.querySelector( "a#top" ).style.display = "block";
  } else {
    document.querySelector( "a#top" ).style.display = "none";
  }
};


const projects = [
  {
    name: "VioSell",
    url: "https://viosell.vercel.app/",
    img: "viosell.png"
  },
  {
    name: "Stooge",
    url: "https://sp.aions.co/",
    img: "stooge.png"
  },
  {
    name: "RayAi",
    url: "https://chat.aions.co/",
    img: "rayai.png"
  },
  {
    name: "WorldAuto",
    url: "https://worldauto.site/",
    img: "worldauto.png"
  }
];

const ProjectSection = document.querySelector( "section#projects div#container" );

projects.forEach( ( p, i ) => {

  const a = document.createElement( "a" );
  a.href = p.url;
  a.target = "_blank";
  a.className = "project";
  a.innerHTML = `
    <img src=${ "./designs/" + p.img } alt=${ p.name }></img>
    <p class="project-name">${ p.name }</p>
    `;

  a.onclick = e => e.stopPropagation();

  // const html = `
  // <a target="_blank" href=${ p.url } class="project">
  // </a>
  // `;

  ProjectSection.appendChild( a );
} );

const skills = [
  [ "HTML + CSS", 100 ],
  [ "JavaScript", 100 ],
  [ "React Js", 95 ],
  [ "Next Js", 95 ],
  [ "Node Js", 95 ],
  [ "Express Js", 95 ],
  [ "Figma (Designing)", 95 ]
];

const mySkillsContainer = document.querySelector( "section#my-skills > div#container" );

skills.forEach( ( [ skill, value ], i ) => {
  mySkillsContainer.innerHTML += `
    <div class="skill" style='--i: ${ i }'>
      <p class="skill-name">${ skill }</p>
      <div class='progress'>
        <p class="progress-value">${ value }%</p>
        <div class='progress-bar' style='--w: ${ value }'></div>
      </div>
    </div>
  `;
} );

const institutions = [
  [ "University of Central Punjab", "BSCS (Bachelors in Computer Science)", "2024 - present", "Currently Studying BSCS (Bachelors in Computer Science) at UCP Lahore.", true ],
  [ "Punjab Group of Colleges Lahore", "Intermediate in Computer Science", "2021 - 2023", "I completed my ICS (Intermediate in Computer Science) at Punjab College Lahore.", false ],
];

const myEducationContainer = document.querySelector( "section#education > div.education-container > div#container" );

institutions.forEach( ( [ institution, education, time, desc, current ], i ) => {
  myEducationContainer.innerHTML += `
    <div class="education ${ current && 'current' }" style='--i: ${ i }'>
      <p class="date">${ time }</p>
      <div class="course">
        <p class="course-name">${ education }</p>
        <p class="institution">${ institution }</p>
        <p class="description">${ desc }</p>
      </div>
    </div>
  `;
} );

const experiences = [
  [ "AIONS", "Full-Stack Web Developer", "2023 Sep - 2023 Dec (Internship)", "Completed My Internship at AIONS", true ],

];

const myEexperienceContainer = document.querySelector( "section#education > div.experience-container > div#container" );

experiences.forEach( ( [ institution, role, time, desc, current ], i ) => {
  myEexperienceContainer.innerHTML += `
    <div class="experience ${ current && 'current' }" style='--i: ${ i + 1 }'>
      <p class="date">${ time }</p>
      <div class="job">
        <p class="job-role">${ role }</p>
        <p class="institution">${ institution }</p>
        <p class="description">${ desc }</p>
      </div>
    </div>
  `;
} );
