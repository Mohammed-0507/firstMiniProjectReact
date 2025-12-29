//import order from './order.jsx/';
import React,{useState} from "react";
function ProudactCard({ products }) {


    if (!products || !products.length) return <div className="card-list-empty">No products available.</div>;
    //var addOrder = (product)=>{console.log(product.name)};
    const [quntity,setQuntity] = useState(0);
    const [orders,setOrders] = useState([]);

    const delveryFee = 10;

    //const orderHundler = (product) => {const order = {name : product.name,price : product.price, quntity : quntity + 1};setOrders([...orders, order]);return <div><p>{order.name}</p><p>{order.price}</p></div>}
    const orderHundler = (product) => {
        setOrders(prevOrder => {
            const existing = prevOrder.find(o => o.id === product.id);
            if (existing) {
                return prevOrder.map(o =>
                    o.id === product.id ? { ...o, quntity: o.quntity + 1 } : o
                );
            }
            return [
                ...prevOrder,
                { id: product.id, name: product.name, price: Number(product.price), img: product.img ,quntity: 1 }
            ];
        });
    }
    const subtotal = orders.reduce((sum,o)=>{return sum + o.price * o.quntity},0);
    const total = subtotal + delveryFee;

    function increaseQty(id) {
    setOrders(prev =>
        prev.map(order =>
            order.id === id
                ? { ...order, quntity: order.quntity + 1 }
                : order
        )
    );
}

function decreaseQty(id) {
    setOrders(prev =>
        prev
            .map(order =>
                order.id === id
                    ? { ...order, quntity: order.quntity - 1 }
                    : order
            )
        .filter(order => order.quntity > 0)
  );
}



    //console.log(total)
    
    //const order = ()=>{setQuntity({name : product.name,price : product.price, quntity : quntity + 1})};

    // function setQuntity(){
    //     console
    // }

    
    // function setQuntity(order){
    //     console.log(order.name,order.price,order.quntity)
    // }
    //console.log(order.name)
    const proudactItem = products.map(product => (
        <div key={product.id} className="card" onClick={()=>orderHundler(product)}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    ));

    const orderCard = (
        <div>
            <h1>Order Summary</h1>
            {orders.length === 0 ? (
                <p>No items in order.</p>
            ) : (
                orders.map(order => (
                    <div key={order.id} className="order-item">
                        <img src={order.img} alt={order.name} style={{ width: '50px', height: '50px' }} />
                        <p>{order.name}</p>
                        <div className="qty-controls">
                            <button onClick={() => decreaseQty(order.id)}>-</button>
                            <span>{order.quntity}</span>
                            <button onClick={() => increaseQty(order.id)}>+</button>
                        </div>
                        <span>{order.price} DH</span>
                    </div>
                ))
            )}
            <p>SubTotal: {subtotal} DH</p>
            <p>Delivry Fee: {delveryFee} DH</p>
            <hr />
            <p>Total: {total} DH</p>
        </div>
    );

    //     const item = orders.map(order => (
    //     <div key={order.id} className="card">
    //         <p>{order.name}</p>
    //         <p>{order.price}</p>
    //     </div>
    // ));




        return (
            <>
                <div className="card-list">
                    {proudactItem}
                    {orderCard}
                </div>
            </>

        );
}
export default ProudactCard;