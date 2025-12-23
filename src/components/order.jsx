function Order({ order }) { 
    return (
        
            <div className="order-card">
                <h3>Order Summary</h3>
                <p>Item: {order.name}</p>
                <p>Quantity: 2</p>
                <p>Total Price: $39.98</p>
            </div>
    );
}