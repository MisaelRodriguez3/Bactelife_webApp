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
  const { createProduct, getProduct, updateProduct } = useAdmin();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(()=>{
    async function load(){
      if(params.id){
        const product = await getProduct(params.id)
        console.log(product)
        setValue('name', product.name)
        setValue('description', product.description)
        setValue('price', product.price)
        setValue('pounds_per_yard', product.pounds_per_yard)
        setValue('quarts_per_pound', product.quarts_per_pound)
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
        <Sidebar />
        <div className="prueba">
          <div className="case">
            <div className="caseTitleContainer">
              <h1 className="caseTitle">Edit product</h1>
            </div>

            <div className="caseContainer">
              <div className="caseUpdate">
                <span className="caseUpdateTitle">Edit</span>
                <form onSubmit={onSubmit} className="caseUpdateForm">
                  <div className="caseUpdateLeft">
                    <div className="caseUpdateItem">
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder="name" {...register("name")}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>Description</label>
                      <input
                        type="text"
                        placeholder="Description" {...register("description")}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>Price</label>
                      <input
                        type="number"
                        placeholder="price" {...register("price", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>pounds_per_yard</label>
                      <input
                        type="number"
                        placeholder="pounds_per_yard" {...register("pounds_per_yard", { valueAsNumber: true })}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>ounces_per_pound</label>
                      <input
                        type="number"
                        placeholder="quarts_per_pound" {...register("quarts_per_pound", { valueAsNumber: true })}
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