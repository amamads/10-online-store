import { Link, useNavigate } from 'react-router'
import { logInUser, logOutUser, selectAllUsers, selectIsLogged } from '../features/users/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../hooks/useInput';

function SingIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);
  const isLogged = useSelector(selectIsLogged);


  const { value: username, bind: usernameBind } = useInput('username')
  const { value: password, bind: passwordBind } = useInput('password')

  function onSubmitForm(e) {
    e.preventDefault();
    if ([username, password].every(int => int.trim() === '')) return alert('Enter Values');

    const user = users.find(user => user.username === username && user.password === password);

    if (!user) return alert('This acount not exist');

    dispatch(logInUser(user));

    navigate('/')
  }

  if (isLogged) return (
    <div className='text-center'>
      <h1 className='big-title'>your are loggen in</h1>
      <button
        className='w-60 h-20 text-3xl mt-10'
        onClick={() => dispatch(logOutUser())}
      >Log out</button>
    </div>
  )

  return (
    <div className='w-1/2 mx-auto h-120 bg-gray-200 dark:bg-gray-400 rounded-2xl '>
      <form onSubmit={onSubmitForm} action="" className='flex flex-col relative top-1/2 -translate-y-1/2 gap-7 items-center w-3/4 mx-auto'>
        <h1 className='uppercase'>sing in</h1>
        <input type="text" {...usernameBind} />
        <input type="text" {...passwordBind} />
        <input type="submit" value="Sing in" />
        <Link to='/singUp'>Sing up</Link>
      </form>
    </div>
  )
}

export default SingIn