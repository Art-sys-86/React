function ItemList(props){
    return <li>{props.listItems}</li>
}

function ListItems(props){
    if(!props.list){
        return<div>Loading...</div>;
    }
    if(props.list.length === 0){
        return<div>There are no lists!</div>
    }
    return(
        <ul>
            {props.list.map((list) => {
                return <ItemList key = {list} list={list} />;
            }
        )}
        </ul>
    )
}

function ShoppingList(){
    const list = ["Ema", "Datsi", "Kewa", "Semchung"];

    return(
        <div>
            <h1>Items: </h1>
            <ListItems list={list} />
        </div>
    )
}

export default ShoppingList;