import { useTokenContext } from "api/AuthProvider";
import Link from "next/link";
import useAppStore from "store/appStore";

const Nabvar = () => {
  const { logout } = useTokenContext();

  const { isLoggedIn } = useAppStore((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start max-w-25 w-25 m-0">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>{`Item 1`}</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  {`Parent`}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>{`Submenu 1`}</a>
                  </li>
                  <li>
                    <a>{`Submenu 2`}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>{`Item 3`}</a>
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl mx-2">{`ImmLang`}</a>
          </Link>
        </div>
        <div className="navbar mr-25 w-1/4 hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/">
                <a>{`Home`}</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a>{`Sign Up`}</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <a>
                {`Parent`}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>{`Submenu 1`}</a>
                </li>
                <li>
                  <a>{`Submenu 2`}</a>
                </li>
              </ul>
            </li>
            <li>
              <a>{`Item 3`}</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div className="w-100 mx-1/2 rounded-full">
            {!isLoggedIn ? (
              <Link href="/login">
                <a className="btn btn-accent">{`Login`}</a>
              </Link>
            ) : (
              <button className="btn btn-accent">{`Account`}</button>
            )}
          </div>
          {isLoggedIn ? (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {`Profile`}
                  <span className="badge">{`New`}</span>
                </a>
              </li>
              <li>
                <a>{`Settings`}</a>
              </li>
              <li>
                <a onClick={logout}>{`Logout`}</a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Nabvar;
