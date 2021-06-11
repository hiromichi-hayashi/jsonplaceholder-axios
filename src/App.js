import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    //jsonplaceholder 事前に用意されたデータ　テストなどに使える
    //axios webAPIを簡単に呼び出せるライブラリ
    //axios.get(URL) APIの呼び出し
    //.then(()=>{}) 呼び出し後の関数の処理
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUser1 = () => {
    axios
      //id指定
      .get("https://jsonplaceholder.typicode.com/users/2")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>users1</button>
    </div>
  );
}
