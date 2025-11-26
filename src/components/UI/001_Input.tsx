interface InputProps {
    type?: "text" | "password" | "email" | "number"; // Rendre optionnel avec '?' et limiter les types possibles
    name: string;
    id: string;
    placeholder?: string;
    labelFor: string;
    labelText: string;
    isRequired?: boolean;
    inputClass: string;
}

export default function Input01({
    type="text", 
    name, 
    id,
    placeholder,
    labelFor,
    labelText,
    isRequired = true,
    inputClass
    }:InputProps){
    return(
        <>
            <div className="flex flex-col">
                <label htmlFor={labelFor}>
                    {labelText}
                    {
                        isRequired && (
                            <span className="text-red-700">    *</span>
                        )
                    }
                </label>
                <input 
                    type={type} 
                    name={name} 
                    id={id}
                    placeholder={placeholder}
                    className={`border border-blue-300 p-3 rounded-lg outline-none duration-200 focus:ring-1 focus:ring-blue-400 shadow`}
                />
            </div>
        
        </>
    )
}