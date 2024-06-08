import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate,Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import api from './ApiLink.mjs';
// import AdminDash from './AdminDash';
// import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { setData } from './store/Actions';
const encryptAndStoreData = (data, key) => {
  localStorage.clear();
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  localStorage.setItem('encryptedData', encryptedData);
};

// export default class HomePage extends Component {
class HomePage extends Component {
  
    constructor(props){
    super(props)
    this.state = {
      email:"",
      password:"",
      name:"",
      id:"",
      loggedIn: false,
      data:"",
      dynamicPath:"",
      responseData: {},
    };
    this.linkRef = React.createRef();
    localStorage.clear();
    this.handlelog = this.handlelog.bind(this);
    // this.state.name= window.localStorage.getItem("Name");
  }

   handlelog = async (e) =>{
    e.preventDefault();
    const{email,password} = this.state;
    const res = await fetch(api+'login',{
      method: "POST",
            crossDomain: true,
            headers:{              
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                email,
                password
            })
    });

    if(res.ok){
      const responseData = await res.json();
      // console.log(responseData.ResponseCode);
      if(responseData.ResponseCode === "200"){
        // window.location.href="./dashboard";
        // <AdminDash/>
        // console.log(responseData);
        this.setState({ loggedIn: true });
        this.setState({ responseData:responseData },() =>{
          this.linkRef.current.click();
        });
        // localStorage.setItem("input",JSON.stringify(responseData));
        encryptAndStoreData(responseData,"Harry");
        // const dispatch = useDispatch();
        // dispatch(setJSONData(responseData));
        // this.props.setJSONData(JSON.stringify(responseData));
        var datareform = JSON.stringify(responseData);
        this.setState({ data: datareform });
        mapStateToProps(this.state.data);
        
        // console.log(responseData.user.role);
        
        
        
      }else{
        if(responseData.ResponseCode === "403"){
          alert("Access Denied contact admin");
        }else{
        alert("Invalid Credential");
        }
      }
    }else{
      alert("Request Failed");
    }
    
   };
   
   
  
  render() {
    // const { loggedIn } = this.state;
    // const dynamicPath = "/dashboard/home";
    const { loggedIn, responseData } = this.state;
    let dynamicPath = "";

    if (loggedIn && responseData.user.role === "Admin") {
      dynamicPath = "/dashboard/home";
      // this.linkRef.current.click();
    } else if (loggedIn && responseData.user.role === "Toll Operator") {
      dynamicPath = "/operator/ophome";
      // this.linkRef.current.click();
    }else if(loggedIn && responseData.user.rid === "2"){
      dynamicPath="/reports/report/plazarep"
    }

    return (
          <>
          {/* {loggedIn ?(<AdminDash value = {this.state.loggedIn}/>):(<div></div>)} */}
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account 
            {/* {this.state.name} */}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={this.handlelog} autocomplete="off">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  // type="email"
                  autocomplete="off"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=> this.setState({email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=> this.setState({password: e.target.value})}
                />
              </div>
            </div>

            <div>
            <div style={{ display: 'none' }}>
              {/* Use a dynamic path for the Link */}
              <Link to={dynamicPath} ref={this.linkRef} />
            </div>
            {/* <Link to="/dashboard/home"> */}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
      
    </>
    )
  }
}

// const mapDispatchToProps = {
//   setJSONData,
// };

const mapStateToProps = (state) => {
  // console.log("himap"+JSON.stringify(state)); // Logging the actual state
  // return {
  //   jsonData: state.jsonData,
  // };
  return {
    jsonData : JSON.stringify(state),
  }
};



// const mapDispatchToProps = {
//   setData
// };


// export default connect(mapStateToProps, { setJSONData })(HomePage);
export default HomePage;

// export default connect(null, mapDispatchToProps)(HomePage);


