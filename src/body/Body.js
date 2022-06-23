import Logo from '../images/logo.png';
import Search from '../images/search.svg';
import Vs from '../images/vs.png';
import './Body.css';

function Body(){
return(
<section class="section-1">

<img src={Logo}   class="logo"/>
<form>
<br></br>
<br></br>
<div class="s-box">
<img src={Search}  class="search-icon"  />	
<input type="text" class="s-input"></input>
<img src={Vs} class="vs-icon" />
<input  type="submit" class="s-btn" value="Google Search"></input>
<input type="submit" class="s-btn" value="I'm Feeling Lucky"></input>

      		</div>

</form>
      	<div class="lang">
      		Google offered in:
      		<a href="#">Nederlands</a>
      		<a href="#">Frysk</a>
      	</div>
      </section>

);


}
export default Body;