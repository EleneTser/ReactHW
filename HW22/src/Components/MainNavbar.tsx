import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

import Logo from '../assets/Logo.svg'

const navigation = [
  { name: 'Loja', href: '#', current: false },
  { name: 'Ajuda', href: '#', current: false },
]

const dashboardSubLinks = [
  { name: 'Jogos', href: '#' },
  { name: 'team', href: '#' },
  { name: 'Reports', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function IconButton({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      className="relative flex items-center justify-center rounded-full bg-gray-700 p-2 text-white hover:bg-gray-600 focus:outline-none"
    >
      <span className="sr-only">{label}</span>
      {children}
    </button>
  )
}

function Button({ className = '' }: { className?: string }) {
  return (
    <button
      className={classNames(
        'rounded-sm bg-[#FCAF17] px-4 py-2 h-[52px] text-xl font-medium text-black transition-colors duration-200 hover:bg-[#e6a015] md:px-5 md:h-11 md:text-base lg:px-7 lg:h-12 lg:text-xl',
        className,
      )}
    >
      Baixe o Launcher
    </button>
  )
}

export default function MainNavbar() {
  return (
    <Disclosure as="nav" className="relative bg-[#020202] font-helvetica">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between md:h-[112px] lg:h-24">
          <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={Logo}
                className="h-8 w-auto md:h-9 lg:h-10"
              />
            </div>

            <div className="hidden md:flex md:items-center md:gap-3 lg:gap-6">
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center gap-1 rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:text-white lg:px-3 lg:text-base">
                  Jogos
                  <ChevronDownIcon aria-hidden="true" className="size-4" />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-[#020202] py-1 shadow-lg ring-1 ring-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  {dashboardSubLinks.map((sub) => (
                    <MenuItem key={sub.name}>
                      <a
                        href={sub.href}
                        className="block px-4 py-2 text-base text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                      >
                        {sub.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-300 hover:text-white',
                    'rounded-md px-2 py-2 text-base font-medium lg:px-3',
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:gap-3 lg:gap-8">
            <Button />

            <IconButton label="Search">
              <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
            </IconButton>

            <IconButton label="Perfil">
              <UserIcon aria-hidden="true" className="size-6" />
            </IconButton>
          </div>

          <div className="flex items-center md:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Disclosure as="div">
            <DisclosureButton className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white group">
              Jogos
              <ChevronDownIcon aria-hidden="true" className="size-4 group-data-open:rotate-180" />
            </DisclosureButton>

            <DisclosurePanel className="space-y-1 pl-4">
              {dashboardSubLinks.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                >
                  {sub.name}
                </a>
              ))}
            </DisclosurePanel>
          </Disclosure>

          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 pb-3">
          <div className="flex items-center justify-between px-5">
            <Button />

            <div className="flex items-center gap-6">
              <IconButton label="Search">
                <MagnifyingGlassIcon aria-hidden="true" className="size-5" />
              </IconButton>

              <IconButton label="Perfil">
                <UserIcon aria-hidden="true" className="size-5" />
              </IconButton>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}