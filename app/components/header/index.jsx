import { useNavigate, Link } from "@remix-run/react";
import search from "../../assets/search.svg";
import home from "../../assets/home-icon.svg";
import back from "../../assets/back.svg";

const Header = ({
  isSearchable = false,
  header = "Movie Details",
  isBackButton = true,
}) => {
  const navigate = useNavigate();
  return (
    <div className="z-[1] flex w-screen justify-between h-16 shadow-[0_2px_4px_1px_rgba(155,155,155,1)] items-center px-4 fixed top-0 bg-white">
      {isSearchable ? (
        <div className="rounded-md bg-[#D8D8D8] flex gap-x-2 items-center px-2 py-1 h-[40px] min-w-[50%] max-w-[600px]">
          <img src={search} width={20} height={20} />
        </div>
      ) : (
        <div className="flex items-center gap-x-4">
          {isBackButton && (
            <Link
              to={".."}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <img data-testid="back" src={back} />
            </Link>
          )}
          <div className="text-xl text-[#4A4A4A] font-medium">{header}</div>
        </div>
      )}
      <Link to="/">
        <img data-testid="home" className="cursor-pointer" src={home} width={24} height={24} />
      </Link>
    </div>
  );
};

export default Header;
