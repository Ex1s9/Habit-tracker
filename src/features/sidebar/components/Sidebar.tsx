import { observer } from 'mobx-react-lite';
import { FiBarChart, FiCalendar, FiHome, FiLogIn, FiSettings, FiUserPlus } from 'react-icons/fi';
import { uiStore } from '../store/uiStore';
import s from './Sidebar.module.scss';

interface NavItem {
    icon: React.ElementType;
    label: string;
    href: string;
}

interface NavItemComponentProps {
    item: NavItem;
    isActive: boolean;
    onClick: (href: string) => void;
}

interface AuthButtonProps {
    icon: React.ElementType;
    label: string;
    className?: string;
}

interface NavigationProps {
    items: NavItem[];
}



const NavItemComponent: React.FC<NavItemComponentProps> = ({ item, isActive, onClick }) => (
    <a
        href={`#${item.href}`} // Добавляем href для доступности
        className={`${s.navItem} ${isActive ? s.active : ''}`}
        onClick={(e) => {
            e.preventDefault();
            onClick(item.href);
        }}
    >
        <item.icon className={s.icon} />
        <span>{item.label}</span>
    </a>
);


const AuthButton: React.FC<AuthButtonProps> = ({ icon: Icon, label, className }) => (
    <a href="#" className={`${s.authButton} ${className}`}>
        <Icon />
        <span>{label}</span>
    </a>
);


const Navigation: React.FC<NavigationProps> = observer(({ items }) => (
    <nav className={s.nav}>
        {items.map((item) => (
            <NavItemComponent
                key={item.label}
                item={item}
                isActive={uiStore.activeMenu === item.href}
                onClick={(href) => uiStore.setActiveMenu(href)}
            />
        ))}
    </nav>
));


const AuthBlock = () => (
    <div className={s.auth}>
        <AuthButton
            icon={FiUserPlus}
            label="Register"
            className={s.register}
        />
        <AuthButton
            icon={FiLogIn}
            label="Sign In"
            className={s.login}
        />
    </div>
);


const Sidebar = observer(() => {
    const navItems: NavItem[] = [
        { icon: FiHome, label: 'Dashboard', href: 'dashboard' },
        { icon: FiCalendar, label: 'Habits', href: 'habits' },
        { icon: FiBarChart, label: 'Progress', href: 'progress' },
        { icon: FiSettings, label: 'Settings', href: 'settings' },
    ];

    return (
        <div className={s.sidebar}>
            <div className={s.header}>
                <h1>Habit Tracker</h1>
            </div>
            <Navigation items={navItems} />
            <AuthBlock />
        </div>
    );
});

export default Sidebar;