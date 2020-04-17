/** @jsx jsx */
import { jsx, useColorMode, Styled } from 'theme-ui';
import { Link } from 'gatsby';
import { Flex } from '@theme-ui/components';
import 'typeface-bebas-neue';

import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config';
import ColorModeToggle from '@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle';
import Navigation from '@lekoarts/gatsby-theme-minimal-blog/src/components/navigation';
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes';
import Icons from './social-icons';

const Header = () => {
  const { siteTitle } = useSiteMetadata();
  const { navigation: nav, basePath } = useMinimalBlogConfig();
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Link
          to={replaceSlashes(`/${basePath}`)}
          aria-label={`${siteTitle} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none` }}
        >
          <h1
            sx={{
              my: 0,
              fontWeight: `medium`,
              fontSize: [5, 6],
              fontFamily: 'Bebas Neue',
            }}
          >
            {siteTitle}
          </h1>
        </Link>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ':hover': { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        <Icons />
      </div>
    </header>
  );
};

export default Header;
