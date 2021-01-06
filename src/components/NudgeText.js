import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import ThemeContext from 'context/ThemeContext';
import media from 'styles/media';

const Container = styled(animated.span)`
  cursor: pointer;
  height: 6rem;
  margin-left: 0.5rem;
  position: absolute;
  top: 1.6rem;
  width: 6rem;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.03) rotateZ(-2deg);
  }
  ${media.phone`
    display: none;
  `}
`;

function NudgeText({ onClick }) {
  const [nudgeVisible, setNudgeVisible] = useState(false);
  const theme = useContext(ThemeContext);
  const nudgeProps = useSpring({ opacity: nudgeVisible ? 1 : 0 });

  const scrollListener = () => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    /*
      Hide the button if scrolling down,
      show it if scrolling up
    */
    setNudgeVisible(position < 15);
  };

  useEffect(() => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    setNudgeVisible(position < 15);
    document.addEventListener('scroll', scrollListener);
    return () => document.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <Container
      onClick={onClick}
      style={{
        ...nudgeProps,
      }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 226 222"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="" stroke="none" strokeWidth="1" fill="none">
          <g
            id="whatswithname"
            transform="translate(-2.000000, -15.000000)"
            fill={theme.theme.titleColor}
          >
            <path
              d="M57.936204,17.9136324 C59.952204,19.9786324 61.867204,22.1596324 63.214204,24.7136325 C67.408204,32.6676325 70.769204,40.9236325 71.897204,49.9446325 C72.293204,53.1186325 72.744204,56.2846325 72.637204,59.4986325 C72.581204,66.7426325 71.356204,73.7956325 69.156204,80.6956325 C66.578204,88.7736325 63.491204,96.6556325 59.914204,104.336632 C58.705204,106.934632 57.156204,109.378632 55.665204,111.834632 C55.277204,112.476632 54.576204,112.972632 53.931204,113.400632 C53.366204,113.775632 52.702204,113.652632 52.146204,113.236632 C51.551204,112.792632 51.467204,112.135632 51.692204,111.526632 C51.965204,110.784632 52.384204,110.094632 52.773204,109.398632 C53.784204,107.585632 54.932204,105.837632 55.817204,103.965632 C59.849204,95.4326325 63.411204,86.7036325 65.919204,77.5926325 C69.373204,65.0436325 68.764204,52.6066325 64.442204,40.3576325 C63.539204,37.8016325 62.370204,35.3386325 61.317204,32.8366325 C60.067204,29.8666325 58.382204,27.1636325 56.313204,24.6966325 C55.697204,23.9626325 55.053204,23.2456325 54.493204,22.4696324 C53.512204,21.1076324 53.715204,19.5196324 54.984204,18.1146324 C55.838204,17.1686324 57.096204,17.0546324 57.936204,17.9136324 Z M43.297404,-3.55306752 C43.967404,-3.12906752 44.657404,-2.68406752 45.197404,-2.11506752 C47.440404,0.245932479 50.218404,1.80293248 53.039404,3.31593244 C59.090404,6.56093244 65.145404,9.79893244 71.172404,13.0879324 C73.273404,14.2329324 75.334404,15.4609324 77.349404,16.7519324 C79.154404,17.9089324 79.406404,19.3809324 78.249404,21.2629324 C78.003404,21.6639324 77.668404,22.0279324 77.313404,22.3389324 C76.675404,22.8999324 75.896404,23.1419325 75.103404,22.7829324 C74.233404,22.3899324 73.427404,21.8599324 72.589404,21.3979324 C64.481404,16.9239324 56.372404,12.4499324 48.258404,7.98493244 C47.843404,7.75593244 47.383404,7.60393244 46.935404,7.43893244 C46.790404,7.38593244 46.524404,7.33993244 46.476404,7.40893244 C46.306404,7.64493244 46.045404,7.97593244 46.105404,8.19293244 C46.817404,10.8059324 47.528404,13.4219324 48.343404,16.0059324 C50.168404,21.7909324 52.006404,27.5719325 53.936404,33.3229325 C54.645404,35.4369325 54.096404,37.0469325 52.544404,38.4809325 C51.582404,39.3689325 50.253404,39.2139325 49.749404,38.0899325 C49.359404,37.2179325 49.000404,36.3269325 48.705404,35.4189325 C46.541404,28.7379325 44.420404,22.0429324 42.233404,15.3699324 C41.290404,12.4899324 40.191404,9.65993244 39.223404,6.78793244 C38.663404,5.13093244 37.953404,3.49993244 38.002404,1.69293248 C38.005404,0.0419324795 38.498404,-1.44406752 39.486404,-2.77006752 C40.422404,-4.02706752 41.990404,-4.37906752 43.297404,-3.55306752 Z"
              id="Fill-106"
              fillRule="nonzero"
              transform="translate(58.476146, 54.812436) rotate(-49.000000) translate(-58.476146, -54.812436) "
            ></path>
            <g
              id="What’s-with-the-name"
              transform="translate(131.000000, 155.500000) rotate(-29.000000) translate(-131.000000, -155.500000) translate(15.000000, 95.000000)"
              fontFamily="Caveat-Regular, Caveat"
              fontSize="55"
              fontWeight="normal"
            >
              <text id="What’s-with">
                <tspan x="0.892173308" y="53.568632">
                  What’s with
                </tspan>
              </text>
              <text id="the-name?">
                <tspan x="15.2721733" y="103.568632">
                  the name?
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </Container>
  );
}

NudgeText.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NudgeText;
