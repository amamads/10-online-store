import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router'
import { enterNewUser, selectAllUsers } from '../features/users/userSlice';
import useInput from '../hooks/useInput';

function SingUp() {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { value: username, bind: usernameBind } = useInput('username')
  const { value: password, bind: passwordBind } = useInput('password')
  const { value: password2, bind: password2Bind } = useInput('Enter again Password')
  const [isAdmin, setIsAdmin] = useState('');


  function onSubmitForm(e) {
    e.preventDefault();
    if ([username, password, password2, isAdmin].some(int => int.trim() === '')) return alert('Enter All Values');
    if (users.some(user => user.username === username)) return alert('this username exist enter another one')
    if (password !== password2) return alert('password was incorrect');

    dispatch(enterNewUser({
      username,
      password,
      isAdmin: isAdmin === 'true' ? true : false
    }));

    navigate('/login')
  }
  return (
    <div className='w-1/2 mx-auto h-120 bg-gray-200 dark:bg-gray-400 rounded-2xl '>
      <form action=""
        onSubmit={onSubmitForm}
        className='flex flex-col relative top-1/2 -translate-y-1/2 gap-7 items-center w-3/4 mx-auto'
      >
        <h1 className='uppercase'>sing up</h1>
        <input type="text" {...usernameBind} />
        <input type="text" {...passwordBind} />
        <input type="text" {...password2Bind} />

        <select onChange={e => setIsAdmin(e.target.value)}>
          <option value="">User type</option>
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>

        <input type="submit" value="Sing up" />

        <Link to='/login'>Sing in</Link>
      </form>
    </div>
  )
}

export default SingUp