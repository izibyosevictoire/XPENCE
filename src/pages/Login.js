import { useState } from 'react';
import { useRouter } from 'next/router';

const login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    router.push('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl mb-4 text-purple-400">Welcome to XPENCE</h2>
      <h6 className='text-sm  text-gray-950'>Login to continue</h6> <br></br>


      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder='Enter Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
         required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full  text-white p-2 rounded hover:bg-yellow-600 bg-yellow-500" >
          Login
        </button>
        <h6 className="text-gray-600 text-sm px-32 py-6">Forgot Password ?</h6>
        <h6 className="text-gray-600 text-sm px-32 py-6">New?CREATE ACCOUNT</h6>
      </form>
    </div>
  );
};

export default login;
