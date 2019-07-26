class Storage{
  constructor(user = 'nparoski'){
    this.user = user;
  }

  store(user){
    const regexp = /^(?=.{1,39}$)[a-zA-Z\d]+(?:-[a-zA-Z\d]+)*$/;

    if (!regexp.test(user)) {
      throw new Error('Cannot store username: Invalid username');
    }else{
      this.user = user;
      localStorage.setItem('user', this.user);
    }
  }

  load(){
    // return localStorage.getItem('user') === null ? this.user : localStorage.getItem('user');
    if(localStorage.getItem('user') !== null){
      return {
        user:localStorage.getItem('user'),
        msg:'Success: Loaded user from storage.'
      }
    }
    else{
      return{
        user: this.user,
        msg:'Success: Loaded default user from Storage constructor.'
      }
    }
  }

  clear(){
    if(localStorage.getItem('user') !== null){
      localStorage.clear();
      Ui.createSuccess('Success: Cleared storage.');
    }
    else{
      Ui.createWarning('Storage is empty.');
    }
  }
}