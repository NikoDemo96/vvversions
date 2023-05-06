import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";


export const AddProject = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const OnSubmit = (songs) => {
        console.log(songs)

    }
    return (<div className="d-flex justify-content-center">
        
        <div className="form-group">
        <div className="addproject p-3 ">
            <form onSubmit={handleSubmit(OnSubmit)}>
                <h2 className="text-center text-white p-3 mt-3">Add Song</h2>
                <div>
                    <div className="p-1">
                        <input className="form-control" type="text" {...register(`songtitle`, {
                            required: true,
                            maxLength: 20
                        })} placeholder="song title">
                        </input>
                        {errors.username?.type === `required` && <p className="text-danger">el campo es requerido</p>}
                        {errors.username?.type === `maxLength` && <p className="text-danger">20 caracteres máximo</p>}
                    </div>
                    <div className="p-1">
                        <input className="form-control" type="file" {...register(`soundfile`, {
                            required: true
                        })} placeholder="Add Mp3/Wav file">
                        </input>
                        {errors.email?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <input className="form-control" type="file" {...register(`imagefile`, {
                            required: true
                        })} placeholder="Add Image">
                        </input>
                        {errors.password?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    <div className="p-1">
                        <textarea className="form-control" type="text" {...register(`description`, {
                            required: true
                        })} placeholder="add comments about this project">
                        </textarea>
                        {errors.artist_name?.type === `required` && <p className="text-danger">El Campo es Requerido</p>}
                    </div>
                    
                    <div className="text-center p-3">
                        <input className="submit text-white" type="submit" value="submit"></input>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
    );
};



