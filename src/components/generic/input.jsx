export default function Input({ containerClass, labelText, inputClass, name, placeholder, type, required }) {
    return (
        // Wrapper div for styling and layout
        <div className={containerClass}>
            
            {/* Label wrapping the input field */}
            <label className="input-container">
                {labelText}
                
                {/* Input Field */}
                <input 
                    className={inputClass} 
                    name={name} 
                    placeholder={placeholder} 
                    type={type}
                    required
                />
            </label>
        </div>
    );
}