import Link from "next/link";
import { IoTicket } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="bg-nav flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div className="icon">
            <IoHome />
          </div>
        </Link>
        <Link href="/TicketPage/new">
          <div className="icon">
            <IoTicket />
          </div>
        </Link>
      </div>

      <div>
        <p className="text-default-text">aslandev@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
