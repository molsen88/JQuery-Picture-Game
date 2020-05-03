var wins = 0;
var losses = 0;

currentScore = 0;

$( 'document' ).ready( function () {


    var targetScore = Math.floor( ( Math.random() * 7 ) * 20 )
    console.log( targetScore )

    var gomezPoints = Math.floor( ( Math.random() ) * 12 )
    var keitaPoints = Math.floor( ( Math.random() ) * 12 )
    var firminoPoints = Math.floor( ( Math.random() ) * 12 )
    var hendersonPoints = Math.floor( ( Math.random() ) * 12 )
    var manePoints = Math.floor( ( Math.random() ) * 12 )

    $( '#gomez' ).on( 'click', function () {
        gomezPoints;
        currentScore += gomezPoints;
        console.log( 'You picked Joseph Gomez' )
        console.log( gomezPoints )
        console.log( currentScore )
    } )

    $( '#keita' ).on( 'click', function () {
        keitaPoints;
        currentScore += keitaPoints;
        console.log( 'You picked Naby Keita' )
        console.log( keitaPoints )
        console.log( currentScore )
    } )

    $( '#firmino' ).on( 'click', function () {
        firminoPoints;
        currentScore += firminoPoints;
        console.log( 'You picked Bobby' )
        console.log( firminoPoints )
        console.log( currentScore )
    } )

    $( '#henderson' ).on( 'click', function () {
        gomezPoints;
        currentScore += hendersonPoints;
        console.log( 'You picked Hendo' )
        console.log( hendersonPoints )
        console.log( currentScore )
    } )

    $( '#mane' ).on( 'click', function () {
        gomezPoints;
        currentScore += manePoints;
        console.log( 'You picked Hendo' )
        console.log( manePoints )
        console.log( currentScore )
    } )

    update = () => {
        $( '.total' ).html( 'Total:' + currentScore )
        console.log( currentScore )
    }




    // hello = () => {
    //     console.log( "hello" )
    // }
    // hello()

} )


















