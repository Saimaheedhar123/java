
import ProductItem from "./components/product-item";
//const dummyProductData=['product 1','Product 2','Product 3'];
import "./components/style.css";
function productList({name,city,listOfProducts})
{


    const flag=false;

//function renderTextBlock(getFlag)
//{
//return (getFlag ? <h4>Name is {name},he/she is belongs to {city}
       // </h4>:<h4>Hello World</h4>
//);
//}

    //console.log(props);
    //const {name,city}=props;


//const renderTextBlock=flag?<h4>ame is {name},he/she is belongs to {city}
//</h4>:<h4>Hello World</h4>
let renderTextBlock=null;

if(flag)
{
    renderTextBlock=    <h4>Name is {name},he/she is belongs to {city}
</h4>
}
else
{
renderTextBlock=<h4>Hello World</h4>
}
return(
    <div>
       <h3 className="title"> Ecommerce Project</h3>
       {renderTextBlock}
        <ul>
            {listOfProducts.map((item,index) => (
               // <li key={index}>{item}</li>
               <ProductItem singleProductItem={item} key={index}/>
                    
               ))}
        </ul>
    </div>
);
}
         


export default productList;