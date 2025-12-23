function ProudactCard({ products }) { 
    if (!products || !products.length) return <div className="card-list-empty">No products available.</div>;
    return (
        <div className="card-list">
            {products.map(product => (
                <div key={product.id} className="card" onClick={() => addOrder(product)}>
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}
export default ProudactCard;