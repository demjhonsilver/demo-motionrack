import { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

export const Hold = () => {
    useEffect(() => {
        motionRack();
      });
    
      return (
        <div>
            <h3>This is a demo for animation once ( hold )</h3>
          <div className="motionrack-wrap">
            <div className="monoPad">
              <div className="monoBox" data-motion-hold="expand" style={{backgroundColor: '#77b5fe '}}>
              expand 
                 </div>
            </div>
            <div className="duoPad">
              <div className="duoBox" data-motion-hold="motionLeft" style={{backgroundColor: '#77b5fe '}}>
                motionLeft
              </div>
              <div className="duoBox" data-motion-hold="motionRight" style={{backgroundColor: '#77b5fe '}}>
                motionRight
              </div>
            </div>
            <div className="monoPad">
              <div className="monoBox" data-motion-hold="motionDown" style={{backgroundColor: '#77b5fe '}}>
                motionDown</div>
            </div>
            <div className="duoPad">
              <div className="duoBox" data-motion-hold="flipUp" style={{backgroundColor: '#77b5fe '}}>
                flipUp
              </div>
              <div className="duoBox" data-motion-hold="flipDown" style={{backgroundColor: '#77b5fe '}}>
                flipDown</div>
            </div>
            <div className="trioPad">
              
              <div className="trioBox" data-motion-hold="flipLeft" style={{backgroundColor: '#77b5fe '}}>
                flipLeft
              </div>
              <div className="trioBox" data-motion-hold="fadeIn" style={{backgroundColor: '#77b5fe '}}>
                fadeIn</div>
              <div className="trioBox" data-motion-hold="flipRight" style={{backgroundColor: '#77b5fe '}}>
                flipRight</div>
            </div>


            <div className="monoPad">
              <div className="monoBox" data-motion-hold="motionUp" style={{backgroundColor: '#77b5fe '}}>
              motionUp
                 </div>
            </div>

            <div className="duoPad">
              <div className="duoBox" data-motion-hold="minSpinLeft" style={{backgroundColor: '#77b5fe '}}>
              minSpinLeft
              </div>
              <div className="duoBox" data-motion-hold="minSpinRight" style={{backgroundColor: '#77b5fe '}}>
              minSpinRight</div>
            </div>

            <div className="monoPad">
              <div className="monoBox" data-motion-hold="flash" style={{backgroundColor: '#77b5fe '}}>
              flash
                 </div>
            </div>



            <div className="trioPad">
              
              <div className="trioBox" data-motion-hold="maxSpinLeft" style={{backgroundColor: '#77b5fe '}}>
              maxSpinLeft
              </div>
              <div className="trioBox" data-motion-hold="motionBounce" style={{backgroundColor: '#77b5fe '}}>
              motionBounce</div>
              <div className="trioBox" data-motion-hold="maxSpinRight" style={{backgroundColor: '#77b5fe '}}>
              maxSpinRight</div>
            </div>


            <div className="duoPad">
              <div className="duoBox" data-motion-hold="bounceUp" style={{backgroundColor: '#77b5fe '}}>
              bounceUp
              </div>
              <div className="duoBox" data-motion-hold="bounceDown" style={{backgroundColor: '#77b5fe '}}>
              bounceDown</div>
            </div>



            <div className="duoPad">
              <div className="duoBox" data-motion-hold="flare" style={{backgroundColor: '#77b5fe '}}>
              flare
              </div>
              <div className="duoBox" data-motion-hold="flicker" style={{backgroundColor: '#77b5fe '}}>
              flicker</div>
            </div>




          </div>
       



        </div>
      );
};