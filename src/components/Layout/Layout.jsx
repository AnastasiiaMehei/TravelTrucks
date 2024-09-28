import { AuthNav } from "../AuthNav/AuthNav";
const Layout = ({ children }) => {
  return (
    <div>
      <AuthNav />
      {children}
    </div>
  );
};

export default Layout;