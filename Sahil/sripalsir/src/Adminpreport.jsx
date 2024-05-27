import React, { useState,useEffect } from "react";
import { Button, Card, Typography , Select, Option } from "@material-tailwind/react";
import CryptoJS from "crypto-js";
import api from "./ApiLink.mjs";
import {
  TrashIcon
} from "@heroicons/react/24/solid"; 

const TABLE_HEAD = ['Sr.no','Expense','Amount','Voucher No','Narration',''];
// let index = 0;

export default function Adminpreport() {
    const [pname,setpname]  = useState('');
    const [rowData, setRowData] = useState([]);
    const [options,setoptions] = useState([]);
    const [datetd,setdatetd] = useState('');
    const [plaza_id,setplaza_id] = useState('');
    const [user_id,set_user_id] = useState('');
    const [rem,setrem] = useState('');
    const [plaza,setplaza] = useState([]);
    const [pid,setpid] = useState(null);
    const [total_exp,setexp] = useState('');
    const [clear,setclear] = useState(false);
    const [oi,setoi] = useState('');
    const [ini_io,setini_io] = useState('');

    const handleRowInputChange = (index, fieldName, value) => {
      // console.log(rowData);
      const updatedRows = [...rowData];
      updatedRows[index][fieldName] = value;
      setRowData(updatedRows);
      const totalExpenseAmount = rowData.reduce((total, row) => total + parseFloat(row.amount || 0), 0);
      handleInputChange("cash_kpt", totalExpenseAmount);
      // const totalExpenseAmount = rowData.reduce((total, row) => total + parseFloat(row.amount || 0), 0);


  };

  function checkAllIdsPresent(rows) {
    return rows.every(row => 'id' in row && row.id !== '');
  }

    const handleAddRow = () => {
      const newRow = {
        id: '',
        amount: '',
        voucherno: '',
        narration: ''
      };
      setRowData([...rowData, newRow]);
      // console.log(rowData);
    };
    const [formData, setFormData] = useState({
      date_rep:"",
      opening_amt: '',
      adv_from_ho :"",
      total_cash_recievable : "",
      balaji : "",
      monthly_pass_amt : "",
      gross_cash_rec : "",
      total_cash : "",
      total_cash_rec : "",
      short_excess_tc : "",
      cash_dep_bank : "",
      cash_dep_arcpl : "",
      cash_kpt : "",
      diff_cash_tp : "",
      total_fast_tag_cl : "",
      short_amt_adj : 0,
      excess_amt_adj : 0,
      total_fast_tag_rec : "",
      fst_tg_trf_bnk : 0,
      diff_reciev : "",
      total_coll : "",
      plaza_code : "",
      user_id : "",
      test:"",
      name:"",
      salary:"",
      expensetype:[],
      remitance:"",
      on_monthly_pass_amt:""
    
  });

  const resetForm = () => {
    setFormData({
      date_rep: '',
      opening_amt: '',
      adv_from_ho :  "",
      total_cash_recievable : "",
      balaji :  "",
      monthly_pass_amt : "",
      gross_cash_rec :  "",
      total_cash :  "",
      total_cash_rec :  "",
      short_excess_tc :  "",
      cash_dep_bank : "",
      cash_dep_arcpl :  "",
      cash_kpt :  "",
      diff_cash_tp :  "",
      total_fast_tag_cl :  "",
      short_amt_adj : 0,
      excess_amt_adj :  0,
      total_fast_tag_rec : "",
      fst_tg_trf_bnk :  0,
      diff_reciev :  "",
      total_coll :  "",
      plaza_code :  "",
      user_id :  "",
      test:  "",
      name: "",
      salary:"",
      expensetype:[],
      remitance:"",
      id:'',
      on_monthly_pass_amt:"",
      initial_opn:""
    });
};

  const openingamount = (value) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    setpid(value);
    const today = new Date();
    const formattedDate = formatDate(today);
  // console.log(formattedDate);
  if(formData.test){
    fetch(api+'getoa',{
      method:'POST',
      body: JSON.stringify({ date: formData.test, plaza: value  }),
  })
  .then((response) => response.json())
  .then((data) => 
  handleInputChange("opening_amt", data.oa)
  )
  .catch((error) =>{
      console.log(error);
  },[]);

  fetch(api+'getoa',{
    method:'POST',
    body: JSON.stringify({ date: formData.test, plaza: value  }),
})
.then((response) => response.json())
.then((data) => 
handleInputChange("initial_opn", data.io)
)
.catch((error) =>{
    console.log(error);
},[]);


  fetch(api+'getoa',{
    method:'POST',
    body: JSON.stringify({ date: formData.test, plaza: value  }),
})
.then((response) => response.json())
.then((data) => 
setoi(data.oi)
)
.catch((error) =>{
    console.log(error);
},[]);
}else{
  fetch(api+'getoa',{
    method:'POST',
    body: JSON.stringify({ date: currentDate, plaza: value  }),
})
.then((response) => response.json())
.then((data) => 
handleInputChange("initial_opn", data.io)
)
.catch((error) =>{
    console.log(error);
},[]);


  fetch(api+'getoa',{
    method:'POST',
    body: JSON.stringify({ date: currentDate, plaza: value  }),
})
.then((response) => response.json())
.then((data) => 
setoi(data.oi)
)
.catch((error) =>{
    console.log(error);
},[]);

fetch(api+'getoa',{
  method:'POST',
  body: JSON.stringify({ date: currentDate, plaza: value  }),
})
.then((response) => response.json())
.then((data) => 
handleInputChange("opening_amt", data.oa)
)
.catch((error) =>{
  console.log(error);
},[]);

}

  fetch(api+'getrem',{
    method:'POST',
    body:JSON.stringify({plaza_code:value,date_rep:formData.test})
  })
  .then((response)=> response.json())
  .then((data)=>
  setrem(data.remitance)
  )
  .catch((error)=>{
    console.log(error);
  },[]);

  

  }

  const decryptAndRetrieveData = (key) => {
    const encryptedData = localStorage.getItem('encryptedData');
    if (encryptedData) {
      const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
      if (decryptedData) {
        return JSON.parse(decryptedData);
      }
    }
    return null;
  };

  const handleDeleteRow = (index) => {
    // console.log(index);
    // console.log(rowData);
  const updatedRows = [...rowData];
    updatedRows.splice(index, 1);
    setRowData(updatedRows);
    // console.log(updatedRows);
};

