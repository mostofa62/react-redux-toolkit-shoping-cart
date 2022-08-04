import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
{ id:'p1', price:6, title: 'My first Book',description:'first book of every mans' },
{ id:'p2', price:8, title: 'Apple',description:'Apple in a case' },
{ id:'p3', price:5, title: 'Mango',description:'Mango in a tree' },
];

const Products = (props) => {
  ;
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map(product =>(
          <ProductItem
          key={product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.price}
        />
        )) }
        
      </ul>
    </section>
  );
};

export default Products;
