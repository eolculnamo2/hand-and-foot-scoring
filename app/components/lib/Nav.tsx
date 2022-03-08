const Nav = () => {
  return (
    <>
      <nav className="container">
        <div className="nav-wrapper row">
          <div className="col s5 pull-s7">
            <a href="#home">
              <img
                src="/img/hand-and-foot.png"
                className="brand-logo"
                id="home"
                alt="hand and foot line drawing"
              ></img>
            </a>
          </div>
          <div className="col s7 push-s5">
            <img
              src="/img/heart.png"
              className="responsive-img deck"
              id="navImage"
              alt="ace of hearts"
            ></img>
            <img
              src="/img/club.png"
              className="responsive-img deck"
              id="navImage"
              alt="ace of clubs"
            ></img>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {/* Modal triggers */}
              <li>
                {" "}
                <a
                  className="waves-effect waves-light white btn modal-trigger black-text"
                  href="#modal2"
                >
                  Log In
                </a>
              </li>
              <li>
                <a
                  className="waves-effect waves-light white btn modal-trigger black-text"
                  href="#modal1"
                >
                  Overview
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Log In Modal Content */}
      <div id="modal2" className="modal">
        <div className="modal-content">
          <h4>Log In or Create An Account</h4>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="row">
                  <div className="input-field col s12">
                    {/* <input id="username" type="username" className="validate"> */}
                    {/* <label for="username">User Name</label> */}
                  </div>
                </div>
                <div className="input-field col s12">
                  {/* <input id="password" type="password" className="validate"> */}
                  {/* <label for="password">Password</label> */}
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
      {/* Overview Modal Content */}
      <div id="modal1" className="modal">
        <div className="modal-content">
          <ul className="collapsible">
            <li>
              <div className="collapsible-header">NEEDED TO PLAY / SET UP</div>
              <div className="collapsible-body">
                <span>
                  <p>
                    • 1 more deck of cards than the number of players.Example:
                    If 4 players, use 5 decks.
                    <br />• Jokers are included.
                    <br />• Deal 13 cards to each player - this is the hand.
                    <br />• Deal another 13 cards to each player - this is the
                    foot and is not looked at until the hand has been played.
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">MELDS</div>
              <div className="collapsible-body">
                <span>
                  <p>
                    • Melds are 7 cards of the same value
                    <br />
                    • Can put down as few as 3 cards to start a meld.
                    <br />
                    • Clean meld-all natural. Place a red card on top when
                    complete.
                    <br />
                    • Dirty meld-contains wilds --no more than 2, see WILDS for
                    more info. Place a black card on top when complete.
                    <br />• Wild meld-all wild (Jokers and 2s)
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">WILDS</div>
              <div className="collapsible-body">
                <span>
                  <p>
                    2s and Jokers <br />
                    To use in melds, must have:
                    <br />
                    • 3 natural cards for 1st wild
                    <br />• 5 natural cards to use 2nd wild
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">RED AND BLACK 3S</div>
              <div className="collapsible-body">
                <span>
                  <h5>Red 3s:</h5>
                  <p>
                    If a Red 3 is dealt to you or you draw one on your turn,
                    immediately:
                    <br />
                    • Lay face up in front of you to collect points at the end
                    of the game.
                    <br />• Draw a replacement card from the draw deck.
                  </p>

                  <h5>Black 3s:</h5>
                  <p>
                    When discarded, prevents the next player from picking up
                    from the discard pile.
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">TURN</div>
              <div className="collapsible-body">
                <span>
                  <p>
                    • 1st cards laid down must equal 50 points to start game.
                    <br />
                    • Draw two cards from deck or seven cards from discard.
                    <br />
                    • Lay down melds --minimum three cards to lay down.
                    <br />• Discard.
                  </p>
                  <h5>Drawing from discard:</h5>
                  <p>
                    • If less than seven cards available, take all.
                    <br />• Must play the top card immediately with two natural
                    cards from your hand.
                  </p>

                  <h5>Getting into your foot:</h5>
                  <p>
                    You must play all of the cards in your hand before you can
                    get into your foot.
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">ENDING THE GAME</div>
              <div className="collapsible-body">
                <span>
                  <p>
                    The game ends when all the cards from the draw pile are gone
                    or a player goes out.
                    <br />
                    To go out, a player must have:
                    <br />
                    • 2 clean melds,
                    <br />
                    • 2 dirty melds,
                    <br />
                    • 1 wild meld, and
                    <br />• played all cards from hand and foot.
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">SCORING</div>
              <div className="collapsible-body">
                <span>
                  All cards left in your hand or foot at the end of the game are
                  deducted from final score.
                  <table className="responsive-table striped">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Points</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Going Out</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>Red 3</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>Wild Melds</td>
                        <td>1500</td>
                      </tr>
                      <tr>
                        <td>Clean Melds</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>Dirty Melds</td>
                        <td>300</td>
                      </tr>
                      <tr>
                        <td>Jokers</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>2s and Aces</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>8 - King</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>4 - 7 and Black 3s</td>
                        <td>5</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-red btn-flat">
            Close
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
