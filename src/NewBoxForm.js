import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewBoxForm = ({ createBox }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        createBox({ ...formData, id: uuidv4() })
        setFormData(INITIAL_STATE);
        
    }
    
    return (
        <> 
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="width">Width:</label>
                <input 
                    id="width"
                    name="width"
                    type="text" 
                    onChange={handleChange}
                    placeholder="Width"
                    value={formData.width}
                />
                </div>
                <div>
                <label htmlFor="height">Height:</label>
                <input 
                    id="height"
                    name="height"
                    type="text" 
                    onChange={handleChange}
                    placeholder="Height"
                    value={formData.height}
                />
                </div>
                <div>
                <label htmlFor="backgroundColor">Background Color:</label>
                <input 
                    id="backgroundColor"
                    name="backgroundColor"
                    type="text" 
                    onChange={handleChange}
                    placeholder="Background Color"
                    value={formData.backgroundColor}
                />
                </div>
                <div>
                <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default NewBoxForm;