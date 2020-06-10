let wins = 0;
let losses = 0;
let targetScore;
let currentScore;
const teams = ["Chelsea", "Man City", "Burnley", "Tottenham", "Man United", "Arsenal", "Leicester City", "Everton", "Norwich City",
    "West Ham", "Aston Villa", "Sheffield United", "Brighton", "Southampton", "Newcastle", "Wolverhampton", "Cyrstal Palace", "Watford",
    "Bournemouth"];
let chosenTeam;
let opponent;
let liverpoolPlayers = [];
let matchDay;
let oneRandomTeam;
let punishedTeam;
let clicks = 25;
let redCard;
let turnOff = null;

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
    clicks = 25;
    redCard;
    $( '#red-card' ).attr( 'disabled', false )
    $( '.total' ).html( 'Liverpool: ' + currentScore );
    $( '.counter' ).html( 'Clicks: ' + clicks )
    // console.log( targetScore )
    gomezPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    keitaPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    firminoPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    hendersonPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    manePoints = Math.floor( ( Math.random() * 1 ) * 12 )
    salahPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    vanDijkPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    robertsonPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    alissonPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    oxPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    fabinhoPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    giniPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    milnerPoints = Math.floor( ( Math.random() * 1 ) * 12 )
    matipPoints = Math.floor( ( Math.random() * 1 ) * 12 )
}

clicksFunction = () => {
    clicks--
    console.log( clicks )
    scoring()
    $( '.counter' ).html( 'Clicks: ' + clicks )
    if ( clicks === 0 ) {
        alert( 'Gamve Over' )
        losses++;
        $( '.losses' ).html( 'Losses: ' + losses );
        init()
    }
}

