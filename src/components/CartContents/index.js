import React from 'react'
import CartContext from 'context/CartContext';
import {CartItem, CartHeader, CartFooter} from './styles';

export function CartContents() {
    const {checkout} = React.useContext(CartContext);

    return (
        <section>
            <h1>Your Cart</h1>
            <CartHeader>
                <div>Product</div>
                <div>Unit Price</div>
                <div>Quantity</div>
                <div>Amount</div>
            </CartHeader>
            {checkout?.lineItems?.map(item => {
                return (
                    <CartItem key={item.variant.id}>
                        <div>
                            <div>
                                {item.title}
                            </div>
                            <div>
                                {item.variant.title}
                            </div>
                        </div>
                        <div>
                            ${item.variant.price}
                        </div>
                        <div>
                            {item.quantity}
                        </div>
                        <div>
                            ${(item.quantity * item.variant.price).toFixed(2)}
                        </div>
                    </CartItem>
                );
            })}
            <CartFooter>
                <div />
                <div><strong>Total: </strong>${checkout.totalPrice}</div>
            </CartFooter>
        </section>
    )
}