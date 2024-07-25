import { Link } from "react-router-dom";

type NavbarLinkData = {
  name: string;
  path: string;
  color: string;
};

const navbarLinks: NavbarLinkData[] = [
  {
    name: "parth agrawal",
    path: "/",
    color: "#DDDDDD",
  },
  {
    name: "portfolio",
    path: "/portfolio",
    color: "#FFAFAF",
  },
];

export const Navbar = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
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
          className={`px-4 py-2 text-md `}
        >
          {name}
        </div>
      </Link>
    </>
  );
};