const formatDate1 = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const handleDateChange = (fieldName,value) =>{
  const enteredDate = new Date(value);
  const today = new Date();

if (enteredDate > today) {
setFormData((prevData) => ({
  ...prevData,
  [fieldName]: formatDate1(enteredDate),
}));
}else{ 
  setFormData((prevData) => ({
    ...prevData,
    [fieldName]: value,
  }));
}
if(pid){
fetch(api+'getoa',{
  method:'POST',
  body: JSON.stringify({ date: value, plaza: pid  }),
})
.then((response) => response.json())
.then((data) => 
handleInputChange("opening_amt", data.oa)
)
.catch((error) =>{
  console.log(error);
},[]);

fetch(api+'getoa',{
  method:'POST',
  body: JSON.stringify({ date: value, plaza: pid  }),
})
.then((response) => response.json())
.then((data) => 
handleInputChange("initial_opn", data.io)
)
.catch((error) =>{
  console.log(error);
},[]);
fetch(api+'getoa',{
  method:'POST',
  body: JSON.stringify({ date: value, plaza: pid  }),
})
.then((response) => response.json())
.then((data) => 
setoi(data.oi)
)
.catch((error) =>{
  console.log(error);
},[]);
}

};

const handleInputChange = (fieldName,value) =>{
  const floatValue = parseFloat(value);

  if (!isNaN(floatValue) && floatValue >= 0) {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: floatValue,
    }));
  } else {
    if(fieldName === 'opening_amt'){
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: floatValue,
      }));
    }else{
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: 0,
    }));
  }
  }
};

