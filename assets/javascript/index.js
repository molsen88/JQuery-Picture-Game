var wins = 0;
var losses = 0;
var targetScore;
var gomezPoints;
var keitaPoints;
var firminoPoints;
var hendersonPoints;
var manePoints;
var currentScore;
var teams = ["Chelsea", "Man City", "Burnley", "Tottenham", "Man United", "Arsenal", "Leicester City"];
var chosenTeam;
var opponent;

chosenTeamFunction = () => {
    chosenTeam = Math.floor( Math.random() * teams.length )
    console.log( chosenTeam )
    opponent = teams[chosenTeam]
    console.log( opponent )
}


targetScoreDisplay = () => {
    chosenTeamFunction()
    targetScore = Math.floor( ( Math.random() * 7 ) * 20 )
    $( '.target-score' ).html( opponent + ': ' + targetScore )
}

init = () => {
    currentScore = 0;
    $( '.total' ).html( 'Liverpool: ' + currentScore );
    targetScoreDisplay();
    console.log( targetScore )
    gomezPoints = Math.floor( ( Math.random() ) * 12 )
    keitaPoints = Math.floor( ( Math.random() ) * 12 )
    firminoPoints = Math.floor( ( Math.random() ) * 12 )
    hendersonPoints = Math.floor( ( Math.random() ) * 12 )
    manePoints = Math.floor( ( Math.random() ) * 12 )
}

$( 'document' ).ready( function () {
    init()


    $( '.wins' ).html( 'Wins: ' + wins );
    $( '.losses' ).html( 'Losses: ' + losses );


    targetScoreDisplay = () => {
        targetScore = Math.floor( ( Math.random() * 7 ) * 20 )
        $( '.target-score' ).html( "Target score: " + targetScore )
    }




    $( '#gomez' ).on( 'click', function () {
        gomezPoints;
        currentScore += gomezPoints;
        console.log( 'You picked Joseph Gomez' )
        console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#keita' ).on( 'click', function () {
        keitaPoints;
        currentScore += keitaPoints;
        console.log( 'You picked Naby Keita' )
        console.log( keitaPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#firmino' ).on( 'click', function () {
        firminoPoints;
        currentScore += firminoPoints;
        console.log( 'You picked Bobby' )
        console.log( firminoPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#henderson' ).on( 'click', function () {
        gomezPoints;
        currentScore += hendersonPoints;
        console.log( 'You picked Hendo' )
        console.log( hendersonPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#mane' ).on( 'click', function () {
        gomezPoints;
        currentScore += manePoints;
        console.log( 'You picked Hendo' )
        console.log( manePoints )
        console.log( currentScore )
        scoring();
    } )

    // SCORE KEEPING FUNCTION

    scoring = () => {
        // Update score
        $( '.total' ).html( 'Liverpool:' + currentScore )
        if ( currentScore === targetScore ) {
            wins++;
            $( '.wins' ).html( 'Wins: ' + wins );
            init();
            alert( 'Liverpool win' )
        }
        else if ( currentScore > targetScore ) {
            losses++;
            $( '.losses' ).html( 'Losses: ' + losses );
            init();
            alert( opponent + ' wins!' )
        }
    }

} )


















