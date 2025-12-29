function orderCard() {
    const orderCard =
        <div>
            <h1>order summary</h1>
            <p>SubTotal: </p>
            <p>Delivry Fee: </p>
            <hr></hr>
            <p>Total: </p>
        </div>

    return (
        <div className='orderSection'>
            {orderCard}
        </div>
    )
}
export default orderCard;
