import { observer } from 'mobx-react-lite';
import { uiStore } from '../store/uiStore';

const MainContent = observer(() => {
    switch (uiStore.activeMenu) {
        case 'dashboard':
            return <div>Dashboard</div>;
        case 'habits':
            return <div>Habits</div>;
        case 'progress':
            return <div>Progress</div>;
        case 'settings':
            return <div>Settings</div>;
        default:
            return <div>Выберите пункт меню</div>;
    }
});

export default MainContent;
