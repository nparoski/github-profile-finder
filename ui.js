const userForm = document.getElementById('search-user');
const userField = document.getElementById('search-user__field');
const container = document.querySelector('#profile');
const clearBtn = document.querySelector('#clearBtn');
class Ui{
  constructor(){
  }

  static create(object,msg) {
    Ui.createSuccess(msg);
    container.innerHTML += 
    `

    <img class="img" src=${object.avatar}>
    <h3 class="text-center">${object.name}</h3>
    <p class="text-center">${object.username}</p>
    <div class="d-flex justify-content-around">
      <p>Followers: <span style="font-weight:bold;">${object.followers}</span></p>
      <p>Public Repos: <span style="font-weight:bold;">${object.public_repos}</span></p>
      <p>Following: <span style="font-weight:bold;">${object.following}</span></p>
    </div>
    <p class="text-center">${object.bio}</p>
    <div class="d-flex justify-content-around">
      <a class="button" target="_blank" rel="noopener noreferrer" href="${object.profile_link}">View Profile</a>
    </div>
    `
    document.body.appendChild(container);
  };
  
  static createError(err){
    container.innerHTML =
    `
    <p class="status error text-center" id="statusMsg">${err}</p>
    `
    Ui.removeStatusMsg()
  };

  static createWarning(warn) {
    container.innerHTML =
    `
    <p class="status warning text-center" id="statusMsg">${warn}</p>
    `
    Ui.removeStatusMsg()
  };
  
  static createSuccess(msg){
    container.innerHTML =
    `
    <p class="status success text-center" id="statusMsg">${msg}</p>
    `
    Ui.removeStatusMsg()
  };
  
  static removeStatusMsg(delay = 3000){
    setTimeout(() => {
      const msg = document.querySelector('#statusMsg');
      if (msg !== null){
        msg.remove() 
      }
    }, delay);
  }
}

