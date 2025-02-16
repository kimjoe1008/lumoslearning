'use client'

import { useState } from "react";
import {Navbar, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";
import Link from "next/link";

export const LumosLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const delay = 300;

  return (
    <Navbar maxWidth="xl" className="relative overflow-hidden bg-bgblue font-poppins md:pl-[calc(100vw-100%)] py-4">
      <Link className="bg-transparent p-0 flex" href="\">
        <LumosLogo />
        <p className="font-semibold text-inherit text-2xl lg:text-3xl">Lumos Learning</p>
      </Link>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Dropdown isOpen={isOpen} disableAnimation={true} shouldBlockScroll={false}>
            <DropdownTrigger>
              <Button
                onMouseEnter={() => {
                  if (timeoutId !== null) clearTimeout(timeoutId);
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  const id = window.setTimeout(() => setIsOpen(false), delay);
                  setTimeoutId(id);
                }}
                disableRipple={true}
                disableAnimation={true}
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-xl"
              >
                College Consulting▾
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              onMouseEnter={() => {
                if (timeoutId !== null) clearTimeout(timeoutId);
                setIsOpen(true);
              }}
              onMouseLeave={() => {
                setIsOpen(false);
              }}
              aria-label="Lumos Tutoring Consulting Menu"
              disabledKeys={["Acceptances", "Testimonials"]}
              className="flex"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem key="Admissions Consulting Services" href="/Consulting">
                Admissions Consulting Services
              </DropdownItem>
              <DropdownItem key="College Essay Coaching" href="#">
                College Essay Coaching
              </DropdownItem>
              <DropdownItem key="About Noah" href="/AboutMe">
                About Noah
              </DropdownItem>
              <DropdownItem key="Acceptances" href="#">
                Acceptances
              </DropdownItem>
              <DropdownItem key="Testimonials" href="#">
                Testimonials
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <Link className="text-xl bg-transparent p-0" href="tel:+2016967262">
          (201)-696-7262
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
