if ( matchMedia( "(max-width: 500px)" ).matches ) {

    var menu_button = document.querySelector( "nav > button" );
    var close_button = document.querySelector( "nav div#links button" );
    var side_bar = document.querySelector( "nav div#links" );

    menu_button.onclick = e => {
        // if ( side_bar.style.right != "0" ) {
        side_bar.style.right = "10px";
        document.querySelector( "section" ).style.opacity = "0.3";
        // }
    };
    close_button.onclick = e => {
        side_bar.style.right = "0";
        document.querySelector( "section" ).style.opacity = "1";
    };

}