
function List() {
    const fruits = [
                    {id: 1, name: "apple",calories: 95},
                    {id: 2, name: "orange",calories: 45},
                    {id: 3, name: "banana",calories: 105},
                    {id: 4, name: "coconut",calories: 159},
                    {id: 5, name: "pineapple",calories: 37}
                ]
    // localeCompare() method is used
    // fruits.sort((a,b) => a.name.localeCompare(b.name)) //Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) //Reverse alphabetical

    // fruits.sort((a,b) => a.calories-b.calories)//According to calories low to high
    // fruits.sort((a,b) => b.calories-a.calories) // High to low

    const lowCalFruit = fruits.filter((fruit) => fruit.calories<100);
    const highCalFruit = fruits.filter((fruit) => fruit.calories>=100);

    const printFruits = (fruits) =>{
        return(
            fruits.map(
                (fruit) => ( <li key={fruit.name}>
                                {fruit.name}: &nbsp;
                                <b>{fruit.calories}</b>
                            </li>
                            )
            )
        )
    }
    const lowCalListItems =   printFruits(lowCalFruit);
    const HighCalListItems =   printFruits(highCalFruit);

    return(
        <>
            <ol>{lowCalListItems}</ol>
            <ol>{HighCalListItems}</ol>
        </>
    )
}
export default List;