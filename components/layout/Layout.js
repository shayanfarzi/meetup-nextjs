import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
// import { useRouter } from "next/router";
function Layout(props) {
  // const router = useRouter();

  return (
    <div>
      <MainNavigation />
      {/* {router.pathname.search("meetup") > 0 && <div>Hello</div>} */}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