const handlesubmit  = async() =>{
  const totalExpenseAmount = rowData.reduce((total, row) => total + parseFloat(row.amount || 0), 0);
  const setEmptyFieldsToZero = (obj) => {
    for (let key in obj) {
      // console.log(key);
      if (obj[key] == "") {
        obj[key] = 0;
        // if(obj[key] == NaN){
        //   obj[key] = 0;
        // }
      }
    }
    return obj;
  };

  const setEmptyFieldsToZero1 = (obj) => {
    for (let key in obj) {
      // console.log(key);
      
        obj[key] = 0;
        // if(obj[key] == NaN){
        //   obj[key] = 0;
        // }
      
    }
    return obj;
  };

  // const deriveddata = {
  //   date_rep:formData.test,
  //   gross_cash_rec:     parseFloat(formData.total_cash_recievable)+parseFloat(formData.balaji)+parseFloat(formData.monthly_pass_amt),
  //   total_cash:         parseFloat(formData.total_cash_recievable)+parseFloat(formData.balaji)+parseFloat(formData.monthly_pass_amt),
  //   diff_cash_tp:       (parseFloat(formData.opening_amt)+parseFloat(formData.adv_from_ho)+parseFloat(formData.balaji)+parseFloat(formData.monthly_pass_amt)+parseFloat(formData.total_cash_recievable))-(formData.cash_dep_bank+formData.cash_dep_arcpl+formData.cash_kpt),
  //   total_fast_tag_rec: (parseFloat(formData.total_fast_tag_cl)+parseFloat(formData.short_amt_adj)) - parseFloat(formData.excess_amt_adj),
  //   diff_reciev :       parseFloat(formData.fst_tg_trf_bnk) - ((parseFloat(formData.total_fast_tag_cl)+parseFloat(formData.short_amt_adj)) - parseFloat(formData.excess_amt_adj)),
  //   total_coll:         ((parseFloat(formData.total_fast_tag_cl)+parseFloat(formData.short_amt_adj)) - parseFloat(formData.excess_amt_adj))+(parseFloat(formData.total_cash_recievable)+parseFloat(formData.balaji)+parseFloat(formData.monthly_pass_amt)),
  //   short_excess_tc:    (parseFloat(formData.total_cash_rec)-(parseFloat(formData.total_cash_recievable)+parseFloat(formData.balaji)+parseFloat(formData.monthly_pass_amt))),
  //   cash_kpt : totalExpenseAmount,
  //   expensetype:    rowData,
  //   plaza_code:pid,
  //   user_id : user_id,
  //   remitance:rem
  // };
  // const formDataWithDerived = { ...formData, ...deriveddata };
  // console.log(formDataWithDerived);
  const formDataWithDerived = { ...formData};
  // console.log(formDataWithDerived);
  const formData1 = setEmptyFieldsToZero(formDataWithDerived);
  // console.log(deriveddataWithZeroes);
  if(formData.test){
  const deriveddata1 = {
    date_rep:formData.test,
    gross_cash_rec:     parseFloat(formData1.total_cash_recievable)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt),
    total_cash:         parseFloat(formData1.total_cash_recievable)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt),
    diff_cash_tp:       (parseFloat(formData1.opening_amt)+parseFloat(formData1.adv_from_ho)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt)+parseFloat(formData1.total_cash_recievable))-(formData1.cash_dep_bank+formData1.cash_dep_arcpl+formData1.cash_kpt),
    total_fast_tag_rec: (parseFloat(formData1.total_fast_tag_cl)+parseFloat(formData1.short_amt_adj)) - parseFloat(formData1.excess_amt_adj),
    diff_reciev :       parseFloat(formData1.fst_tg_trf_bnk) - ((parseFloat(formData1.total_fast_tag_cl)+parseFloat(formData1.short_amt_adj)) - parseFloat(formData1.excess_amt_adj)),
    total_coll:         ((parseFloat(formData1.total_fast_tag_cl)+parseFloat(formData1.short_amt_adj)) - parseFloat(formData1.excess_amt_adj))+(parseFloat(formData1.total_cash_recievable)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt)),
    short_excess_tc:    (parseFloat(formData1.total_cash_rec)-(parseFloat(formData1.total_cash_recievable)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt))),
    cash_kpt : totalExpenseAmount,
    expensetype:    rowData,
    plaza_code:pid,
    user_id : user_id,
    remitance:rem
  };
  const formDataWithDerived1 = { ...formData1, ...deriveddata1 };
  const deriveddataWithZeroes1 = setEmptyFieldsToZero(formDataWithDerived1);
  // console.log(deriveddataWithZeroes1);
  if(!checkAllIdsPresent(rowData)){
    alert("Enter ALL Expenses");
    return;
  }

  const res = await fetch(api+'insertplazareport',{
    method: "POST",
          crossDomain: true,
          headers:{              
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*",
              
          },
          body: JSON.stringify(deriveddataWithZeroes1)
  });
  if(res.ok){
    const responseData = await res.json();
    // console.log(responseData);
    if(responseData.ResponseCode === "200"){
      // setclear(true)
      alert(responseData.ResponseMsg);
      resetForm();
      setalert(true);
      const data = setEmptyFieldsToZero1(formData);
      // setFormData(data);
      
    }else{
      if(responseData.ResponseCode === "402"){
        alert("Entry already submitted for this date");
        resetForm();
      }else{
        // console.log(responseData);
        // console.log(res);
        // alert("Failed to insert Data");
        // resetForm();
        if(responseData.ResponseCode === "403"){
          alert("Please Select Proper date");
          resetForm();
        }else{
        resetForm();
      }
      }
    }
  }
}else{
  let hasEmptyId = false;
  const deriveddata1 = {
    date_rep:datetd,
    gross_cash_rec:     parseFloat(formData1.total_cash_recievable)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt),
    total_cash:         parseFloat(formData1.total_cash_recievable)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt),
    diff_cash_tp:       (parseFloat(formData1.opening_amt)+parseFloat(formData1.adv_from_ho)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt)+parseFloat(formData1.total_cash_recievable))-(formData1.cash_dep_bank+formData1.cash_dep_arcpl+formData1.cash_kpt),
    total_fast_tag_rec: (parseFloat(formData1.total_fast_tag_cl)+parseFloat(formData1.short_amt_adj)) - parseFloat(formData1.excess_amt_adj),
    diff_reciev :       parseFloat(formData1.fst_tg_trf_bnk) - ((parseFloat(formData1.total_fast_tag_cl)+parseFloat(formData1.short_amt_adj)) - parseFloat(formData1.excess_amt_adj)),
    total_coll:         ((parseFloat(formData1.total_fast_tag_cl)+parseFloat(formData1.short_amt_adj)) - parseFloat(formData1.excess_amt_adj))+(parseFloat(formData1.total_cash_recievable)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt)),
    short_excess_tc:    (parseFloat(formData1.total_cash_rec)-(parseFloat(formData1.total_cash_recievable)+parseFloat(formData1.balaji)+parseFloat(formData1.monthly_pass_amt))),
    cash_kpt : totalExpenseAmount,
    expensetype:    rowData,
    plaza_code:pid,
    user_id : user_id,
    remitance:rem
  };
  const formDataWithDerived1 = { ...formData1, ...deriveddata1 };
  const deriveddataWithZeroes1 = setEmptyFieldsToZero(formDataWithDerived1);
  // console.log(formData1);
  if(rowData){
    // console.log("hi");
    // console.log(rowData);
    rowData.forEach(row => {
      if (!row.id.trim()) {
          hasEmptyId = true;
      }
      // console.log(row);
      // console.log(row.id.trim());
  });
  }

  if (hasEmptyId) {
    alert("Please select expenses");
    return;
  }

  if(!checkAllIdsPresent(rowData)){
    alert("Enter ALL Expenses");
    return;
  }
  const res = await fetch(api+'insertplazareport',{
    method: "POST",
          crossDomain: true,
          headers:{              
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*",
              
          },
          body: JSON.stringify(deriveddataWithZeroes1)
  });
  if(res.ok){
    const responseData = await res.json();
    // console.log(responseData);
    if(responseData.ResponseCode === "200"){
      // alert("Data Inserted Successfully ");
      const data = setEmptyFieldsToZero1(formData);
      // setFormData(data);
      // window.location.reload();
      setclear(true)
      alert(responseData.ResponseMsg);
      setalert(true);
      resetForm();
    }else{
      if(responseData.ResponseCode === "402"){
        alert("Entry already submitted for this date");
        resetForm();
      }else{
        // console.log(responseData);
        // console.log(res);
        // alert("Failed to insert Data");
        // resetForm();
        if(responseData.ResponseCode === "403"){
          alert("Please Select Proper date");
          resetForm();
        }else{
          // console.log("hello");
        resetForm();
      }
      }
    }
  }
}

  
}

  useEffect(() => {
    const decrydata = decryptAndRetrieveData("Harry");
    const currentDate = new Date().toISOString().split('T')[0];
    setdatetd(currentDate);
    setplaza_id(decrydata.user.pid);
    set_user_id(decrydata.user.id);
    const setEmptyFieldsToZero = (obj) => {
      for (let key in obj) {
        // console.log(key);
        
          obj[key] = 0;
        
      }
      return obj;
    };
    let i = 0;
    if(i<2){
      const data = setEmptyFieldsToZero(formData);
      setFormData(data);
      i++;
    }
    if(clear){
      const data = setEmptyFieldsToZero(formData);
      setFormData(data);
      setclear(false);
    }
//   fetch(api+'getoa',{
//     method:'POST',
//     body: JSON.stringify({ date: currentDate, plaza: decrydata.user.pid  }),
// })
// .then((response) => response.json())
// .then((data) => 
// handleInputChange("opening_amt", data.oa)
// )
// .catch((error) =>{
//     console.log(error);
// },[clear]);
// fetch(api+'getoa',{
//   method:'POST',
//   body: JSON.stringify({ date: currentDate, plaza: decrydata.user.pid  }),
// })
// .then((response) => response.json())
// .then((data) => 
// setoi(data.oi)
// )
// .catch((error) =>{
//   console.log(error);
// },[clear]);

// fetch(api+'getoa',{
//   method:'POST',
//   body: JSON.stringify({ date: formData.test, plaza: decrydata.user.pid  }),
// })
// .then((response) => response.json())
// .then((data) => 
// handleInputChange("initial_opn", data.io)
// )
// .catch((error) =>{
//   console.log(error);
// },[]);

fetch(api+'getrem',{
  method:'POST',
  body:JSON.stringify({plaza_code:decrydata.user.pid,date_rep:datetd})
})
.then((response)=> response.json())
.then((data)=>
setrem(data.remitance)
)
.catch((error)=>{
  console.log(error);
},[]);


fetch(api+'get_plaza')
      .then((response) => response.json())
      .then((data) => {
        
        setplaza(data);
       
      })
      .catch((error) => {
        console.error('Error fetching options:', error);
      });

    fetch(api+'getplazastat',{
        method:'POST',
        body: JSON.stringify({'plaza':decrydata.user.pid})
      })
        .then((response) => response.json())
        .then((data) => {
          setpname(data.data.plaza)
        });

        fetch(api+'expensehead')
      .then((response) => response.json())
      .then((data) => {
        setoptions(data);
      })
      .catch((error) => {
        console.error('Error fetching options:', error);
      });
  },[]);

  return (
    <>
    <div className='pt-2 w-full '>
    <div className='w-full'>
    <div className="flex justify-center items-center">
     <div className="w-full pt-4  justify-center items-center">
        <div className="rounded-t bg-black mb-0 py-6">
      <div className="text-center">
        <h6 className="text-white text-xl font-bold">
          Plaza Entry
          {/* {pname.toUpperCase()} */}
        </h6>
      </div>
    </div>
    </div>
    </div>
    <div className="w-full h-full bg-white">
    <form className=" h-full w-full">
            <div className=" overflow-scroll">
                <div className=" py-4 mx-8  justify-center items-center bg-white">
                <div className="px-4 flex flex-row">
            <div className=" flex mb-5">
              <label className="uppercase text-blueGray-600 text-[20px] flex justify-start items-center font-bold mb-2 px-2" htmlfor="grid-password">
                Date
              </label>
              <input type="date" className="border-4 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150" placeholder=""
              onChange={(e) =>{handleDateChange("test", e.target.value)}}
              defaultValue={datetd}
              />
            </div>

            <div className="ml-[50px] flex mb-5">
              <label className="uppercase text-blueGray-600 text-[20px] flex justify-start items-center font-bold mb-2 px-2" htmlfor="grid-password">
              Choose Plaza
              </label>
              <select
            id="option1"
            name="option"
            value={pid}
            onChange={(e) => openingamount(e.target.value)}
            className="w-[200px] border border-gray-300 rounded-md p-2"
          >
            <option value="" >Select Plaza</option>
            {plaza.map((option) => (
              <option  value={option.plaza_id}>
                {option.name}
              </option>
            ))}
          </select>
            </div>

            {/* <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-5">
              <label className="block uppercase text-blueGray-600 text-[20px] font-bold mb-2 text-center"  htmlfor="grid-password">
                Choose Plaza
              </label>
              <select
            id="option1"
            name="option"
            value={pid}
            onChange={(e) => openingamount(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="" >Select Plaza</option>
            {plaza.map((option) => (
              <option  value={option.plaza_id}>
                {option.name}
              </option>
            ))}
          </select>
            </div>
          </div> */}

          </div>
                    <div className="oveflow-scroll h-[400px]">
                    {/* overflow-y-auto */}
                    {/* report part start */}
                        <div className="grid grid-cols-2">
                        {/* flex justify-center items-center */}
                            <div className="border-2 border-black m-4  max-w-[370px]">
                            {/* p-5  overflow-scroll */}
          {/* Collection start */}
      <Card className="h-full w-full min-w-[350px]">
      <div className="flex justify-center items-center font-bold text-[15px] mb-[-20px]">Collection Report</div>
      <div className="flex justify-start w-full m-5">
  <div className="  items-start  flex">
  {/* border-2  border-red-400 ml-[-10px]*/}
    <div className="w-full font-bold m-4 text-[10px]">
      <div className="flex justify-center items-center w-full p-1">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">Opening Amount:</div>
        <input type="number" placeholder="Opening Amount" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" defaultValue={oi} disabled />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">Advance from H.O:</div>
        <input type="text" placeholder="Advance from H.O" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.adv_from_ho}
        onChange={(e) => handleInputChange("adv_from_ho", e.target.value)}
         />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">Cash 1</div>
        <input type="text" placeholder="System Cash" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.total_cash_recievable}
        onChange={(e) => handleInputChange("total_cash_recievable", e.target.value)} />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">Cash 2</div>
        <input type="text" placeholder="Cash 2" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.balaji}
        onChange={(e) => handleInputChange("balaji", e.target.value)}  />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">MONTHLY PASS AMOUNT:</div>
        <input type="text" placeholder="MONTHLY PASS AMOUNT" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.monthly_pass_amt}
        onChange={(e) => handleInputChange("monthly_pass_amt", e.target.value)} />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">Online MONTHLY PASS AMOUNT:</div>
        <input type="text" placeholder="MONTHLY PASS AMOUNT" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.on_monthly_pass_amt}
        onChange={(e) => handleInputChange("on_monthly_pass_amt", e.target.value)} />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">Cash Deposited by TC:</div>
        <input type="text" placeholder="Cash Deposited by TC" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.total_cash_rec}
        onChange={(e) => handleInputChange("total_cash_rec", e.target.value)} />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">CASH DEPOSITED IN ARCPL:</div>
        <input type="text" placeholder="CASH DEPOSITED IN ARCPL" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.cash_dep_arcpl}
        onChange={(e) => handleInputChange("cash_dep_arcpl", e.target.value)} />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">CASH DEPOSITED IN bank:</div>
        <input type="text" placeholder="CASH DEPOSITED IN BANK" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.cash_dep_bank}
        onChange={(e) => handleInputChange("cash_dep_bank", e.target.value)} />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase  flex-initial ml-[20px]    w-[150px]">FAST TAG COLLECTION:</div>
        <input type="text" placeholder="FAST TAG COLLECTION" className="border-2 w-[100px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.total_fast_tag_cl}
        onChange={(e) => handleInputChange("total_fast_tag_cl", e.target.value)} />
      </div>
      {/* <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase m-3 flex-initial ml-[20px]    w-[150px]">EXCESS AMOUNT ADJUSTMENT:</div>
        <input type="number" placeholder="EXCESS AMOUNT ADJUSTMENT" className="border-2  w-[150px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.excess_amt_adj} 
        onChange={(e) => handleInputChange("excess_amt_adj", e.target.value)}/>
      </div> */}
      {/* <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase m-3 flex-initial ml-[20px]    w-[150px]">short AMOUNT ADJUSTMENT:</div>
        <input type="number" placeholder="SHORT AMOUNT ADJUSTMENT" className="border-2  w-[150px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.short_amt_adj} 
        onChange={(e) => handleInputChange("short_amt_adj", e.target.value)}/>
      </div> */}
      {/* <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase m-3 flex-initial ml-[20px]    w-[150px]">FAST TAG DEPOSITED IN BANK:</div>
        <input type="number" placeholder="FAST TAG DEPOSITED IN BANK" className="border-2  w-[150px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" value={formData.fst_tg_trf_bnk}
        onChange={(e) => handleInputChange("fst_tg_trf_bnk", e.target.value)}  />
      </div> */}
    </div>
  </div>
