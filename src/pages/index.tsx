import React, { useState } from 'react';
import styles from './index.module.scss';
import { UnicodeSteganographer } from '../lib/UnicodeSteganographer';

const Page: React.FC = () => {
  const stegano = new UnicodeSteganographer();

  const [encodeOrDecode, setEncodeOrDecode] = useState<'ENCODE' | 'DECODE'>('ENCODE');
  const [inputOrg, setInputOrg] = useState<string>('');
  const [inputHidden, setInputHidden] = useState<string>('');
  const [inputEmbedded, setInputEmbedded] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const changeMode = () => {
    setEncodeOrDecode(encodeOrDecode === 'ENCODE' ? 'DECODE' : 'ENCODE');
    setOutput('');
  };

  const encodeOnClick = () => {
    setOutput(stegano.encodeText(inputOrg, inputHidden));
  };

  const decodeOnClick = () => {
    setOutput(stegano.decodeText(inputEmbedded).hiddenText);
  };

  const encoder = (): JSX.Element => (
    <>
      <div>オジリナル {inputOrg}</div>
      <textarea onChange={(event) => setInputOrg(event.target.value)} value={inputOrg} />
      <div>隠し {inputHidden}</div>
      <textarea onChange={(event) => setInputHidden(event.target.value)} value={inputHidden} />
      <button onClick={encodeOnClick}>変換</button>
      <div>出力</div>
      <textarea onChange={(event) => setInputHidden(event.target.value)} value={output} readOnly />
    </>
  );

  const decoder = (): JSX.Element => (
    <>
      <div>埋め込みテキスト {inputEmbedded}</div>
      <textarea onChange={(event) => setInputEmbedded(event.target.value)} value={inputEmbedded} />
      <button onClick={decodeOnClick}>変換</button>
      <div>出力</div>
      <textarea onChange={(event) => setInputHidden(event.target.value)} value={output} readOnly />
    </>
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to Next.js!</h1>
      <button onClick={changeMode}>CHANGE MODE</button>
      {encodeOrDecode === 'ENCODE' && encoder()}
      {encodeOrDecode === 'DECODE' && decoder()}
    </main>
  );
};

export default Page;
