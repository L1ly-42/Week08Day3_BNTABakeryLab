const Cake = ({cakeName, ingredients, price, rating, count, onButtonClick}) => {
    const handleRevenue = ()=> {
        let revenue = price;
        onButtonClick(count + revenue)
        return 
    }

    return ( 
    <>
    <h3>{cakeName}</h3>
    <p>Ingredients: {ingredients.join(', ')}</p>
    <p> Price: {price}</p>
    <p> Rating: {rating}</p>
    <button onClick={handleRevenue}>Sell Cake</button>
    </> 
    );
}
export default Cake;