import  { useForm } from "react-hook-form"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./css/edit.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";

export default function GetAdmin() {
  document.title = 'GetAdmin'
  const { register, handleSubmit } = useForm();
  const { createAdmin, updateAdmin } = useAdmin();
  const navigate = useNavigate();
  const params = useParams();

  
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
        <Sidebar />
        <div className="prueba">
          <div className="case">
            <div className="caseTitleContainer">
              <h1 className="caseTitle">Edit admin</h1>
            </div>

            <div className="caseContainer">
              <div className="caseUpdate">
                <span className="caseUpdateTitle">Edit</span>
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
                        type="text"
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