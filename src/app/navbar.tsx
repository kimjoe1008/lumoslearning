'use client';
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Navbar,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@heroui/react';
import Link from 'next/link';
import { useState } from 'react';

const DELAY = 200;
const DROPDOWN_MENU_ITEMS = [
	{
		title: 'Admissions Consulting Services',
		href: '/Consulting',
	},
	{
		title: 'College Essay Coaching',
		href: '#',
	},
	{
		title: 'About Noah',
		href: '/AboutMe',
	},
	{
		title: 'Acceptances',
		href: '#',
	},
	{
		title: 'Testimonials',
		href: '#',
	},
];
const DISABLED_KEYS = ['Acceptances', 'Testimonials'];

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [timeoutId, setTimeoutId] = useState<number | null>(null);

	const handleDropdownMouseEnter = () => {
		if (timeoutId !== null) window.clearTimeout(timeoutId);
		setIsOpen(true);
	};

	const handleDropdownMouseLeave = (withDelay: boolean = true) => {
		if (withDelay) {
			const timeout = window.setTimeout(() => setIsOpen(false), DELAY);
			setTimeoutId(timeout);
		} else {
			setIsOpen(false);
		}
	};

	return (
		<>
			<Navbar
				maxWidth="xl"
				height={96}
				className="bg-bgblue font-poppins relative"
				shouldHideOnScroll
			>
				<Link className="flex" href="\">
					<LumosLogo />
					<p className="font-semibold text-xl lg:text-3xl">Lumos Learning</p>
				</Link>
				<NavbarContent className="hidden md:flex gap-12" justify="end">
					<NavbarItem>
						<Dropdown
							className="bg-bgblue"
							isOpen={isOpen}
							disableAnimation={true}
							shouldBlockScroll={false}
						>
							<DropdownTrigger>
								<Button
									variant="light"
									className="data-[hover=true]:bg-transparent data-[hover=true]= text-xl "
									disableRipple={true}
									disableAnimation={true}
									onMouseEnter={handleDropdownMouseEnter}
									onMouseLeave={() => handleDropdownMouseLeave(true)}
								>
									College Consulting▾
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								aria-label="Lumos Tutoring Consulting Navbar Dropdown Menu"
								disabledKeys={DISABLED_KEYS}
								itemClasses={{
									base: 'gap-4',
								}}
								onMouseEnter={handleDropdownMouseEnter}
								onMouseLeave={() => handleDropdownMouseLeave(false)}
							>
								{DROPDOWN_MENU_ITEMS.map((item) => (
									<DropdownItem
										className="data-[hover=true]:bg-transparent data-[hover=true]:border-black border border-transparent"
										textValue={item.title}
										title={<span className="text-base">{item.title}</span>}
										key={item.title}
										href={item.href}
									/>
								))}
							</DropdownMenu>
						</Dropdown>
					</NavbarItem>
					<NavbarItem>
						<Link className="text-xl p-0" href="tel:+2016967262">
							(201)-696-7262
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarMenuToggle
					aria-label="Lumos Tutoring Consulting Navbar Menu"
					className="md:hidden"
				/>
				<NavbarMenu className="bg-bgblue h-fit border-y border-y-default-400/40 py-4">
					{DROPDOWN_MENU_ITEMS.map((item) => (
						<NavbarMenuItem key={item.title}>
							<Link className="text-xl p-0" href={item.href}>
								{item.title}
							</Link>
						</NavbarMenuItem>
					))}
					<NavbarMenuItem>
						<Link className="text-xl p-0" href="tel:+2016967262">
							(201)-696-7262
						</Link>
					</NavbarMenuItem>
				</NavbarMenu>
			</Navbar>
		</>
	);
};

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