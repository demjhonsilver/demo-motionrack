import { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

export const Release = () => {
    useEffect(() => {
        motionRack();
      });
    
      return (
        <div>
            <h3>This is a demo for animation for many times ( release )</h3>
          <div className="motionrack-wrap">
            <div className="monoPad">
              <div className="monoBox" data-motion-release="expand" style={{backgroundColor: '#77b5fe '}}>
              expand 
                 </div>
            </div>
            <div className="duoPad">
              <div className="duoBox" data-motion-release="motionLeft" style={{backgroundColor: '#77b5fe '}}>
                motionLeft
              </div>
              <div className="duoBox" data-motion-release="motionRight" style={{backgroundColor: '#77b5fe '}}>
                motionRight
              </div>
            </div>
            <div className="monoPad">
              <div className="monoBox" data-motion-release="motionDown" style={{backgroundColor: '#77b5fe '}}>
                motionDown</div>
            </div>
            <div className="duoPad">
              <div className="duoBox" data-motion-release="flipUp" style={{backgroundColor: '#77b5fe '}}>
                flipUp
              </div>
              <div className="duoBox" data-motion-release="flipDown" style={{backgroundColor: '#77b5fe '}}>
                flipDown</div>
            </div>
            <div className="trioPad">
              
              <div className="trioBox" data-motion-release="flipLeft" style={{backgroundColor: '#77b5fe '}}>
                flipLeft
              </div>
              <div className="trioBox" data-motion-release="fadeIn" style={{backgroundColor: '#77b5fe '}}>
                fadeIn</div>
              <div className="trioBox" data-motion-release="flipRight" style={{backgroundColor: '#77b5fe '}}>
                flipRight</div>
            </div>


            <div className="monoPad">
              <div className="monoBox" data-motion-release="motionUp" style={{backgroundColor: '#77b5fe '}}>
              motionUp
                 </div>
            </div>

            <div className="duoPad">
              <div className="duoBox" data-motion-release="minSpinLeft" style={{backgroundColor: '#77b5fe '}}>
              minSpinLeft
              </div>
              <div className="duoBox" data-motion-release="minSpinRight" style={{backgroundColor: '#77b5fe '}}>
              minSpinRight</div>
            </div>

            <div className="monoPad">
              <div className="monoBox" data-motion-release="flash" style={{backgroundColor: '#77b5fe '}}>
              flash
                 </div>
            </div>



            <div className="trioPad">
              
              <div className="trioBox" data-motion-release="maxSpinLeft" style={{backgroundColor: '#77b5fe '}}>
              maxSpinLeft
              </div>
              <div className="trioBox" data-motion-release="motionBounce" style={{backgroundColor: '#77b5fe '}}>
              motionBounce</div>
              <div className="trioBox" data-motion-release="maxSpinRight" style={{backgroundColor: '#77b5fe '}}>
              maxSpinRight</div>
            </div>


            <div className="duoPad">
              <div className="duoBox" data-motion-release="bounceUp" style={{backgroundColor: '#77b5fe '}}>
              bounceUp
              </div>
              <div className="duoBox" data-motion-release="bounceDown" style={{backgroundColor: '#77b5fe '}}>
              bounceDown</div>
            </div>



            <div className="duoPad">
              <div className="duoBox" data-motion-release="flare" style={{backgroundColor: '#77b5fe '}}>
              flare
              </div>
              <div className="duoBox" data-motion-release="flicker" style={{backgroundColor: '#77b5fe '}}>
              flicker</div>
            </div>




          </div>
       



        </div>
      );
};