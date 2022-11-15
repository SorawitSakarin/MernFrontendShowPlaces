import React, { useRef } from "react";
import Card from "../components/UIElements/Card";
import Button from "../components/FormElements/Button";
import ReactToPrint from "react-to-print";
import {Policy} from "./Policy";
import QRCode from 'react-qr-code';
// const AboutUs = () => {
//   return (
//     <div>
//       <ReactToPrint
//         trigger={() => <button>Print this out!</button>}
//         content={() => this.componentRef}
//         documentTitle="Test Printer"
//         pageStyle="print"
//       />
      
//       <Policy ref={el => (this.componentRef = el)} />
//     </div>
// //   );
// // };

// export default AboutUs;
class AboutUs extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
              return <a href="#">Print this out!</a>;
            }}
            content={() => this.componentRef}
          />
          <Policy ref={el => (this.componentRef = el)} />


           <Card> 
          <QRCode value='0010003141'/>
          </Card>
        </div>
      );
    }
  }
// const AboutUs = () =>{
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => {
//             // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
//             // to the root node of the returned component as it will be overwritten.
//             return <a href="#">Print this out!</a>;
//           }}
//           content={() => this.componentRef}
//         />
//         <Policy ref={el => (this.componentRef = el)} />
//       </div>
//     );
//   }

  export default AboutUs;