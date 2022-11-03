import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect} from 'react';
import Cookies from 'universal-cookie';
import LandingPage from './components/LandingPage'
import LoginCustomerPage from './components/LoginCustomerPage'
import SecurityConfirmPage from './components/SecurityConfirmPage'
import CreateAccountFormOne from './components/CreateAccountFormOne'
import CreateAccountFormTwo from './components/CreateAccountFormTwo'
import CreateAccountFormThree from './components/CreateAccountFormThree'
import CustomerProfile from './components/CustomerProfile'
import StaffProfile from './components/StaffProfile'
import ResetPassPage from './components/ResetPassPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import StaffProfile from './components/StaffProfile';

function App() {

    const [user, setUser] = useState({"status": "logged out"});
    
    const cookies = new Cookies();
    // if (!user) {
    //     let usertoken = cookies.get('usertoken');
    //     let email = cookies.get('email');
    //     setuser({ "email": email, "token": usertoken })
    // }
    useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const loggedInUserJson = JSON.parse(loggedInUser);
        setUser(loggedInUserJson);

      }
    }, [])

//  Line [0-9]*:[0-9]*:  '
//const 
//' is not defined[ ]*no-undef
//={\n\n}\n



//        
//        "

//: 
//": "

//;
//",

//        "\r\n
//        \r\n

//,\r\n    }
//\r\n    }


  return (
    <div className="App">
      <header className="App-header">
        
       </header>
        <Router>
            <div>
                <Routes>
                    {/* <Route exact path="/" element={<StaffProfile user={user} setUser={setUser} />} /> */}
                    <Route exact path="/" element={<LandingPage user={user} setUser={setUser} />} />
                    <Route path="/LoginCustomerPage" element={<LoginCustomerPage user={user} setUser={setUser} />} />
                    <Route path="/CreateAccountFormOne" element={<CreateAccountFormOne user={user} setUser={setUser} />} />
                    <Route path="/CreateAccountFormTwo" element={<CreateAccountFormTwo user={user} setUser={setUser} />} />
                    <Route path="/CreateAccountFormThree" element={<CreateAccountFormThree user={user} setUser={setUser} />} />
                    <Route path="/CustomerProfile" element={<CustomerProfile user={user} setUser={setUser} />} />
                    <Route path="/StaffProfile" element={<StaffProfile user={user} setUser={setUser} />} />
                    <Route path="/SecurityConfirmPage" element={<SecurityConfirmPage user={user} setUser={setUser} />} />
                    <Route path="/ResetPassPage" element={<ResetPassPage user={user} setUser={setUser} />} />
                    

                </Routes>

            </div>
        </Router>
    </div>
  );
}

export default App;
