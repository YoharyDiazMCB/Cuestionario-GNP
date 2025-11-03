export const RemoveButton=({
    title, 
    onClick=null,
    disabled = false,  
    type = 'button'
})=>{
    return(
        <button 
        onClick={onClick} 
        disabled={disabled} 
        type={type} 
        className="mcb-red-btn mcb-flex mcb-gap-5 mcb-ai-c" 
        style={{textWrap:'nowrap'}}
        >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1.5L9 7.5L15 13.5L13.5 15L7.5 9L1.5 15L0 13.5L6 7.5L0 1.5L1.5 0L7.5 6L13.5 0L15 1.5Z" fill="white"/>
            </svg>
            {title}
        </button>
    );
}