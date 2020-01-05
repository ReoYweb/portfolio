import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    let cursor = document.querySelector('.cursor');
    let cWidth = 20; //カーソルの大きさ
    let mouseX = 0; //マウスのX座標
    let mouseY = 0;

    cursor.addEventListener('mouseover', e => {
      // console.log(e);
      mouseX = e.pageX;
      mouseY = e.pageY;
      cursor.style({
        //カーソルの真ん中に座標軸が来るよう、
        //カーソルの大きさの半分を引きます
        left: mouseX - cWidth / 2,
        top: mouseY - cWidth / 2
      });
    });
  }, []);

  return (
    <div>
      <div className="cursor" />
      <div className="folloer" />
    </div>
  );
};

export default Cursor;
