/* eslint-disable jsx-a11y/no-static-element-interactions */
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/bb84abc793435a25398160242c5f2870b83b72ca/docs/rules/click-events-have-key-events.md
/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import { Button } from '@mui/material';
import { FC } from 'react';
import './styles.css';

// https://pngtree.com/free-backgrounds-photos/spicy-hot-pot

interface Props {
  updatePotType: (type: number) => void;
  startHotPot: () => void;
  hotpotStart: boolean;
}

const LandingPage: FC<Props> = ({
  updatePotType,
  startHotPot,
  hotpotStart
}) => {
  if (!hotpotStart) {
    return (
      <div id="selectPotContainer">
        <img
          id="hotpotBackground"
          // eslint-disable-next-line global-require
          src={require('./assets/hotPotBackground.jpg')}
          alt="hotpot background"
        />
        <div id="selectPot">
          <div className="selectItem">
            Select Pot Type
            <div className="selectType">
              <div
                onClick={() => {
                  updatePotType(1);
                }}
                className="flavors hoverItem"
              >
                One Flavor
              </div>
              <div
                onClick={() => {
                  updatePotType(2);
                }}
                className="flavors hoverItem"
              >
                Two Flavors
              </div>
              <div
                onClick={() => {
                  updatePotType(4);
                }}
                className="flavors hoverItem"
              >
                Four Flavors
              </div>
            </div>
          </div>
          <div className="selectItem brothItem">
            Select Broth
            <div className="selectType broth">
              <div className="soupbases hoverItem">Sukiyaki Soupbase</div>
              <div className="soupbases hoverItem">Spicy Soupbase</div>
              <div className="soupbases hoverItem">Ox Bone Soupbase</div>
              <div className="soupbases hoverItem">Tomato Soupbase</div>
            </div>
          </div>
          <Button
            onClick={startHotPot}
            type="button"
            variant="contained"
            id="startBtn"
          >
            Start
          </Button>
        </div>
      </div>
    );
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};

export default LandingPage;
