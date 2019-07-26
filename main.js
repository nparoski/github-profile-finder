const storage = new Storage();
const user = new Github();

document.addEventListener('DOMContentLoaded',
  user.getUser(storage.load())
    .then(data => Ui.create(data,data.statusMsg))
    .catch(err => Ui.createError(err))
);
clearBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  storage.clear();
});

userForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const username = userField.value;

  user.getUser({ user: username, msg: 'Success: Fetched user.'})
    .then(data => Ui.create(data,data.statusMsg))
    .then(() => storage.store(username))
    .catch(err => Ui.createError(err))
})