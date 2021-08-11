import React, { useState } from 'react';
import {adminLogin} from './config/Service';
export default function Login() {
    const [state, setState] = useState({ email: '', password: '', errMsg: '' })
    const handler = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    const postData = (e) => {
        e.preventDefault();
         let formData={email:state.email,password:state.password};
         adminLogin(formData)
         .then(res=>{
             console.log(res.data)
         })
         .catch(err=>console.log('Error'+err))
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <form method='post' onSubmit={postData}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" name='email' className="form-control" onChange={handler} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name='password' className="form-control" onChange={handler} />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </form>
                    </div></div></div>
        </div>
    )
}
