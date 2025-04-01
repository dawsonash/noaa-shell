import PersonAddIcon from '@mui/icons-material/PersonAdd';


const InviteFriendsButton = () => {
    return (
<button style={{
    width: '40%', 
    margin: 16, 
    height: '80%', 
    padding: '5%', 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    display: 'inline-flex'
}}>
    <span style={{ 
        display: 'flex', 
        alignItems: 'center',
        color: 'black', 
        fontSize: 'clamp(12px, 2vw, 22px)',  // Shrinks dynamically
        fontFamily: 'Kanit', 
        fontWeight: '400', 
        whiteSpace: 'nowrap', // Prevents text from wrapping
        overflow: 'hidden'
    }}> 
        Invite Friends
        <PersonAddIcon />
    </span>
</button>
    )
}
export default InviteFriendsButton;