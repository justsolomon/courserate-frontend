const redirectUser = (router) => {
  let loggedIn = localStorage['loggedIn'];
  if (loggedIn) {
    const username = localStorage['username'];
    if (JSON.parse(loggedIn)) router.push(`/user/${username}`);
  }
};

export default redirectUser;
