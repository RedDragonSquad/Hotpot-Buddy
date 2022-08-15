/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import { Button } from '@mui/material';
import './styles.css';

// https://pngtree.com/free-backgrounds-photos/spicy-hot-pot

const LandingPage = () => {
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
            <div>One Flavor</div>
            <div>Two Flavors</div>
            <div>Four Flavors</div>
          </div>
        </div>
        <div className="selectItem brothItem">
          Select Broth
          <div className="selectType broth">
            <div>Sukiyaki Soupbase</div>
            <div>Spicy Soupbase</div>
            <div>Ox Bone Soupbase</div>
            <div>Tomato Soupbase</div>
          </div>
        </div>
        <Button type="button" variant="contained" id="startBtn">
          Start
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
