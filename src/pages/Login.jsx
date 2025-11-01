import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { logInUser, logOutUser, selectAllUsers, selectIsLogged } from '../states/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function SingIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);
  const isLogged = useSelector(selectIsLogged);


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitInputEl = useRef();
  // useEffect(() => {
  //   window.onkeyup = e => {
  //     // if (e.key === 'Enter') console.log(submitInputEl.current)
  //     if (e.key === 'Enter' && !submitInputEl.current) submitInputEl.current.click() 

  //   }
  // }, [submitInputEl])

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
        <input
          type="text"
          placeholder='Username'
          className='bg-gray-300'
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          // type="password"
          placeholder='Password'
          className='bg-gray-300'
          onChange={e => setPassword(e.target.value)}
        />
        {/* <input type="text" placeholder='Password' className='bg-gray-300' onChange={e => setPassword(e.target.value)}/> */}
        <input type="submit" value="Sing in" ref={submitInputEl} />
        <Link to='/sing-up'>Sing up</Link>
      </form>
    </div>
  )
}

export default SingIn