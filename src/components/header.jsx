
import React, { useState } from "react";

function Header({ setPage, onSearch }) {
    const [search, setSearch] = useState("");

    React.useEffect(() => {
        if (onSearch) onSearch(search);
    }, [search, onSearch]);

    return (
        <header>
            <div className="logo">
                <h2>5aliha <span className="logo-span">3ala lah</span></h2>
            </div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="navbar">
                <nav>
                    <ul>
                        <button onClick={() => setPage("paanier")}>Panier</button>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;