import AssignmentIcon from '@mui/icons-material/Assignment';



const RegisterButton = () => {
    return (
        <button style={{
            width: '50%', 
            margin: 16, 
            height: '100%', 
            paddingLeft: '2em', 
            paddingRight: '2em', 
            paddingTop: '1em', 
            paddingBottom: '1em', 
            background: '#FA9F42', 
            borderRadius: 5, 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 10, 
            display: 'inline-flex'}}>
            <span style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: 'black', 
                    fontSize: 22, 
                    fontFamily: 'Kanit', 
                    fontWeight: '400', 
                    wordWrap: 'break-word'}}> 
                Register 
                <AssignmentIcon />
            </span>

        </button>
    )
}  
 export default RegisterButton;