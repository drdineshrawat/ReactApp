import React from 'react';
import axios from 'axios';

import '../.././style/Home.css';

const Home =() =>{
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h1>Home page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div class="login-form">
                        <div className="header">
                          <h2>Login</h2>
                        </div>
                  <div className="form-div">
                    <form action="#">
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="uname" 
                        placeholder="User Name"/>
                    </div>
                    <div class="form-inputtext-space">
                      <input 
                        type="password" 
                        class="inputbox" 
                        name="psswd" 
                        placeholder="Password"/>
                    </div>
                    <div class="form-button-space form-button">
                      <button type="submit"  class="btn btn-primary">Add</button>
                    </div>
                  </form>
                        </div>
                  </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
       
};

export default Home;