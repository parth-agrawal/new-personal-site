import { Link } from "react-router-dom";

type NavbarLinkData = {
  name: string;
  path: string;
  color: string;
};

const navbarLinks: NavbarLinkData[] = [
  {
    name: "Parth Agrawal",
    path: "/",
    color: "#DDDDDD",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    color: "#FFAFAF",
  },
];

export const Navbar = () => {
  return (
    <>
      <div className="flex flex-row">
        {navbarLinks.map((link) => (
          <NavbarLink
            key={link.name}
            name={link.name}
            path={link.path}
            color={link.color}
          />
        ))}
      </div>
    </>
  );
};

const NavbarLink = ({ name, path, color }: NavbarLinkData) => {
  return (
    <>
      <Link to={path}>
        <div
          style={{ backgroundColor: color }}
          className={`px-4 mx-2 py-2 text-md font-bold`}
        >
          {name}
        </div>
      </Link>
    </>
  );
};
