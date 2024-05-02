import { useState } from "react";
import up from './../../photos/thumbs/thumbs-up.svg'
import down from './../../photos/thumbs/thumbs-down.svg'
import DifficultySelector from "../../components/assets/DifficultySelector"
import GymRatingSelector from "../../components/assets/GymRatingSelector"
import LinkUploader from "../../components/assets/LinkUploader"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/ReactToastify.css'
const EditSessionForm = (
    {
        sessionId, 
        session, 
        onClose, 
        userId, 
        onSave
    }) => {
    const [formData, setFormData] = useState(session)
    
    return (
        <div className="bg-inherit pb-12">
            {JSON.stringify(formData)}

            

        </div>
    );
};

export default EditSessionForm