$( 'document' ).ready( function () {
    init()

    $( '.wins' ).html( 'Wins: ' + wins );
    $( '.losses' ).html( 'Losses: ' + losses );

    //PLAYERS POINTS AND CARDS

    let gomez = $( '#gomez' ).on( 'click', function () {
        gomezPoints;
        currentScore += gomezPoints;
        console.log( 'You picked Joseph Gomez' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( gomez )

    let keita = $( '#keita' ).on( 'click', function () {
        keitaPoints;
        currentScore += keitaPoints;
        console.log( 'You picked Naby Keita' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( keita )

    let firmino = $( '#firmino' ).on( 'click', function () {
        firminoPoints;
        currentScore += firminoPoints;
        console.log( 'You picked Bobby' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( firmino )

    let henderson = $( '#henderson' ).on( 'click', function () {
        hendersonPoints;
        currentScore += hendersonPoints;
        console.log( 'You picked Hendo' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( henderson )

    let mane = $( '#mane' ).on( 'click', function () {
        manePoints;
        currentScore += manePoints;
        console.log( 'You picked Mane' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( mane )

    let salah = $( '#salah' ).on( 'click', function () {
        salahPoints;
        currentScore += salahPoints;
        console.log( 'You picked Mo' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( salah )

    let virgil = $( '#van-dijk' ).on( 'click', function () {
        vanDijkPoints;
        currentScore += vanDijkPoints;
        console.log( 'You picked Big Virg' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( virgil )

    let robbo = $( '#robertson' ).on( 'click', function () {
        robertsonPoints;
        currentScore += robertsonPoints;
        console.log( 'You picked Robbo' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( robbo )

    let alisson = $( '#alisson' ).on( 'click', function () {
        alissonPoints;
        currentScore += alissonPoints;
        console.log( 'You picked Alisson' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( alisson )

    let ox = $( '#ox' ).on( 'click', function () {
        oxPoints;
        currentScore += oxPoints;
        console.log( 'You picked Ox' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( ox )

    let fabinho = $( '#fabinho' ).on( 'click', function () {
        fabinhoPoints;
        currentScore += fabinhoPoints;
        console.log( 'You picked Fabinho' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( fabinho )

    let gini = $( '#gini' ).on( 'click', function () {
        giniPoints;
        currentScore += giniPoints;
        console.log( 'You picked Gini' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( gini )

    let milner = $( '#milner' ).on( 'click', function () {
        milnerPoints;
        currentScore += milnerPoints;
        console.log( 'You picked Milly' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( milner )

    let matip = $( '#matip' ).on( 'click', function () {
        matipPoints;
        currentScore += matipPoints;
        console.log( 'You picked Milly' )
        console.log( currentScore )
        clicksFunction()
    } )
    liverpoolPlayers.push( matip )

    // SCORE KEEPING FUNCTION

    scoring = () => {
        // Update score
        $( '.total' ).html( 'Liverpool: ' + currentScore )

        if ( currentScore === targetScore ) {
            wins++;
            $( '.wins' ).html( 'Wins: ' + wins );
            $( '#win-modal' ).css( 'display', 'block' )
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
            // alert( opponent + ' wins!' )
            $( '#lose-modal' ).css( 'display', 'block' )
            init();
        }
    }
    // console.log( liverpoolPlayers )

    // FUNCTION FOR A NEW OPPONENT

    newOpponent = () => {
        $( '#new-team' ).on( 'click', function () {
            chosenTeamFunction();
            losses++;
            currentScore = 0;
            $( '.total' ).html( 'Liverpool: ' + currentScore );
            $( '.losses' ).html( 'Losses: ' + losses );
            console.log( 'you clicked a button' )
        } )
    }
    newOpponent();

    //WIN OR LOSE MODAL
    $( '.close' ).on( 'click', function () {
        $( '#win-modal' ).css( 'display', 'none' )
    } )

    //INSTRUCTIONS MODAL
    $( '#instructions' ).on( 'click', function () {
        $( '#instructions-modal' ).css( 'display', 'block' )
    } )

    $( '.close' ).on( 'click', function () {
        $( '#instructions-modal' ).css( 'display', 'none' )
    } )

    //YELLOW CARD MODAL
    $( '#yellow-card' ).on( 'click', function () {
        yellowCardPoints = Math.floor( ( Math.random() * 1 ) * 25 )
        console.log( yellowCardPoints )
        $( '#yellow-card-modal' ).css( 'display', 'block' )
        $( '.card-content' ).html( opponent + " recieved a yellow card and gained " + yellowCardPoints + " points" )
        targetScore += yellowCardPoints;
        console.log( targetScore )
        $( '.target-score' ).html( opponent + ": " + targetScore )
    } )

    $( '.close' ).on( 'click', function () {
        $( '#yellow-card-modal' ).css( 'display', 'none' )
    } )

    //RANDOM CHOICE BETWEEN TEAMS FOR RED CARD
    matchDay = ["Liverpool", opponent]
    // matchDay.push( opponent )
    console.log( matchDay )
    oneRandomTeam = Math.floor( Math.random() * matchDay.length )
    console.log( oneRandomTeam )
    punishedTeam = matchDay[oneRandomTeam]
    console.log( punishedTeam )

    //RED CARD MODAL
    redCard = $( '#red-card' ).on( 'click', function () {
        if ( targetScore >= 80 ) {
            if ( punishedTeam === "Liverpool" ) {
                redCardPoints = Math.floor( ( Math.random() * 10 ) * 10 )
                $( '#red-card-modal' ).css( 'display', 'block' )
                $( '.card-content' ).html( "Liverpool received a red card and " + opponent + " lost " + redCardPoints + " points!" )
                targetScore -= redCardPoints;
                $( '.target-score' ).html( opponent + ": " + targetScore )

                playerOne = Math.floor( Math.random() * liverpoolPlayers.length );
                console.log( playerOne )
                playerTwo = Math.floor( Math.random() * liverpoolPlayers.length );
                console.log( playerTwo )
                playerThree = Math.floor( Math.random() * liverpoolPlayers.length );
                console.log( playerThree )
                playerFour = Math.floor( Math.random() * liverpoolPlayers.length );
                console.log( playerFour )
                playerFive = Math.floor( Math.random() * liverpoolPlayers.length );
                console.log( playerFive )
                playerSix = Math.floor( Math.random() * liverpoolPlayers.length );
                console.log( playerSix )
                playerSeven = Math.floor( Math.random() * liverpoolPlayers.length );
                console.log( playerSeven )

                for ( i = 0; i < liverpoolPlayers.length; i++ ) {
                    liverpoolPlayers[playerOne].off()
                    liverpoolPlayers[playerTwo].off()
                    liverpoolPlayers[playerThree].off()
                    liverpoolPlayers[playerFour].off()
                    liverpoolPlayers[playerFive].off()
                    liverpoolPlayers[playerSix].off()
                    liverpoolPlayers[playerSeven].off()
                }
            }
            else if ( punishedTeam === opponent ) {
                redCardPoints = Math.floor( ( Math.random() * 10 ) * 10 )
                $( '#red-card-modal' ).css( 'display', 'block' )
                // $( '.card-content' ).html( opponent + " received a red card and gained " + redCardPoints + " points!" )
                targetScore += redCardPoints;
                $( '.target-score' ).html( opponent + ": " + targetScore )
                rewardClicks = Math.floor( ( Math.random() * 2 ) * 6 )
                clicks += rewardClicks;
                $( '.card-content' ).html( opponent + " received a red card and gained " + redCardPoints + " points!" + " You also received " + rewardClicks + " more clicks!" )
                $( '.counter' ).html( 'Clicks: ' + clicks )
                console.log( clicks )

            }
        }

        else if ( targetScore < 80 ) {
            if ( punishedTeam === "Liverpool" ) {
                redCardPoints = Math.floor( ( Math.random() * 2 ) * 15 );
                $( '#red-card-modal' ).css( 'display', 'block' )
                $( '.card-content' ).html( "Liverpool received a red card and " + opponent + " lost " + redCardPoints + " points!" )
                targetScore -= redCardPoints;
                $( '.target-score' ).html( opponent + ": " + targetScore )
            }
            else if ( punishedTeam === opponent ) {
                redCardPoints = Math.floor( ( Math.random() * 2 ) * 15 );
                $( '#red-card-modal' ).css( 'display', 'block' )
                $( '.card-content' ).html( opponent + " received a red card and " + opponent + " gained " + redCardPoints + " points!" )
                targetScore += redCardPoints;
                $( '.target-score' ).html( opponent + ": " + targetScore )
                $( '#red-card' ).off( 'click' )
            }
        }
        $( '#red-card' ).attr( 'disabled', true )
    } )

    $( '.close' ).on( 'click', function () {
        $( '#red-card-modal' ).css( 'display', 'none' )
    } )
} )



// THINGS TO IMPROVE

// 1. WINDOW ONCLICK EXIT MODAL WORKING
// 2. RED/YELLOW CARD RANDOM POINTS LOSS/GAIN
// 3. ONE FUNCTION FOR POINTS
// 4. GET OPPOSING TEAM CREST
// 5. MAKE TIERS OF PLAYERS
// 6. DESIGN/THEME



















