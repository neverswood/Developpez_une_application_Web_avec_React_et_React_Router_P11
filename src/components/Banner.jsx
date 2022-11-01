import React from 'react';

export function Banner({ path, classImg, nameImg }) {
  return (
    <section className="kasa-banner">
      <img src={path} alt={nameImg} className={classImg} />
      <h1 className="kasa-banner__slogan">Chez vous, partout et ailleurs</h1>
    </section>
  );
}
