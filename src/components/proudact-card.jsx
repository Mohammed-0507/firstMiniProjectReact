import { useState } from "react";

function ProudactCard({ products }) {
    const [order, setOrder] = useState(null);
    const [quantity, setQuantity] = useState(0);

    if (!products || !products.length) return <div className="card-list-empty">No products available.</div>;

    const addOrder = (product) => {
        if (order && order.id === product.id) {
            setQuantity(quantity + 1);
        } else {
            setOrder(product);
            setQuantity(1);
        }
    };

    const proudactItem = products.map(product => (
        <div key={product.id} className="card" onClick={() => addOrder(product)}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    ));

    let orderCard = null;
    if (order) {
        // Remove $ and convert price to number
        const priceNum = Number(order.price.replace("$", ""));
        const totalPrice = (priceNum * quantity).toFixed(2);
        orderCard = (
            <div className="order-card">
                <h3>Order Summary</h3>
                <p>Item: {order.name}</p>
                <p>Quantity: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
            </div>
        );
    }

    return (
        <div className="card-list">
            {proudactItem}
            {orderCard}
        </div>
    );
}
export default ProudactCard;