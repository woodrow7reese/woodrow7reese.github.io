import { useState } from "react";
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
