import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext"; 
import { useNavigate, Link } from "react-router-dom";
import VVVERSIONSLOGONEGROMOBILE from "../../img/VVVERSIONSLOGONEGROMOBILE.png";


export const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const {store, actions} = useContext(Context);

    const OnSubmit = async (data) => {

    const response = await actions.registerFunction(data)

    if (response) {navigate("/user/login")}
    else {alert ("No registro debidamente")}

        
    }
    return (<div className="d-flex">
         <div className=""><Link to="/"><img src={VVVERSIONSLOGONEGROMOBILE} className="back p-2"></img></Link></div>
        <div className="form p-3 ">

            <form onSubmit={handleSubmit(OnSubmit)}>
                
                <h2 className="text-center p-3 mt-3 text-white">REGISTER</h2>
                <div>
                    <div className="p-1">
                        <input className="form-control" type="text" {...register(`username`, {
                            required: true,
                            maxLength: 20
                        })} placeholder="Username">

                        </input>
                        {errors.username?.type === `required` && <p className="text-danger">el campo es requerido</p>}
                        {errors.username?.type === `maxLength` && <p className="text-danger">20 caracteres máximo</p>}
                    </div>
                    <div className="p-1">
                        <input className="form-control" type="email" {...register(`email`, {
                            required: true
                        })} placeholder="Email">
                        </input>
                        {errors.email?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <input className="form-control" type="password" {...register(`password`, {
                            required: true
                        })} placeholder="Set password">
                        </input>
                        {errors.password?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <input className="form-control" type="text" {...register(`artist_name`, {
                            required: true
                        })} placeholder="Name of band, Soloist, Artist Collective">
                        </input>
                        {errors.artist_name?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <select className="form-control text-dark text-opacity-50" {...register(`role`, {
                            required: true
                        })} placeholder="Role">
                            <option value="musicians"> Musicians/Producer
                            </option>
                            <option value="manager"> Manager/Representative
                            </option>
                            <option value="other"> Other
                            </option>
                        </select>
                    </div>
                    <div className="text-center p-3">
                        <input className="submit text-white" type="submit" value="submit"></input>
                    </div>
                </div>
            </form>
        </div>
        <div className="publicity container text-center">
            <div id="carouselExampleAutoplaying" className="carousel slide p-5 text-dark mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active"> 
                    <h3>"The best way to organize the creative process of your songs, standups, speeches"</h3>
                    </div>
                    <div className="carousel-item">
                        <h3>includes all musicians, producers, mixers, managers, with a single payment per year</h3>
                    </div>
                    <div className="carousel-item">
                        <h3>"enough of looking for the version that you liked the most in whatsapp, email, finally something new, vvversions is incredible"</h3>
                    </div>
                    <div className="carousel-item">
                        <h3>"The tool I didn't know I needed is now my best friend"</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};



