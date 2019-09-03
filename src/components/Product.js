import React from "react";

class Product extends React.Component {

     

    render() {

        const style = { width: "18rem" };

        console.log(this.props)
      return (
        <div className="card" style={style}>
        <img className="card-img-top" src={this.props.imageUrl} />
        <div className="card-body">
          <h5 className="card-title dark">{this.props.name}</h5>
          <p className="card-text dark">
           I'm the driver, I'm the winner.
          </p>
          <a href="#" className="btn btn-primary"> hire </a>

          <a href="#" className="btn btn-primary"> terminate </a>
          <input type="text" id="little" defaultValue="10" />
        </div>
      </div>
        );
    }
}

export default Product;