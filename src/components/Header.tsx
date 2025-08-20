import Link from "next/link";
import CartIcon from "./CartIcon";
import { RiShoppingBag4Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between px-6 border-b-1">
      <RiShoppingBag4Fill className="size-8" />
      <h1 className="text-3xl tracking-[10px] hidden sm:block">THE SHOP</h1>
      <nav className="flex gap-4 items-center">
        <Link href="/products">Products</Link>
        <Link href="/cart">
          <CartIcon />
        </Link>
        <Link href="/user/login">Login</Link>
        <Link href="/user/signup">Signup</Link>
      </nav>
    </header>
  );
};
export default Header;
