import { LineWave } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <div className={css.loader}>
      <LineWave
        height="150"
        width="300"
        color="#4fa94d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor="green"
        middleLineColor="blue"
        lastLineColor="green"
      />
    </div>
  );
}
