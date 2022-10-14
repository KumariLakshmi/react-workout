/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Pricing from "./Pricing";
import PRICING from './pricing.json';

function App() {
  // [OR ] using json file also
  // const pricing = 
  // [
  //   {
  //     name: "Free",
  //     cost: "0",
  //     currency: "$",
  //     pricePer: "month",
  //     // features: {
  //     //   isSingleUser:true,
  //     //   is5GBStorage : true,
  //     //   isUnlimitedPublicProjects: true,
  //     //   communityAccess: true,
  //     //   unlimitedPrivateProjects:true,
  //     //   dedicatedPhoneSupport:false,
  //     //   freeSubdomain:false,
  //     //   monthlyStatusReports:false

  //     // }
  //     features: [
  //       {
  //         name: "singleUser",
  //         access: true,
  //       },
  //       {
  //         name: "is5GBStorage",
  //         access: true,
  //       },
  //       {
  //         name: "isUnlimitedPublicProjects",
  //         access: true,
  //       },
  //       {
  //         name: "communityAccess",
  //         access: true,
  //       },
  //       {
  //         name: "unlimitedPrivateProjects",
  //         access: false,
  //       },
  //       {
  //         name: "Dedicated Phone Support",
  //         access: false,
  //       },
  //       {
  //         name: "Free Subdomain",
  //         access: false,
  //       },
  //       {
  //         name: "Monthly Status Reports",
  //         access: false,
  //       },
  //       {
  //         name: "Yearly Status Reports",
  //         access: true,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Plus",
  //     cost: "9",
  //     currency: "$",
  //     pricePer: "month",
  //     // features: {
  //     //   is5Users: true,
  //     //   is50GBStorage: true,
  //     //   isUnlimitedPublicProjects: true,
  //     //   communityAccess: true,
  //     //   unlimitedPrivateProjects: true,
  //     //   dedicatedPhoneSupport: true,
  //     //   freeSubdomain: true,
  //     //   monthlyStatusReports: false,
  //     // },
  //     features: [
  //       {
  //         name: "singleUser",
  //         access: true,
  //       },
  //       {
  //         name: "is5GBStorage",
  //         access: true,
  //       },
  //       {
  //         name: "isUnlimitedPublicProjects",
  //         access: true,
  //       },
  //       {
  //         name: "communityAccess",
  //         access: true,
  //       },
  //       {
  //         name: "unlimitedPrivateProjects",
  //         access: true,
  //       },
  //       {
  //         name: "Dedicated Phone Support",
  //         access: true,
  //       },
  //       {
  //         name: "Free Subdomain",
  //         access: true,
  //       },
  //       {
  //         name: "Monthly Status Reports",
  //         access: false,
  //       },
  //       {
  //         name: "Yearly Status Reports",
  //         access: true,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Pro",
  //     cost: "49",
  //     currency: "$",
  //     pricePer: "month",
  //     // features: {
  //     //   unlimitedUsers: true,
  //     //   is150GBStorage: true,
  //     //   isUnlimitedPublicProjects: true,
  //     //   communityAccess: true,
  //     //   unlimitedPrivateProjects: true,
  //     //   dedicatedPhoneSupport: true,
  //     //   freeSubdomain: true,
  //     //   monthlyStatusReports: true,
  //     // },
  //     features: [
  //       {
  //         name: "singleUser",
  //         access: true,
  //       },
  //       {
  //         name: "is5GBStorage",
  //         access: true,
  //       },
  //       {
  //         name: "isUnlimitedPublicProjects",
  //         access: true,
  //       },
  //       {
  //         name: "communityAccess",
  //         access: true,
  //       },
  //       {
  //         name: "unlimitedPrivateProjects",
  //         access: true,
  //       },
  //       {
  //         name: "Dedicated Phone Support",
  //         access: true,
  //       },
  //       {
  //         name: "Free Subdomain",
  //         access: true,
  //       },
  //       {
  //         name: "Monthly Status Reports",
  //         access: true,
  //       },
  //       {
  //         name: "Yearly Status Reports",
  //         access: false,
  //       },
  //     ],
  //   },
  // ];
  
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {PRICING.map((price) => (
            <Pricing {...price} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
