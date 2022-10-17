// you can use this class componets to get this.prop must use the render

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //state is read only
//     this.state = {
//       count: 0,
//       lowerName:'kumari'
//     };
//   }
//   // handleChange = (name) => {
//   //   console.log(name);
//   // };
//   //   change =({target:{name,value}}) =>{
//   //    console.log(value);
//   //   this.setState({value})
//   //  }
//   // seeState = () => {
//   //   console.log(this.state);
//   // };

//   // handlePress = ({ target: { value } }) => {
//   //   console.log("typiing", value);
//   //   this.setState({ value });
//   // };


//   add=()=>{this.setState({count: this.state.count + 1})}
//   sub=()=>{this.setState({count: this.state.count - 1})}
//   reset=()=>{this.setState( {count:0})}
//   mul=()=>{this.setState({count:this.state.count *3})}

// changeName=({target:{value}})=>{
//   console.log("value",value  );
//   this.setState({lowerName:value})
// }


//   render() {
//     console.log("render 1");
//     return (
//       // <section className="pricing py-5">
//       //   <h1>{this.props.name}</h1>

//       //   <input
//       //     type="text"
//       //     value={this.state.value}
//       //     onChange={this.handlePress}
//       //   ></input>
//       //   <h2>TYPE VALUE---{this.state.value}</h2>

//       //   <button onClick={this.seeState}>see State</button>
//       //   <div className="container">
//       //     <div className="row">
//       //       {PRICING.map((price) => (
//       //         <Pricing {...price} handleChange={this.handleChange} />
//       //       ))}
//       //     </div>
//       //   </div>
//       // </section> 
//       <div>
//         <p> Count -  {this.state.count} </p>
//         <button onClick={this.add}>+ </button>{" "}
//         <button onClick={this.sub}>-</button>{" "}
//         <button onClick={this.reset}>0</button>{" "}
//         <button onClick={this.mul}>mul</button>{" "}
 
//  <br/> <br/>
//    <input
//           type="text"
//           onChange={this.changeName}
//         ></input>
//         <h2>TYPE VALUE---{this.state.lowerName.toUpperCase()}</h2>

//       </div>
//     );
//   }
// }