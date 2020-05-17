import { UnicodeSteganographer } from './UnicodeSteganographer';

describe('UnicodeSteganographer', () => {
  const stegano = new UnicodeSteganographer();

  test('encode -> decodeが正常に行える', () => {
    const sampleTextList: { original: string; hidden: string }[] = [
      { original: 'aa', hidden: 'aa' },
      { original: 'こんにちは', hidden: 'こんばんは' },
      { original: 'AijofaDOkfnomdnfa', hidden: 'ad8hfaodjnfpj12njf' },
      { original: '', hidden: '😺🐾🐔' },
      { original: '子丑寅卯辰巳午未申酉戌亥', hidden: '🐭🐮🐯🐰🐲🐍🐴🐏🐵🐔🐶🐗' },
    ];
    expect.assertions(sampleTextList.length * 2);

    sampleTextList.forEach((sampleText) => {
      const embeddedText = stegano.encodeText(sampleText.original, sampleText.hidden);
      const decodeInfo = stegano.decodeText(embeddedText);

      expect(decodeInfo.hiddenText).toBe(sampleText.hidden);
      expect(decodeInfo.originalText).toBe(sampleText.original);
    });
  });
});
