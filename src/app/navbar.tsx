'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";

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
    return (
        <Navbar className="fixed">
          <Button
            disableRipple
            disableAnimation
            className="bg-transparent p-0"
          >
            <LumosLogo />
            <p className="font-semibold text-inherit text-2xl">Lumos Learning</p>
        </Button>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                <Button
                    disableRipple
                    disableAnimation
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-large"
                    variant="flat">
                    Features▾
                </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label="Lumos Tutoring Consulting Menu"
                disabledKeys={["Acceptances", "Testimonials"]}
                className="flex"
                itemClasses={{
                base: "gap-4",
                }}>
                <DropdownItem
                key="Admissions Consulting Services"
                href="#">
                Admissions Consulting Services
                </DropdownItem>

                <DropdownItem
                key="College Essay Coaching"
                href="#">
                College Essay Coaching
                </DropdownItem>

                <DropdownItem
                key="About Noah"
                href="#">
                About Noah
                </DropdownItem>
                
                <DropdownItem
                key="Acceptances"
                href="#">
                Acceptances
                </DropdownItem>

                <DropdownItem
                key="Testimonials"
                href="#">
                Testimonials
                </DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <div className="text-large">(201)-696-7262</div>
        </NavbarContent>
        </Navbar>
    );
    }
