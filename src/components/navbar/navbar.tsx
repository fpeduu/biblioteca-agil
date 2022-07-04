import { NavbarDesktop } from './navbarDesktop';
import { NavbarMobile } from './navbarMobile';

interface props {
    changePage: Function;
}

const Navbar: React.FC<props> = (props: props) => {
    return (
        <div>
            <NavbarDesktop changePage={props.changePage}/>
            <NavbarMobile changePage={props.changePage}/>
        </div>
    )
}

export { Navbar }