import React from "react";
import Product from './Product';

class ProductList extends React.Component {         
    render() {
        const products = [{id: '123', name: 'code monkey', price: 1.99, imageUrl: 'https://media.licdn.com/dms/image/C5603AQHMjkmn5O_XhQ/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=U3Z26THgb0kDRbWuAMQFSgzjbAO1nGGyvd1JDGOJm68'},
                          {id: '999', name: 'cake baker', price: 9.99, imageUrl: 'https://www.theanfieldwrap.com/uploads/2015/03/PA-5783708-e1473761136269.jpg'}];

        const productlist = products.map(element => {
            return (<div className='container'>
                        <div className="row">
                            <div className="col-lg-2">
                                <Product name={element.name}
                                  key={element.id}
                                  imageUrl={element.imageUrl}
                                  price={element.price}>
                                </Product>
                            </div>
                         </div>
                    </div>)
        });   

      return (<div>{productlist}</div>);
    };
  };

  export default ProductList;
