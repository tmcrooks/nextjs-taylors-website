import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Link from "./Link";


const Header = () => {
  return (
    <header className="flex justify-between py-10">
      <div className="w-full">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
              <Image
                src="/Taylors.png"
                width={200}
                height={70}
                className="xs:block"
                alt="Taylor's Cleaning and Restoration Logo"
              />
          </div>
        </Link>
      </div>
      <div className="flex w-full items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header;