/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
import { Link } from 'gatsby';

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        mt: [6],
        color: 'secondary',
        a: {
          variant: 'links.secondary',
        },
        flexDirection: ['column', 'column', 'row'],
        variant: 'dividers.top',
      }}
    >
      <div>
        Copyrigth&copy; {new Date().getFullYear()} {siteTitle}.
      </div>

      <Styled.a>
        <Link to="/about">Sobre Nosotros</Link>
      </Styled.a>
    </footer>
  );
};

export default Footer;
