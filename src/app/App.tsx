import Sidebar from '@/features/sidebar/Sidebar.tsx';
import s from './main.module.scss';

function App() {
    return (
        <div className={s.app}>
            <Sidebar />
        </div>
    );
}

export default App;
