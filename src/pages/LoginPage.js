import React from 'react';

const LoginPage = () => {
    return ( 
        <div>
            <label htmlFor="">
                Podaj login
                <input type="text"/>
            </label>
            <label htmlFor="">
                Podaj hasło
                <input type="password"/>
            </label>
            <button>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;
// import React from 'react';

// const LoginPage = () => {
//     return (
//         <div>
//             <label htmlFor="">Podaj login<input type="text" /></label>
//             <label htmlFor="">Podaj hasło<input type="password" /></label>
//             <button>Zaloguj</button>
//         </div>
//     );
// }

// export default LoginPage;