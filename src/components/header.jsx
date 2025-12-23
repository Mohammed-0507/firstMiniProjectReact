
function Header({ setPage }) {
    return (
        <header>
            <div className="logo">
                <h2>5aliha <span className="logo-span">3ala lah</span></h2>
            </div>
            <div className="navbar">
                <nav>
                    <ul>
                        <button onClick={()=> setPage("ProudactCard")}>Proudact</button>
                        <button onClick={()=> setPage("skills")}>Panier</button>
                    </ul>
                </nav>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="search-button" type="submit">Search</button>
            </div>
        </header>
    );
}
export default Header;