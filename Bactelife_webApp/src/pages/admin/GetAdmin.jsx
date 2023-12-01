import  { useForm } from "react-hook-form"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./css/edit.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
import { useEffect } from "react";

export default function GetAdmin() {
  document.title = 'GetAdmin'
  const { register, handleSubmit } = useForm();
  const { createAdmin, updateAdmin, sidebarVisible } = useAdmin();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(()=>{},[])

  
  const onSubmit = handleSubmit((data)=> {
    console.log(data)
    if(params.id){
      console.log(params.id)

      updateAdmin(params.id, data)
    } else {
      createAdmin(data)
      console.log(data)
    }
    navigate("/adminList")

  } )

  return (
    <>
      <Topbar />
      <div className="container">
          {sidebarVisible && <Sidebar />}
        <div className={sidebarVisible ? 'prueba' : 'prueba-full'}>
          <div className="case">
            <div className="caseTitleContainer">
              <h1 className="caseTitle">{params.id ? "Edit admin" : "Create admin"}</h1>
            </div>

            <div className="caseContainer">
              <div className="caseUpdate">
                <span className="caseUpdateTitle">{params.id ? "Edit" : "Create"}</span>
                <form onSubmit={onSubmit} className="caseUpdateForm">
                  <div className="caseUpdateLeft">
                    <div className="caseUpdateItem">
                      <label>User</label>
                      <input
                        type="text"
                        placeholder="user" {...register("user")}
                        className="caseUpdateInput"
                      />
                    </div>
                    <div className="caseUpdateItem">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password" {...register("password")}
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