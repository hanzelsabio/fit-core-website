import React from "react";

function Header() {
  return (
    <>
      <header className="bg-gray">
        <nav
          aria-label="Global"
          class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
                class="h-8 w-auto"
              />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
