import  { useForm } from "react-hook-form"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./css/edit.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
import { useEffect } from "react";

export default function GetProduct() {
  document.title = 'GetProduct'
  const { register, handleSubmit, setValue } = useForm();
  const { createProduct, getProduct, updateProduct, sidebarVisible } = useAdmin();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(()=>{
    async function load(){
      if(params.id){
        const product = await getProduct(params.id)
        console.log(product)
        setValue('Gal_Product', product.Gal_Product)
        setValue('Oz_Product', product.Oz_Product)
        setValue('ml_Product', product.ml_Product)
        setValue('Gal_Water', product.Gal_Water)
        setValue('L_Water', product.L_Water)
        setValue('Acre', product.Acre)
        setValue('Ha', product.Ha)
        setValue('Price', product.Price)



      }
    }
    load()
  },[])

  const onSubmit = handleSubmit((data)=> {
    console.log(data)
    if(params.id){
      console.log(params.id)

      updateProduct(params.id, data)
    } else {
      createProduct(data)
      console.log(data)
    }
    navigate("/productList")

  } )

  return (
    <>
      <Topbar />
      <div className="container">
          {sidebarVisible && <Sidebar />}
          <div className={sidebarVisible ? 'prueba' : 'prueba-full'}>
          <div className="case">
            <div className="caseTitleContainer">
              <h1 className="caseTitle">{params.id ? "Edit product" : "Create product"}</h1>
            </div>

            <div className="caseContainer">
              <div className="caseUpdate">
                <span className="caseUpdateTitle">{params.id ? "Edit" : "Create"}</span>
                <form onSubmit={onSubmit} className="caseUpdateForm">
                  <div className="caseUpdateLeft">
                    <div className="caseUpdateItem">
                      <label>Gal_Product</label>
                      <input
                        type="number"
                        placeholder="Gal_Product" {...register("Gal_Product", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>Oz_Product</label>
                      <input
                        type="number"
                        placeholder="Oz_Product" {...register("Oz_Product", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>ml_Product</label>
                      <input
                        type="number"
                        placeholder="ml_Product" {...register("ml_Product", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>Gal_Water</label>
                      <input
                        type="number"
                        placeholder="Gal_Water" {...register("Gal_Water", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>L_Water</label>
                      <input
                        type="number"
                        placeholder="L_Water" {...register("L_Water", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>Acre</label>
                      <input
                        type="number"
                        placeholder="Acre" {...register("Acre", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>Ha</label>
                      <input
                        type="number"
                        placeholder="Ha" {...register("Ha", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>Price</label>
                      <input
                        type="number"
                        placeholder="Price" {...register("Price", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                  </div>
                  <div className="caseUpdateRight">
                    <button className="caseUpdateButton">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}