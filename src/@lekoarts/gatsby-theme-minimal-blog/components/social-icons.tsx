/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

export default () => (
  <div sx={{ 'a:not(:first-of-type)': { ml: 3 }, fontSize: [1, `18px`] }}>
    <Styled.a href={'https://www.facebook.com/CasiCreativos/'} target="_blank">
      <FontAwesomeIcon
        style={{ color: '#2C4577' }}
        icon={faFacebook}
        size="lg"
      />
    </Styled.a>

    <Styled.a href={'https://twitter.com/casicreativos'} target="_blank">
      <FontAwesomeIcon
        style={{ color: '#1DA1F2' }}
        icon={faTwitter}
        size="lg"
      />
    </Styled.a>

    <Styled.a href={'https://www.instagram.com/casicreativos'} target="_blank">
      <FontAwesomeIcon
        style={{ color: '#D82678' }}
        icon={faInstagram}
        size="lg"
      />
    </Styled.a>

    <Styled.a href={'https://www.pinterest.com/casicreativos'} target="_blank">
      <FontAwesomeIcon
        style={{ color: '#E60023' }}
        icon={faPinterest}
        size="lg"
      />
    </Styled.a>
  </div>
);
