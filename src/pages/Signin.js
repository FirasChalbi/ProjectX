import React, { useState } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://barkaa-service.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect or perform other actions upon successful sign-in
        console.log('Successfully signed in!');
      } else {
        const data = await response.json();
        // Handle authentication error, e.g., display an error message
        console.error('Sign-in failed:', data.message);
      }
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };
/*
  const responseGoogle = async (response) => {
    try {
      // Send the Google sign-in response to your backend for verification
      const backendResponse = await fetch('https://barkaa-service.onrender.com/api/auth/google/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken: response.tokenId }),
      });
  
      if (backendResponse.ok) {
        // Backend verification was successful
        console.log('Google sign-in successful:', backendResponse.json());
      } else {
        // Handle backend verification failure
        console.error('Google sign-in verification failed:', backendResponse.statusText);
      }
    } catch (error) {
      console.error('Error during Google sign-in verification:', error.message);
    }
  };
  */

  return (
    <div className="modal-parent" id="modal_cn" style={{ maxWidth: '600px', margin: 'auto' }}>
      <section>
        <div className="tile">
          <div className="account_login-form">
            <h3>Let's get you back in</h3>
            <form onSubmit={handleSignIn}>
              {/* Existing form fields */}
              <div>
                <input
                  type="email"
                  className="input"
                  id="email"
                  name="email"
                  size="30"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="-relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  size="30"
                  required
                  placeholder="Password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a className="_forgot-password" href="http://localhost:4000/account/sign-in/forgot-password/">
                  Forgot?
                </a>
              </div>
              {/* Existing sign-in button */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className="cta -bg-transparent -color-purple" name="submit" type="submit">
                  Sign in
                </button>
                <Link
                  className=""
                  to="/account/sign-up/?modal=1"
                  style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: '500' }}
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
          <div className="account_social-buttons -col-2 -grid-gap-10">
            <a className="cta -bg-transparent -border-grey -color-black -google" href="?redirect=&amp;login=Google" target="_top">
              <svg className="icon">
                <use xlinkHref="#svg_google"></use>
              </svg> Continue with Google
            </a>
            <a className="cta -bg-transparent -border-grey -color-black -facebook" href="?redirect=&amp;login=Facebook" target="_top">
              <svg className="icon">
                <use xlinkHref="#svg_facebook"></use>
              </svg> Continue with Facebook
            </a>
            <a className="cta -bg-transparent -border-grey -color-black -outlook" href="?redirect=&amp;login=WindowsLive" target="_top">
              <svg className="icon">
                <use xlinkHref="#svg_outlook"></use>
              </svg> Continue with Outlook
            </a>
            <a className="cta -bg-transparent -border-grey -color-black -twitter" href="?redirect=&amp;login=Twitter" target="_top">
              <svg className="icon">
                <use xlinkHref="#svg_twitter"></use>
              </svg> Continue with Twitter
            </a>
          </div>
          <div className="account_social-buttons -col-2 -grid-gap-10">
            {/* Google Sign-In Button */}
           
            {/* Other social buttons */}
            
          </div>
        </div>
      </section>
      {/* Existing SVG icons */}
      <svg width="0" height="0" className="hidden">
        <svg width="0" height="0" class="hidden"><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 416" id="svg_twitter" fill="#1da1f2"><path d="M512 49.25a218.64 218.64 0 01-60.48 16.57 104.36 104.36 0 0046.18-58 210 210 0 01-66.56 25.41A105 105 0 00249.57 105a108 108 0 002.43 23.93C164.74 124.67 87.52 82.85 35.65 19.14A105 105 0 0067.9 159.42a103.69 103.69 0 01-47.42-12.92v1.15a105.43 105.43 0 0084.1 103.13 104.65 104.65 0 01-27.52 3.46 92.77 92.77 0 01-19.88-1.79c13.6 41.57 52.2 72.13 98.08 73.12a210.93 210.93 0 01-130.14 44.77A197.72 197.72 0 010 368.9 295.54 295.54 0 00161 416c193.16 0 298.76-160 298.76-298.69 0-4.64-.16-9.12-.39-13.57A209.29 209.29 0 00512 49.25z"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="svg_google"><path d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z" fill="#fbbb00"></path><path d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z" fill="#518ef8"></path><path d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z" fill="#28b446"></path><path d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z" fill="#f14336"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.02 512" id="svg_facebook" fill="#3b5998"><path d="M209.28 85H256V3.61C248 2.5 220.22 0 187.93 0 120.53 0 74.37 42.39 74.37 120.3V192H0v91h74.37v229h91.18V283h71.36l11.32-91h-82.7v-62.7c0-26.3 7.1-44.31 43.75-44.31z"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="svg_outlook" fill="#1e73be"><path d="M496 112.011H288v-80c0-4.768-2.112-9.28-5.792-12.32-3.648-3.04-8.544-4.352-13.152-3.392l-256 48A15.955 15.955 0 000 80.011v352c0 7.68 5.472 14.304 13.056 15.712l256 48c.96.192 1.952.288 2.944.288 3.712 0 7.328-1.28 10.208-3.68a16.006 16.006 0 005.792-12.32v-80h208c8.832 0 16-7.168 16-16v-256c0-8.832-7.168-16-16-16zm-352 256c-44.096 0-80-43.072-80-96s35.904-96 80-96 80 43.072 80 96-35.904 96-80 96zm144-224h161.376l-98.304 76.448L288 180.363v-36.352zm192 224H288V218.283l55.392 35.232a16.102 16.102 0 008.608 2.496c3.456 0 6.944-1.12 9.824-3.36L480 160.715v207.296z"></path><ellipse cx="144" cy="272.01" rx="48" ry="64"></ellipse></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.255 608.728" fill="#000" id="svg_apple"><path d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="svg_close"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></symbol></svg>
      </svg>
    </div>
  );
};

export default Signin;


/* 

 */