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


const images = [ 1, 2, 3, 4, 5, 6, 7 ];

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
];

const ProjectSection = document.querySelector( "section#projects div#container" );

projects.forEach( ( p, i ) => {
  const html = `
  <a target="_blank" href=${ p.url } class="project">
    <img src=${ "./designs/" + p.img } alt=${ p.name }></img>
    <p class="project-name">${ p.name }</p>
  </a>
  `;

  ProjectSection.innerHTML += html;
} );