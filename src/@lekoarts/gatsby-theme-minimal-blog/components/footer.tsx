/** @jsx jsx */
import { jsx } from 'theme-ui';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
import { Link } from 'gatsby';
import Icons from './social-icons';
import 'typeface-bebas-neue';

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        color: 'secondary',
        a: {
          variant: 'links.secondary',
        },
        flexDirection: 'column',
        '::before': {
          content: '""',
          display: 'block',
          height: '1.75rem',
          background:
            'url("https://assets.hearstapps.com/sites/cosmopolitan/assets/images/svgs/underline-black.ca9ae59.svg") repeat center center',
          'svg > path': {
            fill: '#7557EE',
          },
        },
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media screen and (max-width: 768px)': {
            flexDirection: 'column',
            textAlign: 'center',
          },
        }}
      >
        <section>
          <h3 sx={{ color: '#000', textTransform: 'uppercase' }}>Compañía</h3>
          <ul sx={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/aviso-privacidad">Aviso de privacidad</Link>
            </li>
            <li>
              <Link to="/afiliados">Afiliados</Link>
            </li>
            <li>
              <Link to="/colaboracion">Colabora con nosotros</Link>
            </li>
            <li>
              <Link to="/about">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/Prensa">Prensa</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 sx={{ color: '#000', textTransform: 'uppercase' }}>
            Soporte/Negocios
          </h3>
          <ul sx={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/colaboracion-marca">Colaboraciones de marca</Link>
            </li>
            <li>
              <Link to="/anunciate">Anunciate en el blog</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 sx={{ color: '#000', textTransform: 'uppercase' }}>Servicios</h3>
          <ul sx={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <a href="http://www.casicreativos.store/">Tienda en linea</a>
            </li>
            <li>
              <Link to="/psicologia">Psicologos online</Link>
            </li>
            <li>
              <Link to="/crecer-marca">Haz crecer tu marca</Link>
            </li>
          </ul>
        </section>
        <section sx={{ marginTop: '1.2rem', order: '-1' }}>
          <Icons />
        </section>
      </div>

      <section sx={{ textAlign: 'center' }}>
        <div
          sx={{
            width: '30%',
            textAlign: 'center',
            margin: 'auto',
            '@media screen and (max-width: 768px)': {
              width: '80%',
              margin: '1.3rem auto',
            },
          }}
        >
          <h3
            sx={{
              fontFamily: 'Bebas Neue',
              fontSize: [1, '2rem'],
              color: '#000',
              fontWeight: 400,
              borderBottom: '2px solid #000',
              margin: 'auto 0',
              '@media screen and (max-width: 768px)': {
                fontSize: '1.5rem',
              },
            }}
          >
            {siteTitle.toUpperCase()}
          </h3>
          <small sx={{ textTransform: 'uppercase', fontSize: '.8rem' }}>
            Grupo boomer viral network
          </small>
        </div>

        <div
          sx={{
            fontSize: '.9rem',
            '@media screen and (max-width: 768px)': {
              fontSize: '.75rem',
            },
          }}
        >
          Copyrigth &copy; {new Date().getFullYear()} {siteTitle.toUpperCase()}{' '}
          - TODOS LOS DERECHOS RESERVADOS.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
