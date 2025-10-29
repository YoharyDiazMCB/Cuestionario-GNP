export const AddButton=({
    title, 
    onClick,
    disabled = false,  
    type = 'button'
})=>{
    return(
        <button 
        onClick={onClick} 
        disabled={disabled} 
        type={type} 
        className="mcb-green-btn mcb-flex mcb-gap-5 mcb-ai-c" 
        style={{textWrap:'nowrap'}}
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57143 11.4286H0V8.57143H8.57143V0H11.4286V8.57143H20V11.4286H11.4286V20H8.57143V11.4286Z" fill="white"/>
            </svg>
            {title}
        </button>
    );
}