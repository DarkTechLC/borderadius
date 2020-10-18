import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer';

import '../styles/pages/border-radius.css';

import logo from '../images/logo.svg';

function InputBlock({ id, label, defaultValue, setStateFn }) {
  return (
    <div className='main__aside__controllers__input-block'>
      <label
        htmlFor={id}
        className='main__aside__controllers__input-block__label'
      >
        {label}
      </label>
      <input
        type='range'
        id={id}
        className='main__aside__controllers__input-block__input'
        step='1'
        min='0'
        max='100'
        defaultValue={defaultValue}
        onChange={(event) => setStateFn(event.currentTarget.value)}
      />
    </div>
  );
}

export default function BorderRadius() {
  const [topLeft, setTopLeft] = useState(100);
  const [topRight, setTopRight] = useState(100);
  const [bottomRight, setBottomRight] = useState(16);
  const [bottomLeft, setBottomLeft] = useState(100);
  const [borderRadiusValue, setBorderRadiusValue] = useState('');

  useEffect(() => {
    const value =
      topLeft === topRight &&
      topRight === bottomRight &&
      bottomRight === bottomLeft
        ? `${topLeft}px`
        : topLeft === bottomRight &&
          topRight === bottomLeft &&
          topLeft !== topRight
        ? `${topLeft}px ${topRight}px`
        : topRight === bottomLeft && topLeft !== bottomRight
        ? `${topLeft}px ${topRight}px ${bottomRight}px`
        : `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

    setBorderRadiusValue(value);
  }, [topLeft, topRight, bottomLeft, bottomRight]);

  return (
    <div className='border-radius-container'>
      <header className='border-radius-container__header'>
        <img
          src={logo}
          alt='BorderRadius Icon'
          className='border-radius-container__header__logo'
        />
        <h1 className='border-radius-container__header__title'>BorderRadius</h1>
      </header>

      <main className='border-radius-container__main'>
        <section
          className='border-radius-container__main__box'
          style={{ borderRadius: borderRadiusValue }}
        ></section>

        <aside className='border-radius-container__main__aside'>
          <div className='border-radius-container__main__aside__controllers'>
            <InputBlock
              id='top-left'
              label='Top Left'
              defaultValue={topLeft}
              setStateFn={setTopLeft}
            />
            <InputBlock
              id='top-right'
              label='Top Right'
              defaultValue={topRight}
              setStateFn={setTopRight}
            />
            <InputBlock
              id='bottom-right'
              label='Bottom right'
              defaultValue={bottomRight}
              setStateFn={setBottomRight}
            />
            <InputBlock
              id='bottom-left'
              label='Bottom Left'
              defaultValue={bottomLeft}
              setStateFn={setBottomLeft}
            />
          </div>

          <code className='border-radius-container__main__aside__code'>
            <p>border-top-left-radius: {topLeft}px;</p>
            <p>border-top-right-radius: {topRight}px;</p>
            <p>border-bottom-right-radius: {bottomRight}px;</p>
            <p>border-bottom-left-radius: {bottomLeft}px;</p>
            <hr className='border-radius-container__main__aside__code__hr' />
            <p>border-radius: {borderRadiusValue};</p>
          </code>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
