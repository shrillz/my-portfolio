import { Link } from 'react-router-dom'
import './index.scss'

import LogoS from './logo-s.png'
import LogoSubtitle from './logo_sub.png'

const Sidebar =() => (

    <div className='nav-bar' > 
<Link className='logo' to ='/'>
<img src={LogoS} alt="Logo"/>
<img className="sub-logo"src={LogoSubtitle}alt="slobodan"/>

</Link>

    </div>
)
export default Sidebar 