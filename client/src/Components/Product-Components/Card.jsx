import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditProductForm from '../Product-Components/EditProductForm';
import '../../App.css';
import DeleteDialog from './DeleteDialog';
class Card extends Component {
  render() {
    const {
      product,
      deleteItem,
      handleIsisEditable,
      isEditable,
      handleEditItemSubmit,
      addToCart,
      isLogged,
      editableProduct,
      handleOnEditProductChange,
      prev_price,
      new_price,
      quantity,
      product_image,
      name,
      category,
      toggleShow,
      show,
    } = this.props;
    return (
      <div className="card">
        <img src={product.product_image} alt="Product" />
        <h5 id={product.name}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h5>
        <div className="prices">
          <p id={product.new_price}>{product.new_price} $</p>
          <p className="prev-price" id={product.prev_price}>
            {product.prev_price} $
          </p>
        </div>
        {isLogged ? (
          <>
            <button
              id={product.id}
              className="delete"
              onClick={() => toggleShow(product.id)}
            >
              delete
            </button>
            <DeleteDialog
              toggleShow={toggleShow}
              show={show}
              deleteItem={deleteItem}
            />
            <button
              className="edit"
              id={product.id}
              onClick={(e) => handleIsisEditable(e)}
            >
              edit
            </button>
          </>
        ) : (
          <button onClick={(e) => addToCart(product.id)}>Add To Cart</button>
        )}

        {isEditable[0] && isEditable[1] === product.id ? (
          <EditProductForm
            id={product.id}
            handleEditItemSubmit={handleEditItemSubmit}
            handleIsisEditable={handleIsisEditable}
            editableProduct={editableProduct}
            handleOnEditProductChange={handleOnEditProductChange}
            category={category}
            name={name}
            prev_price={prev_price}
            new_price={new_price}
            quantity={quantity}
            product_image={product_image}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Card;
