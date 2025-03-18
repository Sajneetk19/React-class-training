export function ProductList() {
  const products = [
    { title: "cabbage", id: 1 },
    { title: "garlic", id: 2 },
    { title: "apple", id: 3 },
  ];

  return (
    <>
      <h1>Product list:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}



  // to print only title here then,
  // const listItems = products.map((product) => (
  //   <li key={product.id}>{product.title}</li>
  // ));

  // console.log(listItems);

  // also lenghty method is-
  // const listItems=[
  //     <li key={products[0].id}>{products[0].title}</li>,
  //     <li key={products[1].id}>{products[1].title}</li>,
  //    <li key={products[2].id}>{products[2].title}</li>,

  // ]

  // return (
  //   <>
  //     <h1>Product list:</h1>
  //     <ol>{listItems}</ol>
  //      </>
  // );

  // const listItems=[];
  // products.forEach((products)=>{
  //     listItems.push(<li key={products.id}>{products.title}</li>)
  // })

  // return<>
  // <h1>Product list:</h1>
  // <ul>{listItems}</ul>

  // </>

