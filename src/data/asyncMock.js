export const productos = [
    {
        id: 1,
        nombre:"Remera Football",
        precio:17500,
        categoria:"Remeras",
        stock:"5",
        descripcion:"Remera Overzize color crema con estampa en el pecho",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgJtBy-QyXi1daEdhe_0WdGSg5IQlJ30_m8AiiWNrJab3StVcKvU8b_G86iVhSH4Gy7I&usqp=CAU"/* "../img/remera champions.png" */,
    },
    {
        id: 2,
        nombre: "Buzo Brooklyn",
        precio: 23000,
        categoria: "Buzos",
        stock: "6",
        descripcion: "Buzo Overzize Blanco estampado",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTq2pprFzs3RAj0hYxAGu5qq96Y5NT5h1W33muXi7UCa-QXCBJPe4S1TtudSq096CE4aY&usqp=CAU",
    },
    {
        id: 3,
        nombre: "Remera Heaven",
        precio: 16000,
        categoria: "Remeras",
        stock: "10",
        descripcion: "Remera overzize color blanco con estampa en la espalda",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwNKd9ZEz_XbVna-iPovq0vshG7JGKMzFpEKOKf3yeTi9zqMem2BUeRAOCXOmulcyP2GA&usqp=CAU",
    },
    {
        id: 4,
        nombre: "Buzo BS23",
        precio: 21500,
        categoria: "Buzos",
        stock: "12",
        descripcion: "Buzo cuello en U color crema",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ecJvUYvnV6GQpGLfxma44v93lbrpSRtExImj5HNYx8wMuwRMkjbTvy_9eEkOzQGVJCY&usqp=CAU",
    },
    {
        id: 5,
        nombre: "Buzo Shato",
        precio: 23000,
        categoria: "Buzos",
        stock: "6",
        descripcion: "Buzo Overzize Blanco estampado",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmLMO7cQd24n8Bs7urGA2A1CEJBMlqP-vxA&s",
    },
/*    {
        id: 6,
        nombre: "",
        precio: ,
        categoria: "",
        stock: "",
        descripcion: "",
        img: "",
    }, */
];



export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos);
        },2000);
    });
};

export const getProductsByCategory = (category) =>{
    return new Promise ((resolve)=>{
        const productosFiltrados = productos.filter(producto=>
            producto.categoria === category
        );
        setTimeout(()=>{
            resolve(productosFiltrados);
        },2000);
    });
};

export const getProductsById = (id) =>{
    return new Promise ((resolve) =>{
        const showProduct = productos.find((productos) => productos.id === parseInt(id))
        setTimeout(() => {
            resolve(showProduct);
        }, 2000);
    });
};