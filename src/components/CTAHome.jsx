import { useNavigate } from "react-router-dom";

const CTAHome = () => {
  const navigate = useNavigate();
        return (
        <button style={{
          border: "none",
          backgroundColor: '#FA9F42',
          width: '160px',
          height: '33px',
          borderRadius: 5}}
          onClick={() => navigate ('/Expanded')}>
            <div style={{width: '100%', textAlign: 'center', color: 'black', fontSize: 22, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Expand</div>
            </button>
        );
      };
      
      export default CTAHome;
