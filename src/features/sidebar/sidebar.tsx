import { useState } from 'react';
import { FiBarChart, FiCalendar, FiHome, FiLogIn, FiSettings, FiUserPlus } from 'react-icons/fi';
import s from './Sidebar.module.scss';

interface NavItem {
    icon: React.ElementType;
    label: string;
    href: string;
}

const Sidebar = () => {
    const [active, setActive] = useState<string>('dashboard');

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
            <nav className={s.nav}>
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        className={`${s.navItem} ${active === item.label ? s.active : ''}`}
                        onClick={() => setActive(item.label)}
                    >
                        <item.icon className={s.icon} />
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>
            <div className={s.auth}>
                <a className={`${s.authButton} ${s.register}`}>
                    <FiUserPlus />
                    <span>Register</span>
                </a>
                <a className={`${s.authButton} ${s.login}`}>
                    <FiLogIn />
                    <span>Sign In</span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar
