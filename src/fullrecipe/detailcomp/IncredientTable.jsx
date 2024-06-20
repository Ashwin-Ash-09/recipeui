import style from'./incredienttable.module.css'

function IngredientsTable ({meal}) {
    const ingredientMeasurementPairs = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measurement = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() && measurement && measurement.trim()) {
            ingredientMeasurementPairs.push({ ingredient, measurement });
        }
    }

    return (

        <table className={style.table} border="1">
                    <tr>
                        <th>Ingredient</th>
                        <th>Measurement</th>
                    </tr>
                    {ingredientMeasurementPairs.map((pair, index) => (
                        <tr key={index}>
                            <td>{pair.ingredient}</td>
                            <td>{pair.measurement}</td>
                        </tr>
                    ))}
            </table>
    );
};

export default IngredientsTable;