</div>

</Card>
          {/* collection end */}
                            </div>
                            <div className="p-4 m-4 border-2 border-black max-w-[1000px] ml-[-100px]">
                            <div className="w-full left-0">
                            <div className="flex justify-center items-center font-bold text-[25px] mb-[-15px]">Expense Report</div>
                              <div className="w-full p-4 m-2">
                              {/* border-2 border-red-400 */}
                            <Card className="h-full w-full max-w-[800px] overflow-scroll">
                                                            <table className="w-full min-w-max table-auto text-left">
                                                                <thead>
                                                                    <tr>
                                                                        {TABLE_HEAD.map((head) => (
                                                                            <th key={head} className="border-2 border-blue-gray-100 bg-blue-gray-50 p-4 w-[50px]">
                                                                                <Typography
                                                                                    variant="small"
                                                                                    color="blue-gray"
                                                                                    className="font-normal leading-none opacity-70 flex justify-center items-center w-[50px]"
                                                                                >
                                                                                    {head}
                                                                                </Typography>
                                                                            </th>
                                                                        ))}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {rowData.map((row, rowIndex) => (
                                                                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even:bg-blue-gray-50/50' : ''}>
                                                                            <td className="p-1 border-2 w-[1px]">
                                                                                <Typography variant="small" color="blue-gray" className="font-normal flex justify-center items-center w-[1px]">
                                                                                    {rowIndex + 1}
                                                                                </Typography>
                                                                            </td>
                                                                            <td className="p-1 border-2 w-[80px]">
                                                                                {/* <input type="number" placeholder="Expense" className="border-2  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" /> */}
                                                                                <select
            id="option"
            name="option"
            onChange={(e) => handleRowInputChange(rowIndex,'id',e.target.value)}
            value={row.id}
            className="w-[170px] border border-gray-300 rounded-md p-2 h-[37px] uppercase"
          >
            <option value="" >Select Expense</option>
            {options.map((option) => (
              <option  value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
                                                                            </td>
                                                                            <td className="p-1 border-2 w-[10px]">
                                                                                <input type="number" placeholder="Amount" className="border-2  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150 w-[90px]"
                                                                                 onChange={(e) => handleRowInputChange(rowIndex,'amount',e.target.value)}
                                                                                 value={row.amount} />
                                                                            </td>
                                                                            <td className="p-1 border-2 w-[30px]">
                                                                                <input type="text" placeholder="Voucher No" className="border-2  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150 w-[70px]"
                                                                                onChange={(e) => handleRowInputChange(rowIndex,'voucherno',e.target.value)}
                                                                                value={row.voucherno} />
                                                                            </td>
                                                                            <td className="p-1 border-2 w-[30px]">
                                                                                {/* <input type="text" placeholder="Narration" className="border-2  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150"
                                                                                onChange={(e) => handleRowInputChange(rowIndex,'narration',e.target.value)}
                                                                                value={row.narration}
                                                                                 /> */}
                                                                                 <textarea
        placeholder="Narration" 
        className="border-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-[80px] h-auto"
        onChange={(e) => handleRowInputChange(rowIndex, 'narration', e.target.value)}
        value={row.narration}
        rows={1}
        style={{ minHeight: '27px' }} 
    />
                                                                            </td>
                                                                            <td className="p-4 border-2 w-[30px]">
                                                                                {/* <Button color="red" onClick={() => handleDeleteRow(rowIndex)}>Delete</Button> */}
                                                                                <TrashIcon color="red" onClick={() =>handleDeleteRow(rowIndex)}
                                                                                className="h-5 ml-[20px] cursor-pointer"/>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                    <tr>
                                                                        <td colSpan={5} className="p-4 border-2">
                                                                            <Button color="black" onClick={handleAddRow}>Add Row</Button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </Card>
                                                        </div>
          </div>
                            </div>
                        </div>
                        {/* report part end */}
                        {/* calculation part start */}
                        <div className="border-2 border-black  font-bold p-4">
                          <div className="flex justify-start items-start">
                          <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase m-3 flex-initial ml-[20px]    w-[150px]">Total Cash Received:</div>
        <input type="number" placeholder="TOTAL CASH RECEIVED" className="border-2  w-[150px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" 
        value={parseFloat(formData.total_cash_recievable)+parseFloat(formData.balaji)+parseFloat(formData.monthly_pass_amt)}
        disabled />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase m-3 flex-initial ml-[20px]    w-[150px]">Total Fast Tag Receivable:</div>
        <input type="number" placeholder="TOTAL FAST TAG RECEIVABLE" className="border-2  w-[150px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" 
        value={parseFloat(formData.total_fast_tag_cl)+parseFloat(formData.short_amt_adj)-parseFloat(formData.excess_amt_adj)}
        disabled />
      </div>
                          </div>
                          <div className="flex justify-start items-start">
                          <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase m-3 flex-initial ml-[20px]    w-[150px]">
          {/* Difference cash in plaza: */}
          Closing balance
          </div>
        <input type="number" placeholder="CLOSING AMOUNT" className="border-2  w-[150px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" 
        value={parseFloat(oi)+parseFloat(formData.adv_from_ho)+parseFloat(formData.total_cash_recievable)+parseFloat(formData.balaji)+parseFloat(formData.monthly_pass_amt)-parseFloat(formData.cash_dep_bank)-parseFloat(formData.cash_dep_arcpl)-parseFloat(formData.cash_kpt)}
        disabled  />
      </div>
      <div className="flex justify-center items-center w-full  p-2">
        <div className="left-0 uppercase m-3 flex-initial ml-[20px]    w-[150px]">total collection:</div>
        <input type="number" placeholder="TOTAL COLLECTION" className="border-2  w-[150px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" 
        value={parseFloat(formData.total_cash_recievable)+parseFloat(formData.balaji)+parseFloat(formData.monthly_pass_amt)+parseFloat(formData.total_fast_tag_cl)+parseFloat(formData.short_amt_adj)-parseFloat(formData.excess_amt_adj)}
        disabled />
      </div>

      
                          </div>
                          <div className="flex justify-start items-start">
                          <div className=" flex w-full   p-4">
        <div className="left-0 uppercase m-3 flex-initial ml-[20px]    w-[150px]">Total Expense:</div>
        <input type="number" placeholder="Total expense" className="border-2  w-[150px] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring h-[27px] ease-linear transition-all duration-150" 
        value={formData.cash_kpt}
        disabled  />
      </div>

      
                          </div>
                        </div>
                        {/* calculation part ends  */}
                        <div className="m-5 flex justify-end items-end">
                          <Button color="green" onClick={handlesubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </form>
    </div>
    {/* form part ends */}
    </div>
    </div>
    {/* </div> */}
    {/* </Card> */}
    </>
  )
}

