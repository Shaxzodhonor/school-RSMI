import React from 'react';

const Login = () => {
  return (
  <div className="bg-white align-items-center justify-content-center" style={{height: "100vh", display: "flex", flex: "column"}}>    
    <div className='bg-darkblue p-5 rounded' style={{width: "400px"}}>
      <div>
        <label htmlFor="login" className="form-label label-login">
          Логин
        </label>
        <input
          type="text"
          name={"username"}
          className={`form-control focus-none`}
          id="login"
          placeholder="Логинни киритинг"
        />
      </div>
      <div className='mt-3'>
        <label htmlFor="password">
          Пароль
        </label>
        <input
          type="password"
          name={"password"}
          className={`form-control focus-none`}
          id="password"
          placeholder="Паролни киритинг"
        />
      </div>
      <p className='ms-auto mt-2 login-sure' style={{ color: '#1890FF', fontSize: '14px', fontWeight: '400' }}>
        Логин ёки паролни унутдингизми?
      </p>
      <button
        type='submit'
        className="btn btn-primary2 text-white w-100"
        // disabled={isSubmitting}
      >Кириш</button>
    </div>
  </div>
  );
};

export default Login;