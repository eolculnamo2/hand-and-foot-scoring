import { LinksFunction } from "remix";
import BasePageLayout from "~/layouts/BasePageLayout";
import { buildLinks } from "~/utils/pages";
import resultsCss from "~/styles/results.css";

export const links: LinksFunction = buildLinks();
const Results = () => (
  <BasePageLayout>
   
<body>
    <nav>
        <div className="nav-wrapper row">
            <div className="col s6 l2">
                <a href="#home">
                    <img src="/img/hand-and-foot.png" className="brand-logo" id="home" alt="hand and foot line drawing"></img>
                </a>
            </div>
            <div className="col s3 l4">
                <ul>
                    <li>
                        <a href="#">Log Out</a>
                    </li>
                    <li>
                        <a className="button waves-effect waves-light red btn modal-trigger white-text" href="#modal">
                            Overview
                        </a>
                        </li>
                        </ul>
                </div>
            <div className="col s3 l3">
                <ul>
                    <li>
                        <img src="/img/heart.png" className="responsive-img deck" id="navImage" alt="ace of hearts"></img>
                    </li>
                </ul>
            </div>
            <div className="col s3 l3">
                <ul>
                    <li>
                        <img src="/img/club.png" className="responsive-img deck" id="navImage" alt="ace of clubs"></img>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <div className="container">
        <div className="row">
            <div className="col s12 m12 l12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">SCORE CARD</span>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Name" id="first_name" type="text" className="validate">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <div className="heading col s6 m6 l6">CARDS AND MELDS
                                </div>
                                <div className="heading col s2 m2 l2">Enter Number</div>
                                <div className="heading col s2 m2 l2">Points Earned</div>
                            </div>
                            <div className="row">
                                <div className="labels col s6 m6 l6">Go Out Bonus
                                </div>

                                <!--add radio button for going out-->
                                <div className="points col s2 m2 l2"> <input id="" type="radio" className="validate"></div>
                                <div className="points col s2 m2 l2">
                                    <input placeholder="100" id="going-out" type="number" className="validate">
                                </div>
                            </div>
                            <div className="row">
                                <div className="labels col s6 m6 l6">Red 3s
                                </div>

                                <div className="points col s2 m2 l2"> <input id="red-3" type="number" className="validate"></div>
                                <div className="points col s2 m2 l2"> <input placeholder="100" id="red-3" type="number" className="validate"></div>
                            </div>
                            <div className="row">
                                <div className="labels col s6 m6 l6">Wild Melds
                                </div>

                                <div className="points col s2 m2 l2"> <input id="wild-melds" type="number" className="validate"></div>
                                <div className="points col s2 m2 l2"> <input placeholder="1500" id="wild-melds" type="number" className="validate"></div>
                            </div>
                            <div className="row">
                                <div className="labels col s6 m6 l6">Clean Melds
                                </div>

                                <div className="points col s2 m2 l2"> <input id="clean-melds" type="number" className="validate"></div>
                                <div className="points col s2 m2 l2"> <input placeholder="500" id="clean-melds" type="number" className="validate"></div>
                            </div>
                            <div className="row">
                                <div className="labels col s6 m6 l6">Dirty Melds
                                </div>

                                <div className="points col s2 m2 l2"> <input id="dirty-melds" type="number" className="validate"></div>
                                <div className="points col s2 m2 l2"> <input placeholder="300" id="dirty-melds" type="number" className="validate"></div>
                            </div>
                            <div className="row">
                                <div className="labels col s6 m6 l6">Jokers
                                </div>

                                <div className="points col s2 m2 l2"> <input id="jokers" type="number" className="validate"></div>
                                <div className="points col s2 m2 l2"> <input placeholder="50" id="jokers" type="number" className="validate"></div>
                            </div>
                            <div className="row">
                                <div className="labels col s6 m6 l6">Twos and Aces
                                </div>

                                <div className="points col s2 m2 l2"> <input id="twos-and-aces" type="number" className="validate"></div>
                                <div className="points col s2 m2 l2"> <input placeholder="20" id="twos-and-aces" type="number" className="validate"></div>
                            </div>
                            <div className="row">
                                <div className="labels col s6 m6 l6">8 - King
                                </div>

                                <div className="points col s2 m2 l2"> <input id="8-king" type="number" className="validate"></div>
                                <div className="points col s2 m2 l2"> <input placeholder="10" id="8-king" type="number" className="validate"></div>
                            </div>
                            <div className="row">
                                <div className="labels col s6 m6 l6">Black 3s, 4-7
                                </div>
                                <div className="points col s2 m2 l2"> <input id="4-7" type="number" className="validate"></div>
                                <div className="points col s2 m2 l2"> <input placeholder="5" id="4-7" type="number" className="validate"></div>
                            </div>
                            <div className="row">
                                <div className="labels col s8 m8 l8">Subtract
                                </div>
                                <div className="value col s2 m2 l2"></div>
                                <div className="points col s2 m2 l2"></div>
                            </div>
                        </div>
                        <button className="button btn-large waves-effect waves-light red" type="submit" name="action">Submit
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* Overview Modal Structure  */}
    <div id="modal" className="modal">
        <div className="modal-content">

            {/* Collapsible  */}
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header">NEEDED TO PLAY / SET UP</div>
                    <div className="collapsible-body"><span>
                            <p>
                                • 1 more deck of cards than the number of players. Example: If 4 players, use 5 decks. <br />• Jokers are included. <br />• Deal 13 cards to each player - this is
                                the
                                hand. <br />• Deal another 13 cards to each player - this is the
                                foot and is not looked at until the hand has been played.
                            </p>
                        </span></div>
                </li>
                <li>
                    <div className="collapsible-header">MELDS</div>
                    <div className="collapsible-body"><span>
                            <p>
                                • Melds are 7 cards of the same value
                                <br />
                                • Can put down as few as 3 cards to start a meld.<br />
                                • Clean meld-all natural. Place a red card on top when complete.
                                <br />
                                • Dirty meld-contains wilds --no more than 2, see WILDS for more info. Place a black card on top when complete.
                                <br />
                                • Wild meld-all wild (Jokers and 2s)
                            </p>
                        </span></div>
                </li>
                <li>
                    <div className="collapsible-header">WILDS</div>
                    <div className="collapsible-body"><span>
                            <p>
                                2s and Jokers <br />To use in melds, must have:
                                <br />
                                • 3 natural cards for 1st wild
                                <br />• 5 natural cards to use 2nd wild
                            </p>
                        </span></div>
                </li>
                <li>
                    <div className="collapsible-header">RED AND BLACK 3S</div>
                    <div className="collapsible-body"><span>
                            <h5>Red 3s:</h5>
                            <p>
                                If a Red 3 is dealt to you or you draw one on your turn, immediately:
                                <br />
                                • Lay face up in front of you to collect points at the end of the game.
                                <br />• Draw a replacement card from the draw deck.
                            </p>

                            <h5>Black 3s:</h5>
                            <p>When discarded, prevents the next player from picking up from the discard pile.</p>
                        </span></div>
                </li>
                <li>
                    <div className="collapsible-header">TURN</div>
                    <div className="collapsible-body"><span>
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
                                <br />• Must play the top card immediately with two natural cards from your hand.
                            </p>

                            <h5>Getting into your foot:</h5>
                            <p>You must play all of the cards in your hand before you can get into your foot.</p>
                        </span></div>
                </li>
                <li>
                    <div className="collapsible-header">ENDING THE GAME</div>
                    <div className="collapsible-body"><span>
                            <p>
                                The game ends when all the cards from the draw pile are gone or a player goes out. <br />
                                To go out, a player must have:
                                <br />
                                • 2 clean melds,
                                <br />
                                • 2 dirty melds,
                                <br />
                                • 1 wild meld, and
                                <br />• played all cards from hand and foot.
                            </p>
                        </span></div>
                </li>
                <li>
                    <div className="collapsible-header">SCORING</div>
                    <div className="collapsible-body"><span>All cards left in your hand or foot at the end of the game are deducted from final score.<table className="responsive-table striped">
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
                            </table></span>
                    </div>
                </li>
            </ul>



        </div>
        <div className="modal-footer">
            <a href="#!" className="button modal-close waves-effect waves red btn-raised white-text">
                Close
            </a>
        </div>
    </div>

</body>

  </BasePageLayout>
);

export default Results;
