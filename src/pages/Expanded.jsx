import Header from "../components/Header";

function Expanded() {
    return (
<div>
    <Header></Header>
    <h1>Bolder Boulder</h1>
    <div style={{width: '100%', height: '100%', paddingLeft: '4vw', paddingRight: '3vw', justifyContent: 'flex-start', alignItems: 'center', gap: 43, display: 'inline-flex'}}>
    <div data-property-1="Default" style={{width: 847, height: 752, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 10.32}}>
        <div style={{padding: '30px', position: 'absolute', color: 'black', fontSize: 16.52, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Map</div>
        <img style={{width: '100%', height: '100%', position: 'relative', borderRadius: 6.48}} src="https://placehold.co/806x800" />
    </div>
    <div style = {{flex: "column", gap: "10px"}}>
    <div style={{width: 428.72, height: 163.38, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 14.99}}>
        <div style={{left: 20.98, top: 13.49, position: 'absolute', color: 'black', fontSize: 23.98, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Distance</div>
        <div style={{left: 20.98, top: 64.45, position: 'absolute', color: 'black', fontSize: 46.35, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>6.2 miles</div>
    </div>
    <div data-property-1="Variant4" style={{width: 428.72, height: 101.97, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 11.96}}>
        <div style={{left: 16.75, top: 10.77, position: 'absolute', color: 'black', fontSize: 19.41, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Elevation Change</div>
        <div style={{left: 16.75, top: 51.44, position: 'absolute', color: 'black', fontSize: 26.32, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>+260 feet</div>
    </div>
    <div data-property-1="Variant3" style={{width: 428.72, height: 100.81, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 11.96}}>
        <div style={{left: 16.75, top: 10.77, position: 'absolute', color: 'black', fontSize: 16.75, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Highest Attendance</div>
        <div style={{left: 16.75, top: 51.44, position: 'absolute', color: 'black', fontSize: 26.32, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>50,421 participants</div>
    </div>
    <div data-property-1="Variant5" style={{width: 428.72, height: 100.81, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 11.96}}>
        <div style={{left: 16.75, top: 10.77, position: 'absolute', color: 'black', fontSize: 16.75, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Average Time</div>
        <div style={{left: 16.75, top: 51.44, position: 'absolute', color: 'black', fontSize: 26.32, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>2 hours 18 minutes</div>
    </div>
    <div data-property-1="Variant7" style={{width: 428.72, height: 100.81, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 11.96}}>
        <div style={{left: 16.75, top: 10.77, position: 'absolute', color: 'black', fontSize: 16.75, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>Starting Elevation</div>
        <div style={{left: 16.75, top: 51.44, position: 'absolute', color: 'black', fontSize: 26.32, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word'}}>5,194 feet</div>
    </div>
    <div data-property-1="Variant7" style={{width: 428.72, height: 100.81, background: 'white', overflow: 'hidden', borderRadius: 11.96}} />
</div>
</div>
</div>
    );
}
export default Expanded;