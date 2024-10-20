import '../assets/css/LoginButton.css'

export function LoginButton ({onclick}) {
  return (
    <div onClick={onclick} className='button-login-container'>
      <button className='button-login'>Login</button>
    </div>
  );
};