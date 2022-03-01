import NavMenu from "./NavMenu";

function Layout(props) {
    return (
        <>
         <NavMenu />
        <main>{props.children}</main>
        </>
       
    );
  }
  
  export default Layout;