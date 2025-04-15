import MainContent from '@/features/sidebar/components/MainContent';
import Sidebar from '@/features/sidebar/components/Sidebar';
import s from './App.module.scss';

function App() {
    return (
        <div className={s.app}>
            <Sidebar />
            <MainContent />
        </div>
    );
}

export default App;
