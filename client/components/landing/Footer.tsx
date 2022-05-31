import Link from "next/link";
import Image from "next/image";
import dashboard from "@assets/landing/dashboard.svg";
import { MailIcon } from "@heroicons/react/solid";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Nolan Cassidy", href: "https://nolancassidy.com" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nolancassidy/" },
  ],
  social: [
    {
      name: "Contact Us",
      href: "mailtonolancassidy1@gmail.com",
      icon: function email(props: any) {
        return <MailIcon className="h-6 w-6" {...props} />;
      },
    },
    {
      name: "GitHub",
      href: "https://github.com/nolancassidy",
      icon: function github(props: any) {
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        );
      },
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white">
      {/*
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-hero rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold font-dystopian text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block">Start your free trial today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Explore how N0lan can help you before making a commitment
              </p>
              <Link href="/api/auth/login" passHref>
                <button
                  type="button"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-primary hover:bg-indigo-50"
                >
                  Sign up for free
                </button>
              </Link>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <Image
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src={dashboard}
              alt="App screenshot"
              height={980}
              width={1200}
            />
          </div>
        </div>
      </div>
  */}
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link key={item.name} href={item.href} passHref>
                <button
                  type="button"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </button>
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022 N0lan, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
