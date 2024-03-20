const Cake = ({cakeName, ingredients, price, rating}) => {

    return ( 
    <>
    <h3>{cakeName}</h3>
    <p>Ingredients: {ingredients.join(', ')}</p>
    <p> Price: {price}</p>
    <p> Rating: {rating}</p>
    <button>Sell Cake</button>
    </> 
    );
}
export default Cake;