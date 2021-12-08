import './App.css';
import Progressbar from './Component/Progress_bar';

function App() {
return (
	
<div className="App">
	<div className="heading-container">
	<h1 className="heading">Storage Inventory</h1>
	<img src="https://res.cloudinary.com/des7uyibo/image/upload/v1638442457/Vector_dahlhi.png"
		 alt="dots" className="dot-container"/>
	</div>
	<div>
	
	    <h1 className="total">Total Devices</h1>
		<span className="total-value">71,076</span>
	</div>
	<div className="bar-container">
		<Progressbar bgcolor="#99CCFF" progress='45' value="2229" labelname="Storage arrays" border="0.5px solid #99CCFF"/>
		<Progressbar bgcolor="#F4DC9F" progress='70' value="68598" labelname="Servers" border="0.5px solid #F4DC9F"/>
		<Progressbar bgcolor="#E3C6FB" progress='55' value="2498" labelname="Swtiches" border="0.5px solid #E3C6FB"/>
	</div>
</div>
	
);
}

export default App;
