import Header from '../Header'
import CartListView from '../CartListView'

// first we import the cartcontext from the react context
import CartContext from '../../context/CartContext'

// to show the empty cart list first we import the emptycartview
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value // we access the cartList from react context

      // now the condition is if the cartlist length is 0 then show emptycartview else show the product item
      const showEmptyView = cartList.length === 0

      return (
        <>
          <Header />
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
