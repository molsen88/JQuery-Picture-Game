open = () => {
    console.log( 'hello' )
}
open()

pictureChoice = () => {
    $( '.picture' ).on( "click", function () {
        var points = Math.floor( ( Math.random() ) * 12 )
        console.log( points )
        total = points++
        console.log( total )
        console.log( 'You clicked a picture' )
    } )
}

pictureChoice()