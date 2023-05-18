import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import { useNavigate, Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showLoadingNotification } from "../utils/toastifyNotifications";


export const AddSong = () => {
    const params = useParams();
    const navigate = useNavigate()

    const {store, actions} = useContext(Context);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const OnSubmit = async (songs) => {
        const id = toast.loading("Uploading file");
        const isCreated = await actions.createSong(songs, params.id);
        if (isCreated) {
            showLoadingNotification(id, "success", "New revision created");
            navigate(`/revisions/${params.id}`);
            return;
        }
        showLoadingNotification(id, "error", "New revision could not be created. Please try again.");
    }
    
    return (
    <div>
        <div><div className=""><Link to="/projectinput"><p className="ms-4 mt-3"><i className="fas fa-backward text-dark mt-3"></i></p></Link></div> </div>
    <div className="d-flex justify-content-center ">   
        <div className="form-group mb-5">
        <div className="addproject p-3 ">
            <form onSubmit={handleSubmit(OnSubmit)}>
                <h2 className="text-center text-white p-3 ">Add Files</h2>
                <div>
                    <div className="p-1">
                        <label className="text-white p-1">Add song</label>
                        <input className="form-control" type="file" {...register(`soundfile`, {
                            required: true
                        })} placeholder="Add Mp3/Wav file">
                            
                            
                        </input>
                        {errors.email?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <label className="text-white p-1">Add image</label>
                        <input className="form-control" type="file" {...register(`imagefile`, {
                            required: true
                        })} placeholder="Add Image">
                        </input>
                        {errors.password?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <textarea className="form-control mt-1 mb-1" type="text" {...register(`description`, {
                            required: true
                        })} placeholder="add comments about this project">
                        </textarea>
                        {errors.artist_name?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <input className="form-control" type="text" {...register(`artist`, {
                            required: true
                        })} placeholder="add artist">
                        </input>
                        {errors.artist_name?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <input className="form-control" type="text" {...register(`gender`, {
                            required: true
                        })} placeholder="music genre">
                        </input>
                        {errors.artist_name?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <input className="form-control" type="text" {...register(`title`, {
                            required: true
                        })} placeholder="title">
                        </input>
                    </div>
                       
                    <div className="text-center p-1 mb-3">

                        <input className="submit text-white" type="submit" value="submit"></input>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
   
    </div>
    );
};



