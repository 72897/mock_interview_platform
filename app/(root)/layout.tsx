import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { isAuthenticated, getCurrentUser } from "@/lib/actions/auth.action";
import { signOut } from "@/lib/actions/auth.action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  const user = await getCurrentUser();

  function initial(fullName?: string): string {
    if (!fullName) return "K";

    const names = fullName.trim().split(" ");
    if (names.length >= 2) {
      return names[0][0].toUpperCase() + names[1][0].toUpperCase();
    } else {
      return names[0].slice(0, 2).toUpperCase();
    }
  }

  return (
    <div className="root-layout">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-xl font-semibold text-primary">AItern</h2>
        </Link>

        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <div className="flex items-center gap-4 ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="w-10 h-10 cursor-pointer">
                  <AvatarImage
                    src={user?.image || ""}
                    alt={user?.name || "User"}
                  />
                  <AvatarFallback>{initial(user?.name)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="rounded-full">
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <DropdownMenuItem asChild>
                    <Button
                      type="submit"
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      Sign Out
                    </Button>
                  </DropdownMenuItem>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </form>
      </nav>

      {/* Page Content */}
      <main className="p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-200 py-12 px-6 md:px-16 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">About AItern</h4>
            <p className="text-sm leading-6 text-gray-400">
              AItern is an AI-powered mock interview platform that helps users
              practice real-time interviews with virtual interviewers, get
              feedback, and prepare confidently for job placements.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
            <p className="text-sm text-gray-400">
              Email:{" "}
              <a
                href="mailto:support@aitern.com"
                className="text-primary-500 hover:underline"
              >
                support@aitern.com
              </a>
            </p>
            <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
            <p className="text-sm text-gray-400">
              Gautam Buddha University, Greater Noida
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/interviews" className="hover:text-primary">
                  My Interviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="hover:text-primary"
              >
                <Github size={22} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-primary"
              >
                <Twitter size={22} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-primary"
              >
                <Instagram size={22} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-primary"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-primary"
              >
                <Facebook size={22} />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AItern. All rights reserved. Built with
          ❤️ by Team AItern.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
