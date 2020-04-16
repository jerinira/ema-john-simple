import React from 'react';

const Inventory = () => {

    const handleInventory=()=>{
        // const product = fakeData[0];
        // console.log('before post',product);

        // fetch('http://localhost:4200/addProduct',{
        //     method: 'POST', 
        //     headers: {'Content-Type': 'application/json'}, 
        //     body: JSON.stringify(fakeData)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log('post successful', data)
        // })
    }
    return (
        <div>
            <h1>Inventory Coming Soon</h1>
            <button onClick={handleInventory}>Add Product</button>
        </div>
    );
};

export default Inventory;