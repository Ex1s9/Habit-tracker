import Sidebar from '@/features/sidebar/components/Sidebar';
import s from './main.module.scss';

function App() {
    return (
        <div className={s.app}>
            <Sidebar />
        </div>
    );
}

export default App;
