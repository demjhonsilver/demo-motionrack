import { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

export const Hold = () => {
    useEffect(() => {
        motionRack();
      });
    
      return (
        <div>
           <h3>Animation for once only ( data-motionrack-once )</h3>
          <div className="motionrack-wrap">
            <div className="monoPad">
              <div className="monoBox" data-motionrack-once="expand" style={{backgroundColor: '#77b5fe '}}>
              expand 
                 </div>
            </div>


            <div className="duoPad">
              <div className="duoBox" data-motionrack-once="slopeUpLeft" style={{backgroundColor: '#77b5fe '}}>
              slopeUpLeft
              </div>
              <div className="duoBox" data-motionrack-once="slopeUpRight" style={{backgroundColor: '#77b5fe '}}>
              slopeUpRight
              </div>
            </div>


            <div className="duoPad">
              <div className="duoBox" data-motionrack-once="slopeDownLeft" style={{backgroundColor: '#77b5fe '}}>
              slopeDownLeft
              </div>
              <div className="duoBox" data-motionrack-once="slopeDownRight" style={{backgroundColor: '#77b5fe '}}>
              slopeDownRight
              </div>
            </div>


            <div className="monoPad">
              <div className="monoBox" data-motionrack-once="pump" style={{backgroundColor: '#77b5fe '}}>
              pump
                 </div>
            </div>






            <div className="duoPad">
              <div className="duoBox" data-motionrack-once="motionLeft" style={{backgroundColor: '#77b5fe '}}>
                motionLeft
              </div>
              <div className="duoBox" data-motionrack-once="motionRight" style={{backgroundColor: '#77b5fe '}}>
                motionRight
              </div>
            </div>
            <div className="monoPad">
              <div className="monoBox" data-motionrack-once="motionDown" style={{backgroundColor: '#77b5fe '}}>
                motionDown</div>
            </div>
            <div className="duoPad">
              <div className="duoBox" data-motionrack-once="flipUp" style={{backgroundColor: '#77b5fe '}}>
                flipUp
              </div>
              <div className="duoBox" data-motionrack-once="flipDown" style={{backgroundColor: '#77b5fe '}}>
                flipDown</div>
            </div>
            <div className="trioPad">
              
              <div className="trioBox" data-motionrack-once="flipLeft" style={{backgroundColor: '#77b5fe '}}>
                flipLeft
              </div>
              <div className="trioBox" data-motionrack-once="fadeIn" style={{backgroundColor: '#77b5fe '}}>
                fadeIn</div>
              <div className="trioBox" data-motionrack-once="flipRight" style={{backgroundColor: '#77b5fe '}}>
                flipRight</div>
            </div>


            <div className="monoPad">
              <div className="monoBox" data-motionrack-once="motionUp" style={{backgroundColor: '#77b5fe '}}>
              motionUp
                 </div>
            </div>

            <div className="duoPad">
              <div className="duoBox" data-motionrack-once="minSpinLeft" style={{backgroundColor: '#77b5fe '}}>
              minSpinLeft
              </div>
              <div className="duoBox" data-motionrack-once="minSpinRight" style={{backgroundColor: '#77b5fe '}}>
              minSpinRight</div>
            </div>

            <div className="monoPad">
              <div className="monoBox" data-motionrack-once="flash" style={{backgroundColor: '#77b5fe '}}>
              flash
                 </div>
            </div>



            <div className="trioPad">
              
              <div className="trioBox" data-motionrack-once="maxSpinLeft" style={{backgroundColor: '#77b5fe '}}>
              maxSpinLeft
              </div>
              <div className="trioBox" data-motionrack-once="motionBounce" style={{backgroundColor: '#77b5fe '}}>
              motionBounce</div>
              <div className="trioBox" data-motionrack-once="maxSpinRight" style={{backgroundColor: '#77b5fe '}}>
              maxSpinRight</div>
            </div>


            <div className="duoPad">
              <div className="duoBox" data-motionrack-once="bounceUp" style={{backgroundColor: '#77b5fe '}}>
              bounceUp
              </div>
              <div className="duoBox" data-motionrack-once="bounceDown" style={{backgroundColor: '#77b5fe '}}>
              bounceDown</div>
            </div>



            <div className="duoPad">
              <div className="duoBox" data-motionrack-once="flare" style={{backgroundColor: '#77b5fe '}}>
              flare
              </div>
              <div className="duoBox" data-motionrack-once="flicker" style={{backgroundColor: '#77b5fe '}}>
              flicker</div>
            </div>




          </div>
       



        </div>
      );
};