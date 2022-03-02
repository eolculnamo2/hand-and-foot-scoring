const Nav = () => {
  return (
    <div className="navbar">
      <ul id="dropdown1" className="dropdown-content black-text">
        <li>
          <a href="#!">User Name</a>
        </li>
        <li>
          <a href="#!">Password</a>
        </li>
        <li className="divider"></li>
        <li>
          <a href="#!">Create An Account</a>
        </li>
      </ul>

      <nav>
        <div className="container">
          <div className="nav-wrapper row">
            <div className="col s7 push-s5">
              <img src="/img/heart.png" className="responsive-img deck" id="navImage" alt="ace of hearts"></img>
              <img src="/img/club.png" className="responsive-img deck" id="navImage" alt="ace of clubs"></img>
              <ul className="right hide-on-med-and-down black-text text-darken-2">
                <li>
                  {/* Modal Trigger */}
                  <a className="waves-effect waves-light white btn modal-trigger" href="#modal1">
                    Overview
                  </a>

                  {/* Modal Structure */}
                  <div id="modal1" className="modal">
                    <div className="modal-content">
                      <h3>NEEDED TO PLAY / SET UP</h3>
                      <p>
                        • 1 more deck of cards than the number of players. <br />
                        • Example: If 4 players, use 5 decks. • Jokers are included. <br />• Deal 13 cards to each player - this is the hand. <br />• Deal another 13 cards to each player - this is the
                        foot and is not looked at until the hand has been played.
                      </p>
                      <br />
                      <br />
                      <h3>MELDS</h3>
                      <p>
                        • Melds are 7 cards of the same value
                        <br />
                        • Can put down as few as 3 cards to start meld.<br />
                        • Clean meld-all natural
                        <br />
                        • Dirty meld-contains wilds (no more than 2, see WILDS for more info.)
                        <br />
                        • Wild meld-all wild (Jokers and 2s)
                      </p>
                      <br />
                      <br />
                      <h3>WILDS</h3>
                      <p>
                        • 2s and Jokers To use in melds, must have:
                        <br />
                        • 3 natural cards for 1st wild
                        <br />• 5 natural cards to use 2nd wild
                      </p>
                      <br />
                      <br />
                      <h3>TURN</h3>
                      <p>
                        • 1st cards laid down must equal 50 points to start game.
                        <br />
                        • Draw 2 from deck or 7 from discard.
                        <br />
                        • Lay down melds (minimum 3 cards) or keep in your hand.
                        <br />• Discard.
                      </p>

                      <h4>Drawing from discard:</h4>
                      <p>
                        • If less than 7 available, take all.
                        <br />• Must play the top card immediately with 2 natural cards from your hand.
                      </p>

                      <h4>Red 3s:</h4>
                      <p>
                        If a Red 3 is dealt to you or you draw one on your turn, immediately:
                        <br />
                        • Lay face up in front of you to collect points at the end of the game.
                        <br />• Draw a replacement card from the draw deck.
                      </p>

                      <h4>Black 3s:</h4>
                      <p>When discarded, prevents the next player from picking up from the discard pile.</p>

                      <h4>Getting into your foot:</h4>
                      <p>You must play all of the cards in your hand before you can get into your foot.</p>
                      <br />
                      <br />
                      <h3>GOING OUT</h3>
                      <p>
                        To go out, a player must have:
                        <br />
                        • 2 clean melds;
                        <br />
                        • 2 dirty melds;
                        <br />
                        • 1 wild meld;
                        <br />• Played all cards from hand and foot
                      </p>
                    </div>
                    <div className="modal-footer">
                      <a href="#!" className="modal-close waves-effect waves-red btn-flat">
                        Close
                      </a>
                    </div>
                  </div>
                </li>

                {/* 
JAVASCRIPT OPTIONS TO INITIALIZE MODAL
                document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  }); */}

                {/* Dropdown Trigger */}
                <li>
                  <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                    Log In<i className="material-icons right">arrow_drop_down</i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col s5 pull-s7">
              <a href="#home">
                <img src="/img/hand-and-foot.png" className="brand-logo responsive-img" id="home" alt="hand and foot line drawing"></img>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

//JAVASCRIPT OPTIONS TO INITIALIZE DROPDOWN MENU
// $( document ).ready(function)
// $(".dropdown-trigger").dropdown();
        


  );
};

export default Nav;
