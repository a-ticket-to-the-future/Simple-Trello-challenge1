import React, { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  //   isClickは状態変数　falseは引数
  //   setIsClickはisClickを変更するための状態関数
  //   → isClickがfalseかtrueかを管理するもの

  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  };

  const handleChange = (e) => {
    console.log(inputCardTitle);
    setInputCardTitle(e.target.value);
  };

  //   inputのtestの中身が更新されるたびに
  //   setIputCardTitleの状態関数によって
  //   inputCardTitleの状態（内容・中身）が更新される

  const handleSubmit = (e) => {
    e.preventDefault();
    // これをすることでEnterを押すとページの
    // 内容が更新されてしまう仕様を制御できる
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskNameTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          {/* onSubmitは入力フォームでEnterを押したら呼ばれるプロパティ */}
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="10"
          />
          {/* onBlurはinputタグから外れてクリックしたときに呼び出されるプロパティ */}
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
      {/* // isClickがtrueならform以降を実行できて、
      falseならコロンあとが実行されるという三項演算子になっている */}
    </div>
  );
};

export default TaskCardTitle;

// useState　状態変数を管理するためのもの
