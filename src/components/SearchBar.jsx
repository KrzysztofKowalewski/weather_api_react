function SearchBar({ city, setCity, onSearch}){
    return (
        <div>
            <input
                type="text"
                placeholder="Wpisz nazwę miasta"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={onSearch}>Szukaj</button>    
        </div>
    );
}

export default SearchBar;