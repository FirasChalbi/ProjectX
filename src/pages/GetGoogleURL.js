// Import statements or dependencies might be present here

export const getGoogleUrl = (from: string) => {
    // Root URL for Google OAuth
    const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
  
    // OAuth options
    const options = {
      redirect_uri: 'https://accounts.google.com/o/oauth2/auth',
      client_id: '206715908451-sp66t76rpkg3v79pn96c4rs8h46cv80j.apps.googleusercontent.com',
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ].join(' '),
      state: from,
    };
  
    // Convert options to query string
    const qs = new URLSearchParams(options);
  
    // Construct and return the final Google OAuth URL
    return `${rootUrl}?${qs.toString()}`;
  };
  