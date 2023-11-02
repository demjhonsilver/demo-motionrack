import { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

export const Release = () => {
    useEffect(() => {
        motionRack();
      });
    
      return (
        <div>
            <h3>Animation for many times ( data-motionrack )</h3>
          <div className="motionrack-wrap">





            <div className="monoPad">
              <div className="monoBox" data-motionrack="expand" style={{backgroundColor: '#77b5fe '}}>
              expand 
                 </div>
            </div>


            <div className="duoPad">
              <div className="duoBox" data-motionrack="slopeUpLeft" style={{backgroundColor: '#77b5fe '}}>
              slopeUpLeft
              </div>
              <div className="duoBox" data-motionrack="slopeUpRight" style={{backgroundColor: '#77b5fe '}}>
              slopeUpRight
              </div>
            </div>


            <div className="duoPad">
              <div className="duoBox" data-motionrack="slopeDownLeft" style={{backgroundColor: '#77b5fe '}}>
              slopeDownLeft
              </div>
              <div className="duoBox" data-motionrack="slopeDownRight" style={{backgroundColor: '#77b5fe '}}>
              slopeDownRight
              </div>
            </div>


            <div className="monoPad">
              <div className="monoBox" data-motionrack="pump" style={{backgroundColor: '#77b5fe '}}>
              pump
                 </div>
            </div>







            <div className="duoPad">
              <div className="duoBox" data-motionrack="motionLeft" style={{backgroundColor: '#77b5fe '}}>
                motionLeft
              </div>
              <div className="duoBox" data-motionrack="motionRight" style={{backgroundColor: '#77b5fe '}}>
                motionRight
              </div>
            </div>
            <div className="monoPad">
              <div className="monoBox" data-motionrack="motionDown" style={{backgroundColor: '#77b5fe '}}>
                motionDown</div>
            </div>
            <div className="duoPad">
              <div className="duoBox" data-motionrack="flipUp" style={{backgroundColor: '#77b5fe '}}>
                flipUp
              </div>
              <div className="duoBox" data-motionrack="flipDown" style={{backgroundColor: '#77b5fe '}}>
                flipDown</div>
            </div>
            <div className="trioPad">
              
              <div className="trioBox" data-motionrack="flipLeft" style={{backgroundColor: '#77b5fe '}}>
                flipLeft
              </div>
              <div className="trioBox" data-motionrack="fadeIn" style={{backgroundColor: '#77b5fe '}}>
                fadeIn</div>
              <div className="trioBox" data-motionrack="flipRight" style={{backgroundColor: '#77b5fe '}}>
                flipRight</div>
            </div>


            <div className="monoPad">
              <div className="monoBox" data-motionrack="motionUp" style={{backgroundColor: '#77b5fe '}}>
              motionUp
                 </div>
            </div>

            <div className="duoPad">
              <div className="duoBox" data-motionrack="minSpinLeft" style={{backgroundColor: '#77b5fe '}}>
              minSpinLeft
              </div>
              <div className="duoBox" data-motionrack="minSpinRight" style={{backgroundColor: '#77b5fe '}}>
              minSpinRight</div>
            </div>

            <div className="monoPad">
              <div className="monoBox" data-motionrack="flash" style={{backgroundColor: '#77b5fe '}}>
              flash
                 </div>
            </div>



            <div className="trioPad">
              
              <div className="trioBox" data-motionrack="maxSpinLeft" style={{backgroundColor: '#77b5fe '}}>
              maxSpinLeft
              </div>
              <div className="trioBox" data-motionrack="motionBounce" style={{backgroundColor: '#77b5fe '}}>
              motionBounce</div>
              <div className="trioBox" data-motionrack="maxSpinRight" style={{backgroundColor: '#77b5fe '}}>
              maxSpinRight</div>
            </div>


            <div className="duoPad">
              <div className="duoBox" data-motionrack="bounceUp" style={{backgroundColor: '#77b5fe '}}>
              bounceUp
              </div>
              <div className="duoBox" data-motionrack="bounceDown" style={{backgroundColor: '#77b5fe '}}>
              bounceDown</div>
            </div>



            <div className="duoPad">
              <div className="duoBox" data-motionrack="flare" style={{backgroundColor: '#77b5fe '}}>
              flare
              </div>
              <div className="duoBox" data-motionrack="flicker" style={{backgroundColor: '#77b5fe '}}>
              flicker</div>
            </div>




          </div>
       



        </div>
      );
};