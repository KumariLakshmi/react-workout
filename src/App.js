/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Pricing from "./Pricing";
import PRICING from "./pricing.json";

// function App(props) {
//   // console.log(props);
//   // [OR ] using json file also
//   // const pricing =
//   // [
//   //   {
//   //     name: "Free",
//   //     cost: "0",
//   //     currency: "$",
//   //     pricePer: "month",
//   //     // features: {
//   //     //   isSingleUser:true,
//   //     //   is5GBStorage : true,
//   //     //   isUnlimitedPublicProjects: true,
//   //     //   communityAccess: true,
//   //     //   unlimitedPrivateProjects:true,
//   //     //   dedicatedPhoneSupport:false,
//   //     //   freeSubdomain:false,
//   //     //   monthlyStatusReports:false

//   //     // }
//   //     features: [
//   //       {
//   //         name: "singleUser",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "is5GBStorage",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "isUnlimitedPublicProjects",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "communityAccess",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "unlimitedPrivateProjects",
//   //         access: false,
//   //       },
//   //       {
//   //         name: "Dedicated Phone Support",
//   //         access: false,
//   //       },
//   //       {
//   //         name: "Free Subdomain",
//   //         access: false,
//   //       },
//   //       {
//   //         name: "Monthly Status Reports",
//   //         access: false,
//   //       },
//   //       {
//   //         name: "Yearly Status Reports",
//   //         access: true,
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     name: "Plus",
//   //     cost: "9",
//   //     currency: "$",
//   //     pricePer: "month",
//   //     // features: {
//   //     //   is5Users: true,
//   //     //   is50GBStorage: true,
//   //     //   isUnlimitedPublicProjects: true,
//   //     //   communityAccess: true,
//   //     //   unlimitedPrivateProjects: true,
//   //     //   dedicatedPhoneSupport: true,
//   //     //   freeSubdomain: true,
//   //     //   monthlyStatusReports: false,
//   //     // },
//   //     features: [
//   //       {
//   //         name: "singleUser",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "is5GBStorage",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "isUnlimitedPublicProjects",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "communityAccess",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "unlimitedPrivateProjects",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "Dedicated Phone Support",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "Free Subdomain",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "Monthly Status Reports",
//   //         access: false,
//   //       },
//   //       {
//   //         name: "Yearly Status Reports",
//   //         access: true,
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     name: "Pro",
//   //     cost: "49",
//   //     currency: "$",
//   //     pricePer: "month",
//   //     // features: {
//   //     //   unlimitedUsers: true,
//   //     //   is150GBStorage: true,
//   //     //   isUnlimitedPublicProjects: true,
//   //     //   communityAccess: true,
//   //     //   unlimitedPrivateProjects: true,
//   //     //   dedicatedPhoneSupport: true,
//   //     //   freeSubdomain: true,
//   //     //   monthlyStatusReports: true,
//   //     // },
//   //     features: [
//   //       {
//   //         name: "singleUser",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "is5GBStorage",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "isUnlimitedPublicProjects",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "communityAccess",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "unlimitedPrivateProjects",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "Dedicated Phone Support",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "Free Subdomain",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "Monthly Status Reports",
//   //         access: true,
//   //       },
//   //       {
//   //         name: "Yearly Status Reports",
//   //         access: false,
//   //       },
//   //     ],
//   //   },
//   // ];
//   // console.log("PRICING",PRICING);
//   let handleChange=(name)=>{
//  console.log(name);
//   }
//   let change =({target:{name,value}}) =>{
//     console.log(name,value);
//   }

//   return (
//     <section className="pricing py-5">
//       <h1>{props.name}</h1>

//       {/* {arr.map((a) =>(
//         <p key={a}>{a}</p>
//       ))} */}
//       <div className="container">
//         <div className="row">

//           {PRICING.map((price) => (
//             <Pricing key={price.id} {...price} handleChange={handleChange} change={change} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// same task doing in function based

function App() {
  const [count, setCount] = useState(0); // ==> 0 is using like this let count = 0
  const [lowerName, setLowerName] = useState("kumari"); // ==> ""  is using like this let lowerName =""
  let [show, setShow] = useState(true);

  let add = () => {
    setCount(count + 1);
  };
  let sub = () => {
    setCount(count - 1);
  };
  let reset = () => {
    setCount(0);
  };
  let mul = () => {
    setCount(count * 3);
  };
  let changeName = ({ target: { value } }) => {
    console.log("value", value);

    setLowerName(value);
  };
  // const arr=["First","Second","Thrid","Fourth"];
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      {show && (
        <div>
          <p> Count - {count} </p>
          <button onClick={add}>+ </button> <button onClick={sub}>-</button>{" "}
          <button onClick={reset}>0</button> <button onClick={mul}>*</button>{" "}
          <br /> <br />
          <input type="text" onChange={changeName}></input>
          <h2>TYPE VALUE---{lowerName.toUpperCase()}</h2>
        </div>
      )}
      {/* {arr.map(a=><p key={a}>{a}</p>)} */}

      {/* {arr.map(a)=><></>} */}

      <section className="pricing py-5">
        <h1>NEW TASKING</h1>
        <div className="container">
          <div className="row">
            {PRICING.map((price, index) => (
              <Pricing key={index} {...price} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
