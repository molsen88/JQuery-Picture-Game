var wins = 0;
var losses = 0;
var targetScore;
var currentScore;
var teams = ["Chelsea", "Man City", "Burnley", "Tottenham", "Man United", "Arsenal", "Leicester City", "Everton", "Norwich City",
    "West Ham", "Aston Villa", "Sheffield United", "Brighton", "Southampton", "Newcastle", "Wolverhampton", "Cyrstal Palace", "Watford",
    "Bournemouth"];
var chosenTeam;
var opponent;

// chosenTeamFunction = () => {
//     chosenTeam = Math.floor( Math.random() * teams.length )
//     console.log( chosenTeam );
//     opponent = teams[chosenTeam];
//     console.log( opponent );
//     targetScore = Math.floor( ( Math.random() * 7 ) * 20 )
//     $( '.target-score' ).html( '"<img src=" + teams.image + ">"' + opponent + ': ' + targetScore )
// }

chosenTeamFunction = () => {
    chosenTeam = Math.floor( Math.random() * teams.length )
    console.log( chosenTeam );
    opponent = teams[chosenTeam];
    console.log( opponent );
    targetScore = Math.floor( ( Math.random() * 12 ) * 12 )
    $( '.target-score' ).html( opponent + ': ' + targetScore )
}


init = () => {
    chosenTeamFunction();
    currentScore = 0;
    $( '.total' ).html( 'Liverpool: ' + currentScore );
    // console.log( targetScore )
    gomezPoints = Math.floor( ( Math.random() ) * 12 )
    keitaPoints = Math.floor( ( Math.random() ) * 12 )
    firminoPoints = Math.floor( ( Math.random() ) * 12 )
    hendersonPoints = Math.floor( ( Math.random() ) * 12 )
    manePoints = Math.floor( ( Math.random() ) * 12 )
    salahPoints = Math.floor( ( Math.random() ) * 12 )
    vanDijkPoints = Math.floor( ( Math.random() ) * 12 )
    robertsonPoints = Math.floor( ( Math.random() ) * 12 )
    alissonPoints = Math.floor( ( Math.random() ) * 12 )
    oxPoints = Math.floor( ( Math.random() ) * 12 )
    fabinhoPoints = Math.floor( ( Math.random() ) * 12 )
    giniPoints = Math.floor( ( Math.random() ) * 12 )
    milnerPoints = Math.floor( ( Math.random() ) * 12 )
    matipPoints = Math.floor( ( Math.random() ) * 12 )
}

$( 'document' ).ready( function () {
    init()

    $( '.wins' ).html( 'Wins: ' + wins );
    $( '.losses' ).html( 'Losses: ' + losses );

    $( '#gomez' ).on( 'click', function () {
        gomezPoints;
        currentScore += gomezPoints;
        console.log( 'You picked Joseph Gomez' )
        // console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#keita' ).on( 'click', function () {
        keitaPoints;
        currentScore += keitaPoints;
        console.log( 'You picked Naby Keita' )
        // console.log( keitaPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#firmino' ).on( 'click', function () {
        firminoPoints;
        currentScore += firminoPoints;
        console.log( 'You picked Bobby' )
        // console.log( firminoPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#henderson' ).on( 'click', function () {
        hendersonPoints;
        currentScore += hendersonPoints;
        console.log( 'You picked Hendo' )
        // console.log( hendersonPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#mane' ).on( 'click', function () {
        manePoints;
        currentScore += manePoints;
        console.log( 'You picked Hendo' )
        // console.log( manePoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#salah' ).on( 'click', function () {
        salahPoints;
        currentScore += salahPoints;
        console.log( 'You picked Mo' )
        // console.log( salahPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#van-dijk' ).on( 'click', function () {
        vanDijkPoints;
        currentScore += vanDijkPoints;
        console.log( 'You picked Big Virg' )
        // console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#robertson' ).on( 'click', function () {
        robertsonPoints;
        currentScore += robertsonPoints;
        console.log( 'You picked Robbo' )
        // console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#alisson' ).on( 'click', function () {
        alissonPoints;
        currentScore += alissonPoints;
        console.log( 'You picked Robbo' )
        // console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#ox' ).on( 'click', function () {
        oxPoints;
        currentScore += oxPoints;
        console.log( 'You picked Ox' )
        // console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#fabinho' ).on( 'click', function () {
        fabinhoPoints;
        currentScore += fabinhoPoints;
        console.log( 'You picked Fabinho' )
        // console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#gini' ).on( 'click', function () {
        giniPoints;
        currentScore += giniPoints;
        console.log( 'You picked Gini' )
        // console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#milner' ).on( 'click', function () {
        milnerPoints;
        currentScore += milnerPoints;
        console.log( 'You picked Milly' )
        // console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    $( '#matip' ).on( 'click', function () {
        matipPoints;
        currentScore += matipPoints;
        console.log( 'You picked Milly' )
        // console.log( gomezPoints )
        console.log( currentScore )
        scoring();
    } )

    // SCORE KEEPING FUNCTION

    scoring = () => {
        // Update score
        $( '.total' ).html( 'Liverpool: ' + currentScore )

        if ( currentScore === targetScore ) {
            wins++;
            $( '.wins' ).html( 'Wins: ' + wins );
            alert( 'Liverpool win' )
            init();
        }
        else if ( currentScore === 35 ) {
            targetScore -= 10;
            alert( opponent + " scored a penalty kick!" )
            $( '.target-score' ).html( opponent + ': ' + targetScore )
        }
        else if ( currentScore > targetScore ) {
            losses++;
            $( '.losses' ).html( 'Losses: ' + losses );
            alert( opponent + ' wins!' )
            init();
        }
    }
} )

// THINGS TO IMPROVE

// 1. ONE FUNCTION FOR POINTS
// 2. GET OPPOSING TEAM CREST
// 3. MAKE TIERS OF PLAYERS
// 4. DESIGN/THEME


















