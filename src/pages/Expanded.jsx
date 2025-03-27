import Header from "../components/Header";
import InviteFriendsButton from "../components/InviteFriendsButton";
import RegisterButton from "../components/RegisterButton";

function Expanded() {
    return (
<div>
    <div style={{width: '100%', height: '100%', paddingLeft: '4vw', paddingRight: '3vw', justifyContent: 'flex-start', alignItems: 'center', gap: 43, display: 'inline-flex'}}>
    <div data-property-1="Default" style={{width: 800, height: 'auto', position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 10.32}}>
        <div style={{padding: '10px', position: 'absolute', color: 'black', fontSize: 16.52, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Map</div>
        <div style={{padding: '22px', paddingTop: '50px'}}><img style={{width: '100%', height: '100%', position: 'relative', borderRadius: 6.48}} src="https://placehold.co/806x800" /> </div>
    </div>
    <div style = {{display: "flex", flexDirection: "column", gap: "1em"}}>
        <div style={{width: '32vw',paddingBottom: 10, height: '20vh', position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 14.99}}>
        <div style={{left: 20.98, top: 13.49, position: 'absolute', color: 'black', fontSize: 23.98, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Distance</div>
        <div style={{left: 20.98, top: 64.45, position: 'absolute', color: 'black', fontSize: 46.35, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>6.2 miles</div>
    </div>
    <div data-property-1="Variant4" style={{width: '32vw', height: '10vh', position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 11.96}}>
        <div style={{left: 16.75, top: '0.5em', position: 'absolute', color: 'black', fontSize: 19.41, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Elevation Change</div>
        <div style={{left: 16.75, top: '2em', position: 'absolute', color: 'black', fontSize: 26.32, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>+260 feet</div>
    </div>
    <div data-property-1="Variant3" style={{width: '32vw', height: '10vh', position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 11.96}}>
        <div style={{left: 16.75, top: '0.5em', position: 'absolute', color: 'black', fontSize: 16.75, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Highest Attendance</div>
        <div style={{left: 16.75, top: '2em', position: 'absolute', color: 'black', fontSize: 26.32, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>50,421 participants</div>
    </div>
    <div data-property-1="Variant5" style={{width: '32vw', height: '10vh', position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 11.96}}>
        <div style={{left: 16.75, top: '0.5em', position: 'absolute', color: 'black', fontSize: 16.75, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Average Time</div>
        <div style={{left: 16.75, top: '2em', position: 'absolute', color: 'black', fontSize: 26.32, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>2 hours 18 minutes</div>
    </div>
    <div data-property-1="Variant7" style={{width: '32vw', height: '10vh', position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 11.96}}>
        <div style={{left: 16.75, top: '0.5em', position: 'absolute', color: 'black', fontSize: 16.75, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Starting Elevation</div>
        <div style={{left: 16.75, top: '2em', position: 'absolute', color: 'black', fontSize: 26.32, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>5,194 feet</div>
    </div>
    <div data-property-1="Variant7" style={{width: '32vw', display: 'inline-flex', height: '10vh', background: 'white', overflow: 'hidden', borderRadius: 11.96}}>
        <InviteFriendsButton></InviteFriendsButton>
        <RegisterButton></RegisterButton>
        </div>
        </div>
</div>
</div>
    );
}
export default Expanded;