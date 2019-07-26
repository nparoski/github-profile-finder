class Github{
  constructor(){
    this.clientId = '5916b7c091820b24515c';
    this.clientSecret = 'f654d2d5c39c31e77ca417531e59175ddcded592';
  }

  async getUser(obj){
    const regexp = /^(?=.{1,39}$)[a-zA-Z\d]+(?:-[a-zA-Z\d]+)*$/;

    if(!regexp.test(obj.user) || obj.user === ''){
      throw new Error('Cannot fetch user: Invalid username')
    }

    const response = await fetch(`https://api.github.com/users/${obj.user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    if (response.status === 200 || response.statusText === "OK") {
      const data = await response.json();
      return {
        username: data.login,
        name: data.name !== null ? data.name : 'No Name 👾',
        avatar: data.avatar_url,
        profile_link: data.html_url,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        bio: data.bio !== null ? data.bio : 'No bio 😕',
        statusMsg: obj.msg
      }
    }
    else if (response.status === 404){
      throw new Error(`${response.status} user not found.`)
    }
    else{
      throw new Error(`${response.status}, please try again.`)
    }
  }
}