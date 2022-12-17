// userStateは関数コンポーネントに状態を持たせるためのReactの機能。
import React, { SetStateAction, useState } from 'react';
import logo from './logo.svg';

// cssファイルは以下のようにして、インポートする必要がある。
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton(){
  // countには999のようなuseStateの引数の値が入る。
  // setCountにはcountの値を変更する関数が入る。(C#でいうところのActionやFuncかな)
  // タプルで型を明示的に書いてみた。
  var [count, setCount]: [number, React.Dispatch<SetStateAction<number>>] = useState(999);

  // ボタンを押下したときに値をインクリメントする。
  var handleClick = () => {
    // setCountの引数の値でcountの値を更新する。
    setCount(count + 1);
  };

  return(
    <span className='likeButton' onClick={handleClick}>
      ♥{count}
    </span>
  );
}

export default App;