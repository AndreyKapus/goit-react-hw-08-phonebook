const { default: AppBar } = require('components/AppBar/AppBar');
const { Suspense } = require('react');
const { Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
