/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Pricing from "./Pricing";
import PRICING from "./pricing.json";
// app componets is parent inside to pricing compontes is child
// passing data from parent to child using props && passing data from child to parent using props but assing function

// function App(props) {
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
//       <div className="container">
//         <div className="row">
//         <h1>{props.name}</h1>
//           {PRICING.map((price) => (
//             <Pricing {...price} handleChange={handleChange} change={change} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// you can use this class componets to get this.prop must use the render

class App extends React.Component {
  constructor(props) {
    super(props);
    //state is read only
    this.state = {
      value: "kumari",
    };
  }
  handleChange = (name) => {
    console.log(name);
  };
  //   change =({target:{name,value}}) =>{
  //    console.log(value);
  //   this.setState({value})
  //  }
  seeState = () => {
    console.log(this.state);
  };

  handlePress = ({ target: { value } }) => {
    console.log("typiing", value);
    this.setState({ value });
  };
  render() {
    console.log("render 1");
    return (
      <section className="pricing py-5">
        <h1>{this.props.name}</h1>

        <input
          type="text"
          value={this.state.value}
          onChange={this.handlePress}
        ></input>
        <h2>TYPE VALUE---{this.state.value}</h2>

        <button onClick={this.seeState}>see State</button>
        <div className="container">
          <div className="row">
            {PRICING.map((price) => (
              <Pricing {...price} handleChange={this.handleChange} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default App;
