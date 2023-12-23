import { useLocation } from 'react-router-dom';
import GoogleLogo from '../image/heart.svg'; // Assuming this is a regular image import
import { getGoogleUrl } from './GetGoogleURL';

const LoginPage = () => {
  const location = useLocation();
  let from = (location.state && location.state.from && location.state.from.pathname) || '/';

  return (
    <>
          Log in with another provider:
          <a
            href={getGoogleUrl(from)}
            sx={{
              backgroundColor: '#f5f6f7',
              borderRadius: 1,
              py: '0.6rem',
              columnGap: '1rem',
              textDecoration: 'none',
              color: '#393e45',
              cursor: 'pointer',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#fff',
                boxShadow: '0 1px 13px 0 rgb(0 0 0 / 15%)',
              },
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <img src={GoogleLogo} alt="Google Logo" style={{ height: '2rem' }} />
            Google
          </a>

          </>
  );
};

export default LoginPage;
