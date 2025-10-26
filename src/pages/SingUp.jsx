import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useSingUpUserMutation } from '../states/apiSlice';

function SingUp() {
  const [enterNewUser, { isError }] = useSingUpUserMutation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [isAdmin, setIsAdmin] = useState('');

  function onSubmitForm(e) {
    e.preventDefault();
    console.log(isAdmin.trim() === '');
    console.log([true,true,true,false].every(int => int));
    if ([username, password, password2, isAdmin].some(int => int.trim() === '')) return alert('Enter All Values');
    if (password !== password2) return alert('password was incorrect');

    enterNewUser({username,password,isAdmin});

    if(isError) return alert('failed to singing up');

    setUsername('')
    setPassword('')
    setPassword2('')
    setIsAdmin('')

    navigate('/login')
  }
  return (
    <div className='w-1/2 mx-auto h-120 bg-gray-400 rounded-2xl '>
      <form action=""
        onSubmit={onSubmitForm}
        className='flex flex-col relative top-1/2 -translate-y-1/2 gap-7 items-center w-3/4 mx-auto'
      >
        <h1 className='uppercase'>sing up</h1>
        <input
          type="text"
          placeholder='Username'
          className='bg-gray-300'
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder='Password'
          className='bg-gray-300'
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder='Enter again Password'
          className='bg-gray-300'
          onChange={e => setPassword2(e.target.value)}
        />
        <select className='bg-gray-300' onChange={e => setIsAdmin(e.target.value)}>
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